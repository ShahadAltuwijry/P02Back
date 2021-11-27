const programModel = require("./../../db/models/programsSchema");

const createProgram = (req, res) => {
  const { name, img, description, origLink, banner, city } = req.body;

  const newProgram = new programModel({
    name,
    img,
    description,
    origLink,
    banner,
    city,
  });

  newProgram
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllPrograms = (req, res) => {
  programModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createProgram, getAllPrograms };
