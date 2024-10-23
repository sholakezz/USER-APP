const express = require ("express");
const router = express.Router();
const cs = require ('../controller/user.controller')

router.post("/create-user",  cs.createUser);
router.get("/find-all-user", cs.findAllUsers);
router.get("/find-user/:id", cs.findById);
router.put("/update/:id", cs.updateById);
router.delete("/delete/:id", cs.deleteById);
module.exports = router;