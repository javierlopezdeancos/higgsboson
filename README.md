![[Higgsboson]](images/logo-light.png#gh-light-mode-only)
![[Higgsboson]](images/logo-dark.png#gh-dark-mode-only)

# Higgsboson

Higgsboson class components is a set of classes to style core native components.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Issues](https://img.shields.io/github/issues/javierlopezdeancos/higgsboson?style=flat-square)](https://github.com/javierlopezdeancos/higgsboson/issues)
[![Stage - Alpha](https://img.shields.io/badge/Stage-Alpha-f9f504)](https://)
![maintained - yes](https://img.shields.io/badge/maintained-yes-blue)

## What is next

Take a look into the active [project board](https://github.com/users/javierlopezdeancos/projects/3/views/2)
or more deeper view in [issues](https://github.com/javierlopezdeancos/higgsboson/issues).


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
      - [Divider](/src/components/dialog/divider.md)
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
      - [Step](/src/components/step/step.md)
      - [Steps](/src/components/step/steps.md)
      - [Switch](/src/components/switch/switch.md)
      - [Table](/src/components/table/table.md)
      - [Tag](/src/components/tag/tag.md)
      - [Text](/src/components/text/text.md)
      - [Texts](/src/components/text/texts.md)
      - [Titles (h1, h2, h3, h4, h5, h6)](/src/components/titles/titles.md)
      - [Tooltip](/src/components/tooltip/tooltip.md)
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
    - [Plugins that we are using](#plugins-that-we-are-using-in-the-build-process)
  - [Development](#development)
  - [Lint](#lint)
  - [Format](#format)
  - [Pre-push](#pre-push)
    - [Usage](#usage)
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
/* COLORS */
/* Generic colors */
--hggs-color-white-default
--hggs-color-black-default

/* Gray colors */
--hggs-color-gray-001-default
--hggs-color-gray-002-default
--hggs-color-gray-003-default
--hggs-color-gray-004-default
--hggs-color-gray-005-default
--hggs-color-gray-006-default
--hggs-color-gray-007-default
--hggs-color-gray-008-default
--hggs-color-gray-009-default
--hggs-color-gray-010-default
--hggs-color-gray-011-default
--hggs-color-gray-012-default
--hggs-color-gray-013-default
--hggs-color-gray-014-default
--hggs-color-gray-015-default
--hggs-color-gray-016-default
--hggs-color-gray-017-default
--hggs-color-gray-018-default
--hggs-color-gray-019-default
--hggs-color-gray-020-default

--hggs-filter-gray-008-default

/* Main colors */
--hggs-color-primary-default
--hggs-color-primary-hover-default
--hggs-color-secondary-default
--hggs-color-secondary-hover-default
--hggs-color-tertiary-default
--hggs-color-tertiary-hover-default
--hggs-color-quaternary-default
--hggs-color-quaternary-hover-default
--hggs-color-quinary-default
--hggs-color-quinary-hover-default
--hggs-color-senary-default
--hggs-color-senary-hover-default

--hggs-filter-primary-default
--hggs-filter-secondary-default
--hggs-filter-tertiary-default
--hggs-filter-quaternary-default
--hggs-filter-quinary-default
--hggs-filter-senary-default
--hggs-filter-default

/* General colors */
--hggs-color-default
--hggs-color-error-default
--hggs-color-disabled-default
--hggs-color-background-default
--hggs-color-background-hover-default

/* SHADOWS */
--hggs-shadow-default
--hggs-shadow-primary-default

/* FONT */
/* Font families */
--hggs-font-family-default

/* Font colors */
--hggs-font-color

/* Font sizes */
--hggs-font-size-5xl-default
--hggs-font-size-4xl-default
--hggs-font-size-3xl-default
--hggs-font-size-2xl-default
--hggs-font-size-xl-default
--hggs-font-size-lg-default
--hggs-font-size-md-default
--hggs-font-size-default
--hggs-font-size-sm-default
--hggs-font-size-xs-default
--hggs-font-size-2xs-default

/* Font weights */
--hggs-font-weight-default
--hggs-font-weight-md-default
--hggs-font-weight-lg-default
--hggs-font-weight-xl-default

/* Font letter spacings */
--hggs-font-letter-spacing-default
--hggs-font-letter-spacing-sm-default

/* Font line heights */
--hggs-line-height-default
--hggs-line-height-sm-default
--hggs-line-height-xs-default

/* BORDERS */
--hggs-border-radius-big-default
--hggs-border-radius-default
--hggs-border-size-default
--hggs-border-size-lg-default
--hggs-border-size-lg-default
--hggs-border-size-xl-default
--hggs-border-type-default
--hggs-border-color-default
--hggs-color-border-primary-default:
--hggs-color-border-secondary-default
--hggs-color-border-tertiary-default
--hggs-color-border-quaternary-default
--hggs-color-border-quinary-default
--hggs-color-border-senary-default
--hggs-border-default
--hggs-border-error-default
--hggs-border-auxiliary-gray-006-default
--hggs-border-auxiliary-gray-008-default
--hggs-border-auxiliary-gray-009-default
--hggs-border-auxiliary-gray-010-default
--hggs-border-auxiliary-gray-012-default
--hggs-border-auxiliary-gray-013-default
--hggs-border-auxiliary-gray-015-default
--hggs-border-primary-default
--hggs-border-primary-big-default
--hggs-border-secondary-default
--hggs-border-secondary-gross-default
--hggs-border-tertiary-default
--hggs-border-quaternary-default
--hggs-border-quaternary-xl-default
--hggs-border-quinary-default
--hggs-border-senary-default
--hggs-border-focus-default
--hggs-border-disabled-default
--hggs-border-invalid-default

/* SPACES */
/* Horizontal */
--hggs-space-default
--hggs-space-lg-default
--hggs-space-md-default
--hggs-space-sm-default
--hggs-space-xs-default
--hggs-space-2xs-default

/* Vertical */
--hggs-space-default
--hggs-space-lg-default
--hggs-space-md-default
--hggs-space-sm-default
--hggs-space-xs-default
--hggs-space-2xs-default

/* LAYERS */
--hggs-layer-10-default
--hggs-layer-0-default

/* ANIMATIONS */
--hggs-animation-ease-default
--hggs-animation-ease-all-default

/* TRANSFORMS */
--hggs-transform-escale-default
--hggs-transform-escale-small-default
--hggs-transform-rotate-translate-default

/* TRANSITIONS */
--hggs-transition-ease-default

/* ICONS */
--hggs-icon-size-micro-default
--hggs-icon-size-small-default
--hggs-icon-size-default
--hggs-icon-chevron-down-default
--hggs-icon-close-default
--hggs-icon-edit-default
--hggs-icon-hamburger-menu-default
--hggs-icon-log-out-default
--hggs-icon-plus-default
--hggs-icon-question-default
--hggs-icon-user-default

/* LOGO */
--hggs-logo-default
--hggs-logo-dark-default
--hggs-logo-light-default
```

The default theme not need any custom rule scoped by selector to any component.

#### Custom theme

##### Custom theme folder file structure

```text
themeA
 │ ├─ assets
 │ ├─ components
 │       ├─ app.css
 │       ├─ box.css
 │       ├─ button.css
 │       ├─ checkbox.css
 │       ├─ dialog.css
 │       ├─ divider.css
 │       ├─ dropdown.css
 │       ├─ field.css
 │       ├─ flex.css
 │       ├─ form.css
 │       ├─ grid.css
 │       ├─ icon.css
 │       ├─ input.css
 │       ├─ label.css
 │       ├─ link.css
 │       ├─ list.css
 │       ├─ logo.css
 │       ├─ option.css
 │       ├─ radio.css
 │       ├─ select.css
 │       ├─ step.css
 │       ├─ table.css
 │       ├─ tag.css
 │       ├─ text.css
 │       ├─ titles.css
 │       ├─ tooltip.css
 │
 ├─ vars.css
 ├─ fonts.css
 ├─ index.css
 ├─ resets.css
```

##### Technical considerations

Technically, a Higgsboson theme can have its own structure as long as it maintains the connection to the Higgsboson component APIs in a valid way.

However, for consistency, we describe here what our ideal folder structure and variable naming would look like.

```
                              │
                              │
                              │
   ┌───────────────────────┐  │  ┌─────────────────────────┐
┌──┤   default theme vars  │  │  │      theme vars         ├───┐
│  └┬──────────────────────┘  │  └────────────────────┬────┘   │
│   │                         │                       │        │
│  ┌┼────────────┐ ┌───────┐  │  ┌────────────────────▼────┐   │
│  ││            │ │       │  │  │                         │   │
│  │▼ ComponentA ◄─┼─ API  ◄──┼──┤ ComponentA theme values │   │
│  │             │ │       │  │  │                         │   │
│  └─────────────┘ └───────┘  │  └─────────────────────────┘   │
│                             │                                │
│  ┌─────────────┐ ┌───────┐  │  ┌─────────────────────────┐   │
│  │             │ │       │  │  │                         │   │
└──►  ComponentB ◄─┼─ API ◄├──┼──┤ ComponentB theme values ◄───┘
   │             │ │       │  │  │                         │
   └─────────────┘ └───────┘  │  └─────────────────────────┘
                              │
                              │
    HIGGSBOSON                │     CUSTOM  THEME
```

## How to use

### Install

At first you should install dependencies after install nodejs and git.

`npm i`

### Build

`npm run build`

Build your css files into `./dist/higgsboson.min.css`

We are using [postcss](https://postcss.org) to transpile the css code into standard
d css code

#### Plugins that we are using in the build process

- [autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-extend](https://github.com/travco/postcss-extend)
- [postcss-nesting](https://github.com/csstools/postcss-nesting)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-preset-env](https://preset-env.cssdb.org/)
- [postcss-copy-assets](https://github.com/shutterstock/postcss-copy-assets)
- [cssnano](https://cssnano.co/)
- [postcss-csso](https://github.com/lahmatiy/postcss-csso)


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

**After run `npm i` should be trigger automatically the `npm run prepare` script that is declare in `package.json` that will configure husky pre push hook for you** in order to pass policies about lint before push your changes.

```text
Higgsboson
 ├─ .husky/
 |    ├─ _/
 |    |  ├─ .gitignore
 |    |  ├─ husky.sh
 |    |
 |    ├─ pre-push
 |
 |
    ...
```

#### Usage

If you have permissions whe you run `git push` or `git push origin {BRANCH}` the pre-push script should be run automatically running the frontend lint rules.

## Tools that could help you to develop in this project

### Visual Studio Code IDE

Discover a free, built on open source and runs everywhere IDE to frontend development.
[Visual Studio Code](https://code.visualstudio.com/)

#### Visual Studio Code useful Extensions

- [csstools.postcss](https://github.com/csstools/postcss-language)
- [stylelint.vscode-stylelint](https://github.com/stylelint/vscode-stylelint)
- [prettier](https://marketplace.visualstudio.com/publishers/esbenp)
- [usernamehw.errorlens](https://github.com/usernamehw/vscode-error-lens)
