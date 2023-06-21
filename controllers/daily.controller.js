import Daily from "../models/daily.model.js";
import pdf from "html-pdf";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import moment from "moment";

export const dailyAdd = async (req, res, next) => {
  try {
    const { activity } = req.body;
    if (activity === "") {
      res.status(400).json({
        isSuccess: false,
        message: "Activity is required!!!",
      });
    }
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

export const dailyUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { activity, work, date } = req.body;

    const dateTime = new Date();
    const dateUpdate = date + " " + dateTime.toLocaleTimeString();

    await Daily.findOneAndUpdate(
      {
        _id: id,
      },
      {
        activity,
        work,
        date: dateUpdate,
      }
    ).then(() => {
      res.status(200).json({
        isSuccess: true,
        message: "Success Update Activity",
        // data: { activity },
      });
    });
  } catch (err) {
    next(err);
  }
};

export const getDaily = async (req, res, next) => {
  try {
    const user = await Daily.find().sort({ createdAt: "ascending" });

    res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const exportPdf = async (req, res, next) => {
  try {
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // console.log(__dirname);

    const daily = await Daily.find();
    ejs.renderFile(
      path.join(__dirname, "../views/pages/", "index.ejs"),
      { daily: daily, moment: moment, lastDay },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          let options = {
            height: "11.25in",
            width: "8.5in",
            header: {
              height: "20mm",
            },
            footer: {
              height: "20mm",
            },
          };

          pdf.create(data, options).toStream((err, pdfStream) => {
            if (err) {
              // handle error and return a error response code
              console.log(err);
              return res.sendStatus(500);
            } else {
              // send a status code of 200 OK
              res.statusCode = 200;

              // once we are done reading end the response
              pdfStream.on("end", () => {
                // done reading
                return res.end();
              });

              // pipe the contents of the PDF directly to the response
              pdfStream.pipe(res);
            }
          });
          // pdf.create(data, options).toFile("report.pdf", function (err, data) {
          //   if (err) {
          //     res.send(err);
          //   } else {
          //     res.send("File created successfully");
          //   }
          // });
        }
      }
    );
  } catch (err) {
    next(err);
  }
};
