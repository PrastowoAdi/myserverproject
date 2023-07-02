import mongoose from "mongoose";
const { Schema } = mongoose;

const WeddingSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      default: "WFH",
    },
    our_love_story: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wedding", WeddingSchema);
