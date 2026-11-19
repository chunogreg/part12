// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const redis = require("../redis");

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

/* Statistics */
router.get("/statistics", async (req, res) => {
  const addedTodos = await redis.get("added_todos");

  res.send({
    added_todos: addedTodos ? Number(addedTodos) : 0,
  });
});

module.exports = router;
