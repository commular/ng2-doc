var pkgJSON = require('../package.json');
var DocTask = require('./lib/doc');

exports.command = function(program) {
  program
    .command('doc [keyword]')
    .description(pkgJSON.description)
    .action(function(keyword) {
      var docTask = new DocTask({
        ui: this.ui,
        analytics: this.analytics,
        project: this.project
      });
      return docTask.run(keyword);
    });
};
