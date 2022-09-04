# Checkbox

## Root component class name

`hggs-checkboxes`
`hggs-checkbox`

## Theme selector

```css
.hggs-checkboxes,
.hggs-checkbox {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--checkbox--label-color
--checkbox--label-font-family
--checkbox--label-font-size
--checkbox--label-font-style
--checkbox--label-font-weight
--checkbox-background
--checkbox-border
--checkbox-border-radius
--checkbox-box-shadow-focus
--checkbox-ckeck-icon-background-color
--checkbox-ckeck-icon-height-after
--checkbox-ckeck-icon-height-before
--checkbox-ckeck-icon-left-after
--checkbox-ckeck-icon-left-before
--checkbox-ckeck-icon-top-after
--checkbox-ckeck-icon-top-before
--checkbox-ckeck-icon-transform-after
--checkbox-ckeck-icon-transform-before
--checkbox-ckeck-icon-width-after
--checkbox-ckeck-icon-width-before
--checkbox-margin-left
--checkbox-outline-focus
--checkbox-size
--checkboxes-gap
```

## HTML Structure

### Default

#### Basic HTML structure

```html
<div class="hggs-checkbox">
  <input type="checkbox" id="checkbox1" name="checkboxgroup" />
  <label class="hggs-label" for="checkbox1">Option 1</label>
</div>
```

### Checkboxes list

#### Basic vertical HTML structure

```html
<div class="hggs-checkboxes">
  <div class="hggs-checkbox">
    <input type="checkbox" id="checkbox1" name="checkboxgroup" />
    <label class="hggs-label" for="checkbox1">Option 1</label>
  </div>
</div>
```
