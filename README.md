# ember-sugar-date-shim

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg) [![npm version](http://badge.fury.io/js/ember-sugar-date-shim.svg)](http://badge.fury.io/js/ember-sugar-date-shim) ![downloads](https://img.shields.io/npm/dy/ember-sugar-date-shim.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-sugar-date-shim.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-sugar-date-shim) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-sugar-date-shim/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-sugar-date-shim) ![Dependencies](http://david-dm.org/cybertoothca/ember-sugar-date-shim.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-sugar-date-shim.svg)](http://emberobserver.com/addons/ember-sugar-date-shim) ![Ember-1.13.0+](https://embadge.io/v1/badge.svg?start=1.13.0) [![License](http://img.shields.io/npm/l/ember-sugar-date-shim.svg)](https://github.com/cybertoothca/ember-sugar-date-shim/blob/master/LICENSE.md)

## Purpose

Expose an ES6 module shim for the global `Sugar` instance's `Date` and all defined locales.

## Installation

```bash
$ ember install ember-sugar-date-shim
```

### Requirements

* Ember >= 1.13.0

### Dependencies

* The latest release version of the `sugar-date` NPM package.

### Tested Against

[![ember-lts-1.13.0](https://img.shields.io/badge/ember--try-ember--lts--1.13.0-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-sugar-date-shim)
[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-sugar-date-shim)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-sugar-date-shim)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-sugar-date-shim)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-sugar-date-shim)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-sugar-date-shim)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-sugar-date-shim)

## Usage

Import the Sugar global instance in your controller, route, or component js-file:

```javascript
import Sugar from 'ember-sugar-date';
```

Then somewhere in your js-code, you can use the `Sugar.Date` object as you normally would.  For example:

```javascript
return Sugar.Date.full(new Date());
```

### Sugar.js Dates Documentation

[Sugar.js Dates](https://sugarjs.com/dates/#/Usage)

# Collaboration Information

This README outlines the details of collaborating on this Ember add-on.

## Installation

* `git clone git@github.com:cybertoothca/ember-sugar-date-shim.git`
* `cd ember-sugar-date-shim`


### With NPM

```
npm install
```

### With Yarn

```
yarn
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your add-on against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com](https://ember-cli.com).

# Linking This Add-on For Local Testing

## Linking

1. From the command line at the root of __this__ project run the
`npm link` command to _link_ this add-on within your local
node repository.
1. From the _other_ Ember project that you wish to test this add-on
in, execute the following command:
`npm link ember-sugar-date-shim`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember add-on with the version _*_.  It will
look something like this: `"ember-sugar-date-shim": "*"`.  Now
when/if you execute `npm install` on this _other_ project it
will know to look for the linked add-on rather than fetch it from
the central repository.

## Unlinking

1. Remove the add-on from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-sugar-date-shim`
1. Remove the reference to the `ember-sugar-date-shim`
in your _other_ project's `package.json`.
1. Run an `npm prune` from the root of your _other_ project's command line.
