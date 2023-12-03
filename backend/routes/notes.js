const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//fetch all the notes
router.get("/fetchnotes", fetchuser, async (req, res, err) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

//create notes
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res, err) => {
    try {
      const { title, description } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//update an existing note
router.put("/updatenote/:id", fetchuser, async (req, res, err) => {
  try {
    const { title, description } = req.body;
    const newNote = { title: "", description: "" };
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found!");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed!");
    }

    note = await Note.findByIdAndUpdate(req.params.id, newNote, { new: true });
    res.json({ note });
  } catch {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

//delete an existing note
router.delete("/deletenote/:id", fetchuser, async (req, res, err) => {
  try {
    const { title, description } = req.body;

    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found!");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed!");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted!" });
  } catch {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
