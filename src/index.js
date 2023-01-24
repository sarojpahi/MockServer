require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connet = require("./Config/Mongoose.config");
const authRoute = require("./Routes/auth.route");
const jobRoute = require("./Routes/job.route");

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoute);
app.use("/job", jobRoute);

app.listen(port, () => {
  connet()
    .then(() => console.log("Connected to Database"))
    .catch((e) => console.log(e.message));
  console.log(`Server is running at:${port}`);
});
