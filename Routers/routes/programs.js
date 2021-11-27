const express = require("express");
const { createProgram, getAllPrograms } = require("./../controllers/programs");

const programRouter = express.Router();

programRouter.post("/program", createProgram);
programRouter.get("/programs", getAllPrograms);

module.exports = programRouter;
