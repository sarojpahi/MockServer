const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    contract: { type: String, required: true, enum: ["YES", "NO"] },
    location: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Job = mongoose.model("job", jobSchema);
module.exports = Job;
