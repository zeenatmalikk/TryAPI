const mongoose = require("mongoose");
const Modelschema = new mongoose.Schema({
  Job_title: {
    type: String,
    require: true,
    trim: true,
  },
  Experience_required: {
    type: String,
    require: true,
    trim: true,
  },
  Key_skills: {
    type: String,
    require: true,
    trim: true,
  },
  Responsibilities: {
    type: String,
    require: true,
    trim: true,
  },
});
module.exports = mongoose.model("Schema", Modelschema);
