# Flex

## Root component class name

`hggs-flex`

## First utility classes

```
.hggs-flex--center-column
.hggs-flex--top-center-column
.hggs-flex--top-left-column
.hggs-flex--top-right-column
.hggs-flex--center-row
.hggs-flex--top-center-row
.hggs-flex--center-left-row
.hggs-flex--stretch-left-row
.hggs-flex--top-left-row
.hggs-flex--space-between-center-row
```

## Theme selector

```css
.hggs-flex {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--hggs-flex-column-gap-small
--hggs-flex-column-gap-medium
--hggs-flex-column-gap-big
--hggs-flex-row-gap-small
--hggs-flex-row-gap-medium
--hggs-flex-row-gap-big
```

## HTML Structure

### Default

#### Basic HTML structure

```html
<div class="hggs-flex hggs-flex--center-column">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--top-center-column">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--top-left-column">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--center-row">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--top-center-row">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--center-left-row">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--stretch-left-row">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--top-left-row">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--space-between-center-row">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>
```

#### Basic HTML structure with `gap-{size}` modifier

```html
<div class="hggs-flex hggs-flex--center-column hggs-flex--gap-small">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--top-center-column hggs-flex--gap-medium">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>

<div class="hggs-flex hggs-flex--top-left-column hggs-flex--gap-big">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>
```

#### Basic HTML structure with `flex-1` modifier

```html
<div class="hggs-flex hggs-flex--center-column hggs-flex-item--flex-1">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>
```
