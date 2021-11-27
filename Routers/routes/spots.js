const express = require("express");
const {
  createSpot,
  getAllSpots,
  getSpotsById,
} = require("./../controllers/spots");

const spotRouter = express.Router();

spotRouter.post("/spot", createSpot);
spotRouter.get("/spot", getAllSpots);
spotRouter.get("/spot/:id", getSpotsById);//test

module.exports = spotRouter;
