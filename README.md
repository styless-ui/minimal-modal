<h3 align="center">
  MinimalModal.js
</h3>

<p align="center">
  <img src="https://img.shields.io/npm/l/@ohnaka0410/minimal-modal" alt="licence">

  <a href="https://www.npmjs.com/package/@ohnaka0410/minimal-modal" target="_blank">
    <img src="https://img.shields.io/npm/v/@ohnaka0410/minimal-modal.svg" alt="npm">
  </a>

  <img src="https://img.shields.io/bundlephobia/min/@ohnaka0410/minimal-modal" alt="minified size">

  <img src="https://img.shields.io/david/ohnaka0410/minimal-modal" alt="dependencies">

  <a href="https://www.npmjs.com/package/@ohnaka0410/minimal-modal">
    <img src="https://img.shields.io/npm/dt/@ohnaka0410/minimal-modal" alt="downloads">
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
npm install @ohnaka0410/minimal-modal --save
```

```javascript
// Common.JS
const MinimalModal = require('@ohnaka0410/minimal-modal');

// ESModules
import { MinimalModal } from '@ohnaka0410/minimal-modal';
```

### via CDN direct link
```html
<script src="https://cdn.jsdelivr.net/npm/@ohnaka0410/minimal-modal@v2.1.0/dist/minimal-modal.min.js"></script>
```

### direct download
```shell
curl -o https://cdn.jsdelivr.net/npm/@ohnaka0410/minimal-modal@v2.1.0/dist/minimal-modal.min.js
```

```html
<script src="/path/to/minimal-modal.min.js"></script>
```

&nbsp;

## Usage
### automatic
```javascript
MinimalModal.activate();
```
**[demo](https://ohnaka0410.github.io/minimal-modal/demo/automatic.html)**

### manual
```javascript
// open
const modal = document.querySelector('#someModal');
MinimalModal.show(modal);

// close
MinimalModal.close();
```
**[demo](https://ohnaka0410.github.io/minimal-modal/demo/manual.html)**

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

[@ohnaka0410](https://twitter.com/ohnaka0410) 🇯🇵
