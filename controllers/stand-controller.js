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
    });
  }
  searchStandsByName(req, res) {
    Stand.searchByName(req.params.name)
    .then(results => {
      
    })
  }
}
