// built from example code on readme pages of git repos:
// https://github.com/substack/minimist
// https://github.com/flitbit/diff
// https://github.com/nodeca/js-yaml

var diff = require('deep-diff').diff;
yaml = require('js-yaml');
fs   = require('fs');
var parseArgs = require('minimist');

var argv = require('minimist')(process.argv.slice(2));
if(argv['_'].length != 2) {
  throw 'Wrong usage';
}

// Get document, or throw exception on error
var readYml = function(fn) {
  return yaml.safeLoad(fs.readFileSync(fn, 'utf8'));
}

var lhs = readYml(argv['_'][0]);
var rhs = readYml(argv['_'][1]);
var differences = diff(lhs, rhs);
if(!differences) { differences = []; }

console.log(JSON.stringify(differences, null, 2));
