import Daily from "../models/daily.model.js";

export const dailyAdd = async (req, res, next) => {
  try {
    const newDaily = new Daily({
      ...req.body,
    });
    await newDaily.save();
    res.status(201).json({
      isSuccess: true,
      message: "Berhasil Tambah Aktivitas",
    });
  } catch (err) {
    next(err);
  }
};

export const getDaily = async (req, res, next) => {
  try {
    const user = await Daily.find();

    res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
