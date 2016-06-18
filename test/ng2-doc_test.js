'use strict';

var grunt = require('grunt');
var mock = require('mock-require');
var program = require('commander');
var fs = require('fs');
var q = require('q');

exports.commular = {
  "Check that doc executes opn to show the page in browser": function(test) {
    var deferred = q.defer();
    var promise = deferred.promise;
    var expected = {
      url: 'https://angular.io/docs/ts/latest/api/#!?apiFilter=test',
      options: { wait: false }
    };
    var url;
    var options;
    var ng2Doc;
    mock('opn', function (_url, _options) {
      deferred.resolve({ url: _url, options: _options });
    });

    ng2Doc = require('../scripts');
    ng2Doc.command(program);
    program.parse(['node', 'test', 'doc', 'test']);

    test.expect(3);

    promise
      .then(function (result) {
        test.equals(expected.url, result.url, 'The url that will be opened is ' + expected.url);
        test.equals(Object.keys(expected.options).length, Object.keys(result.options).length, 'The options are { wait: false }');
        test.equals(expected.options.wait, result.options.wait, 'The wait option is '+ expected.options.wait);
        test.done();
      });

  }
};
