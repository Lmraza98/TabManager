# Chrome Extension Tab Manager

<!-- [![](https://img.shields.io/badge/Fork%20on-CodeSandbox-blue)](https://githubbox.com/extend-chrome/javascript-boilerplate) -->
[![GitHub last commit](https://img.shields.io/github/last-commit/extend-chrome/javascript-boilerplate.svg)](https://github.com/extend-chrome/rollup-plugin-javascript-boilerplate)

The goal of this project is to build a chrome-extension that will help delete browser tabs. Almost daily I find myself working with 30+ tabs open, it's ineffecient to have to go through an delete all of them. Given a speficied time limit, if the browser tab hasn't been interacted with the extension should exit out of the tab.

## Get Started

Type this into your terminal:

```sh
git clone https://github.com/Lmraza98/TabManager
npm install
```

### Development

For development with automatic reloading:

```sh
npm run watch
```

Open the [Extensions Dashboard](chrome://extensions), make sure "Developer mode"
is switched on, click "Load unpacked", and choose the `dist` folder.

### Production

Navigate over to `chrome://extensions` and make sure Developer mode is on in the top right. Load unpacked and select the `dist` folder in the cloned repo.

```sh
npm run build
```

This will create a ZIP file with your package name and version in the `releases`
folder.

## Source Layout

Your manifest is at `src/manifest.json`, and Rollup will bundle any files you
include here. All the filepaths in your manifest should point to files in `src`.
