var bulk = require('bulk-require');
var clone = require('clone');

var blockModels = bulk(__dirname + '/../blocks', '**/*.js');

module.exports = function Blocks() {
    var self = this;
    for (var id in blockModels) {
        self[id] = clone(blockModels[id].data);
        self[id].id = id;
    }
};
