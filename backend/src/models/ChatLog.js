import mongoose from "mongoose";

const chatLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  messages: [{
    role: { type: String, enum: ["user", "bot"], required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.model("ChatLog", chatLogSchema);