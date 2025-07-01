const BlogPost = require("../models/BlogPost");
const slugify = require("../utils/slugify");

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Private (admin/editor)
exports.createPost = async (req, res) => {
  try {
    const { title, content, excerpt, tags, category, coverImage, isPublished } = req.body;

    const slug = slugify(title);

    const newPost = new BlogPost({
      title,
      slug,
      content,
      excerpt,
      coverImage,
      tags,
      category,
      isPublished,
      author: req.user.id, // Assuming JWT middleware sets req.user
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: "Error creating blog post", error: err.message });
  }
};

// @desc    Get all published blog posts
// @route   GET /api/blogs
// @access  Public
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find({ isPublished: true }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
};

// @desc    Get a single blog post by slug
// @route   GET /api/blogs/:slug
// @access  Public
exports.getSinglePost = async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug }).populate("author", "name avatar");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post", error: err.message });
  }
};

// @desc    Update a blog post
// @route   PUT /api/blogs/:id
// @access  Private (admin/editor)
exports.updatePost = async (req, res) => {
  try {
    const { title, content, excerpt, tags, category, coverImage, isPublished } = req.body;
    const updatedFields = {
      title,
      slug: slugify(title),
      content,
      excerpt,
      coverImage,
      tags,
      category,
      isPublished,
    };

    const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
    if (!updatedPost) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: "Error updating post", error: err.message });
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
// @access  Private (admin/editor)
exports.deletePost = async (req, res) => {
  try {
    const deleted = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting post", error: err.message });
  }
};

// @desc    Get posts by author
// @route   GET /api/blogs/author/:authorId
// @access  Public
exports.getPostsByAuthor = async (req, res) => {
  try {
    const posts = await BlogPost.find({ author: req.params.authorId, isPublished: true });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
};

// @desc    Get posts by category
// @route   GET /api/blogs/category/:category
// @access  Public
exports.getPostsByCategory = async (req, res) => {
  try {
    const posts = await BlogPost.find({ category: req.params.category, isPublished: true });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
};

// @desc    Get posts by tag
// @route   GET /api/blogs/tag/:tag
// @access  Public
exports.getPostsByTag = async (req, res) => {
  try {
    const posts = await BlogPost.find({ tags: req.params.tag, isPublished: true });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
};

// @desc    Toggle publish/unpublish status
// @route   PATCH /api/blogs/:id/toggle
// @access  Private (admin/editor)
exports.togglePublish = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.isPublished = !post.isPublished;
    await post.save();

    res.status(200).json({ message: `Post ${post.isPublished ? "published" : "unpublished"}` });
  } catch (err) {
    res.status(500).json({ message: "Error toggling publish status", error: err.message });
  }
};
