const packageModel = require("./../../db/models/packagesSchema");

const createPackage = (req, res) => {
  const { name, img, description, origLink, price, banner, city } = req.body;

  const newPackage = new packageModel({
    name,
    img,
    description,
    origLink,
    price,
    banner,
    city,
  });

  newPackage
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllPackages = (req, res) => {
  packageModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createPackage, getAllPackages };
