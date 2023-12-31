const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// New comment for a specific post
router.post('/:id', withAuth, async (req, res) => {
  try {
      const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.id
  });
  console.log(newComment)

      res.status(200).json(newComment);
  } catch (err) {
      res.status(400).json(err);
  }
});

// update post 
router.put('/:id', withAuth, async(req, res) => {
  try{
    const updatedPost = await Post.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: { id: req.params.id }
    })
    res.status(200).json(updatedPost);
  } catch (err){
    res.status(400).json(err);
  }
});

// delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
