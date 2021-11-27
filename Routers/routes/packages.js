const express = require("express");
const { createPackage, getAllPackages } = require("./../controllers/packages");

const packageRouter = express.Router();

packageRouter.post("/package", createPackage);
packageRouter.get("/packages", getAllPackages);

module.exports = packageRouter;
