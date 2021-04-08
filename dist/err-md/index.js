/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 346:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


const template_1 = __nccwpck_require__(141);
function determineTo(violation, linkPrefix) {
    if (violation.cycle !== undefined) {
        const cycle = linkPrefix !== undefined
            ? violation.cycle.map(cycle => template_1.markdownLink(cycle, `${linkPrefix}/${cycle}`))
            : violation.cycle;
        return cycle.join(' &rightarrow;<br/>');
    }
    if (violation.via !== undefined) {
        const to = linkPrefix !== undefined ? template_1.markdownLink(violation.to, `${linkPrefix}/${violation.to}`) : violation.to;
        const via = linkPrefix !== undefined ? violation.via.map(via => template_1.markdownLink(via, `${linkPrefix}/${via}`)) : violation.via;
        return `${to}<br/>${via.join(' &rightarrow;<br/>')}`;
    }
    if (violation.from === violation.to) {
        return '';
    }
    return linkPrefix !== undefined ? template_1.markdownLink(violation.to, `${linkPrefix}/${violation.to}`) : violation.to;
}
function formatViolation(violation, options) {
    return Object.assign(Object.assign({}, violation), { from: options.link !== undefined ? template_1.markdownLink(violation.from, `${options.link}/${violation.from}`) : violation.from, to: determineTo(violation, options.link) });
}
function aggregateViolationsIntoRules(violations, ruleSetUsed) {
    var _a, _b;
    debugger;
    if (ruleSetUsed === undefined) {
        return [];
    }
    const violationCount = violations.reduce((count, violation) => {
        const currentCount = count[violation.rule.name];
        if (currentCount === undefined) {
            return Object.assign(Object.assign({}, count), { [violation.rule.name]: 1 });
        }
        else {
            return Object.assign(Object.assign({}, count), { [violation.rule.name]: currentCount + 1 });
        }
    }, {});
    const returns = [...((_a = ruleSetUsed.forbidden) !== null && _a !== void 0 ? _a : []), ...((_b = ruleSetUsed.required) !== null && _b !== void 0 ? _b : [])]
        .map(rule => {
        var _a;
        const count = rule.name === undefined ? 0 : (_a = violationCount[rule.name]) !== null && _a !== void 0 ? _a : 0;
        return Object.assign(Object.assign({}, rule), { count });
    })
        .sort((a, b) => { var _a, _b; return (_b = (Math.sign(b.count - a.count) || ((_a = a.name) === null || _a === void 0 ? void 0 : _a.localeCompare(b.name || '')))) !== null && _b !== void 0 ? _b : 1; });
    return returns;
}
function report(pResults, pOptions) {
    if (pResults.summary.violations.length === 0) {
        return '';
    }
    const groupping = pResults.summary.violations.reduce((output, violation) => {
        const formatedViolation = formatViolation(violation, { link: pOptions === null || pOptions === void 0 ? void 0 : pOptions.link });
        return Object.assign(Object.assign({}, output), { [violation.rule.severity]: [...output[violation.rule.severity], formatedViolation] });
    }, {
        ignore: [],
        info: [],
        warn: [],
        error: []
    });
    const details = Object.keys(groupping).reduce((sortedObject, key) => (Object.assign(Object.assign({}, sortedObject), { [key]: groupping[key].sort((a, b) => a.rule.name.localeCompare(b.rule.name)) })), {});
    return template_1.render({
        summary: Object.assign(Object.assign({}, pResults.summary), { rules: aggregateViolationsIntoRules(pResults.summary.violations, pResults.summary.ruleSetUsed) }),
        details
    });
}
/**
 * Returns:
 *   output: markdown string
 *   exitCode:
 *     - 0: ok
 *     - 1: warnings
 *     - 2: errors
 */
function markdownReporter(pResults, pOptions) {
    let exitCode = 0;
    if (pResults.summary.warn > 0) {
        exitCode = 1;
    }
    if (pResults.summary.error > 0) {
        exitCode = 2;
    }
    return {
        output: report(pResults, pOptions),
        exitCode
    };
}
module.exports = markdownReporter;


/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.render = exports.markdownLink = void 0;
const markdown_table_1 = __nccwpck_require__(62);
function markdownLink(name, link) {
    return `[${name}](${link})`;
}
exports.markdownLink = markdownLink;
function plurial(count, singular, plurial) {
    if (count > 1) {
        return `${count} ${plurial}`;
    }
    return `${count} ${singular}`;
}
function summary(data) {
    const { totalCruised, totalDependenciesCruised, error, info, warn, rules } = data;
    const summaryDetails = [
        plurial(totalCruised, 'module', 'modules'),
        totalDependenciesCruised !== undefined
            ? plurial(totalDependenciesCruised, 'dependency', 'dependencies')
            : undefined,
        plurial(error, 'error', 'errors'),
        plurial(warn, 'warning', 'warning'),
        `${info} informational`
    ]
        .filter(Boolean)
        .join(' · ');
    return `**${summaryDetails}**

${markdown_table_1.markdownTable([
        ['severity', 'rule', '# violations', 'explanation'],
        ...rules
            .filter(rule => rule.count > 0)
            .map(rule => { var _a, _b, _c, _d; return [(_a = rule.severity) !== null && _a !== void 0 ? _a : '', (_b = rule.name) !== null && _b !== void 0 ? _b : '', (_c = `${rule.count}`) !== null && _c !== void 0 ? _c : '', (_d = rule.comment) !== null && _d !== void 0 ? _d : '']; })
    ], { align: 'l' })}
`;
}
function details(data) {
    const severityOrder = ['error', 'warn', 'info', 'ignore'];
    return severityOrder
        .map(severity => {
        const violations = data[severity];
        if (violations.length > 0) {
            return `### ${severity}

${markdown_table_1.markdownTable([['rule', 'from', 'to'], ...violations.map(violation => [violation.rule.name, violation.from, violation.to])], { align: 'l' })}
`;
        }
        else {
            return undefined;
        }
    })
        .filter(Boolean)
        .join('\n');
}
function render(data) {
    return `# Dependency check

## Summary
${summary(data.summary)}

<details>
<summary>View details</summary>

${details(data.details)}

</details>
`;
}
exports.render = render;


/***/ }),

/***/ 62:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

__nccwpck_require__.r(__webpack_exports__);
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "markdownTable": () => (/* binding */ markdownTable)
/* harmony export */ });
/* harmony import */ var repeat_string__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(976);


/**
 * @typedef MarkdownTableOptions
 * @property {string|string[]} [align]
 * @property {boolean} [padding=true]
 * @property {boolean} [delimiterStart=true]
 * @property {boolean} [delimiterStart=true]
 * @property {boolean} [delimiterEnd=true]
 * @property {boolean} [alignDelimiters=true]
 * @property {(value: string) => number} [stringLength]
 */

/**
 * Create a table from a matrix of strings.
 *
 * @param {string[][]} table
 * @param {MarkdownTableOptions} [options]
 * @returns {string}
 */
function markdownTable(table, options) {
  var settings = options || {}
  var align = (settings.align || []).concat()
  var stringLength = settings.stringLength || defaultStringLength
  /** @type {number[]} Character codes as symbols for alignment per column. */
  var alignments = []
  var rowIndex = -1
  /** @type {string[][]} Cells per row. */
  var cellMatrix = []
  /** @type {number[][]} Sizes of each cell per row. */
  var sizeMatrix = []
  /** @type {number[]} */
  var longestCellByColumn = []
  var mostCellsPerRow = 0
  /** @type {number} */
  var columnIndex
  /** @type {string[]} Cells of current row */
  var row
  /** @type {number[]} Sizes of current row */
  var sizes
  /** @type {number} Sizes of current cell */
  var size
  /** @type {string} Current cell */
  var cell
  /** @type {string[]} */
  var lines
  /** @type {string[]} Chunks of current line. */
  var line
  /** @type {string} */
  var before
  /** @type {string} */
  var after
  /** @type {number} */
  var code

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < table.length) {
    columnIndex = -1
    row = []
    sizes = []

    if (table[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table[rowIndex].length
    }

    while (++columnIndex < table[rowIndex].length) {
      cell = serialize(table[rowIndex][columnIndex])

      if (settings.alignDelimiters !== false) {
        size = stringLength(cell)
        sizes[columnIndex] = size

        if (
          longestCellByColumn[columnIndex] === undefined ||
          size > longestCellByColumn[columnIndex]
        ) {
          longestCellByColumn[columnIndex] = size
        }
      }

      row.push(cell)
    }

    cellMatrix[rowIndex] = row
    sizeMatrix[rowIndex] = sizes
  }

  // Figure out which alignments to use.
  columnIndex = -1

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex])
    }
  } else {
    code = toAlignment(align)

    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code
    }
  }

  // Inject the alignment row.
  columnIndex = -1
  row = []
  sizes = []

  while (++columnIndex < mostCellsPerRow) {
    code = alignments[columnIndex]
    before = ''
    after = ''

    if (code === 99 /* `c` */) {
      before = ':'
      after = ':'
    } else if (code === 108 /* `l` */) {
      before = ':'
    } else if (code === 114 /* `r` */) {
      after = ':'
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    size =
      settings.alignDelimiters === false
        ? 1
        : Math.max(
            1,
            longestCellByColumn[columnIndex] - before.length - after.length
          )

    cell = before + repeat_string__WEBPACK_IMPORTED_MODULE_0__('-', size) + after

    if (settings.alignDelimiters !== false) {
      size = before.length + size + after.length

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size
      }

      sizes[columnIndex] = size
    }

    row[columnIndex] = cell
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row)
  sizeMatrix.splice(1, 0, sizes)

  rowIndex = -1
  lines = []

  while (++rowIndex < cellMatrix.length) {
    row = cellMatrix[rowIndex]
    sizes = sizeMatrix[rowIndex]
    columnIndex = -1
    line = []

    while (++columnIndex < mostCellsPerRow) {
      cell = row[columnIndex] || ''
      before = ''
      after = ''

      if (settings.alignDelimiters !== false) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0)
        code = alignments[columnIndex]

        if (code === 114 /* `r` */) {
          before = repeat_string__WEBPACK_IMPORTED_MODULE_0__(' ', size)
        } else if (code === 99 /* `c` */) {
          if (size % 2) {
            before = repeat_string__WEBPACK_IMPORTED_MODULE_0__(' ', size / 2 + 0.5)
            after = repeat_string__WEBPACK_IMPORTED_MODULE_0__(' ', size / 2 - 0.5)
          } else {
            before = repeat_string__WEBPACK_IMPORTED_MODULE_0__(' ', size / 2)
            after = before
          }
        } else {
          after = repeat_string__WEBPACK_IMPORTED_MODULE_0__(' ', size)
        }
      }

      if (settings.delimiterStart !== false && !columnIndex) {
        line.push('|')
      }

      if (
        settings.padding !== false &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(settings.alignDelimiters === false && cell === '') &&
        (settings.delimiterStart !== false || columnIndex)
      ) {
        line.push(' ')
      }

      if (settings.alignDelimiters !== false) {
        line.push(before)
      }

      line.push(cell)

      if (settings.alignDelimiters !== false) {
        line.push(after)
      }

      if (settings.padding !== false) {
        line.push(' ')
      }

      if (
        settings.delimiterEnd !== false ||
        columnIndex !== mostCellsPerRow - 1
      ) {
        line.push('|')
      }
    }

    lines.push(
      settings.delimiterEnd === false
        ? line.join('').replace(/ +$/, '')
        : line.join('')
    )
  }

  return lines.join('\n')
}

/**
 * @param {string|null|undefined} [value]
 * @returns {string}
 */
function serialize(value) {
  return value === null || value === undefined ? '' : String(value)
}

/**
 * @param {string} value
 * @returns {number}
 */
function defaultStringLength(value) {
  return value.length
}

/**
 * @param {string} value
 * @returns {number}
 */
function toAlignment(value) {
  var code = typeof value === 'string' ? value.charCodeAt(0) : 0

  return code === 67 /* `C` */ || code === 99 /* `c` */
    ? 99 /* `c` */
    : code === 76 /* `L` */ || code === 108 /* `l` */
    ? 108 /* `l` */
    : code === 82 /* `R` */ || code === 114 /* `r` */
    ? 114 /* `r` */
    : 0
}


/***/ }),

/***/ 976:
/***/ ((module) => {

/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(346);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;