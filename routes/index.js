const express = require("express");
const router = express.Router();
const usersCtrl = require('../controllers/UsersController');
const classesCtrl = require('../controllers/ClassesController');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/users", usersCtrl.get);
router.get("/classes", classesCtrl.get);

module.exports = router;

