[Home ](../../../Readme.md)
[ > Componentes ](../../../Readme.md#components)

# Avatar

- [Avatar](#avatar)
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
