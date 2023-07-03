import Wedding from "../models/weddingform/weeding.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

// export const register = async (req, res, next) => {
//   try {
//     const hash = bcrypt.hashSync(req.body.password, 5);

//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(201).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };

export const login = async (req, res, next) => {
  try {
    const user = await Wedding.findOne({
      username: req.body.username,
    });

    if (!user) {
      res.status(400).json({
        isSuccess: false,
        message: "User tidak ditemukan!!!",
      });
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) {
      res.status(400).json({
        isSuccess: false,
        message: "Wrong password or username!!!",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res.status(200).json({
      token,
    });
  } catch (err) {
    next(err);
  }
};

// export const logout = async (req, res) => {
//   try {
//     res
//       .clearCookie("accessToken", {
//         sameSite: "none",
//         secure: true,
//       })
//       .status(200)
//       .send("User has been logged out");
//   } catch (err) {
//     next(err);
//   }
// };
