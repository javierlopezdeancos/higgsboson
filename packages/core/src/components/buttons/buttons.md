# Buttons

## Root component class name

`hggs-button`

## Theme selector

```css
.hggs-button {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--button-background
--button-background-hover
--button-background-primary
--button-background-primary-hover
--button-background-quaternary
--button-background-quaternary-hover
--button-background-quinary
--button-background-quinary-hover
--button-background-secondary
--button-background-secondary-hover
--button-background-senary
--button-background-senary-hover
--button-background-tertiary
--button-background-tertiary-hover
--button-border-outline
--button-border-outline-hover
--button-border-outline-primary
--button-border-outline-primary-hover
--button-border-outline-quaternary
--button-border-outline-quaternary-hover
--button-border-outline-quinary
--button-border-outline-quinary-hover
--button-border-outline-secondary
--button-border-outline-secondary-hover
--button-border-outline-senary
--button-border-outline-senary-hover
--button-border-outline-tertiary
--button-border-outline-tertiary-hover
--button-border-radius
--button-box-shadow-focus
--button-box-shadow-hover
--button-box-shadow-outline-hover
--button-box-shadow-outline-primary-hover
--button-box-shadow-outline-quaternary-hover
--button-box-shadow-outline-quinary-hover
--button-box-shadow-outline-secondary-hover
--button-box-shadow-outline-senary-hover
--button-box-shadow-outline-tertiary-hover
--button-box-shadow-primary-focus
--button-box-shadow-primary-hover
--button-box-shadow-quaternary-focus
--button-box-shadow-quaternary-hover
--button-box-shadow-quinary-focus
--button-box-shadow-quinary-hover
--button-box-shadow-secondary-focus
--button-box-shadow-secondary-hover
--button-box-shadow-senary-focus
--button-box-shadow-senary-hover
--button-box-shadow-tertiary-focus
--button-box-shadow-tertiary-hover
--button-color
--button-color-hover
--button-color-outline
--button-color-outline-primary
--button-color-outline-primary-hover
--button-color-outline-quaternary
--button-color-outline-quaternary-hover
--button-color-outline-quinary
--button-color-outline-quinary-hover
--button-color-outline-secondary
--button-color-outline-secondary-hover
--button-color-outline-senary
--button-color-outline-senary-hover
--button-color-outline-tertiary
--button-color-outline-tertiary-hover
--button-color-primary
--button-color-quaternary
--button-color-quinary
--button-color-secondary
--button-color-senary
--button-color-tertiary
--button-cursor
--button-font-family
--button-font-letter-spacing
--button-font-size
--button-font-size-big
--button-font-size-medium
--button-font-size-small
--button-font-weight
--button-icon-filter-hover
--button-icon-filter-primary-hover
--button-icon-filter-quaternary-hover
--button-icon-filter-quinary-hover
--button-icon-filter-secondary-hover
--button-icon-filter-senary-hover
--button-icon-filter-tertiary-hover
--button-icon-label-color-hover
--button-icon-label-color-primary-hover
--button-icon-label-color-quaternary-hover
--button-icon-label-color-quinary-hover
--button-icon-label-color-secondary-hover
--button-icon-label-color-senary-hover
--button-icon-label-color-tertiary-hover
--button-icon-padding
--button-icon-shadow-hover
--button-icon-transform-hover
--button-icon-transition-hover
--button-icon-width
--button-margin-horizontal
--button-margin-vertical
--button-outline-focus
--button-padding-big
--button-padding-medium
--button-padding-small
--button-transform-hover
--button-transition-hover
--button-transition-primary-hover
--button-transition-quaternary-hover
--button-transition-quinary-hover
--button-transition-secondary-hover
--button-transition-senary-hover
--button-transition-tertiary-hover
```

## HTML Structure

### Default

#### Basic HTML structure

```html
<button class="hggs-button">Button</button>
```

##### Default
```html
<button class="hggs-button hggs-button--primary">Button</button>
```

##### Primary
```html
<button class="hggs-button hggs-button--secondary">Button</button>
```

##### Secondary
```html
<button class="hggs-button hggs-button--tertiary">Button</button>
```

##### Tertiary
```html
<button class="hggs-button hggs-button--quaternary">Button</button>
```

##### Quaternary
```html
<button class="hggs-button hggs-button--quinary">Button</button>
```

##### Quinary
```html
<button class="hggs-button hggs-button--senary">Button</button>
```

#### Basic HTML structure with `size` modifier

##### Big
```html
<button class="hggs-button hggs-button--big">Button</button>
```

##### Medium
```html
<button class="hggs-button">Button</button>
```

##### Small
```html
<button class="hggs-button hggs-button--small">Button</button>
```

#### Basic HTML structure with `outline` modifier

##### Default
```html
<button class="hggs-button hggs-button--outline">Button</button>
```

##### Primary
```html
<button class="hggs-button hggs-button--outline hggs-button--primary">Button</button>
```

##### Secondary
```html
<button class="hggs-button hggs-button--outline hggs-button--secondary">Button</button>
```

##### Tertiary
```html
<button class="hggs-button hggs-button--outline hggs-button--tertiary">Button</button>
```

##### Quaternary
```html
<button class="hggs-button hggs-button--outline hggs-button--quaternary">Button</button>
```

##### Quinary
```html
<button class="hggs-button hggs-button--outline hggs-button--quinary">Button</button>
```

##### Senary
```html
<button class="hggs-button hggs-button--outline hggs-button--senary">Button</button>
```

### Icon

#### Icon Button HTML structure

##### Default
```html
<button class="hggs-button">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Primary
```html
<button class="hggs-button">
  <span class="hggs-icon hggs-icon--primary hggs-icon--edit"></span>
</button>
```

##### Secondary
```html
<button class="hggs-button">
  <span class="hggs-icon hggs-icon--secondary hggs-icon--edit"></span>
</button>
```
##### Tertiary
```html
<button class="hggs-button">
  <span class="hggs-icon hggs-icon--tertiary hggs-icon--edit"></span>
</button>
```

##### Quaternary
```html
<button class="hggs-button">
  <span class="hggs-icon hggs-icon--quaternary hggs-icon--edit"></span>
</button>
```

##### Quinary
```html
<button class="hggs-button">
  <span class="hggs-icon hggs-icon--quinary hggs-icon--edit"></span>
</button>
```
##### Senary
```html
<button class="hggs-button">
  <span class="hggs-icon hggs-icon--senary hggs-icon--edit"></span>
</button>
```
### Icon Labeled

#### Icon Labeled Button HTML structure

##### Default

```html
<button class="hggs-button">
  <div class="hggs-icon-wrapper">
    <span class="hggs-icon hggs-icon--edit"></span>
    <span class="hggs-icon-label">This is a button labeled</span>
  </div>
</button>
```

##### Primary

```html
<button class="hggs-button">
  <div class="hggs-icon-wrapper">
    <span class="hggs-icon hggs-icon--primary hggs-icon--edit"></span>
    <span class="hggs-icon-label">This is a button labeled</span>
  </div>
</button>
```

##### Secondary

```html
<button class="hggs-button">
  <div class="hggs-icon-wrapper">
    <span class="hggs-icon hggs-icon--secondary hggs-icon--edit"></span>
    <span class="hggs-icon-label">This is a button labeled</span>
  </div>
</button>
```

##### Tertiary

```html
<button class="hggs-button">
  <div class="hggs-icon-wrapper">
    <span class="hggs-icon hggs-icon--tertiary hggs-icon--edit"></span>
    <span class="hggs-icon-label">This is a button labeled</span>
  </div>
</button>
```

##### Quaternary

```html
<button class="hggs-button">
  <div class="hggs-icon-wrapper">
    <span class="hggs-icon hggs-icon--quaternary hggs-icon--edit"></span>
    <span class="hggs-icon-label">This is a button labeled</span>
  </div>
</button>
```

##### Quinary

```html
<button class="hggs-button">
  <div class="hggs-icon-wrapper">
    <span class="hggs-icon hggs-icon--quinary hggs-icon--edit"></span>
    <span class="hggs-icon-label">This is a button labeled</span>
  </div>
</button>
```

##### Senary

```html
<button class="hggs-button">
  <div class="hggs-icon-wrapper">
    <span class="hggs-icon hggs-icon--senary hggs-icon--edit"></span>
    <span class="hggs-icon-label">This is a button labeled</span>
  </div>
</button>
```

### Button Square

#### Button Square HTML structure

##### Default
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square " style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Primary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--primary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--primary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--primary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--primary hggs-icon--square hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Secondary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--secondary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--secondary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--secondary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--secondary hggs-icon--square hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Tertiary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--tertiary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--tertiary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--tertiary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--tertiary hggs-icon--square hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```


##### Quaternary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--quaternary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--quaternary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--quaternary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--quaternary hggs-icon--square hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Quinary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--quinary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--quinary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--quinary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--quinary hggs-icon--square hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```


##### Senary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--senary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--senary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--square hggs-icon--senary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--senary hggs-icon--square hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```




### Button Circle

#### Button Circle HTML structure

##### Default
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Primary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--primary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--primary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--primary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--primary hggs-icon--circle hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Secondary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--secondary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--secondary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--secondary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--secondary hggs-icon--circle hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Tertiary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--tertiary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--tertiary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--tertiary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--tertiary hggs-icon--circle hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```


##### Quaternary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--quaternary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--quaternary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle  hggs-icon--quaternary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--quaternary hggs-icon--circle hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

##### Quinary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--quinary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--quinary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--quinary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--quinary hggs-icon--circle hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```


##### Senary
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--senary" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Big
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--senary hggs-icon--big" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Small
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--circle hggs-icon--senary hggs-icon--small" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

###### Outline
```html
<button class="hggs-button hggs-icon-wrapper hggs-icon--senary hggs-icon--circle hggs-icon--outline" style="">
  <span class="hggs-icon hggs-icon--edit"></span>
</button>
```

