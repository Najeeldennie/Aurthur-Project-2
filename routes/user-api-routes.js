var db = require("../models");
module.exports = function(app) {
  // Find all users and return them to the user with res.json
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.get("/api/user/:id", function(req, res) {
     // Find one User with the id in req.params.id and return them to the user with res.json
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/add-user", function(req, res) {
     // Create a User with the data available to us in req.body
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
   app.delete("/api/user/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};