import Landing from "../../models/myportfolio/landing.model.js";

export const landingAdd = async (req, res, next) => {
  try {
    const newLanding = new Landing({
      ...req.body,
    });
    await newLanding.save();
    res.status(201).json({
      isSuccess: true,
      message: "Berhasil Tambah Landing Information",
    });
  } catch (err) {
    next(err);
  }
};

export const landingUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { heroDesc, aboutMe } = req.body;
    await Landing.findOneAndUpdate(
      {
        _id: id,
      },
      {
        heroDesc,
        aboutMe,
      }
    ).then(() => {
      res.status(200).json({
        isSuccess: true,
        message: "Berhasil Update Landing Information",
      });
    });
  } catch (err) {
    next(err);
  }
};

export const getLanding = async (req, res, next) => {
  try {
    const landing = await Landing.find();

    res.status(200).json({
      data: landing,
    });
  } catch (err) {
    next(err);
  }
};
