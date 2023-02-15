const express = require('express');
const router = express.Router();
// const { nanoid } = require('nanoid');
const { v4 } = require('uuid');

let tasks = [
  {
    id: v4(),
    title: 'Work',
    text: 'Do it!',
    done: false,
  },
];

router.get('/tasks', (req, res, next) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      tasks,
    },
  });
});

module.exports = router