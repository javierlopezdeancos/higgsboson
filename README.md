![[Higgsboson]](images/logo-light.png#gh-light-mode-only)
![[Higgsboson]](images/logo-dark.png#gh-dark-mode-only)

An declarative s

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

## Summary

- [Structure](#structure)
  - [Components](#components)
    - [Component files structure](#component-files-structure)
      - [componentA.css](#componentacss)
      - [componentA.html](#componentahtml)
      - [componentA.md](#componentamd)
      - [componentA.metadata.js](#componentametadatajs)
    - Components docs
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
  - [Helpers](#helpers)
  - [Theme](#theme)
    - [Theme folder file structure](#theme-folder-file-structure)
    - [assets](#assets)
    - [default](#default)
      - [Default theme](#default-theme)
        - [Default theme variables API naming](#default-theme-variables-api-naming)
        - [Default theme variables API](#default-theme-variables-api)
    - [Custom theme](#custom-theme)
      - [Custom theme folder file structure](#custom-theme-folder-file-structure)
      - [Technical considerations](technical-considerations)
- [How to use](#how-to-use)
  - [Install](#install)
  - [Build](#build)
  - [Development](#development)
  - [Lint](#lint)
  - [Format](#format)
  - [Pre-push](#pre-push)
    - [Install](#install-1)
    - [Configure](#configure)
    - [Usage](#usage)
- [Postcss](#postcss)
  - [Plugins that we are using](#plugins-that-we-are-using)
- [Tools that could help you to develop in this project](#tools-that-could-help-you-to-develop-in-this-project)
  - [Visual Studio Code IDE](#visual-studio-code-ide)
    - [Visual Studio Code useful Extensions](#visual-studio-code-useful-extensions)

## Structure

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

Selectors, rules, properties and values to this component scoped by selector and **connected with the theme API across component variables and default theme API variables**.

##### componentA.html

Html markup generated from [underscore](https://underscorejs.org/) + [our custom helpers](./src/helpers/) + metadata.js component model file.

##### componentA.md

Complete documentation about **component theme API variables**, **component theme API selectors** and markup component use cases.

##### componentA.metadata.js

Data model to render with underscore and our custom helpers all component use cases.

### Helpers

Javascript helpers used to automate the rendering of components in dev mode

### Theme

Area where everything related to theming is managed, either using the default theme or injecting previously installed themes via npm.

#### Theme folder file structure

```text
theme
 │ ├─ assets
 │
 ├─ default.css
 ├─ index.css
 ├─ resets.css
```

#### assets

Folder to allocate images, svgs, icons etc to the default theme.

#### default

Default theme API. Theme default variables as fallback to each theme component API property.

##### Default theme

###### Default theme variables API naming

```
--hggs-border-primary-default
  ──── ────── ─────── ───────
    ▲     ▲       ▲      ▲
    │     │       │      │
    │     │       │      │
    │     │       │      │
    │     │       │      │
  prefix property │     sufix
                  │
                  │
              modifier
```

###### Default theme variables API

```
--hggs-animation-ease-all-default
--hggs-animation-ease-default
--hggs-border-auxiliary-gray-006-default
--hggs-border-auxiliary-gray-008-default
--hggs-border-auxiliary-gray-009-default
--hggs-border-auxiliary-gray-010-default
--hggs-border-auxiliary-gray-012-default
--hggs-border-auxiliary-gray-013-default
--hggs-border-auxiliary-gray-015-default
--hggs-border-color-default
--hggs-border-color-primary-default
--hggs-border-color-quaternary-default
--hggs-border-color-quinary-default
--hggs-border-color-secondary-default
--hggs-border-color-senary-default
--hggs-border-color-tertiary-default
--hggs-border-default
--hggs-border-disabled-default
--hggs-border-error-default
--hggs-border-invalid-default
--hggs-border-primary-big-default
--hggs-border-primary-default
--hggs-border-quaternary-default
--hggs-border-quinary-colossal-default
--hggs-border-quinary-default
--hggs-border-radius-big-default
--hggs-border-radius-default
--hggs-border-secondary-default
--hggs-border-secondary-gross-default
--hggs-border-senary-default
--hggs-border-size-big-default
--hggs-border-size-colossal-default
--hggs-border-size-default
--hggs-border-size-medium-default
--hggs-border-tertiary-default
--hggs-border-type-default
--hggs-color-auxiliary-gray-001-default
--hggs-color-auxiliary-gray-002-default
--hggs-color-auxiliary-gray-003-default
--hggs-color-auxiliary-gray-004-default
--hggs-color-auxiliary-gray-005-default
--hggs-color-auxiliary-gray-006-default
--hggs-color-auxiliary-gray-007-default
--hggs-color-auxiliary-gray-008-default
--hggs-color-auxiliary-gray-009-default
--hggs-color-auxiliary-gray-010-default
--hggs-color-auxiliary-gray-011-default
--hggs-color-auxiliary-gray-012-default
--hggs-color-auxiliary-gray-013-default
--hggs-color-auxiliary-gray-014-default
--hggs-color-auxiliary-gray-015-default
--hggs-color-auxiliary-gray-016-default
--hggs-color-auxiliary-gray-017-default
--hggs-color-auxiliary-gray-018-default
--hggs-color-auxiliary-gray-019-default
--hggs-color-auxiliary-gray-020-default
--hggs-color-background-selected-default
--hggs-color-black-default
--hggs-color-default
--hggs-color-disabled-default
--hggs-color-primary-default
--hggs-color-quaternary-default
--hggs-color-quinary-default
--hggs-color-secondary-default
--hggs-color-senary-default
--hggs-color-tertiary-default
--hggs-color-white-default
--hggs-filter-auxiliary-gray-008-default
--hggs-filter-default
--hggs-filter-primary-default
--hggs-filter-quaternary-default
--hggs-filter-quinary-default
--hggs-filter-secondary-default
--hggs-filter-senary-default
--hggs-filter-tertiary-default
--hggs-font-family-default
--hggs-font-letter-spacing-default
--hggs-font-letter-spacing-small-default
--hggs-font-size-big-default
--hggs-font-size-colossal-default
--hggs-font-size-default
--hggs-font-size-enormous-default
--hggs-font-size-medium-default
--hggs-font-size-mega-default
--hggs-font-size-micro-default
--hggs-font-size-nano-default
--hggs-font-size-pico-default
--hggs-font-size-small-default
--hggs-font-size-tera-default
--hggs-font-weight-bold-default
--hggs-font-weight-default
--hggs-font-weight-medium-default
--hggs-font-weight-very-bold-default
--hggs-icon-chevron-down-default
--hggs-icon-close-default
--hggs-icon-edit-default
--hggs-icon-hamburger-menu-default
--hggs-icon-log-out-default
--hggs-icon-plus-default
--hggs-icon-question-default
--hggs-icon-size-default
--hggs-icon-size-micro-default
--hggs-icon-size-small-default
--hggs-icon-user-default
--hggs-layer-0-default
--hggs-layer-10-default
--hggs-line-height-default
--hggs-line-height-micro-default
--hggs-line-height-small-default
--hggs-shadow-default
--hggs-shadow-primary-default
--hggs-space-horizontal-big-default
--hggs-space-horizontal-macro-default
--hggs-space-horizontal-medium-default
--hggs-space-horizontal-micro-default
--hggs-space-horizontal-nano-default
--hggs-space-horizontal-small-default
--hggs-space-vertical-big-default
--hggs-space-vertical-macro-default
--hggs-space-vertical-medium-default
--hggs-space-vertical-micro-default
--hggs-space-vertical-nano-default
--hggs-space-vertical-small-default
--hggs-transform-escale-default
--hggs-transform-escale-small-default
--hggs-transform-rotate-translate-default
--hggs-transition-ease-default
--hgss-background-default
```

The default theme not need any custom rule scoped by selector to any component.

#### Custom theme

##### Custom theme folder file structure

```text
themeA
 │ ├─ assets
 │ ├─ variables
 │     ├─ components
 │     │     ├─ app.css
 │     │     ├─ box.css
 │     │     ├─ button.css
 │     │     ├─ checkbox.css
 │     │     ├─ dialog.css
 │     │     ├─ field.css
 │     │     ├─ flex.css
 │     │     ├─ form.css
 │     │     ├─ icon.css
 │     │     ├─ input.css
 │     │     ├─ label.css
 │     │     ├─ link.css
 │     │     ├─ list.css
 │     │     ├─ logo.css
 │     │     ├─ option.css
 │     │     ├─ radio.css
 │     │     ├─ select.css
 │     │     ├─ table.css
 │     │     ├─ tag.css
 │     │     ├─ text.css
 │     │     ├─ titles.css
 │     │
 │     ├─ vars.css
 │
 ├─ fonts.css
 ├─ index.css
 ├─ resets.css
```

##### Technical considerations

Technically, a Higgsboson theme can have its own structure as long as it maintains the connection to the Higgsboson component APIs in a valid way.

However, for consistency, we describe here what our ideal folder structure and variable naming would look like.

```
   ┌───────────────────────┐     ┌─────────────────────────┐
┌──┤   default theme vars  │     │      theme vars         ├───┐
│  └┬──────────────────────┘     └────────────────────┬────┘   │
│   │                                                 │        │
│  ┌┼────────────┐ ┌───────┐     ┌────────────────────▼────┐   │
│  ││            │ │       │     │                         │   │
│  │▼ ComponentA ◄─┼─ API  ◄─────┤ ComponentA theme values │   │
│  │             │ │       │     │                         │   │
│  └─────────────┘ └───────┘     └─────────────────────────┘   │
│                                                              │
│  ┌─────────────┐ ┌───────┐     ┌─────────────────────────┐   │
│  │             │ │       │     │                         │   │
└──►  ComponentB ◄─┼─ API ◄├─────┤ ComponentB theme values ◄───┘
   │             │ │       │     │                         │
   └─────────────┘ └───────┘     └─────────────────────────┘
```

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
