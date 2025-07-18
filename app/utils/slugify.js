const slugify = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s\-]+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

module.exports = slugify;
