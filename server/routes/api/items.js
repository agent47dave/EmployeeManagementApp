const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item");

//Get back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Item.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit the posts
router.post("/", async (req, res) => {
  const post = new Item({
    Name: req.body.Name,
    Date_of_birth: req.body.Date_of_birth,
    Gender: req.body.Gender,
    Salary: req.body.Salary
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Item.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//editing the post
router.put("/:postId", async (req, res) => {
  try {
    const updatedPost = await Item.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          Name: req.body.Name,
          Date_of_birth: req.body.Date_of_birth,
          Gender: req.body.Gender,
          Salary: req.body.Salary
        }
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Item.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
