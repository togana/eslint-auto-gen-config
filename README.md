eslint-auto-gen-config
====

Automatically Generated ESLint Configuration.

# Install

```
$ npm install -g eslint-auto-gen-config
```

# Usage

## generate todo config

```
$ eslint `folder or file` | eslint-auto-gen-config > .eslintrc.todo.json
```

## add .eslintrc.json

```json
"extends": [
    "./.eslintrc.todo.json"
]
```

# example

```
$ cat src/index.js
var a = 'a';
console.log(a);
```

```
$ eslint src

/Users/path/to/src/index.js
  1:1  error    Unexpected var, use let or const instead  no-var
  2:1  warning  Unexpected console statement              no-console

✖ 2 problems (1 error, 1 warning)
  1 error, 0 warnings potentially fixable with the `--fix` option.

error Command failed with exit code 1.
```

```
$ eslint src | eslint-auto-gen-config
error Command failed with exit code 1.
{
  "overrides": [
    {
      "files": "src/index.js",
      "rules": {
        "no-var": 0,
        "no-console": 0
      }
    }
  ]
}
