const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// ==================USER/POST=============================
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// ==================USER/COMMENT===========================
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// ==================POST/COMMENT============================
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'post_id'
})

module.exports = { User, Post, Comment};
