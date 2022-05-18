const router = require('express').Router();

const heroController = require('./hero.controller');

router.get('/all', heroController.getHeroes );

module.exports = router;