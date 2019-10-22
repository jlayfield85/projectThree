const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let admin = new Schema({
    admin_description: {
        type: String
    },
    admin_responsible: {
        type: String
    },
    admin_priority: {
        type: String
    },
    admin_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Admin', admin);