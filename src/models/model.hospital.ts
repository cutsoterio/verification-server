import mongoose = require('mongoose');
import {Schema} from "mongoose";

const SchemaHospital = new Schema({
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
    capacity: {
        type: Number,
        required: true,
    },
    isTestingCentre: {
        type: Boolean,
        required: true,
        default: false
    },
    isQuarantineCentre: {
        type: Boolean,
        required: true,
        default: false
    },
    quarantineCapacity: {
        type: Number,
        required: true,
        default: 0
    },
    phoneNumber: {
        type: String,
        required: true,
    }
});

const ModelHospital = mongoose.model('Hospital', SchemaHospital, 'hospitals');
export default ModelHospital