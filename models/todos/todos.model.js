import mongoose from "mongoose";
const { Schema } = mongoose;

const TodosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
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

export default mongoose.model("Todos", TodosSchema);
