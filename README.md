<p align="center">
  <h1>Idle Tracker</h1>
  <img src="https://media.giphy.com/media/z2YiftHRaPbWw/giphy.gif" width="400" alt="idle tracker">
  <br>
  <a href="https://www.npmjs.org/package/idle-tracker"><img src="https://img.shields.io/npm/v/idle-tracker.svg?style=flat" alt="npm"></a>
  <a href="https://unpkg.com/idle-tracker"><img src="https://img.badgesize.io/https://unpkg.com/idle-tracker/dist/es/index.js?compression=gzip" alt="gzip size"></a>
  <a href="https://www.npmjs.com/package/idle-tracker"><img src="https://img.shields.io/npm/dt/idle-tracker.svg" alt="downloads" ></a>
</p>
Tiny Javascript library to track browser idle status. (callback when user is idle).

[Demo](https://roderickhsiao.github.io/idle-tracker/test/)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last version| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Installation

via [yarn](https://yarnpkg.com/en/docs)

```
$ yarn add idle-tracker
```

or via [npm](https://docs.npmjs.com/)

```
$ npm install idle-tracker
```

## Usage

```js
import IdleTracker from 'idle-tracker';

const idleTracker = new IdleTracker(options);

idleTracker.start(); // start tracker

idleTracker.end(); // stop tracker and release memory
```

#### Constructor options

| Options Name   | Type     | Default | Description                                                                           |
| -------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| timeout (ms)   | number   | 30000   | timeout to count as idle                                                              |
| onIdleCallback | Function | noop    | Function to be called when idle status change, payload will be `{ idle: true/false }`, with optional `event` payload |
| throttle       | number   | 500     | throttle rate of callback                                                             |

### Future

1. Browser might support this function natively in the future, see [Idle Detection API](https://web.dev/idle-detection/)
1. Related newer API/Library: [page-lifecycle](https://developers.google.com/web/updates/2018/07/page-lifecycle-api), [repo](https://github.com/GoogleChromeLabs/page-lifecycle)