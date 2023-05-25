import GestList from "../../models/wedding/gusetlist.model.js";

export const guestListAdd = async (req, res, next) => {
  try {
    const { nama } = req.body;

    const guest = await GestList.findOne({ nama: nama });
    if (guest !== null) {
      res.status(400).json({
        isSuccess: false,
        message: "Nama Sudah Terdaftar",
      });
    }

    const newGuestList = new GestList({
      ...req.body,
    });
    await newGuestList.save();
    res.status(201).json({
      isSuccess: true,
      message: "Berhasil Tambah Tamu Undangan",
    });
  } catch (err) {
    next(err);
  }
};

export const guestListGet = async (req, res, next) => {
  try {
    const { search = "" } = req.query;
    const guest = await GestList.find({
      $or: [{ nama: { $regex: new RegExp(search, "i") } }],
    });

    res.status(200).json({
      data: guest,
    });
  } catch (err) {
    next(err);
  }
};
