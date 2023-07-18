import CostTrack from "../../models/costTrack/costTrack.model.js";

export const costTrackAdd = async (req, res, next) => {
  try {
    const costTrack = new CostTrack({
      ...req.body,
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
    const { id } = req.params;
    const { pengeluaran } = req.body;

    await CostTrack.findOneAndUpdate(
      {
        _id: id,
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
    const { id } = req.params;
    const { dana } = req.body;

    await CostTrack.findOneAndUpdate(
      {
        _id: id,
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
    const costTrack = await CostTrack.find().sort({ createdAt: "descending" });

    res.status(200).json({
      data: costTrack,
    });
  } catch (err) {
    next(err);
  }
};
