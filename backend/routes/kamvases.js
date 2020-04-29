const router = require("express").Router();
let Kamvas = require("../models/kamvas.model");

router.route("/").get((req, res) => {
  Kamvas.find()
    .then(kamvases => res.json(kamvases))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description; //The title of the Kamvas would go in here
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

router.route("/:id").get((req, res) => {
  Kamvas.findById(req.params.id)
    .then(kamvas => res.json(kamvas))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Kamvas.findByIdAndDelete(req.params.id)
    .then(() => res.json("Kamvas deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  Kamvas.findById(req.params.id)
    .then(kamvas => {
      kamvas.username = req.body.username;
      kamvas.description = req.body.description;
      // kamvas.duration = Number(req.body.duration);
      // kamvas.date = Date.parse(req.body.date);

      kamvas
        .save()
        .then(() => res.json("Kamvas updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
