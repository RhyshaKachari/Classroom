// requiring depedencies.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    archived: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})

const Class = mongoose.model("Class", ClassSchema)

module.exports = Class;
