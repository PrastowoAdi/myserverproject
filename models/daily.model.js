import mongoose from "mongoose";
const { Schema } = mongoose;

const DailySchema = new Schema(
  {
    activity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Daily", DailySchema);
