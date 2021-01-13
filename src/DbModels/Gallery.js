const mongoose = require("mongoose");

const Gallery = {
  id: String,
  backGroungImageUrl: String,
  fontColor: String,
  fontFamily: String,
  fontSize: Number,
  galleryTitle: String,
  googleFontLink: String,
};

module.exports = mongoose.model("Galleries", Gallery);
