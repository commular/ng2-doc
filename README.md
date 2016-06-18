# ng2-doc

[![NPM Version](http://img.shields.io/npm/v/ng2-doc.svg?style=flat)](https://npmjs.org/package/ng2-doc)
[![Build Status](http://img.shields.io/travis/commular/ng2-doc.svg?style=flat)](https://travis-ci.org/commular/ng2-doc)
[![Build status](https://ci.appveyor.com/api/projects/status/uxcl7qjsvl944ylr?svg=true)](https://ci.appveyor.com/project/tcorral/ng2-doc)

A [commular](https://github.com/commular/commular) plugin to open the AngularJS 2.0's documentation.

### Doc

Migration of angular-cli [doc](https://github.com/angular/angular-cli/blob/master/addon/ng2/tasks/doc.ts) command to use it as a [commular](https://github.com/commular/commular) module.

The "doc" command will open AngularJS 2.0's documentation searching for the *keyword* passed as an argument of the command. 

#### Usage:

```
[cli_name] doc <<KEYWORD>>
```

To get more information I recommend to read the use cases in tests or check the original [angular-cli](https://github.com/angular/angular-cli)

## Tests

To run the tests:

```bash
npm install
npm test
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Check that it still works: `npm test`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request :D

## History

1.0.0 - Initial version.

## [License](https://github.com/angular/angular-cli/blob/master/LICENSE)


