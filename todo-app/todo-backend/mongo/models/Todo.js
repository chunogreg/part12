const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
});

todoSchema.set("toJSON", {
  transform: (Document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj.__v;
    delete returnedObj._id;
  },
});
module.exports = mongoose.model("Todo", todoSchema);
