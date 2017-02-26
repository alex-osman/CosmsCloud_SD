var mongoose = require('mongoose');

var nodeSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: [true, 'IP Required']
  },
  name: {
    type: String,
    default: ''
  },
  modules: [{}]
});

module.exports = mongoose.model('Nodes', nodeSchema);

