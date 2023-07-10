[Home ](../../../Readme)
[ > Componentes ](../../../Readme#components)

# Avatar

- [Avatar](#avatar)
  - [1. Root component class name](#1-root-component-class-name)
  - [2. Theme selector](#2-theme-selector)
  - [3. Component variables](#3-component-variables)
  - [4. HTML Structure](#4-html-structure)
    - [4.1. Default](#41-default)
      - [4.1.1. Basic HTML structure](#411-basic-html-structure)
    - [4.2. Sizes](#42-sizes)
      - [4.2.1. Avatar Big](#421-avatar-big)
      - [4.2.2. Avatar Small](#422-avatar-small)

## Root component class name

`hggs-avatar`

## Theme selector

```css
.hggs-avatar {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--avatar-image-border-radius
--avatar-image-size
--avatar-image-size-big
--avatar-image-size-small
```

## HTML Structure

### Default

#### Basic HTML structure

```html
<figure class="hggs-avatar">
  <img class="hggs-avatar-image" src="https://javierlopezdeancos.dev/src/images/me.png" alt="avatar higgsboson example" />
</figure>
```

### Sizes

#### Avatar Big

```html
<figure class="hggs-avatar hggs-avatar--big">
  <img class="hggs-avatar-image" src="https://javierlopezdeancos.dev/src/images/me.png" alt="avatar higgsboson example" />
</figure>
```

#### Avatar Small

```html
<figure class="hggs-avatar hggs-avatar--small">
  <img class="hggs-avatar-image" src="https://javierlopezdeancos.dev/src/images/me.png" alt="avatar higgsboson example" />
</figure>
```
