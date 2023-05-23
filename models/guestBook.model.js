import mongoose from "mongoose";
const { Schema } = mongoose;

const GuestBook = new Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    kedatangan: {
      type: Boolean,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    ucapan: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("GuestBook", GuestBook);
