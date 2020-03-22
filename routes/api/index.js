const router = require("express").Router();

const lifechathistoryRoutes = require("./lifechathistories");
 


 

// All routes

router.use("/lifechathistories", lifechathistoryRoutes);


module.exports = router;
