// let comments = require("../data/comments");
let User = require("../models/userModel");

exports.list = function(req, res, next) {
  User.find((err, u) => {
    return res.json(u);
  });
};

// exports.show = function show(req, res) {
//   let id = req.params.id;
//   let commentsID = users.find(p => p["_id"] == id);

//   return res.json(commentsID);
// };

exports.create = function(req, res) {
  let users = req.body;
  users.push(user);
  return res.json(users);
};
