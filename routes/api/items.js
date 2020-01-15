const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");
const auth = require("../../middleware/auth");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(400).json({ success: false }));
});

//@access Private
router.post("/", auth, (req, res) => {
  const { name } = req.body;
  const newItem = new Item({
    name
  });
  newItem.save({ w: 1 }).then(item => {
    res.json(item);
  });
  // Item.collection.insertOne(
  //   {
  //     name: req.body.name
  //   },
  //   { w: 1 },
  //   (err, item) => {
  //     if (err) res.status(400).json({ success: false });
  //     res.json(item);
  //   }
  // );
});

//@access Private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id).remove(() => res.json({ success: true }));
  // .then(() => res.json({ success: false }))
  // .catch(err => res.status.json({ success: true }));
});

module.exports = router;
