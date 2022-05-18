const router = require('express').Router();

const healthcheckRoutes = require('./healthcheck');
const heroRoutes = require('./hero');

router.use('/healthcheck', healthcheckRoutes);
router.use('/hero', heroRoutes);

module.exports = router;
