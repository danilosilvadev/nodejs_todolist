const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    require: true,
  },
  active: {
    type: Boolean,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo