const express = require("express")
const router = new express.Router();
const loan = require("../models/loanModel");


// Post contact 
router.post("/addLoan", async (req, res) => {
    try {
      const addLoan = new loan(req.body);
      const insertLoan = await addLoan.save();
      res.status(201).send(insertLoan);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Get contact 
  router.get("/getLoan", async (req, res) => {
    try {
      const getLoan = await loan.find({});
      res.send(getLoan);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Get Single contact 
  router.get("/getSingleLoan/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getSingleLoan = await loan.findById({_id});
      res.send(getSingleLoan);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Update contact 
  router.patch("/updateLoan/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateLoan = await loan.findByIdAndUpdate(_id , req.body , {
        new:true
      });
      res.send(updateLoan);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // Delete contact 
  router.delete("/deleteLoan/:id", async (req, res) => {
    try {
      const deleteLoan = await loan.findByIdAndDelete(req.params.id)
      res.send(deleteLoan);
    } catch (e) {
      res.send(e);
    }
  });
  

  module.exports=router;