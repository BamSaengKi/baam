var express = require('express');
var router = express.Router();
const UserService = require('./User.Service');

router.post('/', async (req, res) => {
  try {
    const result = await UserService.insertUser(req.body);
    return res
      .status(200)
      .json({ status: 200, data: result, message: 'Succsess' });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
router.get('/', async (req, res) => {
  try {
    const result = await UserService.getUserlist();
    return res
      .status(200)
      .json({ status: 200, data: result, message: 'Success' });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
