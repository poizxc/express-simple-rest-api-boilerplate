#! /usr/bin/env node

const { execSync } = require('child_process');
const { promisify } = require('util');
const { ncp } = require('ncp');
const path = require('path');

const args = process.argv.slice(2);
const ncpPromise = promisify(ncp);

const findScriptPath = () => {
  return path.join(__dirname, '..');
};

const createDirectory = (name) => {
  const res = execSync(`rm -rf ${name} && mkdir ${name}`);
  return res;
};

const canBeCopied = (fileName, newDirectory) =>
  !fileName.includes(newDirectory) &&
  !fileName.includes('coverage') &&
  !fileName.includes('.nyc_output') &&
  !fileName.includes('.git') &&
  !fileName.includes('scripts');

const copyTemplate = async (newDirectory) => {
  console.time('Copy Time');
  await ncpPromise(findScriptPath(), newDirectory, {
    filter: (fileName) => {
      return canBeCopied(fileName, newDirectory);
    },
  });
  console.timeEnd('Copy Time');
  return 'Success, Application Bootstrapped :) ';
};

(async function createAndCopyTemplate() {
  try {
    if (args.length !== 1)
      throw Error(
        'generator script needs exactly one argument - directory name',
      );
    const newDirectory = args[0];
    createDirectory(newDirectory);
    const res = await copyTemplate(newDirectory);
    console.info(res);
  } catch (error) {
    console.error(error);
  }
})();
