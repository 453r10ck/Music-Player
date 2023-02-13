const express = require('express');
const router = express.Router();

const libraryController = require('../app/controllers/LibraryController');

// libraryController.index();

router.use('/', libraryController.index); // / <-> library/

module.exports = router;



