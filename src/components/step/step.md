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
```

## HTML Structure

### Default

#### 1. Default Step with divider.
```html
<article class="hggs-step hggs-step--divider">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 1.1 Default Step.
```html
<article class="hggs-step">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### 2. Small Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--divider">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 2.1 Small Step.

```html
<article class="hggs-step hggs-step--small">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 2.2 Small Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--no-description">
  <span class="hggs-step-side"><span>2</span></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### 3. Dot Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--divider">
  <span class="hggs-step-side"></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```


##### 3.1 Dot Step.

```html
<article class="hggs-step hggs-step--dot">
  <span class="hggs-step-side"></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 3.2 Dot Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description">
  <span class="hggs-step-side"></span>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">In Progress</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### 4. Complete Step with divider.

```html
<article class="hggs-step hggs-step--complete hggs-step--divider">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--check hggs-icon--primary"></span>
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

##### 4.1 Complete Step.

```html
<article class="hggs-step hggs-step--complete">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--check hggs-icon--primary"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 4.2 Small Complete Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--divider hggs-step--complete">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
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

##### 4.3 Small Complete Step.

```html
<article class="hggs-step hggs-step--small hggs-step--complete">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 4.4 Small Complete Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--complete hggs-step--no-description">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--check hggs-icon--primary hggs-icon--small"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
  </section>
</article>
```

##### 4.4 Dot Complete Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--complete hggs-step--divider">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 4.5 Dot Complete Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--complete">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 4.6 Dot Complete Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--complete">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Complete</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

#### 5. Error Step with divider.

```html
<article class="hggs-step hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
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

##### 5.1 Error Step.

```html
<article class="hggs-step hggs-step--error">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 5.2 Small Error Step with divider.

```html
<article class="hggs-step hggs-step--small hggs-step--error hggs-step--divider">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
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

##### 5.3 Small Error Step.

```html
<article class="hggs-step hggs-step--small hggs-step--error">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
        <span class="hggs-step-title">Error</span>
    </section>
  </section>
  <footer class="hggs-step-description">This is a description</footer>
</article>
```

##### 5.4 Small Error Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--error hggs-step--no-description">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
  </section>
</article>
```

##### 5.5 Dot Error Step with divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--error hggs-step--divider">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
      <span class="hggs-step-divider"></span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 5.6 Dot Error Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--error">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 5.7 Dot Error Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--error">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Error</span>
    </section>
  </section>
</article>
```

#### 6. Waiting Step with divider.

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

##### 6.1 Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 6.2 Small Waiting Step with divider.

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

##### 6.3 Small Waiting Step.

```html
<article class="hggs-step hggs-step--waiting">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <footer class="hggs-step-description">This is a description</footer>
  </section>
</article>
```

##### 6.4 Small Waiting Step without description.

```html
<article class="hggs-step hggs-step--small hggs-step--waiting">
  <div class="hggs-step-side">
    <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
  </div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
  </section>
</article>
```

##### 6.5 Dot Waiting Step without divider.

```html
<article class="hggs-step hggs-step--dot hggs-step--waiting hggs-step--divider">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 6.6 Dot Waiting Step.

```html
<article class="hggs-step hggs-step--dot hggs-step--waiting">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
    <span class="hggs-step-description">This is a description</span>
  </section>
</article>
```

##### 6.7 Dot Waiting Step without description.

```html
<article class="hggs-step hggs-step--dot hggs-step--no-description hggs-step--waiting">
  <div class="hggs-step-side"></div>
  <section class="hggs-step-body">
    <section class="hggs-step-main">
      <span class="hggs-step-title">Waiting</span>
    </section>
  </section>
</article>
```
