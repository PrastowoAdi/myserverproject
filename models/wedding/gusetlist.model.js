import mongoose from "mongoose";
const { Schema } = mongoose;

const GuestListSchema = new Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    nomor: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("GuestList", GuestListSchema);
