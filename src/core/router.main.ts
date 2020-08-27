import {Application} from 'express';
import {SyncTimeline} from "./sandra/controller.sync.offline";
import {PhoneUtils} from "./phone-api/controller.utils";
import ControllerHospitals from "./physical-centres/controller.hospitals";
import ChangeStreams from "./sandra/controller.changestream";
import ControllerTestingCentres from "./physical-centres/controller.testing.centres";

export class Controller {
  private syncTimeline: SyncTimeline;
  private phoneUtils: PhoneUtils;
  private hospitalsController: ControllerHospitals;
  private testingCentresController: ControllerTestingCentres;
  private changeStreams: ChangeStreams;

  constructor(private app: Application) {
    this.syncTimeline = new SyncTimeline();
    this.phoneUtils = new PhoneUtils();
    this.hospitalsController = new ControllerHospitals();
    this.testingCentresController = new ControllerTestingCentres();
    this.changeStreams = new ChangeStreams();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.syncTimeline.welcomeMessage);
    this.app.route('/mobile/phoneUtils/tokens').get(this.phoneUtils.getTokens)
    this.app.route('/mobile/phoneUtils/auth').post(this.phoneUtils.authenticate)
    this.app.route('/mobile/phoneUtils/checkStatus').get(this.phoneUtils.getTokens)

    this.app.route('/hospitals/new').post(this.hospitalsController.saveHospital)
    this.app.route('/hospitals/delete').get(this.hospitalsController.deleteHospital)
    this.app.route('/hospitals').get(this.hospitalsController.getHospitals)

    this.app.route('/testingcentres/new').post(this.testingCentresController.saveTestingCentre)
    this.app.route('/testingcentres').get(this.testingCentresController.getTestingCentres)

    this.app.route('/changestream').get(this.changeStreams.reportAllChanges)

  }
}
