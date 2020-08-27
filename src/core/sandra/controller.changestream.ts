import {Request, Response} from "express";
import ModelChangestream from "../../models/model.changestream";

export default class ChangeStreams {
  reportAllChanges = (req: Request, res: Response) => {
    ModelChangestream.find()
        .exec()
        .then(docs => {
          res.json([...docs])
        })
        .catch(err => {
          res.status(500)
              .json({
                error: true,
                message: err
              })
        })
  }
}
