const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET request to read notes from database file
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST request to write notes into database file
router.post('/notes', (req, res) => {
    const { title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text
        };

        readAndAppend(newNote, './db/db.json');
        res.json('New note added successfully')
    } else {
        res.error('Error in adding note')
    }
});

module.exports = router;