const express = require("express");
const router = express.Router();
const comments = require("../data/comments")
const posts = require("../data/posts")
const users = require("../data/users");
const error = require("../utilities/error");

router
  .route("/")
  .get((req, res) => {
    const userId = req.query["userId"]
    const links = [
      {
        href: "users/:id",
        rel: ":id",
        type: "GET",
      },
    ];
    if(!userId){
      res.json({ comments, links });
    } else {
      const userComments = comments.filter(comment => comment.userId == userId)
      res.json(userComments)
    }
  })

router
  .route("/:id")
  .get((req, res)=>{
    const comment = comments.find(comment => comment.id == req.params.id)
    res.json(comment)
  })

module.exports = router;