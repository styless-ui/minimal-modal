<h3 align="center">
  MinimalModal.js
</h3>

<p align="center">
  <img src="https://img.shields.io/npm/l/@yuki0410/minimal-modal" alt="licence">

  <a href="https://www.npmjs.com/package/@yuki0410/minimal-modal" target="_blank">
    <img src="https://img.shields.io/npm/v/@yuki0410/minimal-modal.svg" alt="npm">
  </a>

  <img src="https://img.shields.io/bundlephobia/min/@yuki0410/minimal-modal" alt="minified size">

  <img src="https://img.shields.io/david/ohnaka0410/minimal-modal" alt="dependencies">

  <a href="https://www.npmjs.com/package/@yuki0410/minimal-modal">
    <img src="https://img.shields.io/npm/dt/@yuki0410/minimal-modal" alt="downloads">
  </a>
</p>

<p align="center">
  Minimal and Tiny Javascript Library for Modal Dialog
</p>

---

The aim of this library is to easily introduce a minimalistic modal dialog. It is a library of only about 18KB.

&nbsp;

## Features
✔ Toggles aria-hidden attributes & open attributes on open and close

✔ Closes dialog on overlay click or ESC press

✔ Traps tab focus within the modal (Dependent on [focus-trap](https://www.npmjs.com/package/focus-trap))

✔ Lock the scrolling outside the modal (Dependent on [body-scroll-lock](https://www.npmjs.com/package/body-scroll-lock))

✔ Make By Typescript

✔ Supported for IE11+

&nbsp;

## Install

### via npm
```shell
npm install @yuki0410/minimal-modal --save
```

```javascript
// Common.JS
const MinimalModal = require('@yuki0410/minimal-modal');

// ESModules
import MinimalModal from '@yuki0410/minimal-modal';
```

### via CDN direct link
```html
<script src="https://cdn.jsdelivr.net/npm/@yuki0410/minimal-modal/dist/minimal-modal.min.js"></script>
```

### direct download
```shell
curl -o https://cdn.jsdelivr.net/npm/@yuki0410/minimal-modal/dist/minimal-modal.min.js
```

```html
<script src="/path/to/minimal-modal.min.js"></script>
```

&nbsp;

## Automatic Usage

```html
<!-- show trigger -->
<button data-modal-show="#modal-1">

<!-- close trigger -->
<button data-modal-close>
```
```javascript
// activate
MinimalModal.activate();

// deactivate
MinimalModal.deactivate();
```

**[demo](https://ohnaka0410.github.io/minimal-modal/demo/automatic.html)**

### MinimalModal.activate();
Active Show / Close Modal Triggers.

### MinimalModal.deactivate();
Deactive Show / Close Modal Triggers.

## Manual Usage
```javascript
const modal = document.querySelector('#someModal');

// open
MinimalModal.show(modal);

// close
MinimalModal.close();

// closeAll
MinimalModal.closeAll();
```

**[demo](https://ohnaka0410.github.io/minimal-modal/demo/manual.html)**

### MinimalModal.show(element[, modalOptions]);
Show Modal.

`element:` HTMLElement

`modalOptions`
- **focusTrap** { FocusTrapOptions? }: See [FocusTrap Options](https://github.com/focus-trap/focus-trap#createfocustrapelement-createoptions).
- **bodyScrollLock** { BodyScrollOptions? }: See [BodyScrollLock Options](https://github.com/willmcpo/body-scroll-lock#options).

### MinimalModal.close();
Close Active Modal.

### MinimalModal.closeAll();
Close All Models.

&nbsp;

## Changelog
Refer to the [releases](https://github.com/ohnaka0410/minimal-modal/releases) page.

&nbsp;

## Contribution
1. Fork the repository on GitHub
1. Clone the project to your own machine
1. Commit changes to your own branch
1. Push your work back up to your fork
1. Submit a Pull request so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

&nbsp;

## Licence
This project is licensed under [MIT license](https://opensource.org/licenses/MIT).

&nbsp;

## Created and maintained by

[@yuki0410_](https://twitter.com/yuki0410_) 🇯🇵
