import CostTrack from "../../models/costTrack/costTrack.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import decoded from "jwt-decode";

export const costTrackAdd = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const costTrack = new CostTrack({
      ...req.body,
      password: hash,
    });
    await costTrack.save();
    res.status(201).json({
      isSuccess: true,
      message: "Berhasil Tambah Pengeluaran",
    });
  } catch (err) {
    next(err);
  }
};

export const costTrackUpdate = async (req, res, next) => {
  try {
    const { pengeluaran } = req.body;

    const token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : null;

    const tokenDecoded = decoded(token);
    await CostTrack.findOneAndUpdate(
      {
        _id: tokenDecoded.id,
      },
      {
        pengeluaran,
      }
    ).then(() => {
      res.status(200).json({
        isSuccess: true,
        message: "Berhasil Update Pengeluaran",
      });
    });
  } catch (err) {
    next(err);
  }
};

export const costTrackUpdateDana = async (req, res, next) => {
  try {
    const { dana } = req.body;

    const token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : null;

    const tokenDecoded = decoded(token);

    await CostTrack.findOneAndUpdate(
      {
        _id: tokenDecoded.id,
      },
      {
        dana,
      }
    ).then(() => {
      res.status(200).json({
        isSuccess: true,
        message: "Berhasil Update Dana",
      });
    });
  } catch (err) {
    next(err);
  }
};

export const getCostTrack = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : null;

    const tokenDecoded = decoded(token);

    const costTrack = await CostTrack.findOne({
      username: tokenDecoded.username,
    }).select("-password");

    res.status(200).json({
      data: costTrack,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await CostTrack.findOne({
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
