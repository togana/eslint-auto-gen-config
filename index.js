#! /usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

const stdin = fs.readFileSync('/dev/stdin', 'utf8');
const tmp = stdin.match(/^\/.*((?!\n\n)\n.*)*/gm);

if (!tmp) {
  console.log(JSON.stringify({}));
  process.exit(0);
}

const overrides = tmp.map((v) => {
  const object = v.split('\n');
  const files = object.shift().replace(`${process.cwd()}/`, '');
  const rules = object.reduce((acc, cur) => {
    acc[cur.split(/\s/).pop()] = 0;
    return acc;
  }, {});
  return { files, rules };
});

const config = { overrides };

console.log(JSON.stringify(config, null, 2));
