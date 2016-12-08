var express = require("express");
var router = express.Router();

router.get('/healthcheck', function(req, res) {
    res.json({status: "ok"});
});

module.exports = router;
