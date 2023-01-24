const Job = require("../Model/job.model");
const jwt = require("jsonwebtoken");
const getJob = async (req, res) => {
  const jobs = await Job.find();
  return res.status(200).send(jobs);
};
const postJob = async (req, res) => {
  const token = req.headers.token;
  const { name, position, contract, location } = req.body;
  try {
    if (!token) return res.status(401).send("Unauthorized");
    const verification = jwt.verify(token, "SECRET1234");
    if (verification && verification.role === "admin") {
      const job = await Job.create({
        name,
        position,
        contract,
        location,
      });
      return res.send({
        message: "Job added successfully",
        data: job,
      });
    }
    return res.status(401).send("Unauthorized");
  } catch (error) {
    res.send(error);
  }
};
module.exports = { getJob, postJob };
