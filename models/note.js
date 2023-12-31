const mongoose = require('mongoose')
// import mongoose from 'mongoose'

const Schema =mongoose.Schema

const noteSchema = new Schema({
    title : {
        type : String ,
        required : true
    },
    content : {
        type : String ,
        required : true
    }
},{
    timestamps : true
})

const Note = mongoose.model('notes' , noteSchema)

module.exports = Note