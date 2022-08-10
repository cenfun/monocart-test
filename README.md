# monocart-test
> Example project for [monocart](https://github.com/cenfun/monocart)

## Start Project
```sh
npm install
npx monocart test

# npx monocart test config/config.default.js
# npx monocart test -s app -d
```
## Config
[config/config.default.js](config/config.default.js)

## Example Tests
- [tests/app/app.job.js](tests/app/app.job.js)
- [tests/home/home.job.js](tests/home/home.job.js)

## Test Reports
[https://cenfun.github.io/monocart-reporter/](https://cenfun.github.io/monocart-reporter/)

## How to Debug with VSCode
* Enable "Debug > Node: Auto Attach" with "on" in Preferences Settings
* Debug Config: [.vscode/launch.json](.vscode/launch.json) 
* [see more details](https://code.visualstudio.com/docs/editor/debugging)