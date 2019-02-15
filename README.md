<p align="center">
  <h1>Idle Tracker</h1>
  <img src="https://media.giphy.com/media/z2YiftHRaPbWw/giphy.gif" width="400" alt="idle tracker">
  <br>
  <a href="https://www.npmjs.org/package/idle-tracker"><img src="https://img.shields.io/npm/v/idle-tracker.svg?style=flat" alt="npm"></a>
  <a href="https://unpkg.com/idle-tracker"><img src="https://img.badgesize.io/https://unpkg.com/idle-tracker/dist/es/index.js?compression=gzip" alt="gzip size"></a>
  <a href="https://www.npmjs.com/package/idle-tracker"><img src="https://img.shields.io/npm/dt/idle-tracker.svg" alt="downloads" ></a>
  <a href="https://circleci.com/gh/roderickhsiao/idle-tracker"><img src="https://circleci.com/gh/roderickhsiao/idle-tracker.svg?style=svg" alt="circleci"></a>

</p>
Javascript library to track browser idle status. (callback when user is idle).

[Demo](https://roderickhsiao.github.io/idle-tracker/test/)

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
| onIdleCallback | Function | noop    | Function to be called when idle status change, payload will be `{ idle: true/false }` |
| throttle       | number   | 500     | throttle rate of callback                                                             |
