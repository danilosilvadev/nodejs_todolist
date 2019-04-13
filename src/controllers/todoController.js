const express = require('express')

const Todo = require('../models/todo')

const router = express.Router()

router.post('/newtodo', async (req, res) => {
  try {
    const todo = await Todo.create(req.body)
    return res.send({
      todo
    })
  } catch {
    return res.status(400).send('todo fail')
  }
})

module.exports = app => app.use('/create', router)