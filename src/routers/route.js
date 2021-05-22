const express = require("express");
const mensRanking = require("../models/mens.js");
const router = express.Router();

router.post("/mens", async (req, res) => {
  try {
    const newRecord = new mensRanking(req.body);
    const response = await newRecord.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const response = await mensRanking.find().sort({ ranking: 1 });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await mensRanking.findById({ _id: id });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await mensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const response = await mensRanking.findByIdAndDelete(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(501).send(error);
  }
});

module.exports = router;
