const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const { medicineRouter } = require("./routes");

dotenv.config({
  path:
    process.env.NODE_ENV === "development"
      ? "./envs/dev.env"
      : "./envs/prod.env",
});

const app = express();

mongoose
  .connect(process.env.BASE_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.use("/pharmacy", medicineRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    msg: "Not Found.",
  });
});

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({ message: err.message });
});

const port = process.env.PORT ?? "4000";

app.listen(port);
