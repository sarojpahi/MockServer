const Bugs = require("../Model/bug.module");
const findBug = (req, res) => {
  Bugs.find()
    .then((data) => res.send(data))
    .catch((e) => res.send(e));
};
const createBug = (req, res) => {
  const { severity, detail } = req.body;
  Bugs.create({
    severity,
    detail,
  })
    .then(() =>
      res.status(201).send({
        message: "Bug Reported Successfully",
      })
    )
    .catch((e) => res.status(404).send(e));
};
const updateBug = (req, res) => {
  const { severity, detail, id } = req.body;
  Bugs.findByIdAndUpdate(id, {
    severity,
    detail,
  })
    .then(() =>
      res.send({
        message: "Updated Successfully",
      })
    )
    .catch((e) => res.send(e));
};
const deleteBug = (req, res) => {
  const { id } = req.body;
  Bugs.findByIdAndDelete(id)
    .then(() =>
      res.send({
        message: "Deleted Successfully",
      })
    )
    .catch((e) => res.send(e));
};
module.exports = { findBug, createBug, updateBug, deleteBug };
