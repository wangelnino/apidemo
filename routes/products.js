const express = require("express");
const router = express.Router();
const {getallproducts,getallproductstesting} = require ("../controllers/products"); //function path define gareko

router.route("/").get(getallproducts);

router.route("/testing").get(getallproductstesting); // get (function name) <function calling>
module.exports = router;