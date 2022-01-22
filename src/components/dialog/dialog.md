# Dialog

## Root component class name

`hggs-dialog`

## Theme selector

```css
.hggs-dialog {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--dialog-background-color
--dialog-color
--dialog-text-align
--dialog-padding
--dialog-border-radius
--dialog-max-width
--dialog-anmimation-open
--dialog-background-box-shadow
--dialog-width-big
--dialog-width-medium
--dialog-width-small
--dialog-close-position
--dialog-close-top
--dialog-close-right
```

## HTML Structure

### Default

#### Basic HTML structure

```html
<dialog id="dialog-big" class="hggs-dialog hggs-dialog--big">
  <button
    id="close-dialog-btn-big"
    class="
      hggs-dialog-close
      hggs-button
      hggs-button--icon-labeled
    "
  >
    <span class="hggs-icon hggs-icon--close"></span>
  </button>
  <h5 class="hggs-h5">Template Created</h5>
  <p class="hggs-text">
    The case template has now been added to your list of available templates. To
    create a case with this template select 'Create' and chose 'New case'. You
    can then select your new case template from the available list.
  </p>
  <div class="actions">
    <button
      id="ok-dialog-btn-big"
      class="hggs-button hggs-button--primary hggs-button--big"
    >
      Ok!
    </button>
  </div>
</dialog>
```

#### Basic HTML structure with `big` modifier

```html
<dialog id="dialog-big" class="hggs-dialog hggs-dialog--big">
  <!--
  ... put here content ...
--></dialog>
```

#### Basic HTML structure with `medium` modifier

```html
<dialog id="dialog-big" class="hggs-dialog hggs-dialog--medium">
  <!--
  ... put here content ...
--></dialog>
```

#### Basic HTML structure with `small` modifier

```html
<dialog id="dialog-big" class="hggs-dialog hggs-dialog--small">
  <!--
  ... put here content ...
--></dialog>
```
