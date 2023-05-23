import GuestBook from "../models/guestBook.model.js";

export const guestAdd = async (req, res, next) => {
  try {
    const newGuest = new GuestBook({
      ...req.body,
    });
    await newGuest.save();
    res.status(201).json({
      isSuccess: true,
      message: "Berhasil Tambah Daftar Kehadiran",
    });
  } catch (err) {
    next(err);
  }
};

export const guestGet = async (req, res, next) => {
  try {
    const guest = await GuestBook.find();

    res.status(200).json({
      data: guest,
    });
  } catch (err) {
    next(err);
  }
};
