var Task = require('ember-cli/lib/models/task');
var opn = require('opn');

var DocTask = Task.extend({
  run: function (keyword) {
    var searchUrl = 'https://angular.io/docs/ts/latest/api/#!?apiFilter=' + keyword;
    return opn(searchUrl, { wait: false });
  }
});

module.exports = DocTask;
