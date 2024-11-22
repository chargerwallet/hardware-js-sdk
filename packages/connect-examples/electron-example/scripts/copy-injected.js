/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');

const rootDir = path.join(__dirname, '../../../../');

const sourceDir = path.join(rootDir, 'node_modules/@chargerwallet/hd-web-sdk/build/');
const targetDir = path.join(rootDir, 'packages/connect-examples/electron-example/public/js-sdk/');

async function copyFiles() {
  try {
    await fs.remove(targetDir);
    await fs.ensureDir(targetDir);
    console.log(`Target directory ${targetDir} is ensured`);

    await fs.copy(sourceDir, targetDir, {
      recursive: true,
      overwrite: true,
      filter: (src, dest) => {
        // Don't copy chargerwallet-js-sdk
        if (src.endsWith('chargerwallet-js-sdk.min.js') || src.endsWith('chargerwallet-js-sdk.js')) {
          return false;
        }

        // Don't copy source maps
        if (src.endsWith('.map')) {
          return false;
        }
        return true;
      },
    });
    console.log(`Files copied from ${sourceDir} to ${targetDir}`);
  } catch (error) {
    console.error('Error copying files:', error);
  }
}

copyFiles();
