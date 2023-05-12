import mongoose from "mongoose";
const { Schema } = mongoose;

const LandingSchema = new Schema(
  {
    heroDesc: {
      type: String,
      required: true,
    },
    aboutMe: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Landing", LandingSchema);
