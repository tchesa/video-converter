const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const video = {
    name: req.body.name
  };
  res.status(200).json({
    message: 'Handling GET to /encoder',
    encoded: video
  });
});

module.exports = router;
