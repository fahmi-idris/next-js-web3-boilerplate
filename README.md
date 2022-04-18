## getkupon-fe

getkupon.io frontend project of Get Kupon. 

## Running locally

Run the following command to install the required packages. Note that we use `yarn`, not `npm`.

```
$ yarn
```

To run a local server, run the following command. Your app will live on `localhost:3000`.

```
$ yarn dev
> Ready on http://localhost:3000
```

To run smartcontract locally, run the following command.
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## IDEs

The following section contains configurations for the IDEs we use.

### Visual Studio Code

Create a `.vscode/settings.json` file in the root project folder and paste the following:

```json
{
  "editor.insertSpaces": true,
  "editor.renderWhitespace": "boundary",
  "files.encoding": "utf8",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "search.exclude": {
    "dist/**": true,
    "out/**": true,
    ".next/**": true,
    "node_modules/**": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "[javascript]": {
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.rulers": [120]
  },
  "[typescript]": {
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.rulers": [120]
  },
  "[typescriptreact]": {
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.rulers": [120]
  },
  "[markdown]": {
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.rulers": [120]
  }
}
```
