import Wedding from "../../models/weddingform/weeding.model.js";
import bcrypt from "bcrypt";
import decoded from "jwt-decode";

export const weddingRegisterUser = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newWedding = new Wedding({
      ...req.body,
      password: hash,
    });

    await newWedding.save();
    res.status(201).json({
      isSuccess: true,
      message: "Berhasil Register User",
    });
  } catch (err) {
    next(err);
  }
};

export const getUserByUsername = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : null;

    const tokenDecoded = decoded(token);

    const user = await Wedding.findOne({
      username: tokenDecoded.username,
    }).select("-password");

    res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const weddingUpdateLoveStory = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : null;

    const tokenDecoded = decoded(token);
    const { our_love_story } = req.body;

    await Wedding.findOneAndUpdate(
      {
        _id: tokenDecoded.id,
      },
      {
        our_love_story,
      }
    ).then(() => {
      res.status(200).json({
        isSuccess: true,
        message: "Success Update Love Story Form",
      });
    });
  } catch (err) {
    next(err);
  }
};
