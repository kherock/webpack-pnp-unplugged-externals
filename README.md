[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![downloads][downloads]][downloads-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>webpack Plug'n'Play unplugged externals</h1>
  <p>Exclude unplugged PnP packages from the webpack bundle</p>
</div>

<h2 align="center">Install</h2>

```bash
yarn add --dev webpack-pnp-unplugged-externals
```

<h2 align="center">Usage</h2>

**webpack.config.js**

```js
const pnpUnpluggedExternals = require('webpack-pnp-unplugged-externals');

module.exports = {
  // ...
  externals: [pnpUnpluggedExternals()],
};
```

To explicitly declare a package as external, simply `yarn unplug` it from the
workspace! (or just add it to the webpack `externals` array, like usual.)

It's recommended to use this library in conjunction with
[`pnp-package-json-webpack-plugin`](https://github.com/kherock/pnp-package-json-webpack-plugin).
Together, it's possible to create a minimal package.json containing only
dependencies that webpack normally can't handle, e.g. packages that compile
native addons, regardless of where they appear in your dependency tree.

[npm]: https://img.shields.io/npm/v/webpack-pnp-unplugged-externals.svg
[npm-url]: https://npmjs.com/package/webpack-pnp-unplugged-externals

[node]: https://img.shields.io/node/v/webpack-pnp-unplugged-externals.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/kherock/webpack-pnp-unplugged-externals.svg
[deps-url]: https://david-dm.org/kherock/webpack-pnp-unplugged-externals

[downloads]: https://img.shields.io/npm/dt/webpack-pnp-unplugged-externals.svg
[downloads-url]: https://npmjs.com/package/webpack-pnp-unplugged-externals
