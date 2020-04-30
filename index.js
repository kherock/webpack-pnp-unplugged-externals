const path = require('path');

function pnpUnpluggedExternals() {
  if (!process.versions.pnp) {
    return;
  }
  const pnp = require('pnpapi');

  const { packageLocation: topLevelLocation } = pnp.getPackageInformation(
    pnp.topLevel,
  );

  return function (context, request, callback) {
    try {
      const resolution = pnp.resolveToUnqualified(request, context, {
        considerBuiltins: false,
      });
      if (
        path
          .relative(topLevelLocation, resolution)
          .startsWith('.yarn/unplugged/')
      ) {
        return callback(null, request, 'commonjs2');
      }
    } catch {}
    callback();
  };
}

module.exports = pnpUnpluggedExternals;
