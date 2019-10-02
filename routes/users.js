var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.locals.connection.query('SELECT * from usuario', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  });
});

module.exports = router;
