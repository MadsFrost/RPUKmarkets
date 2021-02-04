const express = require("express");
const router = express.Router();
let data = require("../data");


// Runs
router.get("/runs", async (req, res) => {
  let runs = data[0]
    try {
      res.status(200).json({
        data: runs
      });
    } catch (err) {
      res.status(400).json({
        message: "Couldn't grab data from RPUK market..",
        err
      });
    }
});

router.get("/runs/:name", async (req, res) => {
    let runs = data[0]
    let { name } = req.params;
    try {
        var runData = null;
        for (i=0; i<runs.length; i++) {
          if (runs[i]["Name"] === name.toString()) {
            runData = runs[i]
          }
        }

      res.status(200).json({
        data: runData
      });
      

    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
});

// Equipment
router.get("/equipment", async (req, res) => {
  let equipment = data[1]
  try {
    res.status(200).json({
      data: equipment
    });
  } catch (err) {
    res.status(400).json({
      message: "Couldn't grab data from RPUK market..",
      err
    });
  }
});

router.get("/equipment/:name", async (req, res) => {
  let equipment = data[1]
  let { name } = req.params;
  try {
      var equipData = null;
      for (i=0; i<equipment.length; i++) {
        if (equipment[i]["Name"] === name.toString()) {
          equipData = equipment[i]
        }
      }

    res.status(200).json({
      data: equipData
    });
    

  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

// Vehicles
router.get("/vehicles", async (req, res) => {
  let vehicles = data[3]
  try {
    res.status(200).json({
      data: vehicles
    });
  } catch (err) {
    res.status(400).json({
      message: "Couldn't grab data from RPUK market..",
      err
    });
  }
});

router.get("/vehicles/:name", async (req, res) => {
  let vehicles = data[3]
  let { name } = req.params;
  try {
      var vehicleData = null;
      for (i=0; i<vehicles.length; i++) {
        if (vehicles[i]["Name"] === name.toString()) {
          vehicleData = vehicles[i]
        }
      }

    res.status(200).json({
      data: vehicleData
    });
    

  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

// Clothing
router.get("/clothing", async (req, res) => {
  let clothing = data[2]
  try {
    res.status(200).json({
      data: clothing
    });
  } catch (err) {
    res.status(400).json({
      message: "Couldn't grab data from RPUK market..",
      err
    });
  }
});

router.get("/clothing/:name", async (req, res) => {
  let clothing = data[2]
  let { name } = req.params;
  try {
      var clothingData = null;
      for (i=0; i<clothing.length; i++) {
        if (clothing[i]["Name"] === name.toString()) {
          clothingData = clothing[i]
        }
      }

    res.status(200).json({
      data: clothingData
    });
    

  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;