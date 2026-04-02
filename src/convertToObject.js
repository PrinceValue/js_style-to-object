'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  const styleString = sourceString.split(';');

  styleString.forEach((x) => {
    if (!x.trim()) {
      return;
    }

    const [name, value] = x.split(':');

    res[name.trim()] = value.trim();
  });

  return res;
}

module.exports = convertToObject;
