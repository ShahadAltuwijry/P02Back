const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require("./db/index");
const userRouter = require("./Routers/routes/users");
const spotRouter = require("./Routers/routes/spots");
const programRouter = require("./Routers/routes/programs");
const packageRouter = require("./Routers/routes/packages");

//setup express server
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(spotRouter);
app.use(programRouter);
app.use(packageRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
