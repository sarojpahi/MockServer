const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    severity: {
      type: String,
      required: true,
      enum: ["Critical", "Major", "Medium", "Low"],
    },
    detail: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Bugs = mongoose.model("bugs", userSchema);
module.exports = Bugs;
