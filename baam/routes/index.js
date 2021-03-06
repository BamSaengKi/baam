var express = require('express');
var router = express.Router();
const pool = require('../config/dbConfig');

/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    pool.getConnection((err, conn) => {
      if (err) {
        console.log(err);
        throw err.message;
      }
      const query = 'SELECT * FROM t_user;';
      conn.query(query, (err, rows) => {
        if (err) {
          console.log(err);
          throw err.message;
        }
        conn.release();
      });
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
