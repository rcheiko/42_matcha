const { Router } = require('express');
const controller = require('./users/controller');
const router = Router();

// ----- USERS ----- //

// USERS - GET
router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);

// USERS - POST
router.post("/", controller.createUsers);



module.exports = router;