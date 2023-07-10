[Home ](../../../README.md)
[ > Componentes ](../../../README.md#components)

# Step

- [Step](#step)
  - [Root component class name](#root-component-class-name)
  - [Theme selector](#theme-selector)
  - [Component variables](#component-variables)
  - [HTML Structure](#html-structure)
    - [Default](#default)
      - [Default Step with divider.](#default-step-with-divider)
      - [Default Step without divider.](#default-step-without-divider)
    - [Small Step](#small-step)
      - [Small Step with divider.](#small-step-with-divider)
      - [Small Step without divider.](#small-step-without-divider)
      - [Small Step without description.](#small-step-without-description)
    - [Dot Step](#dot-step)
      - [Dot Step with divider.](#dot-step-with-divider)
      - [Dot Step without divider.](#dot-step-without-divider)
      - [Dot Step without description.](#dot-step-without-description)
    - [States](#states)
      - [Complete](#complete)
        - [Complete Step with divider.](#complete-step-with-divider)
        - [Complete Step.](#complete-step)
        - [Small Complete Step with divider.](#small-complete-step-with-divider)
        - [Small Complete Step.](#small-complete-step)
        - [Small Complete Step without description.](#small-complete-step-without-description)
        - [Dot Complete Step with divider.](#dot-complete-step-with-divider)
        - [Dot Complete Step.](#dot-complete-step)
        - [Dot Complete Step without description.](#dot-complete-step-without-description)
      - [Error](#error)
        - [Error Step with divider.](#error-step-with-divider)
        - [Error Step.](#error-step)
          - [Small Error Step with divider.](#small-error-step-with-divider)
          - [Small Error Step.](#small-error-step)
          - [Small Error Step without description.](#small-error-step-without-description)
          - [Dot Error Step with divider.](#dot-error-step-with-divider)
          - [Dot Error Step.](#dot-error-step)
          - [Dot Error Step without description.](#dot-error-step-without-description)
      - [Waiting](#waiting)
        - [Waiting Step with divider.](#waiting-step-with-divider)
          - [Waiting Step.](#waiting-step)
          - [Small Waiting Step with divider.](#small-waiting-step-with-divider)
          - [Small Waiting Step.](#small-waiting-step)
          - [Small Waiting Step without description.](#small-waiting-step-without-description)
          - [Dot Waiting Step without divider.](#dot-waiting-step-without-divider)
          - [Dot Waiting Step.](#dot-waiting-step)
          - [Dot Waiting Step without description.](#dot-waiting-step-without-description)
    - [Vertical](#vertical)
      - [Vertical Step with divider.](#vertical-step-with-divider)
        - [Vertical Step.](#vertical-step)
      - [Vertical Small Step with divider.](#vertical-small-step-with-divider)
        - [Vertical Small Step.](#vertical-small-step)
        - [Vertical Small Step without description.](#vertical-small-step-without-description)
      - [Vertical Dot Step with divider.](#vertical-dot-step-with-divider)
        - [Vertical Dot Step.](#vertical-dot-step)
        - [Vertical Dot Step without description.](#vertical-dot-step-without-description)
    - [Vertical States](#vertical-states)
      - [Vertical Complete](#vertical-complete)
        - [Vertical Complete Step with divider.](#vertical-complete-step-with-divider)
        - [Vertical Complete Step.](#vertical-complete-step)
        - [Vertical Small Complete Step with divider.](#vertical-small-complete-step-with-divider)
        - [Vertical Small Complete Step.](#vertical-small-complete-step)
        - [Vertical Small Complete Step without description.](#vertical-small-complete-step-without-description)
        - [Vertical Dot Complete Step with divider.](#vertical-dot-complete-step-with-divider)
        - [Vertical Dot Complete Step.](#vertical-dot-complete-step)
        - [Vertical Dot Complete Step without description.](#vertical-dot-complete-step-without-description)
      - [Vertical Error](#vertical-error)
        - [Vertical Error Step with divider.](#vertical-error-step-with-divider)
        - [Vertical Error Step.](#vertical-error-step)
          - [Vertical Small Error Step with divider.](#vertical-small-error-step-with-divider)
          - [Vertical Small Error Step.](#vertical-small-error-step)
          - [Vertical Small Error Step without description.](#vertical-small-error-step-without-description)
          - [Vertical Dot Error Step with divider.](#vertical-dot-error-step-with-divider)
          - [Vertical Dot Error Step.](#vertical-dot-error-step)
          - [Vertical Dot Error Step without description.](#vertical-dot-error-step-without-description)
      - [Vertical Waiting](#vertical-waiting)
        - [Vertical Waiting Step with divider.](#vertical-waiting-step-with-divider)
          - [Vertical Waiting Step.](#vertical-waiting-step)
          - [Vertical Small Waiting Step with divider.](#vertical-small-waiting-step-with-divider)
          - [Vertical Small Waiting Step.](#vertical-small-waiting-step)
          - [Vertical Small Waiting Step without description.](#vertical-small-waiting-step-without-description)
          - [Vertical Dot Waiting Step without divider.](#vertical-dot-waiting-step-without-divider)
          - [Vertical Dot Waiting Step.](#vertical-dot-waiting-step)
          - [Vertical Dot Waiting Step without description.](#vertical-dot-waiting-step-without-description)

## Root component class name

`hggs-step`

## Theme selector

```css
.hggs-step {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--step-description-color
--step-description-color-error
--step-description-color-waiting
--step-description-font-family
--step-description-font-size
--step-description-font-size-dot
--step-description-font-size-small
--step-description-font-weight
--step-divider-background
--step-divider-height
--step-divider-height-vertical
--step-divider-margin
--step-divider-margin-vertical
--step-divider-width-vertical
--step-gap-vertical
--step-main-margin
--step-side-background
--step-side-background-complete
--step-side-background-error
--step-side-background-waiting
--step-side-border-radius
--step-side-color
--step-side-font-family
--step-side-font-size
--step-side-font-size-small
--step-side-font-weight
--step-side-gap-vertical
--step-side-height-vertical
--step-side-margin-right
--step-side-size
--step-side-size-dot
--step-side-size-small
--step-signal-margin-right-vertical
--step-title-color
--step-title-color-error
--step-title-color-waiting
--step-title-font-family
--step-title-font-size
--step-title-font-size-dot
--step-title-font-size-small
--step-title-font-weight
--step-title-margin
--step-title-margin-dot
--step-title-margin-small
--step-title-margin-small-no-description
--step-title-margin-vertical-dot
--step-title-margin-vertical-no-description
```

## HTML Structure

### Default

#### Default Step with divider.
```html
<article class="hggs-step hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Default Step without divider.
```html
<article class="hggs-step">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

### Small Step

#### Small Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--divider">
   <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Small Step without divider.

```html
<article class="hggs-step hggs-step--small">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Small Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

### Dot Step

#### Dot Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--divider">
   <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Dot Step without divider.

```html
<article class="hggs-step hggs-step--dot">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Dot Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

### States

#### Complete

##### Complete Step with divider.

```html
<article class="hggs-step hggs-step--complete hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Complete Step.

```html
<article class="hggs-step hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Small Complete Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--divider hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Small Complete Step.

```html
<article class="hggs-step hggs-step--small hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Small Complete Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--complete hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
  </section>
</article>
```

##### Dot Complete Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--complete hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Dot Complete Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Dot Complete Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Error

##### Error Step with divider.

```html
<article class="hggs-step hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Error Step.

```html
<article class="hggs-step hggs-step--error">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Small Error Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
      <span class="hggs-step-divider"></span>
    </section>
  </section>
  <footer class="hggs-step-description">This is a description</footer>
</article>
```

###### Small Error Step.

```html
<article class="hggs-step hggs-step--small hggs-step--error">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
        <span class="hggs-step-title">Error</span>
    </section>
  </section>
  <footer class="hggs-step-description">This is a description</footer>
</article>
```

###### Small Error Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--error hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
  </section>
</article>
```

###### Dot Error Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Dot Error Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--error">
   <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Dot Error Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--error">
   <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
  </section>
</article>
```

#### Waiting

##### Waiting Step with divider.

```html
<article class="hggs-step hggs-step--waiting hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Small Waiting Step with divider.

```html
<article class="hggs-step hggs-step--waiting hggs-step--divider">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Small Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Small Waiting Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
  </section>
</article>
```

###### Dot Waiting Step without divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--waiting hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

###### Dot Waiting Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

###### Dot Waiting Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
  </section>
</article>
```

### Vertical

#### Vertical Step with divider.
```html
<article class="hggs-step hggs-step--divider hggs-step--vertical">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Step.
```html
<article class="hggs-step hggs-step--vertical">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Vertical Small Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--divider hggs-step--vertical">
   <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Small Step.

```html
<article class="hggs-step hggs-step--small">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Small Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-step-reference">2</span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Vertical Dot Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--divider">
   <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Dot Step.

```html
<article class="hggs-step hggs-step--dot">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Dot Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

### Vertical States

#### Vertical Complete

##### Vertical Complete Step with divider.

```html
<article class="hggs-step hggs-step--complete hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Complete Step.

```html
<article class="hggs-step hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Small Complete Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--divider hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Small Complete Step.

```html
<article class="hggs-step hggs-step--small hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Small Complete Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--complete hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
  </section>
</article>
```

##### Vertical Dot Complete Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--complete hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Dot Complete Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Dot Complete Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--complete">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### Vertical Error

##### Vertical Error Step with divider.

```html
<article class="hggs-step hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### Vertical Error Step.

```html
<article class="hggs-step hggs-step--error">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Vertical Small Error Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
      <span class="hggs-step-divider"></span>
    </section>
  </section>
  <footer class="hggs-step-description">This is a description</footer>
</article>
```

###### Vertical Small Error Step.

```html
<article class="hggs-step hggs-step--small hggs-step--error">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
        <span class="hggs-step-title">Error</span>
    </section>
  </section>
  <footer class="hggs-step-description">This is a description</footer>
</article>
```

###### Vertical Small Error Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--error hggs-step--no-description">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
  </section>
</article>
```

###### Vertical Dot Error Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Vertical Dot Error Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--error">
   <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Vertical Dot Error Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--error">
   <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
  </section>
</article>
```

#### Vertical Waiting

##### Vertical Waiting Step with divider.

```html
<article class="hggs-step hggs-step--waiting hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Vertical Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Vertical Small Waiting Step with divider.

```html
<article class="hggs-step hggs-step--waiting hggs-step--divider">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Vertical Small Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

###### Vertical Small Waiting Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal">
      <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
    </div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
  </section>
</article>
```

###### Vertical Dot Waiting Step without divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--waiting hggs-step--divider">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

###### Vertical Dot Waiting Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

###### Vertical Dot Waiting Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--waiting">
  <div class="hggs-step-side">
    <div class="hggs-step-signal"></div>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
  </section>
</article>
```
