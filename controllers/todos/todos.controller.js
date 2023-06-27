import moment from "moment";
import Todos from "../../models/todos/todos.model.js";

export const todosAdd = async (req, res, next) => {
  try {
    const { title, desc, date } = req.body;
    const dateTime = new Date();
    const dateUpdate = date + " " + dateTime.toLocaleTimeString();

    if (title === "") {
      res.status(400).json({
        isSuccess: false,
        message: "Title is required!!!",
      });
    }

    const newTodos = new Todos({
      title,
      desc,
      date: dateUpdate,
    });

    await newTodos.save();
    res.status(201).json({
      isSuccess: true,
      message: "Berhasil Tambah Activity",
    });
  } catch (err) {
    next(err);
  }
};

export const todosComplatedTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const dateTime = new Date();

    await Todos.findOneAndUpdate(
      {
        _id: id,
      },
      {
        status: true,
        date: dateTime,
      }
    ).then(() => {
      res.status(200).json({
        isSuccess: true,
        message: "Success Completed Activity",
        // data: { activity },
      });
    });
  } catch (err) {
    next(err);
  }
};

export const todosUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc, date } = req.body;

    const dateTime = new Date();
    const dateUpdate = date + " " + dateTime.toLocaleTimeString();

    await Todos.findOneAndUpdate(
      {
        _id: id,
      },
      {
        title,
        desc,
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

export const getTodos = async (req, res, next) => {
  try {
    const today = moment().startOf("day");
    const todos = await Todos.find({
      status: false,
      date: {
        $gte: today.toDate(),
      },
    }).sort({ date: "ascending" });

    res.status(200).json({
      data: todos,
    });
  } catch (err) {
    next(err);
  }
};

export const getTodosCompleted = async (req, res, next) => {
  try {
    const todos = await Todos.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          data: {
            $push: {
              title: "$title",
              desc: "$desc",
              status: "$status",
              date: "$date",
            },
          },
        },
      },
    ]);

    res.status(200).json({
      data: todos,
    });
  } catch (err) {
    next(err);
  }
};
