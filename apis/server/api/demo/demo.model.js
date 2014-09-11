// http://mongoosejs.com/docs/guide.html

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DemoSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Demo', DemoSchema);