import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  goal: Number,
  raised: Number,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Campaign ||
  mongoose.model("Campaign", CampaignSchema);