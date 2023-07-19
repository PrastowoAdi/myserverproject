import mongoose from "mongoose";
const { Schema } = mongoose;

const CostTrackSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dana: {
      type: Number,
      required: true,
    },
    pengeluaran: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CostTrack", CostTrackSchema);
