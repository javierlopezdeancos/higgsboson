# Step

- [Step](#step)
  - [1. Root component class name](#1-root-component-class-name)
  - [2. Theme selector](#2-theme-selector)
  - [3. Component variables](#3-component-variables)
  - [4. HTML Structure](#4-html-structure)
    - [4.1. Default](#41-default)
      - [4.1.1. Default Step with divider.](#411-default-step-with-divider)
        - [4.1.1.1. Default Step.](#4111-default-step)
      - [4.1.2. Small Step with divider.](#412-small-step-with-divider)
        - [4.1.2.1. Small Step.](#4121-small-step)
        - [4.1.2.2. Small Step without description.](#4122-small-step-without-description)
      - [4.1.3. Dot Step with divider.](#413-dot-step-with-divider)
        - [4.1.3.1. Dot Step.](#4131-dot-step)
        - [4.1.3.2. Dot Step without description.](#4132-dot-step-without-description)
    - [4.2. States](#42-states)
      - [4.2.1. Complete](#421-complete)
        - [4.2.1.1. Complete Step with divider.](#4211-complete-step-with-divider)
        - [4.2.1.2. Complete Step.](#4212-complete-step)
        - [4.2.1.3. Small Complete Step with divider.](#4213-small-complete-step-with-divider)
        - [4.2.1.4. Small Complete Step.](#4214-small-complete-step)
        - [4.2.1.5. Small Complete Step without description.](#4215-small-complete-step-without-description)
        - [4.2.1.6. Dot Complete Step with divider.](#4216-dot-complete-step-with-divider)
        - [4.2.1.7. Dot Complete Step.](#4217-dot-complete-step)
        - [4.2.1.8. Dot Complete Step without description.](#4218-dot-complete-step-without-description)
      - [4.2.2. Error](#422-error)
        - [4.2.2.1. Error Step with divider.](#4221-error-step-with-divider)
        - [4.2.2.2. Error Step.](#4222-error-step)
          - [4.2.2.2.1. Small Error Step with divider.](#42221-small-error-step-with-divider)
          - [4.2.2.2.2. Small Error Step.](#42222-small-error-step)
          - [4.2.2.2.3. Small Error Step without description.](#42223-small-error-step-without-description)
          - [4.2.2.2.4. Dot Error Step with divider.](#42224-dot-error-step-with-divider)
          - [4.2.2.2.5. Dot Error Step.](#42225-dot-error-step)
          - [4.2.2.2.6. Dot Error Step without description.](#42226-dot-error-step-without-description)
      - [4.2.3. Waiting](#423-waiting)
        - [4.2.3.1. Waiting Step with divider.](#4231-waiting-step-with-divider)
          - [4.2.3.1.1. Waiting Step.](#42311-waiting-step)
          - [4.2.3.1.2. Small Waiting Step with divider.](#42312-small-waiting-step-with-divider)
          - [4.2.3.1.3. Small Waiting Step.](#42313-small-waiting-step)
          - [4.2.3.1.4. Small Waiting Step without description.](#42314-small-waiting-step-without-description)
          - [4.2.3.1.5. Dot Waiting Step without divider.](#42315-dot-waiting-step-without-divider)
          - [4.2.3.1.6. Dot Waiting Step.](#42316-dot-waiting-step)
          - [4.2.3.1.7. Dot Waiting Step without description.](#42317-dot-waiting-step-without-description)
    - [4.3. Vertical](#43-vertical)
      - [4.3.1. Vertical Step with divider.](#431-vertical-step-with-divider)
        - [4.3.1.1. Vertical Step.](#4311-vertical-step)
      - [4.3.2. Vertical Small Step with divider.](#432-vertical-small-step-with-divider)
        - [4.3.2.1. Vertical Small Step.](#4321-vertical-small-step)
        - [4.3.2.2. Vertical Small Step without description.](#4322-vertical-small-step-without-description)
      - [4.3.3. Vertical Dot Step with divider.](#433-vertical-dot-step-with-divider)
        - [4.3.3.1. Vertical Dot Step.](#4331-vertical-dot-step)
        - [4.3.3.2. Vertical Dot Step without description.](#4332-vertical-dot-step-without-description)
    - [4.4. Vertical States](#44-vertical-states)
      - [4.4.1. Vertical Complete](#441-vertical-complete)
        - [4.4.1.1. Vertical Complete Step with divider.](#4411-vertical-complete-step-with-divider)
        - [4.4.1.2. Vertical Complete Step.](#4412-vertical-complete-step)
        - [4.4.1.3. Vertical Small Complete Step with divider.](#4413-vertical-small-complete-step-with-divider)
        - [4.4.1.4. Vertical Small Complete Step.](#4414-vertical-small-complete-step)
        - [4.4.1.5. Vertical Small Complete Step without description.](#4415-vertical-small-complete-step-without-description)
        - [4.4.1.6. Vertical Dot Complete Step with divider.](#4416-vertical-dot-complete-step-with-divider)
        - [4.4.1.7. Vertical Dot Complete Step.](#4417-vertical-dot-complete-step)
        - [4.4.1.8. Vertical Dot Complete Step without description.](#4418-vertical-dot-complete-step-without-description)
      - [4.4.2. Vertical Error](#442-vertical-error)
        - [4.4.2.1. Vertical Error Step with divider.](#4421-vertical-error-step-with-divider)
        - [4.4.2.2. Vertical Error Step.](#4422-vertical-error-step)
          - [4.4.2.2.1. Vertical Small Error Step with divider.](#44221-vertical-small-error-step-with-divider)
          - [4.4.2.2.2. Vertical Small Error Step.](#44222-vertical-small-error-step)
          - [4.4.2.2.3. Vertical Small Error Step without description.](#44223-vertical-small-error-step-without-description)
          - [4.4.2.2.4. Vertical Dot Error Step with divider.](#44224-vertical-dot-error-step-with-divider)
          - [4.4.2.2.5. Vertical Dot Error Step.](#44225-vertical-dot-error-step)
          - [4.4.2.2.6. Vertical Dot Error Step without description.](#44226-vertical-dot-error-step-without-description)
      - [4.4.3. Vertical Waiting](#443-vertical-waiting)
        - [4.4.3.1. Vertical Waiting Step with divider.](#4431-vertical-waiting-step-with-divider)
          - [4.4.3.1.1. Vertical Waiting Step.](#44311-vertical-waiting-step)
          - [4.4.3.1.2. Vertical Small Waiting Step with divider.](#44312-vertical-small-waiting-step-with-divider)
          - [4.4.3.1.3. Vertical Small Waiting Step.](#44313-vertical-small-waiting-step)
          - [4.4.3.1.4. Vertical Small Waiting Step without description.](#44314-vertical-small-waiting-step-without-description)
          - [4.4.3.1.5. Vertical Dot Waiting Step without divider.](#44315-vertical-dot-waiting-step-without-divider)
          - [4.4.3.1.6. Vertical Dot Waiting Step.](#44316-vertical-dot-waiting-step)
          - [4.4.3.1.7. Vertical Dot Waiting Step without description.](#44317-vertical-dot-waiting-step-without-description)

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

##### Default Step.
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

##### Small Step.

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

##### Small Step without description.

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

##### Dot Step.

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

##### Dot Step without description.

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
