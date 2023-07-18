import mongoose from "mongoose";
const { Schema } = mongoose;

const CostTrackSchema = new Schema(
  {
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
