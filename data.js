const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});

//! we are creating new collections

const restfapi = mongoose.model("RESTFAPI", restSchema);

module.exports = restfapi;
