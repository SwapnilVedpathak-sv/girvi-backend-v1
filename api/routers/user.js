const express = require("express")
const router = new express.Router();
const user = require("../models/userModel");


// Post contact 
router.post("/addUser", async (req, res) => {
    try {
      const addUser = new user(req.body);
      const insertUser = await addUser.save();
      res.status(201).send(insertUser);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Get contact 
  router.get("/getUser", async (req, res) => {
    try {
      const getUser = await user.find({});
      res.send(getUser);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Get Single contact 
  router.get("/getSingleUser/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getSingleUser = await user.findById({_id});
      res.send(getSingleUser);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Update contact 
  router.patch("/updateUser/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateUser = await user.findByIdAndUpdate(_id , req.body , {
        new:true
      });
      res.send(updateUser);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // Delete contact 
  router.delete("/deleteUser/:id", async (req, res) => {
    try {
      const deleteUser = await user.findByIdAndDelete(req.params.id)
      res.send(deleteUser);
    } catch (e) {
      res.send(e);
    }
  });
  

  module.exports=router;