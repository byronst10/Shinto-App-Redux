const router = require("express").Router();
let Kamvas = require("../models/kamvas.model");

router.route("/").get((req, res) => {
  Kamvas.find()
    .then(kamvases => res.json(kamvases))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.title; //The title of the Kamvas would go in here
  // const duration = Number(req.body.duration);
  // const date = Date.parse(req.body.date);

  const newKamvas = new Kamvas({
    username,
    description
    // duration,
    // date
  });

  newKamvas
    .save()
    .then(() => res.json("Kamvas added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
