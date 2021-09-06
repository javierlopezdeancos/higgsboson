![alt text](images/logo.png "higgsboson")

# Higgsboson

Higgsboson class components is a set of classes to style core native components.

[![License](https://img.shields.io/github/license/javierlopezdeancos/higgsboson?color=%231B2D55&style=for-the-badge)](LICENSE)

## Components

- [Tag](/src/components/tag/tag.md)
- [Titles (h1, h2, h3, h4, h5, h6)](/src/components/titles/titles.md)

## How to use

### Install

At first you should install dependencies after install nodejs and git.

`npm i`

### Build

`npm run build:{theme}`

Build your css files into `./dist/{theme}.min.css`

#### Example to Captain-america theme

`npm run build:captain-america`

Build your captain-america css files minified into `./dist/captain-america.min.css`

### Develop a theme

`npm develop:{theme}`

build and watch changes in your css files into `./dist/{theme}.css`

#### Example to Captain-america theme

`npm develop:captain-america`

build and watch changes in your css files into `./dist/captain-america.css`

### Develop running an http server

`npm develop:server`

This http server serve to you the `src/index.html` in order to set up your html markup to develop purposes.

#### Example to Captain-america theme

Then to develop purposes we need follow this steps

1. In a console we should build and watch the css theme required `npm run develop:captain-america`.
2. In other console we need to run up the http server to dev our css files and watch this changes in our browser `npm run develop:server`.

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
