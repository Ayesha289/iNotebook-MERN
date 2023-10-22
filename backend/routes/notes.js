const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

//fetch all the notes
router.get('/fetchnotes', fetchuser, async (req, res)=>{  
    try{
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
    }catch{
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
});

//create notes
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({min: 3}),
    body('description', 'Description must be atleast 5 characters').isLength({min: 5})
], async (req, res)=>{
    try{
        const {title, description, tag} = req.body;
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    }catch{
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router