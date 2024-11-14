var express = require("express");
var router = express.Router();

/* GET home page. */
//pagina criada por padrao quando se inicia um projeto utilizando o express
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
