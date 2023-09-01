const express = require("express")
const mongoose = require('mongoose')


const app = express()
app.use(express.json())


const PORT = 3000
const url = "mongodb+srv://anwarghannam319:KvphXWuWoukFkDak@cluster0.xecauod.mongodb.net/notesTask?retryWrites=true&w=majority"

mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then (result => console.log("Successfully connected"))
  .catch(err => console.log(err))

const notes = require("./router/notesRouter") 

app.use('/notes' ,  notes.router)

app.listen (PORT , ()=> console.log(`server running on port : ${PORT}`))
