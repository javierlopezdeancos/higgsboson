
[Home ](../../../Readme)
[ > Componentes ](../../../Readme#components)

# Steps

- [Steps](#steps)
  - [1. Root component class name](#1-root-component-class-name)
  - [2. Theme selector](#2-theme-selector)
  - [3. Component variables](#3-component-variables)
  - [4. HTML Structure](#4-html-structure)
    - [4.1. Default](#41-default)
      - [4.1.1. Default steps with divider](#411-default-steps-with-divider)
      - [4.1.2. Default steps with divider and no description](#412-default-steps-with-divider-and-no-description)
    - [4.2. Small Steps](#42-small-steps)
      - [4.2.1. Small Steps with divider](#421-small-steps-with-divider)
      - [4.2.2. Small Steps with divider and no description](#422-small-steps-with-divider-and-no-description)
    - [4.3. Dot Steps](#43-dot-steps)
      - [4.3.1. Dot Steps with divider](#431-dot-steps-with-divider)
      - [4.3.2. Dot Steps with divider and no description](#432-dot-steps-with-divider-and-no-description)
    - [4.4. Vertical Default](#44-vertical-default)
      - [4.4.1. Vertical Steps with divider](#441-vertical-steps-with-divider)
      - [4.4.2. Vertical Steps with divider and no description](#442-vertical-steps-with-divider-and-no-description)
      - [4.4.3. Vertical Steps with description and no divider](#443-vertical-steps-with-description-and-no-divider)
      - [4.4.4. Vertical Steps with no description and no divider](#444-vertical-steps-with-no-description-and-no-divider)
    - [4.5. Vertical Small](#45-vertical-small)
      - [4.5.1. Vertical Small Steps with divider](#451-vertical-small-steps-with-divider)
      - [4.5.2. Vertical Small Steps with divider and no description](#452-vertical-small-steps-with-divider-and-no-description)
      - [4.5.3. Vertical Small Steps with description and no divider](#453-vertical-small-steps-with-description-and-no-divider)
      - [4.5.4. Vertical Small Steps with no description and no divider](#454-vertical-small-steps-with-no-description-and-no-divider)
    - [4.6. Vertical Dot](#46-vertical-dot)
      - [4.6.1. Vertical Dot Steps with divider](#461-vertical-dot-steps-with-divider)
      - [4.6.2. Vertical Dot Steps with divider and no description](#462-vertical-dot-steps-with-divider-and-no-description)
      - [4.6.3. Vertical Dot Steps with description and no divider](#463-vertical-dot-steps-with-description-and-no-divider)
      - [4.6.4. Vertical Dot Steps with no divider and no description](#464-vertical-dot-steps-with-no-divider-and-no-description)

## 1. Root component class name

`hggs-steps`

## 2. Theme selector

```css
.hggs-steps {
  /*
  ... put here variables ...
  */
}
```

## 3. Component variables

```
--steps-gap
```

## 4. HTML Structure

### 4.1. Default

#### 4.1.1. Default steps with divider

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

#### 4.1.2. Default steps with divider and no description

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

### 4.2. Small Steps

#### 4.2.1. Small Steps with divider

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

#### 4.2.2. Small Steps with divider and no description

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

### 4.3. Dot Steps

#### 4.3.1. Dot Steps with divider

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

#### 4.3.2. Dot Steps with divider and no description

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

### 4.4. Vertical Default

#### 4.4.1. Vertical Steps with divider

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

#### 4.4.2. Vertical Steps with divider and no description

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




#### 4.4.3 Vertical Steps with description and no divider

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

#### 4.4.4 Vertical Steps with no description and no divider

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

### 4.5. Vertical Small

#### 4.5.1. Vertical Small Steps with divider

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

#### 4.5.2. Vertical Small Steps with divider and no description

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

#### 4.5.3. Vertical Small Steps with description and no divider

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

#### 4.5.4. Vertical Small Steps with no description and no divider

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

### 4.6. Vertical Dot

#### 4.6.1. Vertical Dot Steps with divider

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

#### 4.6.2. Vertical Dot Steps with divider and no description

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

#### 4.6.3. Vertical Dot Steps with description and no divider

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

#### 4.6.4. Vertical Dot Steps with no divider and no description

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
