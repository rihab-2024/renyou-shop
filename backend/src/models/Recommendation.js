import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  skinProfile: Object,
  recommendedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  routine: [String],
}, { timestamps: true });

export default mongoose.model("Recommendation", recommendationSchema);