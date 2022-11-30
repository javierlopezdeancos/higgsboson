# Step

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
--step-side-background
--step-side-background-complete
--step-side-background-error
--step-side-background-waiting
--step-side-border-radius
--step-side-color
--step-side-color-waiting
--step-side-font-family
--step-side-font-size
--step-side-font-size-small
--step-side-font-weight
--step-side-margin-right
--step-side-size
--step-side-size-dot
--step-side-size-small
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
```

## HTML Structure

### Default

#### 1. Default Step.
```html
<article class="hggs-step">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

#### 2. Small Step.

```html
<article class="hggs-step hggs-step--small">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 2.1 Small Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--no-description">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

#### 3. Dot Step.

```html
<article class="hggs-step hggs-step--dot">
  <span class="hggs-step-side"></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 3.1 Dot Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description">
  <span class="hggs-step-side"></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

#### 4. Complete Step.

```html
<article class="hggs-step hggs-step--complete">
  <div class="hggs-step-side"><span class="hggs-icon hggs-icon--check hggs-icon--primary"></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 4.1 Small Complete Step.

```html
<article class="hggs-step hggs-step--small hggs-step--complete">
  <div class="hggs-step-side"><span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 4.2 Small Complete Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--complete hggs-step--no-description">
  <div class="hggs-step-side"><span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 4.3 Dot Complete Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--complete">
  <div class="hggs-step-side"><span class=""></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 4.4 Dot Complete Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--complete">
  <div class="hggs-step-side"><span class=""></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

#### 5. Error Step.

```html
<article class="hggs-step hggs-step--error">
  <div class="hggs-step-side"><span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Error</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 5.1 Small Error Step.

```html
<article class="hggs-step hggs-step--small hggs-step--error">
  <div class="hggs-step-side"><span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Error</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 5.2 Small Error Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--error hggs-step--no-description">
  <div class="hggs-step-side"><span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Error</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 5.3 Dot Error Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--error">
  <div class="hggs-step-side"><span class=""></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Error</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 5.4 Dot Error Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--error">
  <div class="hggs-step-side"><span class=""></span></div>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Error</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

#### 6. Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 6.1 Small Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 6.2 Small Waiting Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--waiting">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 6.3 Dot Waiting Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--waiting">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 6.4 Dot Waiting Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--waiting">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-main">
    <span class="hggs-step-title">Waiting</span>
      <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```
