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
    share_love: {
      list_bank: {
        type: Array,
        default: [],
      },
      send_gift_location: {
        type: String,
        default: "",
      },
    },
    countdown: {
      desc: {
        type: String,
        default: "",
      },
      date: {
        type: String,
        default: "",
      },
      akad: {
        location_name: {
          type: String,
          default: "",
        },
        location: {
          type: String,
          default: "",
        },
        location_link: {
          type: String,
          default: "",
        },
        date: {
          type: String,
          default: "",
        },
      },
      resepsi: {
        location_name: {
          type: String,
          default: "",
        },
        location: {
          type: String,
          default: "",
        },
        location_link: {
          type: String,
          default: "",
        },
        date: {
          type: String,
          default: "",
        },
      },
      link_live_streaming: {
        type: String,
        default: "",
      },
      live_streaming_status: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wedding", WeddingSchema);
