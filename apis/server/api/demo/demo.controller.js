/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Demo = require('./demo.model');

// Get list of things
exports.index = function(req, res) {
  Demo.find(function (err, demos) {
    if(err) { return handleError(res, err); }
    return res.json(200, demos);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Demo.findById(req.params.id, function (err, demo) {
    if(err) { return handleError(res, err); }
    if(!demo) { return res.send(404); }
    return res.json(demo);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Demo.create(req.body, function(err, demo) {
    if(err) { return handleError(res, err); }
    return res.json(201, demo);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Demo.findById(req.params.id, function (err, demo) {
    if (err) { return handleError(res, err); }
    if(!demo) { return res.send(404); }
    var updated = _.merge(demo, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, demo);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Demo.findById(req.params.id, function (err, demo) {
    if(err) { return handleError(res, err); }
    if(!demo) { return res.send(404); }
    demo.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}