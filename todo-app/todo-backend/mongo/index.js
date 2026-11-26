const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const { MONGO_URL } = require("../util/config");

try {
  if (MONGO_URL && !mongoose.connection.readyState) {
    mongoose.connect(MONGO_URL);
    console.log("connected to mongoDB");
  }
} catch {
  (err) => console.log("mongo connection error", err);
}

module.exports = {
  Todo,
};
