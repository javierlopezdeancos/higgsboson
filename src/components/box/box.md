# Box

## Root component class name

`hggs-box`

## Theme selector

```css
.hggs-box {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--box-min-height
--box-background
--box-box-shadow
--box-padding
--box-header-border-bottom
--box-header-padding
--box-title-font-size
--box-title-margin-top
--box-body-padding
--box-border-radius-with-radius
--box-background-primary
--box-border-primary
--box-title-color-primary
--box-header-border-bottom-primary
```

## HTML Structure

### Default

#### Basic HTML structure

```html
<div class="hggs-box">
  <!-- Set here your box elements -->
</div>
```

#### Optional Header (with title) and Body structure

##### HTML structure with header

```html
<div class="hggs-box">
  <header class="hggs-box-header">
    <h3 class="hggs-box-title">Title</h3>
  </header>
</div>
```

##### HTML structure with body

```html
<div class="hggs-box">
  <section class="hggs-box-body">
    <!-- Set here your box body elements -->
  </section>
</div>
```

##### Complete HTML structure

```html
<div class="hggs-box">
  <header class="hggs-box-header">
    <h3 class="hggs-box-title">Title</h3>
  </header>
  <section class="hggs-box-body">
    <!-- Set here your box body elements -->
  </section>
</div>
```

### Primary

#### Basic HTML structure with `primary` modifier

```html
<div class="hggs-box hggs-box--primary">
  <!-- Set here your box body elements -->
</div>
```
