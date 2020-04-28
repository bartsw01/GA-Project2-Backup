var router = require('express').Router();
var instructorsCtrl = require('../controllers/instructors');

// GET /students
router.get('/instructors', instructorsCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
// router.post('/facts', instructorsCtrl.addFact);

// DELETE /facts/:id
// router.delete('/facts/:id', instructorsCtrl.delFact);

module.exports = router;
