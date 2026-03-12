import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  skinProfile: {
    type: {
      type: String,
      enum: ["oily", "dry", "combination", "normal"],
    },
    concerns: [String],
    goals: [String],
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);