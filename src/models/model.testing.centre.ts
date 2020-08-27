import mongoose = require('mongoose');
import {Schema} from "mongoose";

const SchemaTestingCentre = new Schema({
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    maxDailyCapacity: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
});

const ModelTestingCentre = mongoose.model('TestingCentre', SchemaTestingCentre, 'testingcentres');
export default ModelTestingCentre