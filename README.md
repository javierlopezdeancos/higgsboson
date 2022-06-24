![alt text](images/logo.png "higgsboson")

# Higgsboson

Higgsboson class components is a set of classes to style core native components.

[![License](https://img.shields.io/github/license/javierlopezdeancos/higgsboson?style=flat-square)](LICENSE)
[![Issues](https://img.shields.io/github/issues/javierlopezdeancos/higgsboson?style=flat-square)](https://github.com/javierlopezdeancos/higgsboson/issues)
[![Stage - Alpha](https://img.shields.io/badge/Stage-Alpha-f9f504)](https://)
![maintained - yes](https://img.shields.io/badge/maintained-yes-blue)

## Why Higgsboson?

There are many motivations to see this project as a simple research and development of a system that allows not to reinvent the wheel over and over again.

Now, I know that we have multiple techniques and tools in the ecosystem to solve the same problem, many of them on top of the wave, but my intention is to solve the problem from several points of view:

- The most standard way possible, use the web.
- Minimum coupling between internal parts.
- Oriented to his main responsibility, styling pieces on the screen.
- Fully customizable injectable themes.
- Fast propagation of changes.
- Easily articulated in a design system.
- Independent but easily implementable in any library or front end framework.

## Components

- [Box](/src/components/box/box.md)
- [Button](/src/components/buttons/buttons.md)
- [Checkbox](/src/components/checkbox/checkbox.md)
- [Dialog](/src/components/dialog/dialog.md)
- [Dropdown](/src/components/dropdown/dropdown.md)
- [Field](/src/components/field/field.md)
- [Flex](/src/components/flex/flex.md)
- [Grid](/src/components/grid/grid.md)
- [Icon](/src/components/icons/icons.md)
- [Input](/src/components/inputs/input.md)
- [Label](/src/components/label/label.md)
- [Link](/src/components/links/links.md)
- [List](/src/components/list/list.md)
- [Logo](/src/components/logo/logo.md)
- [Option](/src/components/option/option.md)
- [Radio](/src/components/radio/radio.md)
- [Select](/src/components/select/select.md)
- [Table](/src/components/table/table.md)
- [Tag](/src/components/tag/tag.md)
- [Text](/src/components/text/text.md)
- [Titles (h1, h2, h3, h4, h5, h6)](/src/components/titles/titles.md)

## Sources structure

```text
Higgsboson
 ├─ src
      ├─ components
      ├─ helpers
      ├─ theme
```

### Components

All available core components defined from their selectors, properties and values in the form of variables connected to the theme variables or own variables for this component.

#### Component files structure

```text
components
   ├─ componentA
        ├─ componentA.css
        ├─ componentA.html
        ├─ componentA.md
        ├─ componentA.metadata.js
```

##### componentA.css

Selectors, rules, properties and values **connected with the theme API** across component variables and default theme variables.

##### componentA.html

Html markup generated from [underscore](https://underscorejs.org/) + [our custom helpers](./src/helpers/) + metadata.js component model file.

##### componentA.md

Complete documentation about **component theme API variables** and markup component use cases.

##### componentA.metadata.js

Data model to render with underscore and our custom helpers all component use cases.

### Helpers

Javascript helpers used to automate the rendering of components in dev mode

### Theme

Area where everything related to theming is managed, either using the default theme or injecting previously installed themes via npm.

## How to use

### Install

At first you should install dependencies after install nodejs and git.

`npm i`

### Build

`npm run build`

Build your css files into `./dist/higgsboson.min.css`

### Development

Then to develop purposes we need follow this steps

1. In a console we should build and watch the css theme required `npm run build:watch`.
2. In other console we need to run up the http server to dev our css files and watch this changes in our browser `npm start`.

This http server serve to you the `src/index.html` in order to set up your html markup to develop purposes.

### Lint

You can lint your css files with `npm run lint`

### Format

Fix your linted css files with `npm run format`

### Pre-push

**Its mandatory install the git pre-push commit** in order to pass policies about lint and tests before push your changes.

#### Install

Please copy hooks `pre-push.p1` and `pre-push` that we have in the root repository directory `Higgsboson/hooks` into `Higgsboson/.git/hooks`

```text
Higgsboson
 │
 ├─ hooks
 │    ├─ pre-push.ps1
 │    ├─ pre-push
 │
 ├─.git/
      ├─ hooks/
          ├─ pre-push.ps1
          ├─ pre-push
```

#### Configure

If you are using powershell you need give permissions to execute powershell scripts unsigned into your machine.

You can allow the powershell executions in so many ways but one of them is executing

`Unblock-File .\.git\hooks\pre-push.ps1`

in the root repository project.

Make sure that you have `hooksPath` set in your `.git/config` file:

```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
	hooksPath = .git/hooks  // <----  set here your hooksPath folder
```

#### Usage

If you have permissions whe you run `git push origin {BRANCH}` the pre-push script should be run automatically running the frontend lint rules.

## Postcss

We are using [postcss](https://postcss.org) to transpile the css code into standard css code

### Plugins that we are using

- [autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-extend](https://github.com/travco/postcss-extend)
- [postcss-nesting](https://github.com/csstools/postcss-nesting)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-preset-env](https://preset-env.cssdb.org/)
- [postcss-copy-assets](https://github.com/shutterstock/postcss-copy-assets)
- [cssnano](https://cssnano.co/)
- [postcss-csso](https://github.com/lahmatiy/postcss-csso)

## Tools that could help you to develop in this project

### Visual Studio Code IDE

Discover a free, built on open source and runs everywhere IDE to frontend development.
[Visual Studio Code](https://code.visualstudio.com/)

#### Visual Studio Code useful Extensions

- [csstools.postcss](https://github.com/csstools/postcss-language)
- [dbaeumer.vscode-eslint](https://github.com/Microsoft/vscode-eslint)
- [stylelint.vscode-stylelint](https://github.com/stylelint/vscode-stylelint)
- [usernamehw.errorlens](https://github.com/usernamehw/vscode-error-lens)
