# Field

## Root component class name

`hggs-field`

## Theme selector

```css
.hggs-field {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--field-label-after-color-required
--field-label-after-margin-left-required
--field-label-margin-bottom
```

## HTML Structure

### Default

#### Basic HTML structure

```html
<div class="hggs-field">
  <label for="id-test" class="hggs-label">Label</label>
  <input id="id-test" type="text" class="hggs-input" />
</div>
```

#### Basic HTML structure with `required` modifier

```html
<div class="hggs-field hggs-field--required">
  <label for="id-test" class="hggs-label">Label</label>
  <input id="id-test" type="text" class="hggs-input" />
</div>
```

#### Basic HTML structure with `focus` modifier

```html
<div class="hggs-field hggs-field--focus">
  <label for="id-test" class="hggs-label">Label</label>
  <input id="id-test" type="text" class="hggs-input" />
</div>
```

#### Basic HTML structure with `disabled` modifier

```html
<div class="hggs-field hggs-field--disabled">
  <label for="id-test" class="hggs-label">Label</label>
  <input id="id-test" type="text" class="hggs-input" />
</div>
```

#### Basic HTML structure with `error` modifier

```html
<div class="hggs-field hggs-field--error">
  <label for="id-test" class="hggs-label">Label</label>
  <input id="id-test" type="text" class="hggs-input" />
</div>
```
