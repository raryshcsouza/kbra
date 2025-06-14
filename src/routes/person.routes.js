const express = require("express");
const router = express.Router();
const personController = require("../controllers/person.controller");

router.get("/person/:id", personController.getPersonById);
router.post("/person/list", personController.getFilteredPeople);
router.post("/person", personController.insertPerson);

module.exports = router;
