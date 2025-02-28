// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create comments array
const comments = [
    { id: 1, author: 'John Doe', text: 'Hello World' },
    { id: 2, author: 'Jane Doe', text: 'Hi, planet!' },
    { id: 3, author: 'John Smith', text: 'Good morning' }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    res.json(comment);
});

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,