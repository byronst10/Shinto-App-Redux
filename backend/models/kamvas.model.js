const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kamvasSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true }
    // duration: { type: Number, required: true },
    // date: { type: Date, required: true }
  }
  // {
  //   timestamps: true
  // }
);

const Kamvas = mongoose.model("Kamvas", kamvasSchema);

module.exports = Kamvas;
