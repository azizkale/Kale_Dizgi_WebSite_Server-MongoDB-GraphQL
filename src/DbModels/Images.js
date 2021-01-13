const mongoose = require("mongoose");

const Image = {
  id: String,
  url: String,
  description: String,
  date: String,
  index: Number,
  galleryId: String,
};

module.exports = mongoose.model("Images", Image);
