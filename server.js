const express = require("express");
const app = express();
const cors = require('cors')
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path = require("path");
const corsOptions = {
  origin: 'http://localhost:3000', // or your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions))
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build/index.html"));
//   });
// }
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
