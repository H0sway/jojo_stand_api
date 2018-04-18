// Import model
const Stand = require('../models/stand');

class StandController {
  findAll(req,res) {
    Stand.findAll()
    .then(stands => {
      res.json({
        message: "Success",
        data: stands,
      })
    })
    .catch(err => {
      console.log("Controller find all error", err);
      res.json("findAll error", err);
    });
  }
  findById(req,res) {
    Stand.findById(req.params.id)
    .then(stand => {
      res.json({
        message: "Success",
        data: stand,
      })
    })
    .catch(err => {
      console.log("Controller find by id error", err);
      res.json("findById error", err);
    });
  }
  searchStandsByName(req, res) {
    Stand.searchByName(req.params.name)
    .then(stands => {
      res.json({
        message: "Success",
        data: stands,
      })
    })
    .catch(err => {
      console.log("Controller find by name error", err);
      res.json("searByName error", err);
    });
  }
  searchStandsByUser(req, res) {
    Stand.searchByUser(req.params.user)
    .then(stands => {
      res.json({
        message: "Success",
        data: stands,
      })
    })
    .catch(err => {
      console.log("Controller find by user error", err);
      res.json("searchByUser error", err);
    });
  }
};

module.exports = StandController;
