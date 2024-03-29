const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type:String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    numLikes: {
        type: Number,
        required: true,
        default: 0
    },
    position: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('Ticket', ticketSchema)