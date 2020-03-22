const router = require("express").Router();

const lifechathistoryRoutes = require("./lifechathistories");
 
const smsRoutes = require("./sms");
 
const profileRoutes = require("./profile");

 

// All routes

router.use("/lifechathistories", lifechathistoryRoutes);


module.exports = router;
