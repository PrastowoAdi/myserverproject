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
    theme: {
      type: String,
      default: "",
    },
    bride_and_groom: {
      desc: {
        type: String,
        default: "",
      },
      groom: {
        name: {
          type: String,
          default: "",
        },
        fullname: {
          type: String,
          default: "",
        },
        father_name: {
          type: String,
          default: "",
        },
        mother_name: {
          type: String,
          default: "",
        },
        desc: {
          type: String,
          default: "",
        },
        location: {
          type: String,
          default: "",
        },
        image: {
          type: String,
          default: "",
        },
      },
      bride: {
        name: {
          type: String,
          default: "",
        },
        fullname: {
          type: String,
          default: "",
        },
        father_name: {
          type: String,
          default: "",
        },
        mother_name: {
          type: String,
          default: "",
        },
        desc: {
          type: String,
          default: "",
        },
        location: {
          type: String,
          default: "",
        },
        image: {
          type: String,
          default: "",
        },
      },
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
    user_menu: {
      type: Array,
      default: [
        {
          title: "Dashboard",
          url: "/",
        },
        {
          title: "Form Pengantin",
          url: "/form-pengantin",
        },
        {
          title: "Form Acara",
          url: "/form-acara",
        },
        {
          title: "Form Share Love",
          url: "/form-share-love",
        },
        {
          title: "Form Love Story",
          url: " /form-love-story",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wedding", WeddingSchema);
