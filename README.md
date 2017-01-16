# deep-diff-yml-cli
[![Build Status](https://travis-ci.org/shadiakiki1986/deep-diff-yml-cli.svg?branch=master)](https://travis-ci.org/shadiakiki1986/deep-diff-yml-cli)
Use [deep-diff](https://github.com/flitbit/diff) to show differences between two yml files

## Usage
```bash
./deep-diff-yml tests/f2.yml tests/f1.yml
```
gives out [tests/expected.json](tests/expected.json)

Note: I started off doing `diff f1 f2`,
but as I needed to use this for git diff'ing,
and as git does `diff old new`,
I needed to flip the order of the files to get the expected result.
Otherwise, when I use this in `git diff`,
added lines would show up as `D` (dropped).
