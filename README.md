# victorchabbert/dependency-cruiser-action
<a href="https://github.com/victorchabbert/dependency-cruiser-action"><img alt="typescript-action status" src="https://github.com/victorchabbert/dependency-cruiser-action/workflows/build-test/badge.svg"></a>

## Summary

Github Action providing a [dependency cruiser](https://github.com/sverweij/dependency-cruiser) report in markdown.

The report would be posted in the comments of every configured pull requests.

## Setup
In your test workflow, add the following content

```yaml
name: 'build-test'
on:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: victorchabbert/dependency-cruiser-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          config: ./example/.dependency-cruiser.js
          input: |
            example
            src
          fail-on: none
```

### Options (`with:`)
| name         | type                            | required | description                                                                                                   |
| ------------ | ------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| github_token | `${{ secrets.GITHUB_TOKEN }}`   | required | A github PAT                                                                                                  |
| config       | `string`                        | required | Path to the dependency cruiser config                                                                         |
| input        | `string`                        | required | Files or folders to cruise. Can be a single string or a list of strings separated by a carriage return (`\n`) |
| fail-on      | `error`, `warn`, `info`, `none` | optional | Status the worflow should fail on.                                                                            |

### Fail-on
This workflow can fail if dependency-cruiser reports at least one violation depending on the value of `fail-on`.

By default, it fails with any violation which has an `error` severity.

Should you choose to set `fail-on` to `warn` or `info`, the workflow would fail on any violations of the configured severity or above (ie. `fail-on: warn` -> fail on warnings and errors)

The `none` only reports and does not fail.
