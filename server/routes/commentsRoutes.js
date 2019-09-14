const express = require("express");
const router = express.Router();
const {
  list,
  show,
  create,
  update,
  remove
} = require("../controllers/commentController");

router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
// router.put("/comments/:id", update);
// router.delete("/comments/:id", remove);

module.exports = router;
