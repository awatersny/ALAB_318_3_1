const express = require("express");
const router = express.Router();
const comments = require("../data/comments")
const posts = require("../data/posts")
const users = require("../data/users");
const error = require("../utilities/error");

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "users/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    res.json({ comments, links });
  })

module.exports = router;