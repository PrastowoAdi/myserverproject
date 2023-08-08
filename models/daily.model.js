import mongoose from "mongoose";
const { Schema } = mongoose;

const DailySchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    activity: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
      default: "WFH",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Daily", DailySchema);
