[Home ](../../../README.md) >
[ Componentes ](../../../README.md#components)

# Steps

- [Steps](#steps)
  - [Root component class name](#root-component-class-name)
  - [Theme selector](#theme-selector)
  - [Component variables](#component-variables)
  - [HTML Structure](#html-structure)
    - [Default](#default)
      - [Default steps with divider](#default-steps-with-divider)
      - [Default steps with divider and no description](#default-steps-with-divider-and-no-description)
    - [Small Steps](#small-steps)
      - [Small Steps with divider](#small-steps-with-divider)
      - [Small Steps with divider and no description](#small-steps-with-divider-and-no-description)
    - [Dot Steps](#dot-steps)
      - [Dot Steps with divider](#dot-steps-with-divider)
      - [Dot Steps with divider and no description](#dot-steps-with-divider-and-no-description)
    - [Vertical Default](#vertical-default)
      - [Vertical Steps with divider](#vertical-steps-with-divider)
      - [Vertical Steps with divider and no description](#vertical-steps-with-divider-and-no-description)
      - [Vertical Steps with description and no divider](#vertical-steps-with-description-and-no-divider)
      - [Vertical Steps with no description and no divider](#vertical-steps-with-no-description-and-no-divider)
    - [Vertical Small](#vertical-small)
      - [Vertical Small Steps with divider](#vertical-small-steps-with-divider)
      - [Vertical Small Steps with divider and no description](#vertical-small-steps-with-divider-and-no-description)
      - [Vertical Small Steps with description and no divider](#vertical-small-steps-with-description-and-no-divider)
      - [Vertical Small Steps with no description and no divider](#vertical-small-steps-with-no-description-and-no-divider)
    - [Vertical Dot](#vertical-dot)
      - [Vertical Dot Steps with divider](#vertical-dot-steps-with-divider)
      - [Vertical Dot Steps with divider and no description](#vertical-dot-steps-with-divider-and-no-description)
      - [Vertical Dot Steps with description and no divider](#vertical-dot-steps-with-description-and-no-divider)
      - [Vertical Dot Steps with no divider and no description](#vertical-dot-steps-with-no-divider-and-no-description)

## Root component class name

`hggs-steps`

## Theme selector

```css
.hggs-steps {
  /*
  ... put here variables ...
  */
}
```

## Component variables

```
--steps-gap
```

## HTML Structure

### Default

#### Default steps with divider

```html
<ul class="hggs-steps">
  <li class="hggs-step hggs-step--divider">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          1
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          2
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
          <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
          <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Default steps with divider and no description

```html
<ul class="hggs-steps">
  <li class="hggs-step hggs-step--divider hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          1
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          2
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
          <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
    </div>
  </li>
</ul>
```

### Small Steps

#### Small Steps with divider

```html
<ul class="hggs-steps">
  <li class="hggs-step hggs-step--divider hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          1
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          2
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
          <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
          <span class="hggs-step-divider"></span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Small Steps with divider and no description

```html
<ul class="hggs-steps">
  <li class="hggs-step hggs-step--divider hggs-step--small hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          1
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--small hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          2
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete hggs-step--small hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
          <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error hggs-step--small hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
          <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--small hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small">
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
    </div>
  </li>
</ul>
```

### Dot Steps

#### Dot Steps with divider

```html
<ul class="hggs-steps">
  <li class="hggs-step hggs-step--divider hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          1
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          2
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal"></div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
          <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal"></div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal"></div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
    </div>
  </li>
</ul>
```

#### Dot Steps with divider and no description

```html
<ul class="hggs-steps">
  <li class="hggs-step hggs-step--divider hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          1
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">
          2
        </span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal"></div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
          <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal"></div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
        <span class="hggs-step-divider"></span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal"></div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
    </div>
  </li>
</ul>
```

### Vertical Default

#### Vertical Steps with divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--divider hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
          <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">Set your personal data</span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">Financial data</span>
      </div>
      <span class="hggs-step-description">Set your financial data</span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>

    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">Terms and conditions</span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">Summary</span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">Payment</span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Steps with divider and no description

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
        Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--complete hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
        Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--error hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--no-description hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Steps with description and no divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--complete hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--error hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Steps with no description and no divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--vertical hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--vertical hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--complete hggs-step--vertical hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--error hggs-step--vertical hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

### Vertical Small

#### Vertical Small Steps with divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--divider hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--complete hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--error hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Small Steps with divider and no description

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical hggs-step--divider hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--complete hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--error hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--no-description hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Small Steps with description and no divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
        Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
        Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--complete hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
        Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--error hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
        This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Small Steps with no description and no divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
        Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
        Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--complete hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
        Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--error hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
        This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical hggs-step--small">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

### Vertical Dot

#### Vertical Dot Steps with divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical hggs-step--divider hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
          <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--complete hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--error hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--no-description hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Dot Steps with divider and no description

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical hggs-step--divider hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
          <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--complete hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--divider hggs-step--no-description hggs-step--error hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--no-description hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
    </div>
  </li>
</ul>
```

#### Vertical Dot Steps with description and no divider

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
          <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your personal data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
      <span class="hggs-step-description">
          Set your financial data
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--complete hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
      <span class="hggs-step-description">
          Read and sign terms and conditions
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--error hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
      <span class="hggs-step-description">
          This step contains errors that you need to fix
      </span>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical hggs-step--dot">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
      <span class="hggs-step-description">
          Waiting...
      </span>
    </div>
  </li>
</ul>
```

#### Vertical Dot Steps with no divider and no description

```html
<ul class="hggs-steps hggs-steps--vertical">
  <li class="hggs-step hggs-step--vertical hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">1</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Personal data
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--vertical hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-step-reference">2</span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Financial data
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--complete hggs-step--vertical hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--check hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Terms and conditions
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--error hggs-step--vertical hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--close hggs-icon--quinary hggs-icon--small"></span>
      </div>
      <span class="hggs-step-divider"></span>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Summary
        </span>
      </div>
    </div>
  </li>
  <li class="hggs-step hggs-step--waiting hggs-step--vertical hggs-step--dot hggs-step--no-description">
    <span class="hggs-step-side">
      <div class="hggs-step-signal">
        <span class="hggs-icon hggs-icon--pending hggs-icon--quinary hggs-icon--small"></span>
      </div>
    </span>
    <div class="hggs-step-body">
      <div class="hggs-step-main">
        <span class="hggs-step-title">
          Payment
        </span>
      </div>
    </div>
  </li>
</ul>
```
