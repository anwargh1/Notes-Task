const express = require('express')
const router = express.Router()
const Note = require('../models/note')


router.get('/' , async(req , res)=>{
    
    try {
        const allNotes = await Note.find()
        res.status(200).json(allNotes)

    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.post('/' , async(req , res)=>{
  
  const {title , content} = req.body 

  if(!title || !content){

   return res.status(404).json({error :" Title and content are required"})

  }

  try {
         
         const newNote = new Note({
            title,
            content
         })

         await newNote.save()
          res.status(200).json(newNote)

    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.delete('/:id' , async(req , res)=>{
 
  try {
    const noteId = req.params.id
    const note = await Note.findByIdAndDelete(noteId)

    if(!note){
      res.status(404).json({message : `No note for tis id : ${noteId}`})
    }
    res.status(204).json("The note has been deleted successfully")

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.put('/:id' ,async (req , res)=>{
  const noteId = req.params.id 
  const updatedNote = req.body

  try {
      const note = await Note.findByIdAndUpdate(
        noteId , 
        updatedNote,
        {new : true}
      )

      if(!note){
        res.status(404).json({message : `No note for tis id : ${noteId}`})

      }
      res.status(200).json(note)

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })

  }
})

module.exports = {router};



