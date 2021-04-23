const express = require("express");

const {
  getalldata,
  getsingledata,
  deletedata,
  updatedata,
  createdata,
} = require("../Controller/Controllerdata");

const router = express.Router();
router.route("/").get(getalldata);
router.route("/abc").get(getsingledata);
router
  .route("/pqr")
  .put(updatedata)
  .delete(deletedata)
  .put(updatedata)
  .post(createdata);

  module.exports=router;
