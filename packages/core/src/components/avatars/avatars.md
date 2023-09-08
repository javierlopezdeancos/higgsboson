[Home ](../../../README.md) >
[ Componentes ](../../../README.md#components)

# Avatars

- [Avatars](#avatars)
  - [Root component class name](#root-component-class-name)
  - [Theme selector](#theme-selector)
  - [Component variables](#component-variables)
  - [HTML Structure](#html-structure)
    - [Default](#default)
      - [Basic HTML structure](#basic-html-structure)
    - [Sizes](#sizes)
      - [Avatar Big](#avatar-big)
      - [Avatar Small](#avatar-small)

## Root component class name

`hggs-avatars`

## Theme selector

```css
.hggs-avatars {
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
<ul class="hggs-avatars">
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar">
      <img class="hggs-avatar-image" src="https://javierlopezdeancos.dev/src/images/me.png" alt="higgsboson avatar example">
    </figure>
  </li>
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar">
      <img class="hggs-avatar-image" src="https://avatars.githubusercontent.com/u/951580?v=4" alt="higgsboson avatar example">
    </figure>
  </li>
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar">
      <img class="hggs-avatar-image" src="https://avatars.githubusercontent.com/u/539546?v=4" alt="higgsboson avatar example">
    </figure>
  </li>

</ul>
```

### Sizes

#### Avatar Big

```html
<ul class="hggs-avatars">
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar hggs-avatar--big">
      <img class="hggs-avatar-image" src="https://javierlopezdeancos.dev/src/images/me.png" alt="higgsboson avatar example">
    </figure>
  </li>
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar hggs-avatar--big">
      <img class="hggs-avatar-image" src="https://avatars.githubusercontent.com/u/951580?v=4" alt="higgsboson avatar example">
    </figure>
  </li>
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar hggs-avatar--big">
      <img class="hggs-avatar-image" src="https://avatars.githubusercontent.com/u/539546?v=4" alt="higgsboson avatar example">
    </figure>
  </li>
</ul>
```

#### Avatar Small

```html
<ul class="hggs-avatars">
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar hggs-avatar--small">
      <img class="hggs-avatar-image" src="https://javierlopezdeancos.dev/src/images/me.png" alt="higgsboson avatar example">
    </figure>
  </li>
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar hggs-avatar--small">
      <img class="hggs-avatar-image" src="https://avatars.githubusercontent.com/u/951580?v=4" alt="higgsboson avatar example">
    </figure>
  </li>
  <li class="hggs-avatars-item" r="">
    <figure class="hggs-avatar hggs-avatar--small">
      <img class="hggs-avatar-image" src="https://avatars.githubusercontent.com/u/539546?v=4" alt="higgsboson avatar example">
    </figure>
  </li>
</ul>
```
