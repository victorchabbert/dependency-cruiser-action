require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5527:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadConfiguration = void 0;
const dependencyCruiserExports_1 = __nccwpck_require__(8520);
const object_1 = __nccwpck_require__(9547);
function configurationToFlattenedRuleSet(config) {
    const { forbidden, allowed, allowedSeverity, required } = config;
    const flattenedRuleSet = {
        forbidden: forbidden,
        allowed: allowed,
        allowedSeverity: allowedSeverity,
        required: required
    };
    return object_1.removeUndefinedTopLevelProperties(flattenedRuleSet);
}
function configurationToOptionalConfiguration(config) {
    const options = config.options;
    return object_1.removeUndefinedTopLevelProperties({
        doNotFollow: options === null || options === void 0 ? void 0 : options.doNotFollow,
        exclude: options === null || options === void 0 ? void 0 : options.exclude,
        includeOnly: options === null || options === void 0 ? void 0 : options.includeOnly,
        focus: options === null || options === void 0 ? void 0 : options.focus,
        collapse: options === null || options === void 0 ? void 0 : options.collapse,
        maxDepth: options === null || options === void 0 ? void 0 : options.maxDepth,
        moduleSystems: options === null || options === void 0 ? void 0 : options.moduleSystems,
        args: options === null || options === void 0 ? void 0 : options.args,
        baseDir: options === null || options === void 0 ? void 0 : options.baseDir,
        prefix: options === null || options === void 0 ? void 0 : options.prefix,
        preserveSymlinks: options === null || options === void 0 ? void 0 : options.preserveSymlinks,
        forceDeriveDependents: options === null || options === void 0 ? void 0 : options.forceDeriveDependents,
        combinedDependencies: options === null || options === void 0 ? void 0 : options.combinedDependencies,
        exoticRequireStrings: options === null || options === void 0 ? void 0 : options.exoticRequireStrings,
        reporterOptions: options === null || options === void 0 ? void 0 : options.reporterOptions,
        enhancedResolveOptions: options === null || options === void 0 ? void 0 : options.enhancedResolveOptions
    });
}
function configurationToCruiseOptions(rulesFile, config) {
    const ruleSet = configurationToFlattenedRuleSet(config);
    const optionalConfiguration = configurationToOptionalConfiguration(config);
    const cruiseConfiguration = Object.assign({ validate: true, ruleSet,
        rulesFile }, optionalConfiguration);
    return cruiseConfiguration;
}
function loadTsConfig(config) {
    var _a, _b;
    const tsConfigFile = (_b = (_a = config.options) === null || _a === void 0 ? void 0 : _a.tsConfig) === null || _b === void 0 ? void 0 : _b.fileName;
    if (tsConfigFile) {
        return dependencyCruiserExports_1.extractTSConfig(tsConfigFile);
    }
    else {
        return undefined;
    }
}
function loadWebpackResolveOptions(config) {
    var _a, _b, _c;
    const webpackConfigObject = (_a = config.options) === null || _a === void 0 ? void 0 : _a.webpackConfig;
    if (webpackConfigObject !== undefined && webpackConfigObject.fileName !== undefined) {
        return dependencyCruiserExports_1.extractWebackResolveConfig(webpackConfigObject.fileName, (_b = webpackConfigObject === null || webpackConfigObject === void 0 ? void 0 : webpackConfigObject.env) !== null && _b !== void 0 ? _b : undefined, (_c = webpackConfigObject === null || webpackConfigObject === void 0 ? void 0 : webpackConfigObject.arguments) !== null && _c !== void 0 ? _c : undefined);
    }
    else {
        return undefined;
    }
}
function loadBabelConfig(config) {
    var _a, _b;
    const babelFilePath = (_b = (_a = config.options) === null || _a === void 0 ? void 0 : _a.babelConfig) === null || _b === void 0 ? void 0 : _b.fileName;
    if (babelFilePath) {
        return dependencyCruiserExports_1.extractBabelConfig(babelFilePath);
    }
    else {
        return undefined;
    }
}
function loadConfiguration(path) {
    let depcruiseConfig;
    try {
        depcruiseConfig = dependencyCruiserExports_1.extractDepcruiseConfig(path);
        return {
            cruiseOptions: configurationToCruiseOptions(path, depcruiseConfig),
            webpackResolveOptions: loadWebpackResolveOptions(depcruiseConfig),
            tsConfig: loadTsConfig(depcruiseConfig),
            babelConfig: loadBabelConfig(depcruiseConfig)
        };
    }
    catch (e) {
        throw new ConfigurationError('Error loading configuration', e);
    }
}
exports.loadConfiguration = loadConfiguration;
class ConfigurationError extends Error {
    constructor(message, nested) {
        super(message);
        this.nested = nested;
        this.name = 'ConfigurationError';
    }
}


/***/ }),

/***/ 8520:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractBabelConfig = exports.extractWebackResolveConfig = exports.extractTSConfig = exports.extractDepcruiseConfig = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const extract_depcruise_config_1 = __importDefault(__nccwpck_require__(1569));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const extract_ts_config_1 = __importDefault(__nccwpck_require__(6694));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const extract_webpack_resolve_config_1 = __importDefault(__nccwpck_require__(6483));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const extract_babel_config_1 = __importDefault(__nccwpck_require__(7863));
function extractDepcruiseConfig(path) {
    return extract_depcruise_config_1.default(path);
}
exports.extractDepcruiseConfig = extractDepcruiseConfig;
function extractTSConfig(path) {
    return extract_ts_config_1.default(path);
}
exports.extractTSConfig = extractTSConfig;
function extractWebackResolveConfig(path, environment, args) {
    return extract_webpack_resolve_config_1.default(path, environment, args);
}
exports.extractWebackResolveConfig = extractWebackResolveConfig;
function extractBabelConfig(path) {
    return extract_babel_config_1.default(path);
}
exports.extractBabelConfig = extractBabelConfig;


/***/ }),

/***/ 3109:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const path_1 = __nccwpck_require__(5622);
const core = __importStar(__nccwpck_require__(2186));
const dependency_cruiser_1 = __nccwpck_require__(7291);
const configuration_1 = __nccwpck_require__(5527);
const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE = ['example'];
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let options;
            const config = core.getInput('config');
            try {
                options = configuration_1.loadConfiguration(config);
            }
            catch (e) {
                console.error(e);
                core.debug(e.toString());
                core.setFailed(e.message);
                process.exit(1);
            }
            const { cruiseOptions, webpackResolveOptions, tsConfig, babelConfig } = options;
            const cruiseResult = dependency_cruiser_1.futureCruise(ARRAY_OF_FILES_AND_DIRS_TO_CRUISE, Object.assign(Object.assign({}, cruiseOptions), { outputType: `plugin:${path_1.resolve(path_1.join(__dirname, './err-md'))}` }), webpackResolveOptions, { tsConfig, babelConfig });
            console.dir(cruiseResult.output, { depth: 10 });
        }
        catch (error) {
            console.error(error);
            core.debug(error);
            core.setFailed(error.message);
        }
    });
}
run();


/***/ }),

/***/ 9547:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeUndefinedTopLevelProperties = void 0;
function removeUndefinedTopLevelProperties(object) {
    return Object.entries(object).reduce((cleanedObject, [key, value]) => {
        if (value !== undefined) {
            return Object.assign(Object.assign({}, cleanedObject), { [key]: value });
        }
        return cleanedObject;
    }, {});
}
exports.removeUndefinedTopLevelProperties = removeUndefinedTopLevelProperties;


/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 1638:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const parse = __nccwpck_require__(2890)
const stringify = __nccwpck_require__(3116)

const JSON5 = {
    parse,
    stringify,
}

module.exports = JSON5


/***/ }),

/***/ 2890:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const util = __nccwpck_require__(1270)

let source
let parseState
let stack
let pos
let line
let column
let token
let key
let root

module.exports = function parse (text, reviver) {
    source = String(text)
    parseState = 'start'
    stack = []
    pos = 0
    line = 1
    column = 0
    token = undefined
    key = undefined
    root = undefined

    do {
        token = lex()

        // This code is unreachable.
        // if (!parseStates[parseState]) {
        //     throw invalidParseState()
        // }

        parseStates[parseState]()
    } while (token.type !== 'eof')

    if (typeof reviver === 'function') {
        return internalize({'': root}, '', reviver)
    }

    return root
}

function internalize (holder, name, reviver) {
    const value = holder[name]
    if (value != null && typeof value === 'object') {
        for (const key in value) {
            const replacement = internalize(value, key, reviver)
            if (replacement === undefined) {
                delete value[key]
            } else {
                value[key] = replacement
            }
        }
    }

    return reviver.call(holder, name, value)
}

let lexState
let buffer
let doubleQuote
let sign
let c

function lex () {
    lexState = 'default'
    buffer = ''
    doubleQuote = false
    sign = 1

    for (;;) {
        c = peek()

        // This code is unreachable.
        // if (!lexStates[lexState]) {
        //     throw invalidLexState(lexState)
        // }

        const token = lexStates[lexState]()
        if (token) {
            return token
        }
    }
}

function peek () {
    if (source[pos]) {
        return String.fromCodePoint(source.codePointAt(pos))
    }
}

function read () {
    const c = peek()

    if (c === '\n') {
        line++
        column = 0
    } else if (c) {
        column += c.length
    } else {
        column++
    }

    if (c) {
        pos += c.length
    }

    return c
}

const lexStates = {
    default () {
        switch (c) {
        case '\t':
        case '\v':
        case '\f':
        case ' ':
        case '\u00A0':
        case '\uFEFF':
        case '\n':
        case '\r':
        case '\u2028':
        case '\u2029':
            read()
            return

        case '/':
            read()
            lexState = 'comment'
            return

        case undefined:
            read()
            return newToken('eof')
        }

        if (util.isSpaceSeparator(c)) {
            read()
            return
        }

        // This code is unreachable.
        // if (!lexStates[parseState]) {
        //     throw invalidLexState(parseState)
        // }

        return lexStates[parseState]()
    },

    comment () {
        switch (c) {
        case '*':
            read()
            lexState = 'multiLineComment'
            return

        case '/':
            read()
            lexState = 'singleLineComment'
            return
        }

        throw invalidChar(read())
    },

    multiLineComment () {
        switch (c) {
        case '*':
            read()
            lexState = 'multiLineCommentAsterisk'
            return

        case undefined:
            throw invalidChar(read())
        }

        read()
    },

    multiLineCommentAsterisk () {
        switch (c) {
        case '*':
            read()
            return

        case '/':
            read()
            lexState = 'default'
            return

        case undefined:
            throw invalidChar(read())
        }

        read()
        lexState = 'multiLineComment'
    },

    singleLineComment () {
        switch (c) {
        case '\n':
        case '\r':
        case '\u2028':
        case '\u2029':
            read()
            lexState = 'default'
            return

        case undefined:
            read()
            return newToken('eof')
        }

        read()
    },

    value () {
        switch (c) {
        case '{':
        case '[':
            return newToken('punctuator', read())

        case 'n':
            read()
            literal('ull')
            return newToken('null', null)

        case 't':
            read()
            literal('rue')
            return newToken('boolean', true)

        case 'f':
            read()
            literal('alse')
            return newToken('boolean', false)

        case '-':
        case '+':
            if (read() === '-') {
                sign = -1
            }

            lexState = 'sign'
            return

        case '.':
            buffer = read()
            lexState = 'decimalPointLeading'
            return

        case '0':
            buffer = read()
            lexState = 'zero'
            return

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            buffer = read()
            lexState = 'decimalInteger'
            return

        case 'I':
            read()
            literal('nfinity')
            return newToken('numeric', Infinity)

        case 'N':
            read()
            literal('aN')
            return newToken('numeric', NaN)

        case '"':
        case "'":
            doubleQuote = (read() === '"')
            buffer = ''
            lexState = 'string'
            return
        }

        throw invalidChar(read())
    },

    identifierNameStartEscape () {
        if (c !== 'u') {
            throw invalidChar(read())
        }

        read()
        const u = unicodeEscape()
        switch (u) {
        case '$':
        case '_':
            break

        default:
            if (!util.isIdStartChar(u)) {
                throw invalidIdentifier()
            }

            break
        }

        buffer += u
        lexState = 'identifierName'
    },

    identifierName () {
        switch (c) {
        case '$':
        case '_':
        case '\u200C':
        case '\u200D':
            buffer += read()
            return

        case '\\':
            read()
            lexState = 'identifierNameEscape'
            return
        }

        if (util.isIdContinueChar(c)) {
            buffer += read()
            return
        }

        return newToken('identifier', buffer)
    },

    identifierNameEscape () {
        if (c !== 'u') {
            throw invalidChar(read())
        }

        read()
        const u = unicodeEscape()
        switch (u) {
        case '$':
        case '_':
        case '\u200C':
        case '\u200D':
            break

        default:
            if (!util.isIdContinueChar(u)) {
                throw invalidIdentifier()
            }

            break
        }

        buffer += u
        lexState = 'identifierName'
    },

    sign () {
        switch (c) {
        case '.':
            buffer = read()
            lexState = 'decimalPointLeading'
            return

        case '0':
            buffer = read()
            lexState = 'zero'
            return

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            buffer = read()
            lexState = 'decimalInteger'
            return

        case 'I':
            read()
            literal('nfinity')
            return newToken('numeric', sign * Infinity)

        case 'N':
            read()
            literal('aN')
            return newToken('numeric', NaN)
        }

        throw invalidChar(read())
    },

    zero () {
        switch (c) {
        case '.':
            buffer += read()
            lexState = 'decimalPoint'
            return

        case 'e':
        case 'E':
            buffer += read()
            lexState = 'decimalExponent'
            return

        case 'x':
        case 'X':
            buffer += read()
            lexState = 'hexadecimal'
            return
        }

        return newToken('numeric', sign * 0)
    },

    decimalInteger () {
        switch (c) {
        case '.':
            buffer += read()
            lexState = 'decimalPoint'
            return

        case 'e':
        case 'E':
            buffer += read()
            lexState = 'decimalExponent'
            return
        }

        if (util.isDigit(c)) {
            buffer += read()
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalPointLeading () {
        if (util.isDigit(c)) {
            buffer += read()
            lexState = 'decimalFraction'
            return
        }

        throw invalidChar(read())
    },

    decimalPoint () {
        switch (c) {
        case 'e':
        case 'E':
            buffer += read()
            lexState = 'decimalExponent'
            return
        }

        if (util.isDigit(c)) {
            buffer += read()
            lexState = 'decimalFraction'
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalFraction () {
        switch (c) {
        case 'e':
        case 'E':
            buffer += read()
            lexState = 'decimalExponent'
            return
        }

        if (util.isDigit(c)) {
            buffer += read()
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalExponent () {
        switch (c) {
        case '+':
        case '-':
            buffer += read()
            lexState = 'decimalExponentSign'
            return
        }

        if (util.isDigit(c)) {
            buffer += read()
            lexState = 'decimalExponentInteger'
            return
        }

        throw invalidChar(read())
    },

    decimalExponentSign () {
        if (util.isDigit(c)) {
            buffer += read()
            lexState = 'decimalExponentInteger'
            return
        }

        throw invalidChar(read())
    },

    decimalExponentInteger () {
        if (util.isDigit(c)) {
            buffer += read()
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    hexadecimal () {
        if (util.isHexDigit(c)) {
            buffer += read()
            lexState = 'hexadecimalInteger'
            return
        }

        throw invalidChar(read())
    },

    hexadecimalInteger () {
        if (util.isHexDigit(c)) {
            buffer += read()
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    string () {
        switch (c) {
        case '\\':
            read()
            buffer += escape()
            return

        case '"':
            if (doubleQuote) {
                read()
                return newToken('string', buffer)
            }

            buffer += read()
            return

        case "'":
            if (!doubleQuote) {
                read()
                return newToken('string', buffer)
            }

            buffer += read()
            return

        case '\n':
        case '\r':
            throw invalidChar(read())

        case '\u2028':
        case '\u2029':
            separatorChar(c)
            break

        case undefined:
            throw invalidChar(read())
        }

        buffer += read()
    },

    start () {
        switch (c) {
        case '{':
        case '[':
            return newToken('punctuator', read())

        // This code is unreachable since the default lexState handles eof.
        // case undefined:
        //     return newToken('eof')
        }

        lexState = 'value'
    },

    beforePropertyName () {
        switch (c) {
        case '$':
        case '_':
            buffer = read()
            lexState = 'identifierName'
            return

        case '\\':
            read()
            lexState = 'identifierNameStartEscape'
            return

        case '}':
            return newToken('punctuator', read())

        case '"':
        case "'":
            doubleQuote = (read() === '"')
            lexState = 'string'
            return
        }

        if (util.isIdStartChar(c)) {
            buffer += read()
            lexState = 'identifierName'
            return
        }

        throw invalidChar(read())
    },

    afterPropertyName () {
        if (c === ':') {
            return newToken('punctuator', read())
        }

        throw invalidChar(read())
    },

    beforePropertyValue () {
        lexState = 'value'
    },

    afterPropertyValue () {
        switch (c) {
        case ',':
        case '}':
            return newToken('punctuator', read())
        }

        throw invalidChar(read())
    },

    beforeArrayValue () {
        if (c === ']') {
            return newToken('punctuator', read())
        }

        lexState = 'value'
    },

    afterArrayValue () {
        switch (c) {
        case ',':
        case ']':
            return newToken('punctuator', read())
        }

        throw invalidChar(read())
    },

    end () {
        // This code is unreachable since it's handled by the default lexState.
        // if (c === undefined) {
        //     read()
        //     return newToken('eof')
        // }

        throw invalidChar(read())
    },
}

function newToken (type, value) {
    return {
        type,
        value,
        line,
        column,
    }
}

function literal (s) {
    for (const c of s) {
        const p = peek()

        if (p !== c) {
            throw invalidChar(read())
        }

        read()
    }
}

function escape () {
    const c = peek()
    switch (c) {
    case 'b':
        read()
        return '\b'

    case 'f':
        read()
        return '\f'

    case 'n':
        read()
        return '\n'

    case 'r':
        read()
        return '\r'

    case 't':
        read()
        return '\t'

    case 'v':
        read()
        return '\v'

    case '0':
        read()
        if (util.isDigit(peek())) {
            throw invalidChar(read())
        }

        return '\0'

    case 'x':
        read()
        return hexEscape()

    case 'u':
        read()
        return unicodeEscape()

    case '\n':
    case '\u2028':
    case '\u2029':
        read()
        return ''

    case '\r':
        read()
        if (peek() === '\n') {
            read()
        }

        return ''

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        throw invalidChar(read())

    case undefined:
        throw invalidChar(read())
    }

    return read()
}

function hexEscape () {
    let buffer = ''
    let c = peek()

    if (!util.isHexDigit(c)) {
        throw invalidChar(read())
    }

    buffer += read()

    c = peek()
    if (!util.isHexDigit(c)) {
        throw invalidChar(read())
    }

    buffer += read()

    return String.fromCodePoint(parseInt(buffer, 16))
}

function unicodeEscape () {
    let buffer = ''
    let count = 4

    while (count-- > 0) {
        const c = peek()
        if (!util.isHexDigit(c)) {
            throw invalidChar(read())
        }

        buffer += read()
    }

    return String.fromCodePoint(parseInt(buffer, 16))
}

const parseStates = {
    start () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        push()
    },

    beforePropertyName () {
        switch (token.type) {
        case 'identifier':
        case 'string':
            key = token.value
            parseState = 'afterPropertyName'
            return

        case 'punctuator':
            // This code is unreachable since it's handled by the lexState.
            // if (token.value !== '}') {
            //     throw invalidToken()
            // }

            pop()
            return

        case 'eof':
            throw invalidEOF()
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    afterPropertyName () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator' || token.value !== ':') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        parseState = 'beforePropertyValue'
    },

    beforePropertyValue () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        push()
    },

    beforeArrayValue () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        if (token.type === 'punctuator' && token.value === ']') {
            pop()
            return
        }

        push()
    },

    afterPropertyValue () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        switch (token.value) {
        case ',':
            parseState = 'beforePropertyName'
            return

        case '}':
            pop()
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    afterArrayValue () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        switch (token.value) {
        case ',':
            parseState = 'beforeArrayValue'
            return

        case ']':
            pop()
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    end () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'eof') {
        //     throw invalidToken()
        // }
    },
}

function push () {
    let value

    switch (token.type) {
    case 'punctuator':
        switch (token.value) {
        case '{':
            value = {}
            break

        case '[':
            value = []
            break
        }

        break

    case 'null':
    case 'boolean':
    case 'numeric':
    case 'string':
        value = token.value
        break

    // This code is unreachable.
    // default:
    //     throw invalidToken()
    }

    if (root === undefined) {
        root = value
    } else {
        const parent = stack[stack.length - 1]
        if (Array.isArray(parent)) {
            parent.push(value)
        } else {
            parent[key] = value
        }
    }

    if (value !== null && typeof value === 'object') {
        stack.push(value)

        if (Array.isArray(value)) {
            parseState = 'beforeArrayValue'
        } else {
            parseState = 'beforePropertyName'
        }
    } else {
        const current = stack[stack.length - 1]
        if (current == null) {
            parseState = 'end'
        } else if (Array.isArray(current)) {
            parseState = 'afterArrayValue'
        } else {
            parseState = 'afterPropertyValue'
        }
    }
}

function pop () {
    stack.pop()

    const current = stack[stack.length - 1]
    if (current == null) {
        parseState = 'end'
    } else if (Array.isArray(current)) {
        parseState = 'afterArrayValue'
    } else {
        parseState = 'afterPropertyValue'
    }
}

// This code is unreachable.
// function invalidParseState () {
//     return new Error(`JSON5: invalid parse state '${parseState}'`)
// }

// This code is unreachable.
// function invalidLexState (state) {
//     return new Error(`JSON5: invalid lex state '${state}'`)
// }

function invalidChar (c) {
    if (c === undefined) {
        return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
    }

    return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
}

function invalidEOF () {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
}

// This code is unreachable.
// function invalidToken () {
//     if (token.type === 'eof') {
//         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
//     }

//     const c = String.fromCodePoint(token.value.codePointAt(0))
//     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
// }

function invalidIdentifier () {
    column -= 5
    return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`)
}

function separatorChar (c) {
    console.warn(`JSON5: '${formatChar(c)}' in strings is not valid ECMAScript; consider escaping`)
}

function formatChar (c) {
    const replacements = {
        "'": "\\'",
        '"': '\\"',
        '\\': '\\\\',
        '\b': '\\b',
        '\f': '\\f',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t',
        '\v': '\\v',
        '\0': '\\0',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029',
    }

    if (replacements[c]) {
        return replacements[c]
    }

    if (c < ' ') {
        const hexString = c.charCodeAt(0).toString(16)
        return '\\x' + ('00' + hexString).substring(hexString.length)
    }

    return c
}

function syntaxError (message) {
    const err = new SyntaxError(message)
    err.lineNumber = line
    err.columnNumber = column
    return err
}


/***/ }),

/***/ 3116:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const util = __nccwpck_require__(1270)

module.exports = function stringify (value, replacer, space) {
    const stack = []
    let indent = ''
    let propertyList
    let replacerFunc
    let gap = ''
    let quote

    if (
        replacer != null &&
        typeof replacer === 'object' &&
        !Array.isArray(replacer)
    ) {
        space = replacer.space
        quote = replacer.quote
        replacer = replacer.replacer
    }

    if (typeof replacer === 'function') {
        replacerFunc = replacer
    } else if (Array.isArray(replacer)) {
        propertyList = []
        for (const v of replacer) {
            let item

            if (typeof v === 'string') {
                item = v
            } else if (
                typeof v === 'number' ||
                v instanceof String ||
                v instanceof Number
            ) {
                item = String(v)
            }

            if (item !== undefined && propertyList.indexOf(item) < 0) {
                propertyList.push(item)
            }
        }
    }

    if (space instanceof Number) {
        space = Number(space)
    } else if (space instanceof String) {
        space = String(space)
    }

    if (typeof space === 'number') {
        if (space > 0) {
            space = Math.min(10, Math.floor(space))
            gap = '          '.substr(0, space)
        }
    } else if (typeof space === 'string') {
        gap = space.substr(0, 10)
    }

    return serializeProperty('', {'': value})

    function serializeProperty (key, holder) {
        let value = holder[key]
        if (value != null) {
            if (typeof value.toJSON5 === 'function') {
                value = value.toJSON5(key)
            } else if (typeof value.toJSON === 'function') {
                value = value.toJSON(key)
            }
        }

        if (replacerFunc) {
            value = replacerFunc.call(holder, key, value)
        }

        if (value instanceof Number) {
            value = Number(value)
        } else if (value instanceof String) {
            value = String(value)
        } else if (value instanceof Boolean) {
            value = value.valueOf()
        }

        switch (value) {
        case null: return 'null'
        case true: return 'true'
        case false: return 'false'
        }

        if (typeof value === 'string') {
            return quoteString(value, false)
        }

        if (typeof value === 'number') {
            return String(value)
        }

        if (typeof value === 'object') {
            return Array.isArray(value) ? serializeArray(value) : serializeObject(value)
        }

        return undefined
    }

    function quoteString (value) {
        const quotes = {
            "'": 0.1,
            '"': 0.2,
        }

        const replacements = {
            "'": "\\'",
            '"': '\\"',
            '\\': '\\\\',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\v': '\\v',
            '\0': '\\0',
            '\u2028': '\\u2028',
            '\u2029': '\\u2029',
        }

        let product = ''

        for (let i = 0; i < value.length; i++) {
            const c = value[i]
            switch (c) {
            case "'":
            case '"':
                quotes[c]++
                product += c
                continue

            case '\0':
                if (util.isDigit(value[i + 1])) {
                    product += '\\x00'
                    continue
                }
            }

            if (replacements[c]) {
                product += replacements[c]
                continue
            }

            if (c < ' ') {
                let hexString = c.charCodeAt(0).toString(16)
                product += '\\x' + ('00' + hexString).substring(hexString.length)
                continue
            }

            product += c
        }

        const quoteChar = quote || Object.keys(quotes).reduce((a, b) => (quotes[a] < quotes[b]) ? a : b)

        product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar])

        return quoteChar + product + quoteChar
    }

    function serializeObject (value) {
        if (stack.indexOf(value) >= 0) {
            throw TypeError('Converting circular structure to JSON5')
        }

        stack.push(value)

        let stepback = indent
        indent = indent + gap

        let keys = propertyList || Object.keys(value)
        let partial = []
        for (const key of keys) {
            const propertyString = serializeProperty(key, value)
            if (propertyString !== undefined) {
                let member = serializeKey(key) + ':'
                if (gap !== '') {
                    member += ' '
                }
                member += propertyString
                partial.push(member)
            }
        }

        let final
        if (partial.length === 0) {
            final = '{}'
        } else {
            let properties
            if (gap === '') {
                properties = partial.join(',')
                final = '{' + properties + '}'
            } else {
                let separator = ',\n' + indent
                properties = partial.join(separator)
                final = '{\n' + indent + properties + ',\n' + stepback + '}'
            }
        }

        stack.pop()
        indent = stepback
        return final
    }

    function serializeKey (key) {
        if (key.length === 0) {
            return quoteString(key, true)
        }

        const firstChar = String.fromCodePoint(key.codePointAt(0))
        if (!util.isIdStartChar(firstChar)) {
            return quoteString(key, true)
        }

        for (let i = firstChar.length; i < key.length; i++) {
            if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
                return quoteString(key, true)
            }
        }

        return key
    }

    function serializeArray (value) {
        if (stack.indexOf(value) >= 0) {
            throw TypeError('Converting circular structure to JSON5')
        }

        stack.push(value)

        let stepback = indent
        indent = indent + gap

        let partial = []
        for (let i = 0; i < value.length; i++) {
            const propertyString = serializeProperty(String(i), value)
            partial.push((propertyString !== undefined) ? propertyString : 'null')
        }

        let final
        if (partial.length === 0) {
            final = '[]'
        } else {
            if (gap === '') {
                let properties = partial.join(',')
                final = '[' + properties + ']'
            } else {
                let separator = ',\n' + indent
                let properties = partial.join(separator)
                final = '[\n' + indent + properties + ',\n' + stepback + ']'
            }
        }

        stack.pop()
        indent = stepback
        return final
    }
}


/***/ }),

/***/ 279:
/***/ ((module) => {

// This is a generated file. Do not edit.
module.exports.Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/
module.exports.ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/
module.exports.ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/


/***/ }),

/***/ 1270:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const unicode = __nccwpck_require__(279)

module.exports = {
    isSpaceSeparator (c) {
        return typeof c === 'string' && unicode.Space_Separator.test(c)
    },

    isIdStartChar (c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c === '$') || (c === '_') ||
        unicode.ID_Start.test(c)
        )
    },

    isIdContinueChar (c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9') ||
        (c === '$') || (c === '_') ||
        (c === '\u200C') || (c === '\u200D') ||
        unicode.ID_Continue.test(c)
        )
    },

    isDigit (c) {
        return typeof c === 'string' && /[0-9]/.test(c)
    },

    isHexDigit (c) {
        return typeof c === 'string' && /[0-9A-Fa-f]/.test(c)
    },
}


/***/ }),

/***/ 4087:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getNative = __nccwpck_require__(180),
    root = __nccwpck_require__(8344);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 7418:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var hashClear = __nccwpck_require__(9341),
    hashDelete = __nccwpck_require__(7115),
    hashGet = __nccwpck_require__(2393),
    hashHas = __nccwpck_require__(8167),
    hashSet = __nccwpck_require__(8818);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 4314:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var listCacheClear = __nccwpck_require__(6263),
    listCacheDelete = __nccwpck_require__(6794),
    listCacheGet = __nccwpck_require__(2050),
    listCacheHas = __nccwpck_require__(3124),
    listCacheSet = __nccwpck_require__(348);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 3748:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getNative = __nccwpck_require__(180),
    root = __nccwpck_require__(8344);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 3979:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var mapCacheClear = __nccwpck_require__(7687),
    mapCacheDelete = __nccwpck_require__(1422),
    mapCacheGet = __nccwpck_require__(3451),
    mapCacheHas = __nccwpck_require__(318),
    mapCacheSet = __nccwpck_require__(105);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 2873:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getNative = __nccwpck_require__(180),
    root = __nccwpck_require__(8344);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 2994:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getNative = __nccwpck_require__(180),
    root = __nccwpck_require__(8344);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 331:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var MapCache = __nccwpck_require__(3979),
    setCacheAdd = __nccwpck_require__(1001),
    setCacheHas = __nccwpck_require__(1244);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 376:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var ListCache = __nccwpck_require__(4314),
    stackClear = __nccwpck_require__(8749),
    stackDelete = __nccwpck_require__(9839),
    stackGet = __nccwpck_require__(5898),
    stackHas = __nccwpck_require__(7645),
    stackSet = __nccwpck_require__(6359);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 4903:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var root = __nccwpck_require__(8344);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 2194:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var root = __nccwpck_require__(8344);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 1645:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getNative = __nccwpck_require__(180),
    root = __nccwpck_require__(8344);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 5474:
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 2397:
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 43:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 9581:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIndexOf = __nccwpck_require__(4895);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 7809:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 7954:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseTimes = __nccwpck_require__(8953),
    isArguments = __nccwpck_require__(98),
    isArray = __nccwpck_require__(3831),
    isBuffer = __nccwpck_require__(7875),
    isIndex = __nccwpck_require__(272),
    isTypedArray = __nccwpck_require__(5853);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 9971:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 9367:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 6222:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 7654:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseAssignValue = __nccwpck_require__(9700),
    eq = __nccwpck_require__(5525);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 566:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var eq = __nccwpck_require__(5525);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 1086:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var copyObject = __nccwpck_require__(6431),
    keys = __nccwpck_require__(2375);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 3145:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var copyObject = __nccwpck_require__(6431),
    keysIn = __nccwpck_require__(2280);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 9700:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var defineProperty = __nccwpck_require__(3985);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 3151:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Stack = __nccwpck_require__(376),
    arrayEach = __nccwpck_require__(2397),
    assignValue = __nccwpck_require__(7654),
    baseAssign = __nccwpck_require__(1086),
    baseAssignIn = __nccwpck_require__(3145),
    cloneBuffer = __nccwpck_require__(4276),
    copyArray = __nccwpck_require__(6553),
    copySymbols = __nccwpck_require__(6874),
    copySymbolsIn = __nccwpck_require__(1545),
    getAllKeys = __nccwpck_require__(4073),
    getAllKeysIn = __nccwpck_require__(9908),
    getTag = __nccwpck_require__(6708),
    initCloneArray = __nccwpck_require__(7125),
    initCloneByTag = __nccwpck_require__(8569),
    initCloneObject = __nccwpck_require__(4509),
    isArray = __nccwpck_require__(3831),
    isBuffer = __nccwpck_require__(7875),
    isMap = __nccwpck_require__(1943),
    isObject = __nccwpck_require__(7242),
    isSet = __nccwpck_require__(2346),
    keys = __nccwpck_require__(2375),
    keysIn = __nccwpck_require__(2280);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 2698:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isObject = __nccwpck_require__(7242);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 3931:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 8524:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var arrayPush = __nccwpck_require__(9367),
    isFlattenable = __nccwpck_require__(4120);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 86:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var castPath = __nccwpck_require__(4814),
    toKey = __nccwpck_require__(3491);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 6886:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var arrayPush = __nccwpck_require__(9367),
    isArray = __nccwpck_require__(3831);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 2609:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Symbol = __nccwpck_require__(4903),
    getRawTag = __nccwpck_require__(983),
    objectToString = __nccwpck_require__(7571);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 5976:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ 6025:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 4895:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseFindIndex = __nccwpck_require__(3931),
    baseIsNaN = __nccwpck_require__(1960),
    strictIndexOf = __nccwpck_require__(9856);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 5843:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGetTag = __nccwpck_require__(2609),
    isObjectLike = __nccwpck_require__(2124);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 5393:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsEqualDeep = __nccwpck_require__(9975),
    isObjectLike = __nccwpck_require__(2124);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 9975:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Stack = __nccwpck_require__(376),
    equalArrays = __nccwpck_require__(821),
    equalByTag = __nccwpck_require__(5632),
    equalObjects = __nccwpck_require__(2317),
    getTag = __nccwpck_require__(6708),
    isArray = __nccwpck_require__(3831),
    isBuffer = __nccwpck_require__(7875),
    isTypedArray = __nccwpck_require__(5853);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 6337:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getTag = __nccwpck_require__(6708),
    isObjectLike = __nccwpck_require__(2124);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 8231:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Stack = __nccwpck_require__(376),
    baseIsEqual = __nccwpck_require__(5393);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 1960:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 1761:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isFunction = __nccwpck_require__(2659),
    isMasked = __nccwpck_require__(6417),
    isObject = __nccwpck_require__(7242),
    toSource = __nccwpck_require__(5010);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 6681:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getTag = __nccwpck_require__(6708),
    isObjectLike = __nccwpck_require__(2124);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGetTag = __nccwpck_require__(2609),
    isLength = __nccwpck_require__(144),
    isObjectLike = __nccwpck_require__(2124);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 909:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseMatches = __nccwpck_require__(7940),
    baseMatchesProperty = __nccwpck_require__(7981),
    identity = __nccwpck_require__(1047),
    isArray = __nccwpck_require__(3831),
    property = __nccwpck_require__(6568);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 9050:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isPrototype = __nccwpck_require__(9496),
    nativeKeys = __nccwpck_require__(3552);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 6235:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isObject = __nccwpck_require__(7242),
    isPrototype = __nccwpck_require__(9496),
    nativeKeysIn = __nccwpck_require__(8229);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 7940:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsMatch = __nccwpck_require__(8231),
    getMatchData = __nccwpck_require__(1040),
    matchesStrictComparable = __nccwpck_require__(2163);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 7981:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsEqual = __nccwpck_require__(5393),
    get = __nccwpck_require__(1253),
    hasIn = __nccwpck_require__(3080),
    isKey = __nccwpck_require__(7059),
    isStrictComparable = __nccwpck_require__(3992),
    matchesStrictComparable = __nccwpck_require__(2163),
    toKey = __nccwpck_require__(3491);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 6486:
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 7538:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGet = __nccwpck_require__(86);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 5487:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var constant = __nccwpck_require__(3175),
    defineProperty = __nccwpck_require__(3985),
    identity = __nccwpck_require__(1047);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 6037:
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 8953:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 2961:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Symbol = __nccwpck_require__(4903),
    arrayMap = __nccwpck_require__(9971),
    isArray = __nccwpck_require__(3831),
    isSymbol = __nccwpck_require__(6547);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 4031:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 2787:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var SetCache = __nccwpck_require__(331),
    arrayIncludes = __nccwpck_require__(9581),
    arrayIncludesWith = __nccwpck_require__(7809),
    cacheHas = __nccwpck_require__(5966),
    createSet = __nccwpck_require__(5072),
    setToArray = __nccwpck_require__(3041);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 2605:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var castPath = __nccwpck_require__(4814),
    last = __nccwpck_require__(5560),
    parent = __nccwpck_require__(4803),
    toKey = __nccwpck_require__(3491);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 5966:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 4814:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isArray = __nccwpck_require__(3831),
    isKey = __nccwpck_require__(7059),
    stringToPath = __nccwpck_require__(4684),
    toString = __nccwpck_require__(90);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 5046:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Uint8Array = __nccwpck_require__(2194);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 4276:
/***/ ((module, exports, __nccwpck_require__) => {

/* module decorator */ module = __nccwpck_require__.nmd(module);
var root = __nccwpck_require__(8344);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ 1150:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var cloneArrayBuffer = __nccwpck_require__(5046);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 2625:
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 5408:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Symbol = __nccwpck_require__(4903);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 7286:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var cloneArrayBuffer = __nccwpck_require__(5046);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 6553:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 6431:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var assignValue = __nccwpck_require__(7654),
    baseAssignValue = __nccwpck_require__(9700);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 6874:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var copyObject = __nccwpck_require__(6431),
    getSymbols = __nccwpck_require__(7555);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 1545:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var copyObject = __nccwpck_require__(6431),
    getSymbolsIn = __nccwpck_require__(1758);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 2519:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var root = __nccwpck_require__(8344);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 5072:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Set = __nccwpck_require__(2994),
    noop = __nccwpck_require__(6350),
    setToArray = __nccwpck_require__(3041);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 9082:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isPlainObject = __nccwpck_require__(3135);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 3985:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getNative = __nccwpck_require__(180);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 821:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var SetCache = __nccwpck_require__(331),
    arraySome = __nccwpck_require__(6222),
    cacheHas = __nccwpck_require__(5966);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 5632:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Symbol = __nccwpck_require__(4903),
    Uint8Array = __nccwpck_require__(2194),
    eq = __nccwpck_require__(5525),
    equalArrays = __nccwpck_require__(821),
    mapToArray = __nccwpck_require__(5375),
    setToArray = __nccwpck_require__(3041);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 2317:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getAllKeys = __nccwpck_require__(4073);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 8841:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var flatten = __nccwpck_require__(1546),
    overRest = __nccwpck_require__(813),
    setToString = __nccwpck_require__(7549);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 1589:
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ 4073:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGetAllKeys = __nccwpck_require__(6886),
    getSymbols = __nccwpck_require__(7555),
    keys = __nccwpck_require__(2375);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 9908:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGetAllKeys = __nccwpck_require__(6886),
    getSymbolsIn = __nccwpck_require__(1758),
    keysIn = __nccwpck_require__(2280);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 8403:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isKeyable = __nccwpck_require__(2933);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 1040:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isStrictComparable = __nccwpck_require__(3992),
    keys = __nccwpck_require__(2375);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 180:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsNative = __nccwpck_require__(1761),
    getValue = __nccwpck_require__(9667);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 629:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var overArg = __nccwpck_require__(5454);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 983:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Symbol = __nccwpck_require__(4903);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 7555:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var arrayFilter = __nccwpck_require__(43),
    stubArray = __nccwpck_require__(7774);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 1758:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var arrayPush = __nccwpck_require__(9367),
    getPrototype = __nccwpck_require__(629),
    getSymbols = __nccwpck_require__(7555),
    stubArray = __nccwpck_require__(7774);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 6708:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var DataView = __nccwpck_require__(4087),
    Map = __nccwpck_require__(3748),
    Promise = __nccwpck_require__(2873),
    Set = __nccwpck_require__(2994),
    WeakMap = __nccwpck_require__(1645),
    baseGetTag = __nccwpck_require__(2609),
    toSource = __nccwpck_require__(5010);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 9667:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 8768:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var castPath = __nccwpck_require__(4814),
    isArguments = __nccwpck_require__(98),
    isArray = __nccwpck_require__(3831),
    isIndex = __nccwpck_require__(272),
    isLength = __nccwpck_require__(144),
    toKey = __nccwpck_require__(3491);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 9341:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var nativeCreate = __nccwpck_require__(5995);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 7115:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 2393:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var nativeCreate = __nccwpck_require__(5995);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 8167:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var nativeCreate = __nccwpck_require__(5995);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 8818:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var nativeCreate = __nccwpck_require__(5995);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 7125:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 8569:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var cloneArrayBuffer = __nccwpck_require__(5046),
    cloneDataView = __nccwpck_require__(1150),
    cloneRegExp = __nccwpck_require__(2625),
    cloneSymbol = __nccwpck_require__(5408),
    cloneTypedArray = __nccwpck_require__(7286);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 4509:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseCreate = __nccwpck_require__(2698),
    getPrototype = __nccwpck_require__(629),
    isPrototype = __nccwpck_require__(9496);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 4120:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Symbol = __nccwpck_require__(4903),
    isArguments = __nccwpck_require__(98),
    isArray = __nccwpck_require__(3831);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 272:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 7059:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isArray = __nccwpck_require__(3831),
    isSymbol = __nccwpck_require__(6547);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 2933:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 6417:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var coreJsData = __nccwpck_require__(2519);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 9496:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 3992:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isObject = __nccwpck_require__(7242);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 6263:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 6794:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var assocIndexOf = __nccwpck_require__(566);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 2050:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var assocIndexOf = __nccwpck_require__(566);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 3124:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var assocIndexOf = __nccwpck_require__(566);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 348:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var assocIndexOf = __nccwpck_require__(566);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 7687:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Hash = __nccwpck_require__(7418),
    ListCache = __nccwpck_require__(4314),
    Map = __nccwpck_require__(3748);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 1422:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getMapData = __nccwpck_require__(8403);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 3451:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getMapData = __nccwpck_require__(8403);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 318:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getMapData = __nccwpck_require__(8403);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 105:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getMapData = __nccwpck_require__(8403);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 5375:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 2163:
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 7971:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var memoize = __nccwpck_require__(1351);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 5995:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var getNative = __nccwpck_require__(180);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 3552:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var overArg = __nccwpck_require__(5454);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 8229:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 1841:
/***/ ((module, exports, __nccwpck_require__) => {

/* module decorator */ module = __nccwpck_require__.nmd(module);
var freeGlobal = __nccwpck_require__(1589);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 7571:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 5454:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 813:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var apply = __nccwpck_require__(5474);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 4803:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGet = __nccwpck_require__(86),
    baseSlice = __nccwpck_require__(6037);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 8344:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var freeGlobal = __nccwpck_require__(1589);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 1001:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 1244:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 3041:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 7549:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseSetToString = __nccwpck_require__(5487),
    shortOut = __nccwpck_require__(267);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 267:
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 8749:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var ListCache = __nccwpck_require__(4314);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 9839:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 5898:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 7645:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 6359:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var ListCache = __nccwpck_require__(4314),
    Map = __nccwpck_require__(3748),
    MapCache = __nccwpck_require__(3979);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 9856:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 4684:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var memoizeCapped = __nccwpck_require__(7971);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 3491:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isSymbol = __nccwpck_require__(6547);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 5010:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 3175:
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 5525:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 1546:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseFlatten = __nccwpck_require__(8524);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 1253:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGet = __nccwpck_require__(86);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 558:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseHas = __nccwpck_require__(5976),
    hasPath = __nccwpck_require__(8768);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ 3080:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseHasIn = __nccwpck_require__(6025),
    hasPath = __nccwpck_require__(8768);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 1047:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 98:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsArguments = __nccwpck_require__(5843),
    isObjectLike = __nccwpck_require__(2124);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 3831:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 3960:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isFunction = __nccwpck_require__(2659),
    isLength = __nccwpck_require__(144);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 7875:
/***/ ((module, exports, __nccwpck_require__) => {

/* module decorator */ module = __nccwpck_require__.nmd(module);
var root = __nccwpck_require__(8344),
    stubFalse = __nccwpck_require__(8703);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 2659:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGetTag = __nccwpck_require__(2609),
    isObject = __nccwpck_require__(7242);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 144:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 1943:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsMap = __nccwpck_require__(6337),
    baseUnary = __nccwpck_require__(4031),
    nodeUtil = __nccwpck_require__(1841);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 7242:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 2124:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 3135:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGetTag = __nccwpck_require__(2609),
    getPrototype = __nccwpck_require__(629),
    isObjectLike = __nccwpck_require__(2124);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 2346:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsSet = __nccwpck_require__(6681),
    baseUnary = __nccwpck_require__(4031),
    nodeUtil = __nccwpck_require__(1841);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 6547:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseGetTag = __nccwpck_require__(2609),
    isObjectLike = __nccwpck_require__(2124);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 5853:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIsTypedArray = __nccwpck_require__(9525),
    baseUnary = __nccwpck_require__(4031),
    nodeUtil = __nccwpck_require__(1841);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 2375:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var arrayLikeKeys = __nccwpck_require__(7954),
    baseKeys = __nccwpck_require__(9050),
    isArrayLike = __nccwpck_require__(3960);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 2280:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var arrayLikeKeys = __nccwpck_require__(7954),
    baseKeysIn = __nccwpck_require__(6235),
    isArrayLike = __nccwpck_require__(3960);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 5560:
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 1351:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var MapCache = __nccwpck_require__(3979);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 6350:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 5924:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var arrayMap = __nccwpck_require__(9971),
    baseClone = __nccwpck_require__(3151),
    baseUnset = __nccwpck_require__(2605),
    castPath = __nccwpck_require__(4814),
    copyObject = __nccwpck_require__(6431),
    customOmitClone = __nccwpck_require__(9082),
    flatRest = __nccwpck_require__(8841),
    getAllKeysIn = __nccwpck_require__(9908);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 6568:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseProperty = __nccwpck_require__(6486),
    basePropertyDeep = __nccwpck_require__(7538),
    isKey = __nccwpck_require__(7059),
    toKey = __nccwpck_require__(3491);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 7774:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 8703:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 90:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseToString = __nccwpck_require__(2961);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 8039:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseIteratee = __nccwpck_require__(909),
    baseUniq = __nccwpck_require__(2787);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ 1335:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var baseUniq = __nccwpck_require__(2787);

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The order of result values is
 * determined by the order they occur in the array.The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
}

module.exports = uniqWith;


/***/ }),

/***/ 7863:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/* eslint-disable security/detect-non-literal-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable node/global-require */
const fs = __nccwpck_require__(5747);
const path = __nccwpck_require__(5622);
const json5 = __nccwpck_require__(1638);
const _get = __nccwpck_require__(1253);
const _has = __nccwpck_require__(558);
const tryRequire = __nccwpck_require__(5834);
const $package = __nccwpck_require__(8275);
const makeAbsolute = __nccwpck_require__(4872);

function getCommonJSConfig(pBabelConfigFileName) {
  let lReturnValue = {};

  try {
    lReturnValue = require(makeAbsolute(pBabelConfigFileName));
  } catch (pError) {
    throw new Error(
      `Encountered an error while parsing babel config '${pBabelConfigFileName}':` +
        `\n\n          ${pError}` +
        "\n\n         At this time dependency-cruiser only supports babel configurations\n" +
        "         in either commonjs or json5.\n"
    );
  }

  if (typeof lReturnValue === "function") {
    // Function format configs not supported yet. Will need calling the
    // function with a bunch of params (lReturnValue = lReturnValue(APIPAPI))
    throw new TypeError(
      `The babel config '${pBabelConfigFileName}' returns a function. At this time\n` +
        `         dependency-cruiser doesn't support that yet.`
    );
  }
  return lReturnValue;
}

function getJSON5Config(pBabelConfigFileName) {
  let lReturnValue = {};

  try {
    lReturnValue = json5.parse(fs.readFileSync(pBabelConfigFileName, "utf8"));
  } catch (pError) {
    throw new Error(
      `Encountered an error while parsing the babel config '${pBabelConfigFileName}':` +
        `\n\n          ${pError}\n`
    );
  }

  if (pBabelConfigFileName.endsWith("package.json")) {
    lReturnValue = _get(lReturnValue, "babel", {});
  }
  return lReturnValue;
}

function getConfig(pBabelConfigFileName) {
  const lExtensionToParseFunction = {
    ".js": getCommonJSConfig,
    ".cjs": getCommonJSConfig,
    "": getJSON5Config,
    ".json": getJSON5Config,
    ".json5": getJSON5Config,
  };
  const lExtension = path.extname(pBabelConfigFileName);

  if (!_has(lExtensionToParseFunction, lExtension)) {
    throw new Error(
      `The babel config '${pBabelConfigFileName}' is in a format ('${lExtension}')\n` +
        "         dependency-cruiser doesn't support yet.\n"
    );
  }
  // eslint-disable-next-line security/detect-object-injection
  return lExtensionToParseFunction[lExtension](pBabelConfigFileName);
}

/**
 * Reads the file with name `pBabelConfigFileName` and returns its parsed
 * contents as an object
 *
 * Silently fails if a supported @babel/core version can't be found
 *
 * @param {string} pBabelConfigFileName
 * @return {any} babel config as an object
 * @throws {Error} when the babel config has an unknown extension OR
 *                 when the babel config is invalid OR
 *                 when dependency-cruiser can't yet process it
 */
module.exports = function extractBabelConfig(pBabelConfigFileName) {
  let lReturnValue = {};
  const babel = tryRequire("@babel/core", $package.supportedTranspilers.babel);

  /* istanbul ignore else */
  if (babel) {
    const lConfig = {
      ...getConfig(pBabelConfigFileName),
      // under some circumstances babel (and/ or its plugins) really likes to
      // have a filename to go with the config - so we pass it
      filename: pBabelConfigFileName,
    };
    lReturnValue = {
      ...babel.loadOptions(lConfig),
      // according to the babel documentation a config parsed & expanded through
      // loadOptions can be passed to the parser. With some plugins/ presets
      // this does not seem to be true anymore, though
      ...(lConfig.presets ? { presets: lConfig.presets } : {}),
    };
  }

  return lReturnValue;
};


/***/ }),

/***/ 1569:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const path = __nccwpck_require__(5622);
const _has = __nccwpck_require__(558);
const resolve = __nccwpck_require__(2764);
const normalizeResolveOptions = __nccwpck_require__(6938);
const readConfig = __nccwpck_require__(3072);
const mergeConfigs = __nccwpck_require__(4813);

/* eslint no-use-before-define: 0 */
function processExtends(pReturnValue, pAlreadyVisited, pBaseDirectory) {
  if (typeof pReturnValue.extends === "string") {
    pReturnValue = mergeConfigs(
      pReturnValue,
      extractDepcruiseConfig(
        pReturnValue.extends,
        pAlreadyVisited,
        pBaseDirectory
      )
    );
  }

  if (Array.isArray(pReturnValue.extends)) {
    pReturnValue = pReturnValue.extends.reduce(
      (pAll, pExtends) =>
        mergeConfigs(
          pAll,
          extractDepcruiseConfig(pExtends, pAlreadyVisited, pBaseDirectory)
        ),
      pReturnValue
    );
  }
  Reflect.deleteProperty(pReturnValue, "extends");
  return pReturnValue;
}

/**
 * Reads the file with name `pConfigFileName` returns the parsed cruise
 * options.
 *
 * You can safely ignore the optional parameters. Simply this should work (given
 * `.dependency-cruiser.js` exists and contains a valid dependency-cruiser config)
 *
 * ```javascript
 * const depcruiseConfig = extractDepcruiseConfig("./.dependency-cruiser.js")
 * ```
 *
 * @param {string} pConfigFileName
 * @param {Set?} pAlreadyVisited
 * @param {string?} pBaseDirectory
 * @return {import('../../../types/options').ICruiseOptions} dependency-cruiser options
 * @throws {Error} when the config is not valid (/ does not exist/ isn't readable)
 */
function extractDepcruiseConfig(
  pConfigFileName,
  pAlreadyVisited = new Set(),
  pBaseDirectory = process.cwd()
) {
  const lResolvedFileName = resolve(
    pConfigFileName,
    pBaseDirectory,
    normalizeResolveOptions(
      {
        extensions: [".js", ".json"],
      },
      {}
    ),
    "cli"
  );
  const lBaseDirectory = path.dirname(lResolvedFileName);

  if (pAlreadyVisited.has(lResolvedFileName)) {
    throw new Error(
      `config is circular - ${[...pAlreadyVisited].join(
        " -> "
      )} -> ${lResolvedFileName}.\n`
    );
  }
  pAlreadyVisited.add(lResolvedFileName);

  let lReturnValue = readConfig(lResolvedFileName, pBaseDirectory);

  if (_has(lReturnValue, "extends")) {
    lReturnValue = processExtends(
      lReturnValue,
      pAlreadyVisited,
      lBaseDirectory
    );
  }

  return lReturnValue;
}

module.exports = extractDepcruiseConfig;


/***/ }),

/***/ 4813:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const util = __nccwpck_require__(1669);
const _get = __nccwpck_require__(1253);
const _uniqBy = __nccwpck_require__(8039);
const _uniqWith = __nccwpck_require__(1335);

function extendNamedRule(pExtendedRule, pForbiddenArrayBase) {
  return pForbiddenArrayBase
    .filter((pBaseRule) => pBaseRule.name === pExtendedRule.name)
    .reduce(
      (pAll, pBaseRule) => ({
        ...pBaseRule,
        ...pAll,
      }),
      pExtendedRule
    );
}

/**
 * Extends the given pForbiddenArrayBase with the pForbiddenArrayExtended.
 *
 * Conflict resolution:
 * - if the rule is anonymous: unique on the complete content of the rule
 * - if the rule has a name: unique by that name (where the same name
 *   rules get merged, where individual attributes of the named rules
 *   in pForbiddenArrayExtended win)
 *
 * @param {*} pRuleArrayExtended - array of 'fobidden' rules that extend the ...
 * @param {*} pRuleArrayBase - array of 'forbidden' rules to extend
 *
 * @return {Array} - the merged array
 */
function mergeRules(pRuleArrayExtended, pRuleArrayBase) {
  // merge anonymous on 100% equality
  let lAnonymousRules = _uniqWith(
    pRuleArrayExtended.concat(pRuleArrayBase).filter((pRule) => !pRule.name),
    util.isDeepStrictEqual
  );

  let lNamedRules = pRuleArrayExtended
    .filter((pRule) => pRule.name)
    .map((pNamedRule) => extendNamedRule(pNamedRule, pRuleArrayBase));

  // merge named rules based on unique name
  lNamedRules = _uniqBy(
    // ordered extended => base because the uniqBy picks the
    // first it encounters and we want the ones from the
    // extended in case of a conflict

    // the other concats (anonymous, allowed) don't need it
    // but have it to be consistent with this
    lNamedRules.concat(pRuleArrayBase).filter((pRule) => pRule.name),
    (pRule) => pRule.name
  );

  return lNamedRules.concat(lAnonymousRules);
}

/**
 * Extends the given pAllowedArrayBase with the pAllowedArrayExtended.
 *
 * Conflict resolution: unique on the complete content of the rule
 *
 * @param {*} pAllowedArrayExtended - array of 'allowed' rules that extend the ///
 * @param {*} pAllowedArrayBase - array of 'allowed' rules to extend
 *
 * @return {Array} - the merged array
 */
function mergeAllowedRules(pAllowedArrayExtended, pAllowedArrayBase) {
  return _uniqWith(
    pAllowedArrayExtended.concat(pAllowedArrayBase),
    util.isDeepStrictEqual
  );
}

function mergeOptions(pOptionsExtended, pOptionsBase) {
  // TODO: make implementation less naive (?)
  return { ...pOptionsBase, ...pOptionsExtended };
}

/**
 * returns the severity for the allowed rule - and "warn" if neither
 * passed dependency-cruiser configs contain it.
 *
 * @param {*} pConfigExtended - a dependency-cruiser-config that extends ...
 * @param {*} pConfigBase - a base dependency-cruiser-config
 *
 * @returns {string} - a string from the SeverityType value set
 */
function mergeAllowedSeverities(pConfigExtended, pConfigBase) {
  return _get(
    pConfigExtended,
    "allowedSeverity",
    _get(pConfigBase, "allowedSeverity", "warn")
  );
}

/**
 * Merges the extended rule set into the base:
 *
 * - forbidden and allowed rules arrays get concat'ed and uniq'd
 * - named forbidden rules from the extended set 'win' from the ones
 *   with the same in name in the base set
 * - for the allowedSeverity the extended one 'wins' - if none is present it
 *   gets to be 'warn'
 * - options get simply object assigned
 * @param {*} pConfigExtended - a dependency-cruiser-config that extends ...
 * @param {*} pConfigBase - a base dependency-cruiser-config
 *
 * @returns {Object} - The merged rule set
 */
module.exports = (pConfigExtended, pConfigBase) => {
  const lForbidden = mergeRules(
    _get(pConfigExtended, "forbidden", []),
    _get(pConfigBase, "forbidden", [])
  );
  const lRequired = mergeRules(
    _get(pConfigExtended, "required", []),
    _get(pConfigBase, "required", [])
  );
  const lAllowed = mergeAllowedRules(
    _get(pConfigExtended, "allowed", []),
    _get(pConfigBase, "allowed", [])
  );

  return {
    ...(lForbidden.length > 0 ? { forbidden: lForbidden } : {}),
    ...(lRequired.length > 0 ? { required: lRequired } : {}),
    ...(lAllowed.length > 0
      ? {
          allowed: lAllowed,
          allowedSeverity: mergeAllowedSeverities(pConfigExtended, pConfigBase),
        }
      : {}),
    options: mergeOptions(
      _get(pConfigExtended, "options", {}),
      _get(pConfigBase, "options", {})
    ),
  };
};


/***/ }),

/***/ 3072:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const fs = __nccwpck_require__(5747);
const path = __nccwpck_require__(5622);
const json5 = __nccwpck_require__(1638);

module.exports = (pConfigFileName) => {
  if ([".js", ""].includes(path.extname(pConfigFileName))) {
    /* eslint node/global-require:0, security/detect-non-literal-require:0, import/no-dynamic-require:0 */
    return require(pConfigFileName);
  }

  return json5.parse(fs.readFileSync(pConfigFileName, "utf8"));
};


/***/ }),

/***/ 6694:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const path = __nccwpck_require__(5622);
const tryRequire = __nccwpck_require__(5834);
const _get = __nccwpck_require__(1253);
const $package = __nccwpck_require__(8275);

const typescript = tryRequire(
  "typescript",
  _get($package, "supportedTranspilers.typescript", null)
);

const FORMAT_DIAGNOSTICS_HOST = {
  getCanonicalFileName(pFileName) {
    let lReturnValue = pFileName.toLowerCase();

    /* istanbul ignore next - depends on the platform which branch is taken */
    if (_get(typescript, "sys.useCaseSensitiveFileNames", false)) {
      lReturnValue = pFileName;
    }
    return lReturnValue;
  },
  getCurrentDirectory() {
    return process.cwd();
  },
  getNewLine() {
    return "\n";
  },
};

/**
 * Reads the file with name `pTSConfigFileName` and returns its parsed
 * contents as an object
 *
 * Silently fails if a supported version of the typescript compiler isn't available
 *
 * @param {string} pTSConfigFileName
 * @return {any} tsconfig as an object
 * @throws {Error} when the tsconfig is invalid/ jas errors
 * @throws {TypeError} when the tsconfig is unreadable
 */
module.exports = function extractTSConfig(pTSConfigFileName) {
  let lReturnValue = {};

  /* istanbul ignore else */
  if (typescript) {
    const lConfig = typescript.readConfigFile(
      pTSConfigFileName,
      typescript.sys.readFile
    );

    if (typeof lConfig.error !== "undefined") {
      throw new TypeError(
        typescript.formatDiagnostics([lConfig.error], FORMAT_DIAGNOSTICS_HOST)
      );
    }
    lReturnValue = typescript.parseJsonConfigFileContent(
      lConfig.config,
      typescript.sys,
      path.dirname(pTSConfigFileName),
      {},
      pTSConfigFileName
    );

    if (lReturnValue.errors.length > 0) {
      throw new Error(
        typescript.formatDiagnostics(
          lReturnValue.errors,
          FORMAT_DIAGNOSTICS_HOST
        )
      );
    }
    // lRetval.fileNames; // all files included in the project
    // lRetval.options; // CompilerOptions
  }

  return lReturnValue;
};


/***/ }),

/***/ 6483:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const makeAbsolute = __nccwpck_require__(4872);

function pryConfigFromTheConfig(
  pWebpackConfigModule,
  pEnvironment,
  pArguments
) {
  let lReturnValue = pWebpackConfigModule;

  if (typeof pWebpackConfigModule === "function") {
    lReturnValue = pWebpackConfigModule(pEnvironment, pArguments);
  }

  if (Array.isArray(pWebpackConfigModule)) {
    lReturnValue = pryConfigFromTheConfig(
      pWebpackConfigModule[0],
      pEnvironment,
      pArguments
    );
  }

  return lReturnValue;
}

/**
 * Reads the file with name `pWebpackConfigFilename` and (applying the
 * environment `pEnvironment` and the arguments `pArguments` (which can
 * either be a string or a keys-values object)) returns the resolve config
 * from it as an object.
 *
 * @param {string} pWebpackConfigFilename
 * @param {string=} pEnvironment
 * @param {string|any=} pArguments
 * @return {any} webpack resolve config as an object
 * @throws {Error} when the webpack config isn't usable (e.g. because it
 *                 doesn't exist, or because it's invalid)
 */
module.exports = function extractWebpackResolveConfig(
  pWebpackConfigFilename,
  pEnvironment,
  pArguments
) {
  let lReturnValue = {};

  try {
    /* eslint node/global-require:0, security/detect-non-literal-require:0, import/no-dynamic-require:0 */
    const lWebpackConfigModule = require(makeAbsolute(pWebpackConfigFilename));
    const lWebpackConfig = pryConfigFromTheConfig(
      lWebpackConfigModule,
      pEnvironment,
      pArguments
    );

    if (lWebpackConfig.resolve) {
      lReturnValue = lWebpackConfig.resolve;
    }
  } catch (pError) {
    throw new Error(
      `The webpack config '${pWebpackConfigFilename}' seems to be not quite valid for use:` +
        `\n\n          "${pError}"\n`
    );
  }

  return lReturnValue;
};


/***/ }),

/***/ 4872:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const path = __nccwpck_require__(5622);

module.exports = (pFilename) => {
  let lReturnValue = pFilename;

  if (!path.isAbsolute(pFilename)) {
    lReturnValue = path.join(process.cwd(), pFilename);
  }
  return lReturnValue;
};


/***/ }),

/***/ 5570:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const tryRequire = __nccwpck_require__(5834);
const _memoize = __nccwpck_require__(1351);
/** @type {import('@swc/core')} */
const swc = tryRequire(
  "@swc/core",
  __nccwpck_require__(8275).supportedTranspilers.swc
);

const SWC_PARSE_OPTIONS = {
  dynamicImport: true,
  // TODO: use ecmascript when it's an ecmascript-ish extension (or as
  // typescript is a superset of ecmascript => typescript always?)
  syntax: "typescript",
  // target doesn't have effect on parsing it seems
  target: "es2020",
  // TODO jsx
};

function getASTFromSource(pSource) {
  return swc.parseSync(pSource, SWC_PARSE_OPTIONS);
}

function getAST(pFileName) {
  return swc.parseFileSync(pFileName, SWC_PARSE_OPTIONS);
}

const getASTCached = _memoize(getAST);

function clearCache() {
  getASTCached.cache.clear();
}

module.exports = {
  getASTFromSource,

  /**
   * @return {boolean} - true if the swc compiler is available,
   *                     false in all other cases
   */
  isAvailable: () => swc !== false,

  /**
   * Compiles the file identified by pFileName into an (swc)
   * AST and returns it. Subsequent calls for the same file name will
   * return the result from a cache
   *
   * @param {string} pFileName - the name of the file to compile
   * @return {import('@swc/core').ModuleItem[]} - an (swc) AST
   */
  getASTCached,

  clearCache,
};


/***/ }),

/***/ 2764:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const enhancedResolve = __nccwpck_require__(453);
const pathToPosix = __nccwpck_require__(5884);
const stripQueryParameters = __nccwpck_require__(6593);

let gResolvers = {};
let gInitialized = {};

function init(pResolveOptions, pCachingContext) {
  if (!gInitialized[pCachingContext] || pResolveOptions.bustTheCache) {
    // assuming the cached file system here
    pResolveOptions.fileSystem.purge();
    gResolvers[
      pCachingContext
    ] = enhancedResolve.ResolverFactory.createResolver({
      ...pResolveOptions,
      // we're doing that ourselves for now. We can't set this in
      // 'normalize' because we actively use resolveOptions.symlinks
      // with our own symlink resolution thing, so we need to override
      // it here locally so even when it is passed as true we skip
      // ehr's capabilities in this and still do it ourselves.
      symlinks: false,
    });
    /* eslint security/detect-object-injection:0 */
    gInitialized[pCachingContext] = true;
  }
}

/**
 * Resolves the given module to a path to a file on disk.
 *
 * @param {string} pModuleName The module name to resolve (e.g. 'slodash', './myModule')
 * @param {string} pFileDirectory The directory from which to resolve the module
 * @param {any} pResolveOptions Options to pass to enhanced resolve
 * @param {any} pCachingContext - caching
 *
 * @returns {string} path to the resolved file on disk
 */
function resolve(
  pModuleName,
  pFileDirectory,
  pResolveOptions,
  pCachingContext = "cruise"
) {
  init(pResolveOptions, pCachingContext);

  return stripQueryParameters(
    gResolvers[pCachingContext].resolveSync(
      {},
      // lookupStartPath
      pathToPosix(pFileDirectory),
      // request
      pModuleName
    )
  );
}

module.exports = resolve;
module.exports.clearCache = () => {
  gInitialized = {};
  gResolvers = {};
};


/***/ }),

/***/ 711:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const tryRequire = __nccwpck_require__(5834);
const $package = __nccwpck_require__(8275);

const babel = tryRequire("@babel/core", $package.supportedTranspilers.babel);

module.exports = {
  isAvailable: () => babel !== false,
  transpile: (pSource, pFileName, pTranspileOptions = {}) =>
    babel.transformSync(pSource, {
      ...(pTranspileOptions.babelConfig || {}),
      // Some babel plugins assume a piece of source to have a filename.
      // See https://github.com/sverweij/dependency-cruiser/issues/410
      filename: pFileName,
    }).code,
};


/***/ }),

/***/ 2982:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const tryRequire = __nccwpck_require__(5834);
const $package = __nccwpck_require__(8275);

/*
 * coffeescript's npm repo was renamed from coffee-script to coffeescript
 * which means that we can encounter both in the wild (at least for a while)
 * As long as that is happening: first try coffeescript, then coffee-script.
 */
function getCoffeeScriptModule() {
  let lReturnValue = tryRequire(
    "coffeescript",
    $package.supportedTranspilers.coffeescript
  );

  /* istanbul ignore if*/
  if (lReturnValue === false) {
    lReturnValue = tryRequire(
      "coffee-script",
      $package.supportedTranspilers["coffee-script"]
    );
  }
  return lReturnValue;
}

const coffeeScript = getCoffeeScriptModule();

module.exports = function coffeeScriptWrap(pLiterate) {
  return {
    isAvailable: () => coffeeScript !== false,
    transpile: (pSource) => {
      const lOptions = pLiterate ? { literate: true } : {};

      return coffeeScript.compile(pSource, lOptions);
    },
  };
};


/***/ }),

/***/ 8979:
/***/ ((module) => {

module.exports = {
  isAvailable: () => true,
  transpile: (pSource) => pSource,
};


/***/ }),

/***/ 2066:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const tryRequire = __nccwpck_require__(5834);
const livescript = tryRequire(
  "livescript",
  __nccwpck_require__(8275).supportedTranspilers.livescript
);

/* istanbul ignore next */
module.exports = {
  isAvailable: () => livescript !== false,

  transpile: (pSource) => livescript.compile(pSource),
};


/***/ }),

/***/ 2310:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const _get = __nccwpck_require__(1253);
const { supportedTranspilers } = __nccwpck_require__(8275);
const swc = __nccwpck_require__(5570);
const javaScriptWrap = __nccwpck_require__(8979);
const typeScriptWrap = __nccwpck_require__(9714)();
const tsxWrap = __nccwpck_require__(9714)(true);
const liveScriptWrap = __nccwpck_require__(2066);
const coffeeWrap = __nccwpck_require__(2982)();
const litCoffeeWrap = __nccwpck_require__(2982)(true);
const vueWrap = __nccwpck_require__(842);
const babelWrap = __nccwpck_require__(711);
const svelteWrap = __nccwpck_require__(999)(typeScriptWrap);

const EXTENSION2WRAPPER = {
  ".js": javaScriptWrap,
  ".cjs": javaScriptWrap,
  ".mjs": javaScriptWrap,
  ".jsx": javaScriptWrap,
  ".ts": typeScriptWrap,
  ".tsx": tsxWrap,
  ".d.ts": typeScriptWrap,
  ".ls": liveScriptWrap,
  ".coffee": coffeeWrap,
  ".litcoffee": litCoffeeWrap,
  ".coffee.md": litCoffeeWrap,
  ".csx": coffeeWrap,
  ".cjsx": coffeeWrap,
  ".vue": vueWrap,
  ".svelte": svelteWrap,
};

const TRANSPILER2WRAPPER = {
  babel: babelWrap,
  javascript: javaScriptWrap,
  "coffee-script": coffeeWrap,
  coffeescript: coffeeWrap,
  livescript: liveScriptWrap,
  svelte: svelteWrap,
  swc,
  typescript: typeScriptWrap,
  "vue-template-compiler": vueWrap,
};

const BABELEABLE_EXTENSIONS = [
  ".js",
  ".cjs",
  ".mjs",
  ".jsx",
  ".ts",
  ".tsx",
  ".d.ts",
];

/**
 * returns the babel wrapper if there's a babelConfig in the transpiler
 * options for babeleable extensions (javascript and typescript - currently
 * not configurable)
 *
 * returns the wrapper module configured for the extension pExtension if
 * not.
 *
 * returns the javascript wrapper if there's no wrapper module configured
 * for the extension.
 *
 * @param {string}  pExtension the extension (e.g. ".ts", ".js", ".litcoffee")
 * @returns {module} the module
 */
module.exports.getWrapper = (pExtension, pTranspilerOptions) => {
  if (
    Object.keys(_get(pTranspilerOptions, "babelConfig", {})).length > 0 &&
    BABELEABLE_EXTENSIONS.includes(pExtension)
  ) {
    return babelWrap;
  }
  return EXTENSION2WRAPPER[pExtension] || javaScriptWrap;
};

/**
 * all supported extensions and whether or not it is supported
 * in the current environment
 *
 * @type {string[]}
 */
module.exports.allExtensions = Object.keys(EXTENSION2WRAPPER).map((pKey) => ({
  extension: pKey,
  available: EXTENSION2WRAPPER[pKey].isAvailable(),
}));

/**
 * an array of extensions that are 'scannable' (have a valid transpiler
 * available for) in the current environemnt.
 *
 * @type {string[]}
 */
module.exports.scannableExtensions = Object.keys(
  EXTENSION2WRAPPER
).filter((pKey) => EXTENSION2WRAPPER[pKey].isAvailable());

/**
 * returns an array of supported transpilers, whith for each transpiler:
 * - the version (range) supported
 * - whether or not it is available in the current environment
 *
 * @return {IAvailableTranspiler[]} an array of supported transpilers
 */
module.exports.getAvailableTranspilers = () =>
  Object.keys(supportedTranspilers).map((pTranspiler) => ({
    name: pTranspiler,
    version: supportedTranspilers[pTranspiler],
    available: TRANSPILER2WRAPPER[pTranspiler].isAvailable(),
  }));

/* eslint security/detect-object-injection : 0*/


/***/ }),

/***/ 4132:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/* eslint-disable no-magic-numbers */
/* eslint-disable security/detect-object-injection */
const _get = __nccwpck_require__(1253);

/*
 parseAttributes copied verbatim from
 https://github.com/sveltejs/svelte/blob/67dea941bb1e61f0912ebd2257666b899c1ccefa/src/compiler/preprocess/index.ts#L27
 (plus/ minus some linter autofixes & renamed variables)
 Note this code can give results that might surprise; e.g. ''aap= "noot mies"'
 will yield { aap: true, '': '', '"noot': true, 'mies"': true } instead of
 {aap:"noot mies"}
 Leaving it be as it's the way svelte currently functions
 */
function parseAttributes(pString) {
  const lAttributes = {};
  pString
    .split(/\s+/)
    .filter(Boolean)
    .forEach((pAttribute) => {
      const lEqualsSignIndex = pAttribute.indexOf("=");
      if (lEqualsSignIndex === -1) {
        lAttributes[pAttribute] = true;
      } else {
        lAttributes[pAttribute.slice(0, lEqualsSignIndex)] = "'\"".includes(
          pAttribute[lEqualsSignIndex + 1]
        )
          ? pAttribute.slice(lEqualsSignIndex + 2, -1)
          : pAttribute.slice(lEqualsSignIndex + 1);
      }
    });
  return lAttributes;
}

function composeTranspilerOptions(pTranspilerOptions) {
  return {
    ...pTranspilerOptions,
    tsConfig: {
      ..._get(pTranspilerOptions, "tsConfig", {}),
      options: {
        ..._get(pTranspilerOptions, "tsConfig.options", {}),
        importsNotUsedAsValues: "preserve",
        jsx: "preserve",
      },
    },
  };
}

function getSourceReplacer(pTranspiler, pTranspilerOptions) {
  return (pMatch, pAttributes, pSource) => {
    const lAttributes = pAttributes || "";
    const lParsedAttributes = parseAttributes(lAttributes);

    if (lParsedAttributes.lang === "ts") {
      return `<script${lAttributes}>${pTranspiler(
        pSource,
        "dummy-filename",
        composeTranspilerOptions(pTranspilerOptions)
      )}</script>`;
    } else {
      return pMatch;
    }
  };
}

module.exports = function preProcess(
  pSource,
  pTranspilerWrapper,
  pTranspilerOptions
) {
  // regex from
  // github.com/sveltejs/svelte/blob/67dea941bb1e61f0912ebd2257666b899c1ccefa/src/compiler/preprocess/index.ts#L165
  // eslint-disable-next-line security/detect-unsafe-regex, unicorn/no-unsafe-regex
  const lScriptRegex = /<script(\s[^]*?)?(?:>([^]*?)<\/script>|\/>)/gi;

  if (pTranspilerWrapper.isAvailable) {
    return pSource.replace(
      lScriptRegex,
      getSourceReplacer(pTranspilerWrapper.transpile, pTranspilerOptions)
    );
  } else {
    return pSource;
  }
};


/***/ }),

/***/ 999:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const tryRequire = __nccwpck_require__(5834);
const svelteCompiler = tryRequire(
  "svelte/compiler",
  __nccwpck_require__(8275).supportedTranspilers.svelte
);
const preProcess = __nccwpck_require__(4132);

function getTranspiler(pTranspilerWrapper) {
  return (pSource, _pFileName, pTranspilerOptions) => {
    const lPreProcessedSource = preProcess(
      pSource,
      pTranspilerWrapper,
      pTranspilerOptions
    );
    return svelteCompiler.compile(lPreProcessedSource).js.code;
  };
}

module.exports = function svelteWrap(pTranspilerWrapper) {
  return {
    isAvailable: () => svelteCompiler !== false,
    transpile: getTranspiler(pTranspilerWrapper),
  };
};


/***/ }),

/***/ 9714:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const tryRequire = __nccwpck_require__(5834);
const _get = __nccwpck_require__(1253);
const typescript = tryRequire(
  "typescript",
  __nccwpck_require__(8275).supportedTranspilers.typescript
);

function getCompilerOptions(pTsx, pTSConfig) {
  let lCompilerOptions = {};

  if (pTsx) {
    lCompilerOptions.jsx = "react";
  }

  return {
    target: "es2015",
    ...lCompilerOptions,
    ..._get(pTSConfig, "options", {}),
  };
}

module.exports = function typescriptWrap(pTsx) {
  return {
    isAvailable: () => typescript !== false,

    transpile: (pSource, _pFileName, pTranspileOptions = {}) =>
      typescript.transpileModule(pSource, {
        ...(pTranspileOptions.tsConfig || {}),
        compilerOptions: getCompilerOptions(
          pTsx,
          pTranspileOptions.tsConfig || {}
        ),
      }).outputText,
  };
};


/***/ }),

/***/ 842:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const _get = __nccwpck_require__(1253);
const tryRequire = __nccwpck_require__(5834);
const vueTemplateCompiler = tryRequire(
  "vue-template-compiler",
  __nccwpck_require__(8275).supportedTranspilers["vue-template-compiler"]
);

module.exports = {
  isAvailable: () => vueTemplateCompiler !== false,

  transpile: (pSource) =>
    _get(vueTemplateCompiler.parseComponent(pSource), "script.content", ""),
};


/***/ }),

/***/ 5884:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const path = __nccwpck_require__(5622);

/**
 * On win32 platforms transform win32 type paths into posix paths
 * (leaves paths on posix platforms alone)
 *
 * This function is just to make dependency-cruiser's internal
 * representation consistent. This is the reason it doesn't have
 * exceptions for extended paths (\\my-cool-share\bladiebla)
 * and paths that contain non-ascii characters like e.g.
 * sindresorhus/slash does.
 *
 * One consequence of this is that internal dependency-cruise
 * representations cannot be converted back to win32 paths
 * with 100% confidence.
 *
 * @param  {string} pFilePath   the path to transform
 * @param  {string} pPathModule optional - the path module/ object to use (for testing
 *                              this module on posix platforms only; defaults to require('path'))
 * @return {string}             the transformed path
 */
module.exports = function pathToPosix(pFilePath, pPathModule) {
  const lPathModule = pPathModule || path;

  if (lPathModule.sep !== path.posix.sep) {
    return pFilePath.split(lPathModule.sep).join(path.posix.sep);
  }

  return pFilePath;
};


/***/ }),

/***/ 6593:
/***/ ((module) => {

/**
 * returns pFilenameString stripped of any 'query parameters' e.g.
 *
 * "hello/there?thing=smurf" => "hello/there"
 * "boink/boink/t.gif?resource" => "boink/boink/t.gif"
 * "no/thing/after.js" => "no/thing/after.js"
 *
 * @param {string} pFilenameString string to strip the query parameters from
 * @returns {string} the stripped string
 */
module.exports = function stripQueryParameters(pFilenameString) {
  // url.parse(pFilenameString).pathname did this quite admirably, but it's
  // deprecated, hence this fonky RE replace. And accompanying unit test :-/
  return pFilenameString.replace(/\?.+$/, "");
};


/***/ }),

/***/ 8598:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const _get = __nccwpck_require__(1253);
const _has = __nccwpck_require__(558);

/**
 * Finds the first rule in the rule set that has name pName,
 * and undefined if no such rule exists/ the rule is an 'allowed'
 * rule.
 *
 * (this thing probably belongs in a model-like folder and not in utl)
 *
 * @param {import("../../types/configuration").IConfiguration} pRuleSet - The rule set to search in
 * @param {string} pName - The rule name to look for
 * @return {import("../../types/rule-set").IForbiddenRuleType|import("../../types/rule-set").IAllowedRuleType} - a rule (or 'undefined' if nothing found)
 */
function findRuleByName(pRuleSet, pName) {
  return _get(pRuleSet, "forbidden", []).find(
    (pForbiddenRule) => pForbiddenRule.name === pName
  );
}

/**
 * Returns true if the rule set has a rule that uses the 'license' or
 * 'licenseNot' attribute.
 *
 * Returns false in all other cases
 *
 * @param {import('../../../types/rule-set').IFlattenedRuleSet} pRuleSet
 * @return {boolean}
 */
function ruleSetHasLicenseRule(pRuleSet) {
  return (
    _get(pRuleSet, "forbidden", []).some(
      (pRule) => _has(pRule.to, "license") || _has(pRule.to, "licenseNot")
    ) ||
    _get(pRuleSet, "allowed", []).some(
      (pRule) => _has(pRule.to, "license") || _has(pRule.to, "licenseNot")
    )
  );
}
function ruleSetHasDeprecationRule(pRuleSet) {
  return (
    _get(pRuleSet, "forbidden", []).some((pRule) =>
      _get(pRule.to, "dependencyTypes", []).includes("deprecated")
    ) ||
    _get(pRuleSet, "allowed", []).some((pRule) =>
      _get(pRule.to, "dependencyTypes", []).includes("deprecated")
    )
  );
}

module.exports = {
  findRuleByName,
  ruleSetHasLicenseRule,
  ruleSetHasDeprecationRule,
};

// file deepcode ignore valid-jsdoc: deepcode believes this isn't valid, but likely it just isn't privy on imports as types


/***/ }),

/***/ 6938:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const fs = __nccwpck_require__(5747);
const _get = __nccwpck_require__(1253);
const _has = __nccwpck_require__(558);
const _omit = __nccwpck_require__(5924);
const enhancedResolve = __nccwpck_require__(453);
const transpileMeta = __nccwpck_require__(2310);
const {
  ruleSetHasLicenseRule,
  ruleSetHasDeprecationRule,
} = __nccwpck_require__(8598);

const DEFAULT_CACHE_DURATION = 4000;
const DEFAULT_RESOLVE_OPTIONS = {
  // for later: check semantics of enhanced-resolve symlinks and
  // node's preserveSymlinks. They seem to be
  // symlink === !preserveSynlinks - but using it that way
  // breaks backwards compatibility
  //
  // Someday we'll rely on this and remove the code that manually
  // does this in extract/resolve/index.js
  symlinks: false,
  // if a webpack config overrides extensions, there's probably
  // good cause. The scannableExtensions are an educated guess
  // anyway, that works well in most circumstances.
  // Note that if extract/transpile/index gets an unknown extension
  // passed, it'll fall back to the javascript parser
  extensions: transpileMeta.scannableExtensions,
  // for typescript projects that import stuff that's only in
  // node_modules/@types we need:
  // - the inclusion of .d.ts to the extensions (see above)
  // - an explicit inclusion of node_modules/@types to the spots
  //   to look for modules (in addition to "node_modules" which
  //   is the default for enhanced-resolve)
  modules: ["node_modules", "node_modules/@types"],
  // this overrides the default exports fields enhanced-resolve uses
  // (being ["exports"]) to keep backwards compatibility between enhanced-resolve
  // 4 and 5 (4 didn't heed them at all and the empty array has the same
  // effect).
  // Also see https://github.com/sverweij/dependency-cruiser/issues/338
  exportsFields: [],
};

function getNonOverridableResolveOptions(pCacheDuration) {
  return {
    // This should cover most of the bases of dependency-cruiser's
    // uses. Not overridable for now because for other
    // file systems it's not sure we can use sync system calls
    // Also: passing a non-cached filesystem makes performance
    // worse.
    fileSystem: new enhancedResolve.CachedInputFileSystem(fs, pCacheDuration),
    // our code depends on sync behavior, so having this
    // overriden is not an option
    useSyncFileSystemCalls: true,
  };
}

function pushPlugin(pPlugins, pPluginToPush) {
  return (pPlugins || []).concat(pPluginToPush);
}

function isTsConfigPathsEligible(pTSConfig) {
  return _has(pTSConfig, "options.baseUrl");
}

function compileResolveOptions(
  pResolveOptions,
  pTSConfig,
  pResolveOptionsFromDCConfig
) {
  let lResolveOptions = {};

  // TsConfigPathsPlugin requires a baseUrl to be present in the
  // tsconfig, otherwise it prints scary messages that it didn't
  // and read the tsConfig (potentially making users think it's
  // dependency-cruiser disregarding the tsconfig). Hence:
  // only load TsConfigPathsPlugin when an options.baseUrl
  // exists
  // Also: there's a performance impact of ~1 ms per resolve even when there
  // are 0 paths in the tsconfig, so not loading it when not necessary
  // will be a win.
  // Also: requiring the plugin only when it's necessary will save some
  // startup time (especially on a cold require cache)
  if (pResolveOptions.tsConfig && isTsConfigPathsEligible(pTSConfig)) {
    // eslint-disable-next-line node/global-require
    const TsConfigPathsPlugin = __nccwpck_require__(4637);
    lResolveOptions.plugins = pushPlugin(
      lResolveOptions.plugins,
      new TsConfigPathsPlugin({
        configFile: pResolveOptions.tsConfig,
        // TsConfigPathsPlugin doesn't (can't) read enhanced-resolve's
        // list of extensions, and the default it uses for extensions
        // so we do it ourselves - either with the extensions passed
        // or with the supported ones.
        extensions:
          pResolveOptions.extensions || DEFAULT_RESOLVE_OPTIONS.extensions,
      })
    );
  }

  return {
    ...DEFAULT_RESOLVE_OPTIONS,
    ...lResolveOptions,
    ..._omit(pResolveOptionsFromDCConfig, "cachedInputFileSystem"),
    ...pResolveOptions,
    ...getNonOverridableResolveOptions(
      _get(
        pResolveOptionsFromDCConfig,
        "cachedInputFileSystem.cacheDuration",
        DEFAULT_CACHE_DURATION
      )
    ),
  };
}

module.exports = function normalizeResolveOptions(
  pResolveOptions,
  pOptions,
  pTSConfig
) {
  const lRuleSet = _get(pOptions, "ruleSet", {});
  return compileResolveOptions(
    {
      /*
        for later: check semantics of enhanced-resolve symlinks and
        node's preserveSymlinks. They seem to be
        symlink === !preserveSymlinks - but using it that way
        breaks backwards compatibility
      */
      symlinks: pOptions.preserveSymlinks,
      tsConfig: _get(pOptions, "ruleSet.options.tsConfig.fileName", null),

      /* squirel the externalModuleResolutionStrategy and combinedDependencies
         thing into the resolve options
         - they're not for enhanced resolve, but they are for what we consider
         resolve options ...
       */
      combinedDependencies: pOptions.combinedDependencies,
      resolveLicenses: ruleSetHasLicenseRule(lRuleSet),
      resolveDeprecations: ruleSetHasDeprecationRule(lRuleSet),
      ...(pResolveOptions || {}),
    },
    pTSConfig || {},
    _get(pOptions, "enhancedResolveOptions", {})
  );
};


/***/ }),

/***/ 3645:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const DescriptionFileUtils = __nccwpck_require__(5387);
const getInnerRequest = __nccwpck_require__(9954);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class AliasFieldPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | Array<string>} field field
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, field, target) {
		this.source = source;
		this.field = field;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("AliasFieldPlugin", (request, resolveContext, callback) => {
				if (!request.descriptionFileData) return callback();
				const innerRequest = getInnerRequest(resolver, request);
				if (!innerRequest) return callback();
				const fieldData = DescriptionFileUtils.getField(
					request.descriptionFileData,
					this.field
				);
				if (fieldData === null || typeof fieldData !== "object") {
					if (resolveContext.log)
						resolveContext.log(
							"Field '" +
								this.field +
								"' doesn't contain a valid alias configuration"
						);
					return callback();
				}
				const data1 = fieldData[innerRequest];
				const data2 = fieldData[innerRequest.replace(/^\.\//, "")];
				const data = typeof data1 !== "undefined" ? data1 : data2;
				if (data === innerRequest) return callback();
				if (data === undefined) return callback();
				if (data === false) {
					/** @type {ResolveRequest} */
					const ignoreObj = {
						...request,
						path: false
					};
					return callback(null, ignoreObj);
				}
				const obj = {
					...request,
					path: request.descriptionFileRoot,
					request: data,
					fullySpecified: false
				};
				resolver.doResolve(
					target,
					obj,
					"aliased from description file " +
						request.descriptionFilePath +
						" with mapping '" +
						innerRequest +
						"' to '" +
						data +
						"'",
					resolveContext,
					(err, result) => {
						if (err) return callback(err);

						// Don't allow other aliasing or raw request
						if (result === undefined) return callback(null, null);
						callback(null, result);
					}
				);
			});
	}
};


/***/ }),

/***/ 7222:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const forEachBail = __nccwpck_require__(4833);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {{alias: string|Array<string>|false, name: string, onlyModule?: boolean}} AliasOption */

module.exports = class AliasPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {AliasOption | Array<AliasOption>} options options
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, options, target) {
		this.source = source;
		this.options = Array.isArray(options) ? options : [options];
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("AliasPlugin", (request, resolveContext, callback) => {
				const innerRequest = request.request || request.path;
				if (!innerRequest) return callback();
				forEachBail(
					this.options,
					(item, callback) => {
						let shouldStop = false;
						if (
							innerRequest === item.name ||
							(!item.onlyModule && innerRequest.startsWith(item.name + "/"))
						) {
							const remainingRequest = innerRequest.substr(item.name.length);
							const resolveWithAlias = (alias, callback) => {
								if (alias === false) {
									const ignoreObj = {
										...request,
										path: false
									};
									return callback(null, ignoreObj);
								}
								if (
									innerRequest !== alias &&
									!innerRequest.startsWith(alias + "/")
								) {
									shouldStop = true;
									const newRequestStr = alias + remainingRequest;
									const obj = {
										...request,
										request: newRequestStr,
										fullySpecified: false
									};
									return resolver.doResolve(
										target,
										obj,
										"aliased with mapping '" +
											item.name +
											"': '" +
											alias +
											"' to '" +
											newRequestStr +
											"'",
										resolveContext,
										(err, result) => {
											if (err) return callback(err);
											if (result) return callback(null, result);
											return callback();
										}
									);
								}
								return callback();
							};
							const stoppingCallback = (err, result) => {
								if (err) return callback(err);

								if (result) return callback(null, result);
								// Don't allow other aliasing or raw request
								if (shouldStop) return callback(null, null);
								return callback();
							};
							if (Array.isArray(item.alias)) {
								return forEachBail(
									item.alias,
									resolveWithAlias,
									stoppingCallback
								);
							} else {
								return resolveWithAlias(item.alias, stoppingCallback);
							}
						}
						return callback();
					},
					callback
				);
			});
	}
};


/***/ }),

/***/ 5864:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class AppendPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string} appending appending
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, appending, target) {
		this.source = source;
		this.appending = appending;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("AppendPlugin", (request, resolveContext, callback) => {
				const obj = {
					...request,
					path: request.path + this.appending,
					relativePath:
						request.relativePath && request.relativePath + this.appending
				};
				resolver.doResolve(
					target,
					obj,
					this.appending,
					resolveContext,
					callback
				);
			});
	}
};


/***/ }),

/***/ 8127:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver").FileSystem} FileSystem */
/** @typedef {import("./Resolver").SyncFileSystem} SyncFileSystem */

const dirname = path => {
	let idx = path.length - 1;
	while (idx >= 0) {
		const c = path.charCodeAt(idx);
		// slash or backslash
		if (c === 47 || c === 92) break;
		idx--;
	}
	if (idx < 0) return "";
	return path.slice(0, idx);
};

const runCallbacks = (callbacks, err, result) => {
	if (callbacks.length === 1) return callbacks[0](err, result);
	let error;
	for (const callback of callbacks) {
		try {
			callback(err, result);
		} catch (e) {
			if (!error) error = e;
		}
	}
	callbacks.length = 0;
	if (error) throw error;
};

class OperationMergerBackend {
	/**
	 * @param {any} provider async method
	 * @param {any} syncProvider sync method
	 * @param {any} providerContext call context for the provider methods
	 */
	constructor(provider, syncProvider, providerContext) {
		this._provider = provider;
		this._syncProvider = syncProvider;
		this._providerContext = providerContext;
		this._activeAsyncOperations = new Map();

		this.provide = this._provider
			? (path, options, callback) => {
					if (typeof options === "function") {
						callback = options;
						options = undefined;
					}
					if (options) {
						return this._provider.call(
							this._providerContext,
							path,
							options,
							callback
						);
					}
					if (typeof path !== "string") {
						callback(new TypeError("path must be a string"));
						return;
					}
					let callbacks = this._activeAsyncOperations.get(path);
					if (callbacks) {
						callbacks.push(callback);
						return;
					}
					this._activeAsyncOperations.set(path, (callbacks = [callback]));
					provider(path, (err, result) => {
						this._activeAsyncOperations.delete(path);
						runCallbacks(callbacks, err, result);
					});
			  }
			: null;
		this.provideSync = this._syncProvider
			? (path, options) => {
					return this._syncProvider.call(this._providerContext, path, options);
			  }
			: null;
	}

	purge() {}
	purgeParent() {}
}

/*

IDLE:
	insert data: goto SYNC

SYNC:
	before provide: run ticks
	event loop tick: goto ASYNC_ACTIVE

ASYNC:
	timeout: run tick, goto ASYNC_PASSIVE

ASYNC_PASSIVE:
	before provide: run ticks

IDLE --[insert data]--> SYNC --[event loop tick]--> ASYNC_ACTIVE --[interval tick]-> ASYNC_PASSIVE
                                                          ^                             |
                                                          +---------[insert data]-------+
*/

const STORAGE_MODE_IDLE = 0;
const STORAGE_MODE_SYNC = 1;
const STORAGE_MODE_ASYNC = 2;

class CacheBackend {
	/**
	 * @param {number} duration max cache duration of items
	 * @param {any} provider async method
	 * @param {any} syncProvider sync method
	 * @param {any} providerContext call context for the provider methods
	 */
	constructor(duration, provider, syncProvider, providerContext) {
		this._duration = duration;
		this._provider = provider;
		this._syncProvider = syncProvider;
		this._providerContext = providerContext;
		/** @type {Map<string, (function(Error, any): void)[]>} */
		this._activeAsyncOperations = new Map();
		/** @type {Map<string, { err: Error, result: any, level: Set<string> }>} */
		this._data = new Map();
		/** @type {Set<string>[]} */
		this._levels = [];
		for (let i = 0; i < 10; i++) this._levels.push(new Set());
		for (let i = 5000; i < duration; i += 500) this._levels.push(new Set());
		this._currentLevel = 0;
		this._tickInterval = Math.floor(duration / this._levels.length);
		/** @type {STORAGE_MODE_IDLE | STORAGE_MODE_SYNC | STORAGE_MODE_ASYNC} */
		this._mode = STORAGE_MODE_IDLE;

		/** @type {NodeJS.Timeout | undefined} */
		this._timeout = undefined;
		/** @type {number | undefined} */
		this._nextDecay = undefined;

		this.provide = this.provide.bind(this);
		this.provideSync = this.provideSync.bind(this);
	}

	provide(path, options, callback) {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}
		if (typeof path !== "string") {
			callback(new TypeError("path must be a string"));
			return;
		}
		if (options) {
			return this._provider.call(
				this._providerContext,
				path,
				options,
				callback
			);
		}

		// When in sync mode we can move to async mode
		if (this._mode === STORAGE_MODE_SYNC) {
			this._enterAsyncMode();
		}

		// Check in cache
		let cacheEntry = this._data.get(path);
		if (cacheEntry !== undefined) {
			if (cacheEntry.err) return process.nextTick(callback, cacheEntry.err);
			return process.nextTick(callback, null, cacheEntry.result);
		}

		// Check if there is already the same operation running
		let callbacks = this._activeAsyncOperations.get(path);
		if (callbacks !== undefined) {
			callbacks.push(callback);
			return;
		}
		this._activeAsyncOperations.set(path, (callbacks = [callback]));

		// Run the operation
		this._provider.call(this._providerContext, path, (err, result) => {
			this._activeAsyncOperations.delete(path);
			this._storeResult(path, err, result);

			// Enter async mode if not yet done
			this._enterAsyncMode();

			runCallbacks(callbacks, err, result);
		});
	}

	provideSync(path, options) {
		if (typeof path !== "string") {
			throw new TypeError("path must be a string");
		}
		if (options) {
			return this._syncProvider.call(this._providerContext, path, options);
		}

		// In sync mode we may have to decay some cache items
		if (this._mode === STORAGE_MODE_SYNC) {
			this._runDecays();
		}

		// Check in cache
		let cacheEntry = this._data.get(path);
		if (cacheEntry !== undefined) {
			if (cacheEntry.err) throw cacheEntry.err;
			return cacheEntry.result;
		}

		// Get all active async operations
		// This sync operation will also complete them
		const callbacks = this._activeAsyncOperations.get(path);
		this._activeAsyncOperations.delete(path);

		// Run the operation
		// When in idle mode, we will enter sync mode
		let result;
		try {
			result = this._syncProvider.call(this._providerContext, path);
		} catch (err) {
			this._storeResult(path, err, undefined);
			this._enterSyncModeWhenIdle();
			if (callbacks) runCallbacks(callbacks, err, undefined);
			throw err;
		}
		this._storeResult(path, undefined, result);
		this._enterSyncModeWhenIdle();
		if (callbacks) runCallbacks(callbacks, undefined, result);
		return result;
	}

	purge(what) {
		if (!what) {
			if (this._mode !== STORAGE_MODE_IDLE) {
				this._data.clear();
				for (const level of this._levels) {
					level.clear();
				}
				this._enterIdleMode();
			}
		} else if (typeof what === "string") {
			for (let [key, data] of this._data) {
				if (key.startsWith(what)) {
					this._data.delete(key);
					data.level.delete(key);
				}
			}
			if (this._data.size === 0) {
				this._enterIdleMode();
			}
		} else {
			for (let [key, data] of this._data) {
				for (const item of what) {
					if (key.startsWith(item)) {
						this._data.delete(key);
						data.level.delete(key);
						break;
					}
				}
			}
			if (this._data.size === 0) {
				this._enterIdleMode();
			}
		}
	}

	purgeParent(what) {
		if (!what) {
			this.purge();
		} else if (typeof what === "string") {
			this.purge(dirname(what));
		} else {
			const set = new Set();
			for (const item of what) {
				set.add(dirname(item));
			}
			this.purge(set);
		}
	}

	_storeResult(path, err, result) {
		if (this._data.has(path)) return;
		const level = this._levels[this._currentLevel];
		this._data.set(path, { err, result, level });
		level.add(path);
	}

	_decayLevel() {
		const nextLevel = (this._currentLevel + 1) % this._levels.length;
		const decay = this._levels[nextLevel];
		this._currentLevel = nextLevel;
		for (let item of decay) {
			this._data.delete(item);
		}
		decay.clear();
		if (this._data.size === 0) {
			this._enterIdleMode();
		} else {
			// @ts-ignore _nextDecay is always a number in sync mode
			this._nextDecay += this._tickInterval;
		}
	}

	_runDecays() {
		while (
			/** @type {number} */ (this._nextDecay) <= Date.now() &&
			this._mode !== STORAGE_MODE_IDLE
		) {
			this._decayLevel();
		}
	}

	_enterAsyncMode() {
		let timeout = 0;
		switch (this._mode) {
			case STORAGE_MODE_ASYNC:
				return;
			case STORAGE_MODE_IDLE:
				this._nextDecay = Date.now() + this._tickInterval;
				timeout = this._tickInterval;
				break;
			case STORAGE_MODE_SYNC:
				this._runDecays();
				// @ts-ignore _runDecays may change the mode
				if (this._mode === STORAGE_MODE_IDLE) return;
				timeout = Math.max(
					0,
					/** @type {number} */ (this._nextDecay) - Date.now()
				);
				break;
		}
		this._mode = STORAGE_MODE_ASYNC;
		const ref = setTimeout(() => {
			this._mode = STORAGE_MODE_SYNC;
			this._runDecays();
		}, timeout);
		if (ref.unref) ref.unref();
		this._timeout = ref;
	}

	_enterSyncModeWhenIdle() {
		if (this._mode === STORAGE_MODE_IDLE) {
			this._mode = STORAGE_MODE_SYNC;
			this._nextDecay = Date.now() + this._tickInterval;
		}
	}

	_enterIdleMode() {
		this._mode = STORAGE_MODE_IDLE;
		this._nextDecay = undefined;
		if (this._timeout) clearTimeout(this._timeout);
	}
}

const createBackend = (duration, provider, syncProvider, providerContext) => {
	if (duration > 0) {
		return new CacheBackend(duration, provider, syncProvider, providerContext);
	}
	return new OperationMergerBackend(provider, syncProvider, providerContext);
};

module.exports = class CachedInputFileSystem {
	constructor(fileSystem, duration) {
		this.fileSystem = fileSystem;

		this._statBackend = createBackend(
			duration,
			this.fileSystem.stat,
			this.fileSystem.statSync,
			this.fileSystem
		);
		const stat = this._statBackend.provide;
		this.stat = /** @type {FileSystem["stat"]} */ (stat);
		const statSync = this._statBackend.provideSync;
		this.statSync = /** @type {SyncFileSystem["statSync"]} */ (statSync);

		this._readdirBackend = createBackend(
			duration,
			this.fileSystem.readdir,
			this.fileSystem.readdirSync,
			this.fileSystem
		);
		const readdir = this._readdirBackend.provide;
		this.readdir = /** @type {FileSystem["readdir"]} */ (readdir);
		const readdirSync = this._readdirBackend.provideSync;
		this.readdirSync = /** @type {SyncFileSystem["readdirSync"]} */ (readdirSync);

		this._readFileBackend = createBackend(
			duration,
			this.fileSystem.readFile,
			this.fileSystem.readFileSync,
			this.fileSystem
		);
		const readFile = this._readFileBackend.provide;
		this.readFile = /** @type {FileSystem["readFile"]} */ (readFile);
		const readFileSync = this._readFileBackend.provideSync;
		this.readFileSync = /** @type {SyncFileSystem["readFileSync"]} */ (readFileSync);

		this._readJsonBackend = createBackend(
			duration,
			this.fileSystem.readJson ||
				(this.readFile &&
					((path, callback) => {
						// @ts-ignore
						this.readFile(path, (err, buffer) => {
							if (err) return callback(err);
							if (!buffer || buffer.length === 0)
								return callback(new Error("No file content"));
							let data;
							try {
								data = JSON.parse(buffer.toString("utf-8"));
							} catch (e) {
								return callback(e);
							}
							callback(null, data);
						});
					})),
			this.fileSystem.readJsonSync ||
				(this.readFileSync &&
					(path => {
						const buffer = this.readFileSync(path);
						const data = JSON.parse(buffer.toString("utf-8"));
						return data;
					})),
			this.fileSystem
		);
		const readJson = this._readJsonBackend.provide;
		this.readJson = /** @type {FileSystem["readJson"]} */ (readJson);
		const readJsonSync = this._readJsonBackend.provideSync;
		this.readJsonSync = /** @type {SyncFileSystem["readJsonSync"]} */ (readJsonSync);

		this._readlinkBackend = createBackend(
			duration,
			this.fileSystem.readlink,
			this.fileSystem.readlinkSync,
			this.fileSystem
		);
		const readlink = this._readlinkBackend.provide;
		this.readlink = /** @type {FileSystem["readlink"]} */ (readlink);
		const readlinkSync = this._readlinkBackend.provideSync;
		this.readlinkSync = /** @type {SyncFileSystem["readlinkSync"]} */ (readlinkSync);
	}

	purge(what) {
		this._statBackend.purge(what);
		this._readdirBackend.purgeParent(what);
		this._readFileBackend.purge(what);
		this._readlinkBackend.purge(what);
		this._readJsonBackend.purge(what);
	}
};


/***/ }),

/***/ 6041:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const basename = __nccwpck_require__(4880).basename;

/** @typedef {import("./Resolver")} Resolver */

module.exports = class CloneBasenamePlugin {
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("CloneBasenamePlugin", (request, resolveContext, callback) => {
				const filename = basename(request.path);
				const filePath = resolver.join(request.path, filename);
				const obj = {
					...request,
					path: filePath,
					relativePath:
						request.relativePath &&
						resolver.join(request.relativePath, filename)
				};
				resolver.doResolve(
					target,
					obj,
					"using path: " + filePath,
					resolveContext,
					callback
				);
			});
	}
};


/***/ }),

/***/ 5607:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ConditionalPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Partial<ResolveRequest>} test compare object
	 * @param {string | null} message log message
	 * @param {boolean} allowAlternatives when false, do not continue with the current step when "test" matches
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, test, message, allowAlternatives, target) {
		this.source = source;
		this.test = test;
		this.message = message;
		this.allowAlternatives = allowAlternatives;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		const { test, message, allowAlternatives } = this;
		const keys = Object.keys(test);
		resolver
			.getHook(this.source)
			.tapAsync("ConditionalPlugin", (request, resolveContext, callback) => {
				for (const prop of keys) {
					if (request[prop] !== test[prop]) return callback();
				}
				resolver.doResolve(
					target,
					request,
					message,
					resolveContext,
					allowAlternatives
						? callback
						: (err, result) => {
								if (err) return callback(err);

								// Don't allow other alternatives
								if (result === undefined) return callback(null, null);
								callback(null, result);
						  }
				);
			});
	}
};


/***/ }),

/***/ 7644:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const DescriptionFileUtils = __nccwpck_require__(5387);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class DescriptionFilePlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string[]} filenames filenames
	 * @param {boolean} pathIsFile pathIsFile
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, filenames, pathIsFile, target) {
		this.source = source;
		this.filenames = filenames;
		this.pathIsFile = pathIsFile;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync(
				"DescriptionFilePlugin",
				(request, resolveContext, callback) => {
					const path = request.path;
					if (!path) return callback();
					const directory = this.pathIsFile
						? DescriptionFileUtils.cdUp(path)
						: path;
					if (!directory) return callback();
					DescriptionFileUtils.loadDescriptionFile(
						resolver,
						directory,
						this.filenames,
						request.descriptionFilePath
							? {
									path: request.descriptionFilePath,
									content: request.descriptionFileData,
									directory: /** @type {string} */ (request.descriptionFileRoot)
							  }
							: undefined,
						resolveContext,
						(err, result) => {
							if (err) return callback(err);
							if (!result) {
								if (resolveContext.log)
									resolveContext.log(
										`No description file found in ${directory} or above`
									);
								return callback();
							}
							const relativePath =
								"." + path.substr(result.directory.length).replace(/\\/g, "/");
							const obj = {
								...request,
								descriptionFilePath: result.path,
								descriptionFileData: result.content,
								descriptionFileRoot: result.directory,
								relativePath: relativePath
							};
							resolver.doResolve(
								target,
								obj,
								"using description file: " +
									result.path +
									" (relative path: " +
									relativePath +
									")",
								resolveContext,
								(err, result) => {
									if (err) return callback(err);

									// Don't allow other processing
									if (result === undefined) return callback(null, null);
									callback(null, result);
								}
							);
						}
					);
				}
			);
	}
};


/***/ }),

/***/ 5387:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const forEachBail = __nccwpck_require__(4833);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveContext} ResolveContext */

/**
 * @typedef {Object} DescriptionFileInfo
 * @property {any=} content
 * @property {string} path
 * @property {string} directory
 */

/**
 * @callback ErrorFirstCallback
 * @param {Error|null=} error
 * @param {DescriptionFileInfo=} result
 */

/**
 * @param {Resolver} resolver resolver
 * @param {string} directory directory
 * @param {string[]} filenames filenames
 * @param {DescriptionFileInfo|undefined} oldInfo oldInfo
 * @param {ResolveContext} resolveContext resolveContext
 * @param {ErrorFirstCallback} callback callback
 */
function loadDescriptionFile(
	resolver,
	directory,
	filenames,
	oldInfo,
	resolveContext,
	callback
) {
	(function findDescriptionFile() {
		if (oldInfo && oldInfo.directory === directory) {
			// We already have info for this directory and can reuse it
			return callback(null, oldInfo);
		}
		forEachBail(
			filenames,
			(filename, callback) => {
				const descriptionFilePath = resolver.join(directory, filename);
				if (resolver.fileSystem.readJson) {
					resolver.fileSystem.readJson(descriptionFilePath, (err, content) => {
						if (err) {
							if (typeof err.code !== "undefined") {
								if (resolveContext.missingDependencies) {
									resolveContext.missingDependencies.add(descriptionFilePath);
								}
								return callback();
							}
							if (resolveContext.fileDependencies) {
								resolveContext.fileDependencies.add(descriptionFilePath);
							}
							return onJson(err);
						}
						if (resolveContext.fileDependencies) {
							resolveContext.fileDependencies.add(descriptionFilePath);
						}
						onJson(null, content);
					});
				} else {
					resolver.fileSystem.readFile(descriptionFilePath, (err, content) => {
						if (err) {
							if (resolveContext.missingDependencies) {
								resolveContext.missingDependencies.add(descriptionFilePath);
							}
							return callback();
						}
						if (resolveContext.fileDependencies) {
							resolveContext.fileDependencies.add(descriptionFilePath);
						}
						let json;

						if (content) {
							try {
								json = JSON.parse(content.toString());
							} catch (e) {
								return onJson(e);
							}
						} else {
							return onJson(new Error("No content in file"));
						}

						onJson(null, json);
					});
				}

				function onJson(err, content) {
					if (err) {
						if (resolveContext.log)
							resolveContext.log(
								descriptionFilePath + " (directory description file): " + err
							);
						else
							err.message =
								descriptionFilePath + " (directory description file): " + err;
						return callback(err);
					}
					callback(null, {
						content,
						directory,
						path: descriptionFilePath
					});
				}
			},
			(err, result) => {
				if (err) return callback(err);
				if (result) {
					return callback(null, result);
				} else {
					const dir = cdUp(directory);
					if (!dir) {
						return callback();
					} else {
						directory = dir;
						return findDescriptionFile();
					}
				}
			}
		);
	})();
}

/**
 * @param {any} content content
 * @param {string|string[]} field field
 * @returns {object|string|number|boolean|undefined} field data
 */
function getField(content, field) {
	if (!content) return undefined;
	if (Array.isArray(field)) {
		let current = content;
		for (let j = 0; j < field.length; j++) {
			if (current === null || typeof current !== "object") {
				current = null;
				break;
			}
			current = current[field[j]];
		}
		return current;
	} else {
		return content[field];
	}
}

/**
 * @param {string} directory directory
 * @returns {string|null} parent directory or null
 */
function cdUp(directory) {
	if (directory === "/") return null;
	const i = directory.lastIndexOf("/"),
		j = directory.lastIndexOf("\\");
	const p = i < 0 ? j : j < 0 ? i : i < j ? j : i;
	if (p < 0) return null;
	return directory.substr(0, p || 1);
}

exports.loadDescriptionFile = loadDescriptionFile;
exports.getField = getField;
exports.cdUp = cdUp;


/***/ }),

/***/ 674:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class DirectoryExistsPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync(
				"DirectoryExistsPlugin",
				(request, resolveContext, callback) => {
					const fs = resolver.fileSystem;
					const directory = request.path;
					if (!directory) return callback();
					fs.stat(directory, (err, stat) => {
						if (err || !stat) {
							if (resolveContext.missingDependencies)
								resolveContext.missingDependencies.add(directory);
							if (resolveContext.log)
								resolveContext.log(directory + " doesn't exist");
							return callback();
						}
						if (!stat.isDirectory()) {
							if (resolveContext.missingDependencies)
								resolveContext.missingDependencies.add(directory);
							if (resolveContext.log)
								resolveContext.log(directory + " is not a directory");
							return callback();
						}
						if (resolveContext.fileDependencies)
							resolveContext.fileDependencies.add(directory);
						resolver.doResolve(
							target,
							request,
							`existing directory ${directory}`,
							resolveContext,
							callback
						);
					});
				}
			);
	}
};


/***/ }),

/***/ 1866:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/



const path = __nccwpck_require__(5622);
const DescriptionFileUtils = __nccwpck_require__(5387);
const forEachBail = __nccwpck_require__(4833);
const { processExportsField } = __nccwpck_require__(3679);
const { parseIdentifier } = __nccwpck_require__(2505);
const { checkExportsFieldTarget } = __nccwpck_require__(4030);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {import("./util/entrypoints").ExportsField} ExportsField */
/** @typedef {import("./util/entrypoints").FieldProcessor} FieldProcessor */

module.exports = class ExportsFieldPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Set<string>} conditionNames condition names
	 * @param {string | string[]} fieldNamePath name path
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, conditionNames, fieldNamePath, target) {
		this.source = source;
		this.target = target;
		this.conditionNames = conditionNames;
		this.fieldName = fieldNamePath;
		/** @type {WeakMap<any, FieldProcessor>} */
		this.fieldProcessorCache = new WeakMap();
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("ExportsFieldPlugin", (request, resolveContext, callback) => {
				// When there is no description file, abort
				if (!request.descriptionFilePath) return callback();
				if (
					// When the description file is inherited from parent, abort
					// (There is no description file inside of this package)
					request.relativePath !== "." ||
					request.request === undefined
				)
					return callback();

				const remainingRequest =
					request.query || request.fragment
						? (request.request === "." ? "./" : request.request) +
						  request.query +
						  request.fragment
						: request.request;
				/** @type {ExportsField|null} */
				const exportsField = DescriptionFileUtils.getField(
					request.descriptionFileData,
					this.fieldName
				);
				if (!exportsField) return callback();

				if (request.directory) {
					return callback(
						new Error(
							`Resolving to directories is not possible with the exports field (request was ${remainingRequest}/)`
						)
					);
				}

				let paths;

				try {
					// We attach the cache to the description file instead of the exportsField value
					// because we use a WeakMap and the exportsField could be a string too.
					// Description file is always an object when exports field can be accessed.
					let fieldProcessor = this.fieldProcessorCache.get(
						request.descriptionFileData
					);
					if (fieldProcessor === undefined) {
						fieldProcessor = processExportsField(exportsField);
						this.fieldProcessorCache.set(
							request.descriptionFileData,
							fieldProcessor
						);
					}
					paths = fieldProcessor(remainingRequest, this.conditionNames);
				} catch (err) {
					if (resolveContext.log) {
						resolveContext.log(
							`Exports field in ${request.descriptionFilePath} can't be processed: ${err}`
						);
					}
					return callback(err);
				}

				if (paths.length === 0) {
					return callback(
						new Error(
							`Package path ${remainingRequest} is not exported from package ${request.descriptionFileRoot} (see exports field in ${request.descriptionFilePath})`
						)
					);
				}

				forEachBail(
					paths,
					(p, callback) => {
						const parsedIdentifier = parseIdentifier(p);

						if (!parsedIdentifier) return callback();

						const [relativePath, query, fragment] = parsedIdentifier;

						const error = checkExportsFieldTarget(relativePath);

						if (error) {
							return callback(error);
						}

						const obj = {
							...request,
							request: undefined,
							path: path.join(
								/** @type {string} */ (request.descriptionFileRoot),
								relativePath
							),
							relativePath,
							query,
							fragment
						};

						resolver.doResolve(
							target,
							obj,
							"using exports field: " + p,
							resolveContext,
							callback
						);
					},
					(err, result) => callback(err, result || null)
				);
			});
	}
};


/***/ }),

/***/ 6157:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class FileExistsPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		const fs = resolver.fileSystem;
		resolver
			.getHook(this.source)
			.tapAsync("FileExistsPlugin", (request, resolveContext, callback) => {
				const file = request.path;
				if (!file) return callback();
				fs.stat(file, (err, stat) => {
					if (err || !stat) {
						if (resolveContext.missingDependencies)
							resolveContext.missingDependencies.add(file);
						if (resolveContext.log) resolveContext.log(file + " doesn't exist");
						return callback();
					}
					if (!stat.isFile()) {
						if (resolveContext.missingDependencies)
							resolveContext.missingDependencies.add(file);
						if (resolveContext.log) resolveContext.log(file + " is not a file");
						return callback();
					}
					if (resolveContext.fileDependencies)
						resolveContext.fileDependencies.add(file);
					resolver.doResolve(
						target,
						request,
						"existing file: " + file,
						resolveContext,
						callback
					);
				});
			});
	}
};


/***/ }),

/***/ 5860:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/



const path = __nccwpck_require__(5622);
const DescriptionFileUtils = __nccwpck_require__(5387);
const forEachBail = __nccwpck_require__(4833);
const { processImportsField } = __nccwpck_require__(3679);
const { parseIdentifier } = __nccwpck_require__(2505);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {import("./util/entrypoints").FieldProcessor} FieldProcessor */
/** @typedef {import("./util/entrypoints").ImportsField} ImportsField */

const dotCode = ".".charCodeAt(0);

module.exports = class ImportsFieldPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Set<string>} conditionNames condition names
	 * @param {string | string[]} fieldNamePath name path
	 * @param {string | ResolveStepHook} targetFile target file
	 * @param {string | ResolveStepHook} targetPackage target package
	 */
	constructor(
		source,
		conditionNames,
		fieldNamePath,
		targetFile,
		targetPackage
	) {
		this.source = source;
		this.targetFile = targetFile;
		this.targetPackage = targetPackage;
		this.conditionNames = conditionNames;
		this.fieldName = fieldNamePath;
		/** @type {WeakMap<any, FieldProcessor>} */
		this.fieldProcessorCache = new WeakMap();
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const targetFile = resolver.ensureHook(this.targetFile);
		const targetPackage = resolver.ensureHook(this.targetPackage);

		resolver
			.getHook(this.source)
			.tapAsync("ImportsFieldPlugin", (request, resolveContext, callback) => {
				// When there is no description file, abort
				if (!request.descriptionFilePath) return callback();

				if (
					// When the description file is inherited from parent, abort
					// (There is no description file inside of this package)
					request.relativePath !== "." ||
					request.request === undefined
				)
					return callback();

				const remainingRequest =
					request.request + request.query + request.fragment;
				/** @type {ImportsField|null} */
				const importsField = DescriptionFileUtils.getField(
					request.descriptionFileData,
					this.fieldName
				);
				if (!importsField) return callback();

				if (request.directory) {
					return callback(
						new Error(
							`Resolving to directories is not possible with the imports field (request was ${remainingRequest}/)`
						)
					);
				}

				let paths;

				try {
					// We attach the cache to the description file instead of the importsField value
					// because we use a WeakMap and the importsField could be a string too.
					// Description file is always an object when exports field can be accessed.
					let fieldProcessor = this.fieldProcessorCache.get(
						request.descriptionFileData
					);
					if (fieldProcessor === undefined) {
						fieldProcessor = processImportsField(importsField);
						this.fieldProcessorCache.set(
							request.descriptionFileData,
							fieldProcessor
						);
					}
					paths = fieldProcessor(remainingRequest, this.conditionNames);
				} catch (err) {
					if (resolveContext.log) {
						resolveContext.log(
							`Imports field in ${request.descriptionFilePath} can't be processed: ${err}`
						);
					}
					return callback(err);
				}

				if (paths.length === 0) {
					return callback(
						new Error(
							`Package import ${remainingRequest} is not imported from package ${request.descriptionFileRoot} (see imports field in ${request.descriptionFilePath})`
						)
					);
				}

				forEachBail(
					paths,
					(p, callback) => {
						const parsedIdentifier = parseIdentifier(p);

						if (!parsedIdentifier) return callback();

						const [path_, query, fragment] = parsedIdentifier;

						switch (path_.charCodeAt(0)) {
							// should be relative
							case dotCode: {
								const obj = {
									...request,
									request: undefined,
									path: path.join(
										/** @type {string} */ (request.descriptionFileRoot),
										path_
									),
									relativePath: path_,
									query,
									fragment
								};

								resolver.doResolve(
									targetFile,
									obj,
									"using imports field: " + p,
									resolveContext,
									callback
								);
								break;
							}

							// package resolving
							default: {
								const obj = {
									...request,
									request: path_,
									relativePath: path_,
									fullySpecified: true,
									query,
									fragment
								};

								resolver.doResolve(
									targetPackage,
									obj,
									"using imports field: " + p,
									resolveContext,
									callback
								);
							}
						}
					},
					(err, result) => callback(err, result || null)
				);
			});
	}
};


/***/ }),

/***/ 8095:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

const namespaceStartCharCode = "@".charCodeAt(0);

module.exports = class JoinRequestPartPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync(
				"JoinRequestPartPlugin",
				(request, resolveContext, callback) => {
					const req = request.request || "";
					let i = req.indexOf("/", 3);

					if (i >= 0 && req.charCodeAt(2) === namespaceStartCharCode) {
						i = req.indexOf("/", i + 1);
					}

					let moduleName, remainingRequest, fullySpecified;
					if (i < 0) {
						moduleName = req;
						remainingRequest = ".";
						fullySpecified = false;
					} else {
						moduleName = req.slice(0, i);
						remainingRequest = "." + req.slice(i);
						fullySpecified = request.fullySpecified;
					}
					const obj = {
						...request,
						path: resolver.join(request.path, moduleName),
						relativePath:
							request.relativePath &&
							resolver.join(request.relativePath, moduleName),
						request: remainingRequest,
						fullySpecified
					};
					resolver.doResolve(target, obj, null, resolveContext, callback);
				}
			);
	}
};


/***/ }),

/***/ 2010:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class JoinRequestPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("JoinRequestPlugin", (request, resolveContext, callback) => {
				const obj = {
					...request,
					path: resolver.join(request.path, request.request),
					relativePath:
						request.relativePath &&
						resolver.join(request.relativePath, request.request),
					request: undefined
				};
				resolver.doResolve(target, obj, null, resolveContext, callback);
			});
	}
};


/***/ }),

/***/ 1656:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */

module.exports = class LogInfoPlugin {
	constructor(source) {
		this.source = source;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const source = this.source;
		resolver
			.getHook(this.source)
			.tapAsync("LogInfoPlugin", (request, resolveContext, callback) => {
				if (!resolveContext.log) return callback();
				const log = resolveContext.log;
				const prefix = "[" + source + "] ";
				if (request.path)
					log(prefix + "Resolving in directory: " + request.path);
				if (request.request)
					log(prefix + "Resolving request: " + request.request);
				if (request.module) log(prefix + "Request is an module request.");
				if (request.directory) log(prefix + "Request is a directory request.");
				if (request.query)
					log(prefix + "Resolving request query: " + request.query);
				if (request.fragment)
					log(prefix + "Resolving request fragment: " + request.fragment);
				if (request.descriptionFilePath)
					log(
						prefix + "Has description data from " + request.descriptionFilePath
					);
				if (request.relativePath)
					log(
						prefix +
							"Relative path from description file is: " +
							request.relativePath
					);
				callback();
			});
	}
};


/***/ }),

/***/ 3438:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const path = __nccwpck_require__(5622);
const DescriptionFileUtils = __nccwpck_require__(5387);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {{name: string|Array<string>, forceRelative: boolean}} MainFieldOptions */

const alreadyTriedMainField = Symbol("alreadyTriedMainField");

module.exports = class MainFieldPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {MainFieldOptions} options options
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, options, target) {
		this.source = source;
		this.options = options;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("MainFieldPlugin", (request, resolveContext, callback) => {
				if (
					request.path !== request.descriptionFileRoot ||
					request[alreadyTriedMainField] === request.descriptionFilePath ||
					!request.descriptionFilePath
				)
					return callback();
				const filename = path.basename(request.descriptionFilePath);
				let mainModule = DescriptionFileUtils.getField(
					request.descriptionFileData,
					this.options.name
				);

				if (
					!mainModule ||
					typeof mainModule !== "string" ||
					mainModule === "." ||
					mainModule === "./"
				) {
					return callback();
				}
				if (this.options.forceRelative && !/^\.\.?\//.test(mainModule))
					mainModule = "./" + mainModule;
				const obj = {
					...request,
					request: mainModule,
					module: false,
					directory: mainModule.endsWith("/"),
					[alreadyTriedMainField]: request.descriptionFilePath
				};
				return resolver.doResolve(
					target,
					obj,
					"use " +
						mainModule +
						" from " +
						this.options.name +
						" in " +
						filename,
					resolveContext,
					callback
				);
			});
	}
};


/***/ }),

/***/ 1083:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const forEachBail = __nccwpck_require__(4833);
const getPaths = __nccwpck_require__(4880);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ModulesInHierachicDirectoriesPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | Array<string>} directories directories
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, directories, target) {
		this.source = source;
		this.directories = /** @type {Array<string>} */ ([]).concat(directories);
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync(
				"ModulesInHierachicDirectoriesPlugin",
				(request, resolveContext, callback) => {
					const fs = resolver.fileSystem;
					const addrs = getPaths(request.path)
						.paths.map(p => {
							return this.directories.map(d => resolver.join(p, d));
						})
						.reduce((array, p) => {
							array.push.apply(array, p);
							return array;
						}, []);
					forEachBail(
						addrs,
						(addr, callback) => {
							fs.stat(addr, (err, stat) => {
								if (!err && stat && stat.isDirectory()) {
									const obj = {
										...request,
										path: addr,
										request: "./" + request.request,
										module: false
									};
									const message = "looking for modules in " + addr;
									return resolver.doResolve(
										target,
										obj,
										message,
										resolveContext,
										callback
									);
								}
								if (resolveContext.log)
									resolveContext.log(
										addr + " doesn't exist or is not a directory"
									);
								if (resolveContext.missingDependencies)
									resolveContext.missingDependencies.add(addr);
								return callback();
							});
						},
						callback
					);
				}
			);
	}
};


/***/ }),

/***/ 9650:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ModulesInRootPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string} path path
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, path, target) {
		this.source = source;
		this.path = path;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("ModulesInRootPlugin", (request, resolveContext, callback) => {
				const obj = {
					...request,
					path: this.path,
					request: "./" + request.request,
					module: false
				};
				resolver.doResolve(
					target,
					obj,
					"looking for modules in " + this.path,
					resolveContext,
					callback
				);
			});
	}
};


/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class NextPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("NextPlugin", (request, resolveContext, callback) => {
				resolver.doResolve(target, request, null, resolveContext, callback);
			});
	}
};


/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ParsePlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Partial<ResolveRequest>} requestOptions request options
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, requestOptions, target) {
		this.source = source;
		this.requestOptions = requestOptions;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("ParsePlugin", (request, resolveContext, callback) => {
				const parsed = resolver.parse(/** @type {string} */ (request.request));
				const obj = { ...request, ...parsed, ...this.requestOptions };
				if (request.query && !parsed.query) {
					obj.query = request.query;
				}
				if (request.fragment && !parsed.fragment) {
					obj.fragment = request.fragment;
				}
				if (parsed && resolveContext.log) {
					if (parsed.module) resolveContext.log("Parsed request is a module");
					if (parsed.directory)
						resolveContext.log("Parsed request is a directory");
				}
				resolver.doResolve(target, obj, null, resolveContext, callback);
			});
	}
};


/***/ }),

/***/ 2049:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Maël Nison @arcanis
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/**
 * @typedef {Object} PnpApiImpl
 * @property {function(string, string, Object): string} resolveToUnqualified
 */

module.exports = class PnpPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {PnpApiImpl} pnpApi pnpApi
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, pnpApi, target) {
		this.source = source;
		this.pnpApi = pnpApi;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("PnpPlugin", (request, resolveContext, callback) => {
				const req = request.request;
				if (!req) return callback();

				// The trailing slash indicates to PnP that this value is a folder rather than a file
				const issuer = `${request.path}/`;

				let resolution;
				let apiResolution;
				try {
					resolution = this.pnpApi.resolveToUnqualified(req, issuer, {
						considerBuiltins: false
					});
					if (resolveContext.fileDependencies) {
						apiResolution = this.pnpApi.resolveToUnqualified("pnpapi", issuer, {
							considerBuiltins: false
						});
					}
				} catch (error) {
					if (
						error.code === "MODULE_NOT_FOUND" &&
						error.pnpCode === "UNDECLARED_DEPENDENCY"
					) {
						// This is not a PnP managed dependency.
						// Try to continue resolving with our alternatives
						if (resolveContext.log) {
							resolveContext.log(`request is not managed by the pnpapi`);
							for (const line of error.message.split("\n").filter(Boolean))
								resolveContext.log(`  ${line}`);
						}
						return callback();
					}
					return callback(error);
				}

				if (resolution === req) return callback();

				if (apiResolution && resolveContext.fileDependencies) {
					resolveContext.fileDependencies.add(apiResolution);
				}

				const obj = {
					...request,
					path: resolution,
					request: undefined,
					ignoreSymlinks: true
				};
				resolver.doResolve(
					target,
					obj,
					`resolved by pnp to ${resolution}`,
					resolveContext,
					(err, result) => {
						if (err) return callback(err);
						if (result) return callback(null, result);
						// Skip alternatives
						return callback(null, null);
					}
				);
			});
	}
};


/***/ }),

/***/ 2009:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const { AsyncSeriesBailHook, AsyncSeriesHook, SyncHook } = __nccwpck_require__(8636);
const createInnerContext = __nccwpck_require__(6072);
const { parseIdentifier } = __nccwpck_require__(2505);
const {
	normalize,
	cachedJoin: join,
	getType,
	PathType
} = __nccwpck_require__(4030);

/** @typedef {import("./ResolverFactory").ResolveOptions} ResolveOptions */

/**
 * @typedef {Object} FileSystemStats
 * @property {function(): boolean} isDirectory
 * @property {function(): boolean} isFile
 */

/**
 * @typedef {Object} FileSystemDirent
 * @property {Buffer | string} name
 * @property {function(): boolean} isDirectory
 * @property {function(): boolean} isFile
 */

/**
 * @typedef {Object} PossibleFileSystemError
 * @property {string=} code
 * @property {number=} errno
 * @property {string=} path
 * @property {string=} syscall
 */

/**
 * @template T
 * @callback FileSystemCallback
 * @param {PossibleFileSystemError & Error | null | undefined} err
 * @param {T=} result
 */

/**
 * @typedef {Object} FileSystem
 * @property {(function(string, FileSystemCallback<Buffer | string>): void) & function(string, object, FileSystemCallback<Buffer | string>): void} readFile
 * @property {(function(string, FileSystemCallback<(Buffer | string)[] | FileSystemDirent[]>): void) & function(string, object, FileSystemCallback<(Buffer | string)[] | FileSystemDirent[]>): void} readdir
 * @property {((function(string, FileSystemCallback<object>): void) & function(string, object, FileSystemCallback<object>): void)=} readJson
 * @property {(function(string, FileSystemCallback<Buffer | string>): void) & function(string, object, FileSystemCallback<Buffer | string>): void} readlink
 * @property {(function(string, FileSystemCallback<FileSystemStats>): void) & function(string, object, FileSystemCallback<Buffer | string>): void} stat
 */

/**
 * @typedef {Object} SyncFileSystem
 * @property {function(string, object=): Buffer | string} readFileSync
 * @property {function(string, object=): (Buffer | string)[] | FileSystemDirent[]} readdirSync
 * @property {(function(string, object=): object)=} readJsonSync
 * @property {function(string, object=): Buffer | string} readlinkSync
 * @property {function(string, object=): FileSystemStats} statSync
 */

/**
 * @typedef {Object} ParsedIdentifier
 * @property {string} request
 * @property {string} query
 * @property {string} fragment
 * @property {boolean} directory
 * @property {boolean} module
 * @property {boolean} file
 * @property {boolean} internal
 */

/**
 * @typedef {Object} BaseResolveRequest
 * @property {string | false} path
 * @property {string=} descriptionFilePath
 * @property {string=} descriptionFileRoot
 * @property {object=} descriptionFileData
 * @property {string=} relativePath
 * @property {boolean=} ignoreSymlinks
 * @property {boolean=} fullySpecified
 */

/** @typedef {BaseResolveRequest & Partial<ParsedIdentifier>} ResolveRequest */

/**
 * String with special formatting
 * @typedef {string} StackEntry
 */

/** @template T @typedef {{ add: (T) => void }} WriteOnlySet<T> */

/**
 * Resolve context
 * @typedef {Object} ResolveContext
 * @property {WriteOnlySet<string>=} contextDependencies
 * @property {WriteOnlySet<string>=} fileDependencies files that was found on file system
 * @property {WriteOnlySet<string>=} missingDependencies dependencies that was not found on file system
 * @property {Set<StackEntry>=} stack set of hooks' calls. For instance, `resolve → parsedResolve → describedResolve`,
 * @property {(function(string): void)=} log log function
 */

/** @typedef {AsyncSeriesBailHook<[ResolveRequest, ResolveContext], ResolveRequest | null>} ResolveStepHook */

/**
 * @param {string} str input string
 * @returns {string} in camel case
 */
function toCamelCase(str) {
	return str.replace(/-([a-z])/g, str => str.substr(1).toUpperCase());
}

class Resolver {
	/**
	 * @param {ResolveStepHook} hook hook
	 * @param {ResolveRequest} request request
	 * @returns {StackEntry} stack entry
	 */
	static createStackEntry(hook, request) {
		return (
			hook.name +
			": (" +
			request.path +
			") " +
			(request.request || "") +
			(request.query || "") +
			(request.fragment || "") +
			(request.directory ? " directory" : "") +
			(request.module ? " module" : "")
		);
	}

	/**
	 * @param {FileSystem} fileSystem a filesystem
	 * @param {ResolveOptions} options options
	 */
	constructor(fileSystem, options) {
		this.fileSystem = fileSystem;
		this.options = options;
		this.hooks = {
			/** @type {SyncHook<[ResolveStepHook, ResolveRequest], void>} */
			resolveStep: new SyncHook(["hook", "request"], "resolveStep"),
			/** @type {SyncHook<[ResolveRequest, Error]>} */
			noResolve: new SyncHook(["request", "error"], "noResolve"),
			/** @type {ResolveStepHook} */
			resolve: new AsyncSeriesBailHook(
				["request", "resolveContext"],
				"resolve"
			),
			/** @type {AsyncSeriesHook<[ResolveRequest, ResolveContext], void>} */
			result: new AsyncSeriesHook(["result", "resolveContext"], "result")
		};
	}

	/**
	 * @param {string | ResolveStepHook} name hook name or hook itself
	 * @returns {ResolveStepHook} the hook
	 */
	ensureHook(name) {
		if (typeof name !== "string") {
			return name;
		}
		name = toCamelCase(name);
		if (/^before/.test(name)) {
			return /** @type {ResolveStepHook} */ (this.ensureHook(
				name[6].toLowerCase() + name.substr(7)
			).withOptions({
				stage: -10
			}));
		}
		if (/^after/.test(name)) {
			return /** @type {ResolveStepHook} */ (this.ensureHook(
				name[5].toLowerCase() + name.substr(6)
			).withOptions({
				stage: 10
			}));
		}
		const hook = this.hooks[name];
		if (!hook) {
			return (this.hooks[name] = new AsyncSeriesBailHook(
				["request", "resolveContext"],
				name
			));
		}
		return hook;
	}

	/**
	 * @param {string | ResolveStepHook} name hook name or hook itself
	 * @returns {ResolveStepHook} the hook
	 */
	getHook(name) {
		if (typeof name !== "string") {
			return name;
		}
		name = toCamelCase(name);
		if (/^before/.test(name)) {
			return /** @type {ResolveStepHook} */ (this.getHook(
				name[6].toLowerCase() + name.substr(7)
			).withOptions({
				stage: -10
			}));
		}
		if (/^after/.test(name)) {
			return /** @type {ResolveStepHook} */ (this.getHook(
				name[5].toLowerCase() + name.substr(6)
			).withOptions({
				stage: 10
			}));
		}
		const hook = this.hooks[name];
		if (!hook) {
			throw new Error(`Hook ${name} doesn't exist`);
		}
		return hook;
	}

	/**
	 * @param {object} context context information object
	 * @param {string} path context path
	 * @param {string} request request string
	 * @returns {string | false} result
	 */
	resolveSync(context, path, request) {
		/** @type {Error | null | undefined} */
		let err = undefined;
		/** @type {string | false | undefined} */
		let result = undefined;
		let sync = false;
		this.resolve(context, path, request, {}, (e, r) => {
			err = e;
			result = r;
			sync = true;
		});
		if (!sync) {
			throw new Error(
				"Cannot 'resolveSync' because the fileSystem is not sync. Use 'resolve'!"
			);
		}
		if (err) throw err;
		if (result === undefined) throw new Error("No result");
		return result;
	}

	/**
	 * @param {object} context context information object
	 * @param {string} path context path
	 * @param {string} request request string
	 * @param {ResolveContext} resolveContext resolve context
	 * @param {function(Error | null, (string|false)=, ResolveRequest=): void} callback callback function
	 * @returns {void}
	 */
	resolve(context, path, request, resolveContext, callback) {
		const obj = {
			context: context,
			path: path,
			request: request
		};

		const message = `resolve '${request}' in '${path}'`;

		const finishResolved = result => {
			return callback(
				null,
				result.path === false
					? false
					: `${result.path}${result.query || ""}${result.fragment || ""}`,
				result
			);
		};

		const finishWithoutResolve = log => {
			/**
			 * @type {Error & {details?: string}}
			 */
			const error = new Error("Can't " + message);
			error.details = log.join("\n");
			this.hooks.noResolve.call(obj, error);
			return callback(error);
		};

		if (resolveContext.log) {
			// We need log anyway to capture it in case of an error
			const parentLog = resolveContext.log;
			const log = [];
			return this.doResolve(
				this.hooks.resolve,
				obj,
				message,
				{
					log: msg => {
						parentLog(msg);
						log.push(msg);
					},
					fileDependencies: resolveContext.fileDependencies,
					contextDependencies: resolveContext.contextDependencies,
					missingDependencies: resolveContext.missingDependencies,
					stack: resolveContext.stack
				},
				(err, result) => {
					if (err) return callback(err);

					if (result) return finishResolved(result);

					return finishWithoutResolve(log);
				}
			);
		} else {
			// Try to resolve assuming there is no error
			// We don't log stuff in this case
			return this.doResolve(
				this.hooks.resolve,
				obj,
				message,
				{
					log: undefined,
					fileDependencies: resolveContext.fileDependencies,
					contextDependencies: resolveContext.contextDependencies,
					missingDependencies: resolveContext.missingDependencies,
					stack: resolveContext.stack
				},
				(err, result) => {
					if (err) return callback(err);

					if (result) return finishResolved(result);

					// log is missing for the error details
					// so we redo the resolving for the log info
					// this is more expensive to the success case
					// is assumed by default

					const log = [];

					return this.doResolve(
						this.hooks.resolve,
						obj,
						message,
						{
							log: msg => log.push(msg),
							stack: resolveContext.stack
						},
						(err, result) => {
							if (err) return callback(err);

							return finishWithoutResolve(log);
						}
					);
				}
			);
		}
	}

	doResolve(hook, request, message, resolveContext, callback) {
		const stackEntry = Resolver.createStackEntry(hook, request);

		let newStack;
		if (resolveContext.stack) {
			newStack = new Set(resolveContext.stack);
			if (resolveContext.stack.has(stackEntry)) {
				/**
				 * Prevent recursion
				 * @type {Error & {recursion?: boolean}}
				 */
				const recursionError = new Error(
					"Recursion in resolving\nStack:\n  " +
						Array.from(newStack).join("\n  ")
				);
				recursionError.recursion = true;
				if (resolveContext.log)
					resolveContext.log("abort resolving because of recursion");
				return callback(recursionError);
			}
			newStack.add(stackEntry);
		} else {
			newStack = new Set([stackEntry]);
		}
		this.hooks.resolveStep.call(hook, request);

		if (hook.isUsed()) {
			const innerContext = createInnerContext(
				{
					log: resolveContext.log,
					fileDependencies: resolveContext.fileDependencies,
					contextDependencies: resolveContext.contextDependencies,
					missingDependencies: resolveContext.missingDependencies,
					stack: newStack
				},
				message
			);
			return hook.callAsync(request, innerContext, (err, result) => {
				if (err) return callback(err);
				if (result) return callback(null, result);
				callback();
			});
		} else {
			callback();
		}
	}

	/**
	 * @param {string} identifier identifier
	 * @returns {ParsedIdentifier} parsed identifier
	 */
	parse(identifier) {
		const part = {
			request: "",
			query: "",
			fragment: "",
			module: false,
			directory: false,
			file: false,
			internal: false
		};

		const parsedIdentifier = parseIdentifier(identifier);

		if (!parsedIdentifier) return part;

		[part.request, part.query, part.fragment] = parsedIdentifier;

		if (part.request.length > 0) {
			part.internal = this.isPrivate(identifier);
			part.module = this.isModule(part.request);
			part.directory = this.isDirectory(part.request);
			if (part.directory) {
				part.request = part.request.substr(0, part.request.length - 1);
			}
		}

		return part;
	}

	isModule(path) {
		return getType(path) === PathType.Normal;
	}

	isPrivate(path) {
		return getType(path) === PathType.Internal;
	}

	/**
	 * @param {string} path a path
	 * @returns {boolean} true, if the path is a directory path
	 */
	isDirectory(path) {
		return path.endsWith("/");
	}

	join(path, request) {
		return join(path, request);
	}

	normalize(path) {
		return normalize(path);
	}
}

module.exports = Resolver;


/***/ }),

/***/ 5429:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const Resolver = __nccwpck_require__(2009);
const { getType, PathType } = __nccwpck_require__(4030);

const SyncAsyncFileSystemDecorator = __nccwpck_require__(4233);

const AliasFieldPlugin = __nccwpck_require__(3645);
const AliasPlugin = __nccwpck_require__(7222);
const AppendPlugin = __nccwpck_require__(5864);
const ConditionalPlugin = __nccwpck_require__(5607);
const DescriptionFilePlugin = __nccwpck_require__(7644);
const DirectoryExistsPlugin = __nccwpck_require__(674);
const ExportsFieldPlugin = __nccwpck_require__(1866);
const FileExistsPlugin = __nccwpck_require__(6157);
const ImportsFieldPlugin = __nccwpck_require__(5860);
const JoinRequestPartPlugin = __nccwpck_require__(8095);
const JoinRequestPlugin = __nccwpck_require__(2010);
const MainFieldPlugin = __nccwpck_require__(3438);
const ModulesInHierachicDirectoriesPlugin = __nccwpck_require__(1083);
const ModulesInRootPlugin = __nccwpck_require__(9650);
const NextPlugin = __nccwpck_require__(6695);
const ParsePlugin = __nccwpck_require__(3103);
const PnpPlugin = __nccwpck_require__(2049);
const RestrictionsPlugin = __nccwpck_require__(7659);
const ResultPlugin = __nccwpck_require__(3254);
const RootsPlugin = __nccwpck_require__(6836);
const SelfReferencePlugin = __nccwpck_require__(3600);
const SymlinkPlugin = __nccwpck_require__(7138);
const TryNextPlugin = __nccwpck_require__(2351);
const UnsafeCachePlugin = __nccwpck_require__(7604);
const UseFilePlugin = __nccwpck_require__(2229);

/** @typedef {import("./AliasPlugin").AliasOption} AliasOptionEntry */
/** @typedef {import("./PnpPlugin").PnpApiImpl} PnpApi */
/** @typedef {import("./Resolver").FileSystem} FileSystem */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").SyncFileSystem} SyncFileSystem */

/** @typedef {string|string[]|false} AliasOptionNewRequest */
/** @typedef {{[k: string]: AliasOptionNewRequest}} AliasOptions */
/** @typedef {{apply: function(Resolver): void} | function(this: Resolver, Resolver): void} Plugin */

/**
 * @typedef {Object} UserResolveOptions
 * @property {(AliasOptions | AliasOptionEntry[])=} alias A list of module alias configurations or an object which maps key to value
 * @property {(AliasOptions | AliasOptionEntry[])=} fallback A list of module alias configurations or an object which maps key to value, applied only after modules option
 * @property {(string | string[])[]=} aliasFields A list of alias fields in description files
 * @property {(function(ResolveRequest): boolean)=} cachePredicate A function which decides whether a request should be cached or not. An object is passed with at least `path` and `request` properties.
 * @property {boolean=} cacheWithContext Whether or not the unsafeCache should include request context as part of the cache key.
 * @property {string[]=} descriptionFiles A list of description files to read from
 * @property {string[]=} conditionNames A list of exports field condition names.
 * @property {boolean=} enforceExtension Enforce that a extension from extensions must be used
 * @property {(string | string[])[]=} exportsFields A list of exports fields in description files
 * @property {(string | string[])[]=} importsFields A list of imports fields in description files
 * @property {string[]=} extensions A list of extensions which should be tried for files
 * @property {FileSystem} fileSystem The file system which should be used
 * @property {(Object | boolean)=} unsafeCache Use this cache object to unsafely cache the successful requests
 * @property {boolean=} symlinks Resolve symlinks to their symlinked location
 * @property {Resolver=} resolver A prepared Resolver to which the plugins are attached
 * @property {string[] | string=} modules A list of directories to resolve modules from, can be absolute path or folder name
 * @property {(string | string[] | {name: string | string[], forceRelative: boolean})[]=} mainFields A list of main fields in description files
 * @property {string[]=} mainFiles  A list of main files in directories
 * @property {Plugin[]=} plugins A list of additional resolve plugins which should be applied
 * @property {PnpApi | null=} pnpApi A PnP API that should be used - null is "never", undefined is "auto"
 * @property {string[]=} roots A list of root paths
 * @property {boolean=} fullySpecified The request is already fully specified and no extensions or directories are resolved for it
 * @property {boolean=} resolveToContext Resolve to a context instead of a file
 * @property {(string|RegExp)[]=} restrictions A list of resolve restrictions
 * @property {boolean=} useSyncFileSystemCalls Use only the sync constiants of the file system calls
 * @property {boolean=} preferRelative Prefer to resolve module requests as relative requests before falling back to modules
 */

/**
 * @typedef {Object} ResolveOptions
 * @property {AliasOptionEntry[]} alias
 * @property {AliasOptionEntry[]} fallback
 * @property {Set<string | string[]>} aliasFields
 * @property {(function(ResolveRequest): boolean)} cachePredicate
 * @property {boolean} cacheWithContext
 * @property {Set<string>} conditionNames A list of exports field condition names.
 * @property {string[]} descriptionFiles
 * @property {boolean} enforceExtension
 * @property {Set<string | string[]>} exportsFields
 * @property {Set<string | string[]>} importsFields
 * @property {Set<string>} extensions
 * @property {FileSystem} fileSystem
 * @property {Object | false} unsafeCache
 * @property {boolean} symlinks
 * @property {Resolver=} resolver
 * @property {Array<string | string[]>} modules
 * @property {{name: string[], forceRelative: boolean}[]} mainFields
 * @property {Set<string>} mainFiles
 * @property {Plugin[]} plugins
 * @property {PnpApi | null} pnpApi
 * @property {Set<string>} roots
 * @property {boolean} fullySpecified
 * @property {boolean} resolveToContext
 * @property {Set<string|RegExp>} restrictions
 * @property {boolean} preferRelative
 */

/**
 * @param {PnpApi | null=} option option
 * @returns {PnpApi | null} processed option
 */
function processPnpApiOption(option) {
	if (
		option === undefined &&
		/** @type {NodeJS.ProcessVersions & {pnp: string}} */ (process.versions).pnp
	) {
		// @ts-ignore
		return __nccwpck_require__(7289); // eslint-disable-line node/no-missing-require
	}

	return option || null;
}

/**
 * @param {AliasOptions | AliasOptionEntry[] | undefined} alias alias
 * @returns {AliasOptionEntry[]} normalized aliases
 */
function normalizeAlias(alias) {
	return typeof alias === "object" && !Array.isArray(alias) && alias !== null
		? Object.keys(alias).map(key => {
				/** @type {AliasOptionEntry} */
				const obj = { name: key, onlyModule: false, alias: alias[key] };

				if (/\$$/.test(key)) {
					obj.onlyModule = true;
					obj.name = key.substr(0, key.length - 1);
				}

				return obj;
		  })
		: /** @type {Array<AliasOptionEntry>} */ (alias) || [];
}

/**
 * @param {UserResolveOptions} options input options
 * @returns {ResolveOptions} output options
 */
function createOptions(options) {
	const mainFieldsSet = new Set(options.mainFields || ["main"]);
	const mainFields = [];

	for (const item of mainFieldsSet) {
		if (typeof item === "string") {
			mainFields.push({
				name: [item],
				forceRelative: true
			});
		} else if (Array.isArray(item)) {
			mainFields.push({
				name: item,
				forceRelative: true
			});
		} else {
			mainFields.push({
				name: Array.isArray(item.name) ? item.name : [item.name],
				forceRelative: item.forceRelative
			});
		}
	}

	return {
		alias: normalizeAlias(options.alias),
		fallback: normalizeAlias(options.fallback),
		aliasFields: new Set(options.aliasFields),
		cachePredicate:
			options.cachePredicate ||
			function () {
				return true;
			},
		cacheWithContext:
			typeof options.cacheWithContext !== "undefined"
				? options.cacheWithContext
				: true,
		exportsFields: new Set(options.exportsFields || ["exports"]),
		importsFields: new Set(options.importsFields || ["imports"]),
		conditionNames: new Set(options.conditionNames),
		descriptionFiles: Array.from(
			new Set(options.descriptionFiles || ["package.json"])
		),
		enforceExtension: options.enforceExtension || false,
		extensions: new Set(options.extensions || [".js", ".json", ".node"]),
		fileSystem: options.useSyncFileSystemCalls
			? new SyncAsyncFileSystemDecorator(
					/** @type {SyncFileSystem} */ (
						/** @type {unknown} */ (options.fileSystem)
					)
			  )
			: options.fileSystem,
		unsafeCache:
			options.unsafeCache && typeof options.unsafeCache !== "object"
				? {}
				: options.unsafeCache || false,
		symlinks: typeof options.symlinks !== "undefined" ? options.symlinks : true,
		resolver: options.resolver,
		modules: mergeFilteredToArray(
			Array.isArray(options.modules)
				? options.modules
				: options.modules
				? [options.modules]
				: ["node_modules"],
			item => {
				const type = getType(item);
				return type === PathType.Normal || type === PathType.Relative;
			}
		),
		mainFields,
		mainFiles: new Set(options.mainFiles || ["index"]),
		plugins: options.plugins || [],
		pnpApi: processPnpApiOption(options.pnpApi),
		roots: new Set(options.roots || undefined),
		fullySpecified: options.fullySpecified || false,
		resolveToContext: options.resolveToContext || false,
		preferRelative: options.preferRelative || false,
		restrictions: new Set(options.restrictions)
	};
}

/**
 * @param {UserResolveOptions} options resolve options
 * @returns {Resolver} created resolver
 */
exports.createResolver = function (options) {
	const normalizedOptions = createOptions(options);

	const {
		alias,
		fallback,
		aliasFields,
		cachePredicate,
		cacheWithContext,
		conditionNames,
		descriptionFiles,
		enforceExtension,
		exportsFields,
		importsFields,
		extensions,
		fileSystem,
		fullySpecified,
		mainFields,
		mainFiles,
		modules,
		plugins: userPlugins,
		pnpApi,
		resolveToContext,
		preferRelative,
		symlinks,
		unsafeCache,
		resolver: customResolver,
		restrictions,
		roots
	} = normalizedOptions;

	const plugins = userPlugins.slice();

	const resolver = customResolver
		? customResolver
		: new Resolver(fileSystem, normalizedOptions);

	//// pipeline ////

	resolver.ensureHook("resolve");
	resolver.ensureHook("internalResolve");
	resolver.ensureHook("newInteralResolve");
	resolver.ensureHook("parsedResolve");
	resolver.ensureHook("describedResolve");
	resolver.ensureHook("internal");
	resolver.ensureHook("rawModule");
	resolver.ensureHook("module");
	resolver.ensureHook("resolveAsModule");
	resolver.ensureHook("undescribedResolveInPackage");
	resolver.ensureHook("resolveInPackage");
	resolver.ensureHook("resolveInExistingDirectory");
	resolver.ensureHook("relative");
	resolver.ensureHook("describedRelative");
	resolver.ensureHook("directory");
	resolver.ensureHook("undescribedExistingDirectory");
	resolver.ensureHook("existingDirectory");
	resolver.ensureHook("undescribedRawFile");
	resolver.ensureHook("rawFile");
	resolver.ensureHook("file");
	resolver.ensureHook("finalFile");
	resolver.ensureHook("existingFile");
	resolver.ensureHook("resolved");

	// resolve
	for (const { source, resolveOptions } of [
		{ source: "resolve", resolveOptions: { fullySpecified } },
		{ source: "internal-resolve", resolveOptions: { fullySpecified: false } }
	]) {
		if (unsafeCache) {
			plugins.push(
				new UnsafeCachePlugin(
					source,
					cachePredicate,
					unsafeCache,
					cacheWithContext,
					`new-${source}`
				)
			);
			plugins.push(
				new ParsePlugin(`new-${source}`, resolveOptions, "parsed-resolve")
			);
		} else {
			plugins.push(new ParsePlugin(source, resolveOptions, "parsed-resolve"));
		}
	}

	// parsed-resolve
	plugins.push(
		new DescriptionFilePlugin(
			"parsed-resolve",
			descriptionFiles,
			false,
			"described-resolve"
		)
	);
	plugins.push(new NextPlugin("after-parsed-resolve", "described-resolve"));

	// described-resolve
	plugins.push(new NextPlugin("described-resolve", "normal-resolve"));
	if (fallback.length > 0) {
		plugins.push(
			new AliasPlugin("described-resolve", fallback, "internal-resolve")
		);
	}

	// normal-resolve
	if (alias.length > 0)
		plugins.push(new AliasPlugin("normal-resolve", alias, "internal-resolve"));
	aliasFields.forEach(item => {
		plugins.push(
			new AliasFieldPlugin("normal-resolve", item, "internal-resolve")
		);
	});
	if (preferRelative) {
		plugins.push(new JoinRequestPlugin("after-normal-resolve", "relative"));
	}
	plugins.push(
		new ConditionalPlugin(
			"after-normal-resolve",
			{ module: true },
			"resolve as module",
			false,
			"raw-module"
		)
	);
	plugins.push(
		new ConditionalPlugin(
			"after-normal-resolve",
			{ internal: true },
			"resolve as internal import",
			false,
			"internal"
		)
	);
	if (roots.size > 0) {
		plugins.push(new RootsPlugin("after-normal-resolve", roots, "relative"));
	}
	if (!preferRelative) {
		plugins.push(new JoinRequestPlugin("after-normal-resolve", "relative"));
	}

	// internal
	importsFields.forEach(importsField => {
		plugins.push(
			new ImportsFieldPlugin(
				"internal",
				conditionNames,
				importsField,
				"final-file",
				"internal-resolve"
			)
		);
	});

	// raw-module
	exportsFields.forEach(exportsField => {
		plugins.push(
			new SelfReferencePlugin("raw-module", exportsField, "resolve-as-module")
		);
	});
	modules.forEach(item => {
		if (Array.isArray(item)) {
			plugins.push(
				new ModulesInHierachicDirectoriesPlugin("raw-module", item, "module")
			);
			if (item.includes("node_modules") && pnpApi) {
				plugins.push(new PnpPlugin("raw-module", pnpApi, "relative"));
			}
		} else {
			plugins.push(new ModulesInRootPlugin("raw-module", item, "module"));
		}
	});

	// module
	plugins.push(new JoinRequestPartPlugin("module", "resolve-as-module"));

	// resolve-as-module
	if (!resolveToContext) {
		plugins.push(
			new ConditionalPlugin(
				"resolve-as-module",
				{ directory: false, request: "." },
				"single file module",
				true,
				"undescribed-raw-file"
			)
		);
	}
	plugins.push(
		new DirectoryExistsPlugin(
			"resolve-as-module",
			"undescribed-resolve-in-package"
		)
	);

	// undescribed-resolve-in-package
	plugins.push(
		new DescriptionFilePlugin(
			"undescribed-resolve-in-package",
			descriptionFiles,
			false,
			"resolve-in-package"
		)
	);
	plugins.push(
		new NextPlugin("after-undescribed-resolve-in-package", "resolve-in-package")
	);

	// resolve-in-package
	exportsFields.forEach(exportsField => {
		plugins.push(
			new ExportsFieldPlugin(
				"resolve-in-package",
				conditionNames,
				exportsField,
				"final-file"
			)
		);
	});
	plugins.push(
		new NextPlugin("resolve-in-package", "resolve-in-existing-directory")
	);

	// resolve-in-existing-directory
	plugins.push(
		new JoinRequestPlugin("resolve-in-existing-directory", "relative")
	);

	// relative
	plugins.push(
		new DescriptionFilePlugin(
			"relative",
			descriptionFiles,
			true,
			"described-relative"
		)
	);
	plugins.push(new NextPlugin("after-relative", "described-relative"));

	// described-relative
	if (resolveToContext) {
		plugins.push(new NextPlugin("described-relative", "directory"));
	} else {
		plugins.push(
			new ConditionalPlugin(
				"described-relative",
				{ directory: false },
				null,
				true,
				"raw-file"
			)
		);
		plugins.push(
			new ConditionalPlugin(
				"described-relative",
				{ fullySpecified: false },
				"as directory",
				true,
				"directory"
			)
		);
	}

	// directory
	plugins.push(
		new DirectoryExistsPlugin("directory", "undescribed-existing-directory")
	);

	if (resolveToContext) {
		// undescribed-existing-directory
		plugins.push(new NextPlugin("undescribed-existing-directory", "resolved"));
	} else {
		// undescribed-existing-directory
		plugins.push(
			new DescriptionFilePlugin(
				"undescribed-existing-directory",
				descriptionFiles,
				false,
				"existing-directory"
			)
		);
		mainFiles.forEach(item => {
			plugins.push(
				new UseFilePlugin(
					"undescribed-existing-directory",
					item,
					"undescribed-raw-file"
				)
			);
		});

		// described-existing-directory
		mainFields.forEach(item => {
			plugins.push(
				new MainFieldPlugin(
					"existing-directory",
					item,
					"resolve-in-existing-directory"
				)
			);
		});
		mainFiles.forEach(item => {
			plugins.push(
				new UseFilePlugin("existing-directory", item, "undescribed-raw-file")
			);
		});

		// undescribed-raw-file
		plugins.push(
			new DescriptionFilePlugin(
				"undescribed-raw-file",
				descriptionFiles,
				true,
				"raw-file"
			)
		);
		plugins.push(new NextPlugin("after-undescribed-raw-file", "raw-file"));

		// raw-file
		plugins.push(
			new ConditionalPlugin(
				"raw-file",
				{ fullySpecified: true },
				null,
				false,
				"file"
			)
		);
		if (!enforceExtension) {
			plugins.push(new TryNextPlugin("raw-file", "no extension", "file"));
		}
		extensions.forEach(item => {
			plugins.push(new AppendPlugin("raw-file", item, "file"));
		});

		// file
		if (alias.length > 0)
			plugins.push(new AliasPlugin("file", alias, "internal-resolve"));
		aliasFields.forEach(item => {
			plugins.push(new AliasFieldPlugin("file", item, "internal-resolve"));
		});
		plugins.push(new NextPlugin("file", "final-file"));

		// final-file
		plugins.push(new FileExistsPlugin("final-file", "existing-file"));

		// existing-file
		if (symlinks)
			plugins.push(new SymlinkPlugin("existing-file", "existing-file"));
		plugins.push(new NextPlugin("existing-file", "resolved"));
	}

	// resolved
	if (restrictions.size > 0) {
		plugins.push(new RestrictionsPlugin(resolver.hooks.resolved, restrictions));
	}
	plugins.push(new ResultPlugin(resolver.hooks.resolved));

	//// RESOLVER ////

	for (const plugin of plugins) {
		if (typeof plugin === "function") {
			plugin.call(resolver, resolver);
		} else {
			plugin.apply(resolver);
		}
	}

	return resolver;
};

/**
 * Merging filtered elements
 * @param {string[]} array source array
 * @param {function(string): boolean} filter predicate
 * @returns {Array<string | string[]>} merge result
 */
function mergeFilteredToArray(array, filter) {
	/** @type {Array<string | string[]>} */
	const result = [];
	const set = new Set(array);

	for (const item of set) {
		if (filter(item)) {
			const lastElement =
				result.length > 0 ? result[result.length - 1] : undefined;
			if (Array.isArray(lastElement)) {
				lastElement.push(item);
			} else {
				result.push([item]);
			}
		} else {
			result.push(item);
		}
	}

	return result;
}


/***/ }),

/***/ 7659:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

const slashCode = "/".charCodeAt(0);
const backslashCode = "\\".charCodeAt(0);

const isInside = (path, parent) => {
	if (!path.startsWith(parent)) return false;
	if (path.length === parent.length) return true;
	const charCode = path.charCodeAt(parent.length);
	return charCode === slashCode || charCode === backslashCode;
};

module.exports = class RestrictionsPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Set<string | RegExp>} restrictions restrictions
	 */
	constructor(source, restrictions) {
		this.source = source;
		this.restrictions = restrictions;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		resolver
			.getHook(this.source)
			.tapAsync("RestrictionsPlugin", (request, resolveContext, callback) => {
				if (typeof request.path === "string") {
					const path = request.path;
					for (const rule of this.restrictions) {
						if (typeof rule === "string") {
							if (!isInside(path, rule)) {
								if (resolveContext.log) {
									resolveContext.log(
										`${path} is not inside of the restriction ${rule}`
									);
								}
								return callback(null, null);
							}
						} else if (!rule.test(path)) {
							if (resolveContext.log) {
								resolveContext.log(
									`${path} doesn't match the restriction ${rule}`
								);
							}
							return callback(null, null);
						}
					}
				}

				callback();
			});
	}
};


/***/ }),

/***/ 3254:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ResultPlugin {
	/**
	 * @param {ResolveStepHook} source source
	 */
	constructor(source) {
		this.source = source;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		this.source.tapAsync(
			"ResultPlugin",
			(request, resolverContext, callback) => {
				const obj = { ...request };
				if (resolverContext.log)
					resolverContext.log("reporting result " + obj.path);
				resolver.hooks.result.callAsync(obj, resolverContext, err => {
					if (err) return callback(err);
					callback(null, obj);
				});
			}
		);
	}
};


/***/ }),

/***/ 6836:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/



const forEachBail = __nccwpck_require__(4833);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

class RootsPlugin {
	/**
	 * @param {string | ResolveStepHook} source source hook
	 * @param {Set<string>} roots roots
	 * @param {string | ResolveStepHook} target target hook
	 */
	constructor(source, roots, target) {
		this.roots = Array.from(roots);
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);

		resolver
			.getHook(this.source)
			.tapAsync("RootsPlugin", (request, resolveContext, callback) => {
				const req = request.request;
				if (!req) return callback();
				if (!req.startsWith("/")) return callback();

				forEachBail(
					this.roots,
					(root, callback) => {
						const path = resolver.join(root, req.slice(1));
						const obj = {
							...request,
							path,
							relativePath: request.relativePath && path
						};
						resolver.doResolve(
							target,
							obj,
							`root path ${root}`,
							resolveContext,
							callback
						);
					},
					callback
				);
			});
	}
}

module.exports = RootsPlugin;


/***/ }),

/***/ 3600:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const DescriptionFileUtils = __nccwpck_require__(5387);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

const slashCode = "/".charCodeAt(0);

module.exports = class SelfReferencePlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | string[]} fieldNamePath name path
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, fieldNamePath, target) {
		this.source = source;
		this.target = target;
		this.fieldName = fieldNamePath;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("SelfReferencePlugin", (request, resolveContext, callback) => {
				if (!request.descriptionFilePath) return callback();

				const req = request.request;
				if (!req) return callback();

				// Feature is only enabled when an exports field is present
				const exportsField = DescriptionFileUtils.getField(
					request.descriptionFileData,
					this.fieldName
				);
				if (!exportsField) return callback();

				const name = DescriptionFileUtils.getField(
					request.descriptionFileData,
					"name"
				);
				if (typeof name !== "string") return callback();

				if (
					req.startsWith(name) &&
					(req.length === name.length ||
						req.charCodeAt(name.length) === slashCode)
				) {
					const remainingRequest = `.${req.slice(name.length)}`;

					const obj = {
						...request,
						request: remainingRequest,
						path: /** @type {string} */ (request.descriptionFileRoot),
						relativePath: "."
					};

					resolver.doResolve(
						target,
						obj,
						"self reference",
						resolveContext,
						callback
					);
				} else {
					return callback();
				}
			});
	}
};


/***/ }),

/***/ 7138:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const forEachBail = __nccwpck_require__(4833);
const getPaths = __nccwpck_require__(4880);
const { getType, PathType } = __nccwpck_require__(4030);

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class SymlinkPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		const fs = resolver.fileSystem;
		resolver
			.getHook(this.source)
			.tapAsync("SymlinkPlugin", (request, resolveContext, callback) => {
				if (request.ignoreSymlinks) return callback();
				const pathsResult = getPaths(request.path);
				const pathSeqments = pathsResult.seqments;
				const paths = pathsResult.paths;

				let containsSymlink = false;
				let idx = -1;
				forEachBail(
					paths,
					(path, callback) => {
						idx++;
						if (resolveContext.fileDependencies)
							resolveContext.fileDependencies.add(path);
						fs.readlink(path, (err, result) => {
							if (!err && result) {
								pathSeqments[idx] = result;
								containsSymlink = true;
								// Shortcut when absolute symlink found
								const resultType = getType(result.toString());
								if (
									resultType === PathType.AbsoluteWin ||
									resultType === PathType.AbsolutePosix
								) {
									return callback(null, idx);
								}
							}
							callback();
						});
					},
					(err, idx) => {
						if (!containsSymlink) return callback();
						const resultSeqments =
							typeof idx === "number"
								? pathSeqments.slice(0, idx + 1)
								: pathSeqments.slice();
						const result = resultSeqments.reduceRight((a, b) => {
							return resolver.join(a, b);
						});
						const obj = {
							...request,
							path: result
						};
						resolver.doResolve(
							target,
							obj,
							"resolved symlink to " + result,
							resolveContext,
							callback
						);
					}
				);
			});
	}
};


/***/ }),

/***/ 4233:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver").FileSystem} FileSystem */
/** @typedef {import("./Resolver").SyncFileSystem} SyncFileSystem */

/**
 * @param {SyncFileSystem} fs file system implementation
 * @constructor
 */
function SyncAsyncFileSystemDecorator(fs) {
	this.fs = fs;
	this.stat = (arg, callback) => {
		let result;
		try {
			result = fs.statSync(arg);
		} catch (e) {
			return callback(e);
		}
		callback(null, result);
	};
	this.statSync = arg => fs.statSync(arg);

	this.readdir = (arg, callback) => {
		let result;
		try {
			result = fs.readdirSync(arg);
		} catch (e) {
			return callback(e);
		}
		callback(null, result);
	};
	this.readdirSync = arg => fs.readdirSync(arg);

	this.readFile = (arg, callback) => {
		let result;
		try {
			result = fs.readFileSync(arg);
		} catch (e) {
			return callback(e);
		}
		callback(null, result);
	};
	this.readFileSync = arg => fs.readFileSync(arg);

	this.readlink = (arg, callback) => {
		let result;
		try {
			result = fs.readlinkSync(arg);
		} catch (e) {
			return callback(e);
		}
		callback(null, result);
	};
	this.readlinkSync = arg => fs.readlinkSync(arg);

	this.readJson = undefined;
	this.readJsonSync = undefined;
	const readJsonSync = fs.readJsonSync;
	if (readJsonSync) {
		this.readJson = (arg, callback) => {
			let result;
			try {
				result = readJsonSync.call(fs, arg);
			} catch (e) {
				return callback(e);
			}
			callback(null, result);
		};

		this.readJsonSync = arg => readJsonSync.call(fs, arg);
	}
}
module.exports = SyncAsyncFileSystemDecorator;


/***/ }),

/***/ 2351:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class TryNextPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string} message message
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, message, target) {
		this.source = source;
		this.message = message;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("TryNextPlugin", (request, resolveContext, callback) => {
				resolver.doResolve(
					target,
					request,
					this.message,
					resolveContext,
					callback
				);
			});
	}
};


/***/ }),

/***/ 7604:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {{[k: string]: any}} Cache */

function getCacheId(request, withContext) {
	return JSON.stringify({
		context: withContext ? request.context : "",
		path: request.path,
		query: request.query,
		fragment: request.fragment,
		request: request.request
	});
}

module.exports = class UnsafeCachePlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {function(ResolveRequest): boolean} filterPredicate filterPredicate
	 * @param {Cache} cache cache
	 * @param {boolean} withContext withContext
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, filterPredicate, cache, withContext, target) {
		this.source = source;
		this.filterPredicate = filterPredicate;
		this.withContext = withContext;
		this.cache = cache;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("UnsafeCachePlugin", (request, resolveContext, callback) => {
				if (!this.filterPredicate(request)) return callback();
				const cacheId = getCacheId(request, this.withContext);
				const cacheEntry = this.cache[cacheId];
				if (cacheEntry) {
					return callback(null, cacheEntry);
				}
				resolver.doResolve(
					target,
					request,
					null,
					resolveContext,
					(err, result) => {
						if (err) return callback(err);
						if (result) return callback(null, (this.cache[cacheId] = result));
						callback();
					}
				);
			});
	}
};


/***/ }),

/***/ 2229:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class UseFilePlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string} filename filename
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, filename, target) {
		this.source = source;
		this.filename = filename;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("UseFilePlugin", (request, resolveContext, callback) => {
				const filePath = resolver.join(request.path, this.filename);
				const obj = {
					...request,
					path: filePath,
					relativePath:
						request.relativePath &&
						resolver.join(request.relativePath, this.filename)
				};
				resolver.doResolve(
					target,
					obj,
					"using path: " + filePath,
					resolveContext,
					callback
				);
			});
	}
};


/***/ }),

/***/ 6072:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



module.exports = function createInnerContext(
	options,
	message,
	messageOptional
) {
	let messageReported = false;
	let innerLog = undefined;
	if (options.log) {
		if (message) {
			innerLog = msg => {
				if (!messageReported) {
					options.log(message);
					messageReported = true;
				}
				options.log("  " + msg);
			};
		} else {
			innerLog = options.log;
		}
	}
	const childContext = {
		log: innerLog,
		fileDependencies: options.fileDependencies,
		contextDependencies: options.contextDependencies,
		missingDependencies: options.missingDependencies,
		stack: options.stack
	};
	return childContext;
};


/***/ }),

/***/ 4833:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



module.exports = function forEachBail(array, iterator, callback) {
	if (array.length === 0) return callback();

	let i = 0;
	const next = () => {
		let loop = undefined;
		iterator(array[i++], (err, result) => {
			if (err || result !== undefined || i >= array.length) {
				return callback(err, result);
			}
			if (loop === false) while (next());
			loop = true;
		});
		if (!loop) loop = false;
		return loop;
	};
	while (next());
};


/***/ }),

/***/ 9954:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



module.exports = function getInnerRequest(resolver, request) {
	if (
		typeof request.__innerRequest === "string" &&
		request.__innerRequest_request === request.request &&
		request.__innerRequest_relativePath === request.relativePath
	)
		return request.__innerRequest;
	let innerRequest;
	if (request.request) {
		innerRequest = request.request;
		if (/^\.\.?\//.test(innerRequest) && request.relativePath) {
			innerRequest = resolver.join(request.relativePath, innerRequest);
		}
	} else {
		innerRequest = request.relativePath;
	}
	request.__innerRequest_request = request.request;
	request.__innerRequest_relativePath = request.relativePath;
	return (request.__innerRequest = innerRequest);
};


/***/ }),

/***/ 4880:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



module.exports = function getPaths(path) {
	const parts = path.split(/(.*?[\\/]+)/);
	const paths = [path];
	const seqments = [parts[parts.length - 1]];
	let part = parts[parts.length - 1];
	path = path.substr(0, path.length - part.length - 1);
	for (let i = parts.length - 2; i > 2; i -= 2) {
		paths.push(path);
		part = parts[i];
		path = path.substr(0, path.length - part.length) || "/";
		seqments.push(part.substr(0, part.length - 1));
	}
	part = parts[1];
	seqments.push(part);
	paths.push(part);
	return {
		paths: paths,
		seqments: seqments
	};
};

module.exports.basename = function basename(path) {
	const i = path.lastIndexOf("/"),
		j = path.lastIndexOf("\\");
	const p = i < 0 ? j : j < 0 ? i : i < j ? j : i;
	if (p < 0) return null;
	const s = path.substr(p + 1);
	return s;
};


/***/ }),

/***/ 453:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const fs = __nccwpck_require__(5747);
const CachedInputFileSystem = __nccwpck_require__(8127);
const ResolverFactory = __nccwpck_require__(5429);

/** @typedef {import("./PnpPlugin").PnpApiImpl} PnpApi */
/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").FileSystem} FileSystem */
/** @typedef {import("./Resolver").ResolveContext} ResolveContext */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./ResolverFactory").Plugin} Plugin */
/** @typedef {import("./ResolverFactory").UserResolveOptions} ResolveOptions */

const nodeFileSystem = new CachedInputFileSystem(fs, 4000);

const nodeContext = {
	environments: ["node+es3+es5+process+native"]
};

const asyncResolver = ResolverFactory.createResolver({
	conditionNames: ["node"],
	extensions: [".js", ".json", ".node"],
	fileSystem: nodeFileSystem
});
function resolve(context, path, request, resolveContext, callback) {
	if (typeof context === "string") {
		callback = resolveContext;
		resolveContext = request;
		request = path;
		path = context;
		context = nodeContext;
	}
	if (typeof callback !== "function") {
		callback = resolveContext;
	}
	asyncResolver.resolve(context, path, request, resolveContext, callback);
}

const syncResolver = ResolverFactory.createResolver({
	conditionNames: ["node"],
	extensions: [".js", ".json", ".node"],
	useSyncFileSystemCalls: true,
	fileSystem: nodeFileSystem
});
function resolveSync(context, path, request) {
	if (typeof context === "string") {
		request = path;
		path = context;
		context = nodeContext;
	}
	return syncResolver.resolveSync(context, path, request);
}

function create(options) {
	options = {
		fileSystem: nodeFileSystem,
		...options
	};
	const resolver = ResolverFactory.createResolver(options);
	return function (context, path, request, resolveContext, callback) {
		if (typeof context === "string") {
			callback = resolveContext;
			resolveContext = request;
			request = path;
			path = context;
			context = nodeContext;
		}
		if (typeof callback !== "function") {
			callback = resolveContext;
		}
		resolver.resolve(context, path, request, resolveContext, callback);
	};
}

function createSync(options) {
	options = {
		useSyncFileSystemCalls: true,
		fileSystem: nodeFileSystem,
		...options
	};
	const resolver = ResolverFactory.createResolver(options);
	return function (context, path, request) {
		if (typeof context === "string") {
			request = path;
			path = context;
			context = nodeContext;
		}
		return resolver.resolveSync(context, path, request);
	};
}

/**
 * @template A
 * @template B
 * @param {A} obj input a
 * @param {B} exports input b
 * @returns {A & B} merged
 */
const mergeExports = (obj, exports) => {
	const descriptors = Object.getOwnPropertyDescriptors(exports);
	Object.defineProperties(obj, descriptors);
	return /** @type {A & B} */ (Object.freeze(obj));
};

module.exports = mergeExports(resolve, {
	get sync() {
		return resolveSync;
	},
	create: mergeExports(create, {
		get sync() {
			return createSync;
		}
	}),
	ResolverFactory,
	CachedInputFileSystem,
	get CloneBasenamePlugin() {
		return __nccwpck_require__(6041);
	},
	get LogInfoPlugin() {
		return __nccwpck_require__(1656);
	},
	get forEachBail() {
		return __nccwpck_require__(4833);
	}
});


/***/ }),

/***/ 3679:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/



/** @typedef {string|(string|ConditionalMapping)[]} DirectMapping */
/** @typedef {{[k: string]: MappingValue}} ConditionalMapping */
/** @typedef {ConditionalMapping|DirectMapping|null} MappingValue */
/** @typedef {Record<string, MappingValue>|ConditionalMapping|DirectMapping} ExportsField */
/** @typedef {Record<string, MappingValue>} ImportsField */

/**
 * @typedef {Object} PathTreeNode
 * @property {Map<string, PathTreeNode>|null} children
 * @property {MappingValue} folder
 * @property {Map<string, MappingValue>} files
 */

/**
 * Processing exports/imports field
 * @callback FieldProcessor
 * @param {string} request request
 * @param {Set<string>} conditionNames condition names
 * @returns {string[]} resolved paths
 */

/*
Example exports field:
{
  ".": "./main.js",
  "./feature": {
    "browser": "./feature-browser.js",
    "default": "./feature.js"
  }
}
Terminology:

Enhanced-resolve name keys ("." and "./feature") as exports field keys.

If value is string or string[], mapping is called as a direct mapping
and value called as a direct export.

If value is key-value object, mapping is called as a conditional mapping
and value called as a conditional export.

Key in conditional mapping is called condition name.

Conditional mapping nested in another conditional mapping is called nested mapping.

----------

Example imports field:
{
  "#a": "./main.js",
  "#moment": {
    "browser": "./moment/index.js",
    "default": "moment"
  },
  "#moment/": {
    "browser": "./moment/",
    "default": "moment/"
  }
}
Terminology:

Enhanced-resolve name keys ("#a" and "#moment/", "#moment") as imports field keys.

If value is string or string[], mapping is called as a direct mapping
and value called as a direct export.

If value is key-value object, mapping is called as a conditional mapping
and value called as a conditional export.

Key in conditional mapping is called condition name.

Conditional mapping nested in another conditional mapping is called nested mapping.

*/

const slashCode = "/".charCodeAt(0);
const dotCode = ".".charCodeAt(0);
const hashCode = "#".charCodeAt(0);

/**
 * @param {ExportsField} exportsField the exports field
 * @returns {FieldProcessor} process callback
 */
module.exports.processExportsField = function processExportsField(
	exportsField
) {
	return createFieldProcessor(
		buildExportsFieldPathTree(exportsField),
		assertExportsFieldRequest,
		assertExportTarget
	);
};

/**
 * @param {ImportsField} importsField the exports field
 * @returns {FieldProcessor} process callback
 */
module.exports.processImportsField = function processImportsField(
	importsField
) {
	return createFieldProcessor(
		buildImportsFieldPathTree(importsField),
		assertImportsFieldRequest,
		assertImportTarget
	);
};

/**
 * @param {PathTreeNode} treeRoot root
 * @param {(s: string) => void} assertRequest assertRequest
 * @param {(s: string, f: boolean) => void} assertTarget assertTarget
 * @returns {FieldProcessor} field processor
 */
function createFieldProcessor(treeRoot, assertRequest, assertTarget) {
	return function fieldProcessor(request, conditionNames) {
		assertRequest(request);

		const match = findMatch(request, treeRoot);

		if (match === null) return [];

		/** @type {DirectMapping|null} */
		let direct = null;
		const [mapping, remainRequestIndex] = match;

		if (isConditionalMapping(mapping)) {
			direct = conditionalMapping(
				/** @type {ConditionalMapping} */ (mapping),
				conditionNames
			);

			// matching not found
			if (direct === null) return [];
		} else {
			direct = /** @type {DirectMapping} */ (mapping);
		}

		const remainingRequest =
			remainRequestIndex !== request.length
				? request.slice(remainRequestIndex)
				: undefined;

		return directMapping(
			remainingRequest,
			direct,
			conditionNames,
			assertTarget
		);
	};
}

/**
 * @param {string} request request
 */
function assertExportsFieldRequest(request) {
	if (request.charCodeAt(0) !== dotCode) {
		throw new Error('Request should be relative path and start with "."');
	}
	if (request.length === 1) return;
	if (request.charCodeAt(1) !== slashCode) {
		throw new Error('Request should be relative path and start with "./"');
	}
	if (request.charCodeAt(request.length - 1) === slashCode) {
		throw new Error("Only requesting file allowed");
	}
}

/**
 * @param {string} request request
 */
function assertImportsFieldRequest(request) {
	if (request.charCodeAt(0) !== hashCode) {
		throw new Error('Request should start with "#"');
	}
	if (request.length === 1) {
		throw new Error("Request should have at least 2 characters");
	}
	if (request.charCodeAt(1) === slashCode) {
		throw new Error('Request should not start with "#/"');
	}
	if (request.charCodeAt(request.length - 1) === slashCode) {
		throw new Error("Only requesting file allowed");
	}
}

/**
 * @param {string} exp export target
 * @param {boolean} expectFolder is folder expected
 */
function assertExportTarget(exp, expectFolder) {
	if (
		exp.charCodeAt(0) === slashCode ||
		(exp.charCodeAt(0) === dotCode && exp.charCodeAt(1) !== slashCode)
	) {
		throw new Error(
			`Export should be relative path and start with "./", got ${JSON.stringify(
				exp
			)}.`
		);
	}

	const isFolder = exp.charCodeAt(exp.length - 1) === slashCode;

	if (isFolder !== expectFolder) {
		throw new Error(
			expectFolder
				? `Expecting folder to folder mapping. ${JSON.stringify(
						exp
				  )} should end with "/"`
				: `Expecting file to file mapping. ${JSON.stringify(
						exp
				  )} should not end with "/"`
		);
	}
}

/**
 * @param {string} imp import target
 * @param {boolean} expectFolder is folder expected
 */
function assertImportTarget(imp, expectFolder) {
	const isFolder = imp.charCodeAt(imp.length - 1) === slashCode;

	if (isFolder !== expectFolder) {
		throw new Error(
			expectFolder
				? `Expecting folder to folder mapping. ${JSON.stringify(
						imp
				  )} should end with "/"`
				: `Expecting file to file mapping. ${JSON.stringify(
						imp
				  )} should not end with "/"`
		);
	}
}

/**
 * Trying to match request to field
 * @param {string} request request
 * @param {PathTreeNode} treeRoot path tree root
 * @returns {[MappingValue, number]|null} match or null
 */
function findMatch(request, treeRoot) {
	if (request.length === 1) {
		const value = treeRoot.files.get("*root*");

		return value ? [value, 1] : null;
	}

	if (treeRoot.children === null && treeRoot.folder === null) {
		const value = treeRoot.files.get(request);

		return value ? [value, request.length] : null;
	}

	let node = treeRoot;
	let lastNonSlashIndex = 0;
	let slashIndex = request.indexOf("/", 2);

	/** @type {[MappingValue, number]|null} */
	let lastFolderMatch = null;

	while (slashIndex !== -1) {
		const folder = request.slice(lastNonSlashIndex, slashIndex);

		const folderMapping = node.folder;
		if (folderMapping) {
			if (lastFolderMatch) {
				lastFolderMatch[0] = folderMapping;
				lastFolderMatch[1] = lastNonSlashIndex;
			} else {
				lastFolderMatch = [folderMapping, lastNonSlashIndex || 2];
			}
		}

		if (node.children === null) return lastFolderMatch;

		const newNode = node.children.get(folder);

		if (!newNode) {
			const value = node.folder;

			return value ? [value, lastNonSlashIndex] : null;
		}

		node = newNode;
		lastNonSlashIndex = slashIndex + 1;
		slashIndex = request.indexOf("/", lastNonSlashIndex);
	}

	const value = node.files.get(
		lastNonSlashIndex > 0 ? request.slice(lastNonSlashIndex) : request
	);

	if (value) {
		return [value, request.length];
	}

	const folderMapping = node.folder;
	if (folderMapping) {
		return [folderMapping, lastNonSlashIndex || 2];
	}

	return lastFolderMatch;
}

/**
 * @param {ConditionalMapping|DirectMapping|null} mapping mapping
 * @returns {boolean} is conditional mapping
 */
function isConditionalMapping(mapping) {
	return (
		mapping !== null && typeof mapping === "object" && !Array.isArray(mapping)
	);
}

/**
 * @param {string|undefined} remainingRequest remaining request when folder mapping, undefined for file mappings
 * @param {DirectMapping|null} dirrectMapping_ direct export
 * @param {Set<string>} conditionNames condition names
 * @param {(d: string, f: boolean) => void} assert asserting direct value
 * @returns {string[]} mapping result
 */
function directMapping(
	remainingRequest,
	dirrectMapping_,
	conditionNames,
	assert
) {
	if (dirrectMapping_ === null) return [];

	const expectFolder = remainingRequest !== undefined;

	if (typeof dirrectMapping_ === "string") {
		assert(dirrectMapping_, expectFolder);

		return expectFolder
			? [`${dirrectMapping_}${remainingRequest}`]
			: [dirrectMapping_];
	}

	const targets = [];

	for (const exp of dirrectMapping_) {
		if (typeof exp === "string") {
			assert(exp, expectFolder);
			targets.push(expectFolder ? `${exp}${remainingRequest}` : exp);
			continue;
		}

		const mapping = conditionalMapping(exp, conditionNames);
		if (!mapping) continue;
		const innerExports = directMapping(
			remainingRequest,
			mapping,
			conditionNames,
			assert
		);
		for (const innerExport of innerExports) {
			targets.push(innerExport);
		}
	}

	return targets;
}

/**
 * @param {ConditionalMapping} conditionalMapping_ conditional mapping
 * @param {Set<string>} conditionNames condition names
 * @returns {DirectMapping|null} direct mapping if found
 */
function conditionalMapping(conditionalMapping_, conditionNames) {
	/** @type {[ConditionalMapping, string[], number][]} */
	let lookup = [[conditionalMapping_, Object.keys(conditionalMapping_), 0]];

	loop: while (lookup.length > 0) {
		const [mapping, conditions, j] = lookup[lookup.length - 1];
		const last = conditions.length - 1;

		for (let i = j; i < conditions.length; i++) {
			const condition = conditions[i];

			// assert default. Could be last only
			if (i !== last) {
				if (condition === "default") {
					throw new Error("Default condition should be last one");
				}
			} else if (condition === "default") {
				const innerMapping = mapping[condition];
				// is nested
				if (isConditionalMapping(innerMapping)) {
					const conditionalMapping = /** @type {ConditionalMapping} */ (innerMapping);
					lookup[lookup.length - 1][2] = i + 1;
					lookup.push([conditionalMapping, Object.keys(conditionalMapping), 0]);
					continue loop;
				}

				return /** @type {DirectMapping} */ (innerMapping);
			}

			if (conditionNames.has(condition)) {
				const innerMapping = mapping[condition];
				// is nested
				if (isConditionalMapping(innerMapping)) {
					const conditionalMapping = /** @type {ConditionalMapping} */ (innerMapping);
					lookup[lookup.length - 1][2] = i + 1;
					lookup.push([conditionalMapping, Object.keys(conditionalMapping), 0]);
					continue loop;
				}

				return /** @type {DirectMapping} */ (innerMapping);
			}
		}

		lookup.pop();
	}

	return null;
}

/**
 * Internal helper to create path tree node
 * to ensure that each node gets the same hidden class
 * @returns {PathTreeNode} node
 */
function createNode() {
	return {
		children: null,
		folder: null,
		files: new Map()
	};
}

/**
 * Internal helper for building path tree
 * @param {PathTreeNode} root root
 * @param {string} path path
 * @param {MappingValue} target target
 */
function walkPath(root, path, target) {
	if (path.length === 2 && path === "./") {
		root.folder = target;
		return;
	}

	let node = root;
	// It is safe to store # and ./ as a part of file
	// because mapping works like string concatenation
	// so typical path tree can looks like
	// root
	// - files: ["./a.js", "./b.js"]
	// - children:
	//    node1:
	//    - files: ["a.js", "b.js"]
	let lastNonSlashIndex = 0;
	// This is safe for "imports" field
	// since specifiers "#" and "#/" are disallowed and
	// should be asserted before "walking"
	let slashIndex = path.indexOf("/", 2);

	while (slashIndex !== -1) {
		const folder = path.slice(lastNonSlashIndex, slashIndex);
		let newNode;

		if (node.children === null) {
			newNode = createNode();
			node.children = new Map();
			node.children.set(folder, newNode);
		} else {
			newNode = node.children.get(folder);

			if (!newNode) {
				newNode = createNode();
				node.children.set(folder, newNode);
			}
		}

		node = newNode;
		lastNonSlashIndex = slashIndex + 1;
		slashIndex = path.indexOf("/", lastNonSlashIndex);
	}

	if (lastNonSlashIndex < path.length) {
		node.files.set(
			lastNonSlashIndex > 0 ? path.slice(lastNonSlashIndex) : path,
			target
		);
	} else {
		node.folder = target;
	}
}

/**
 * @param {ExportsField} field exports field
 * @returns {PathTreeNode} tree root
 */
function buildExportsFieldPathTree(field) {
	const root = createNode();

	// handle syntax sugar, if exports field is direct mapping for "."
	if (typeof field === "string") {
		root.files.set("*root*", field);

		return root;
	} else if (Array.isArray(field)) {
		root.files.set("*root*", field.slice());

		return root;
	}

	const keys = Object.keys(field);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];

		if (key.charCodeAt(0) !== dotCode) {
			// handle syntax sugar, if exports field is conditional mapping for "."
			if (i === 0) {
				while (i < keys.length) {
					const charCode = keys[i].charCodeAt(0);
					if (charCode === dotCode || charCode === slashCode) {
						throw new Error(
							`Exports field key should be relative path and start with "." (key: ${JSON.stringify(
								key
							)})`
						);
					}
					i++;
				}

				root.files.set("*root*", field);
				return root;
			}

			throw new Error(
				`Exports field key should be relative path and start with "." (key: ${JSON.stringify(
					key
				)})`
			);
		}

		if (key.length === 1) {
			root.files.set("*root*", field[key]);
			continue;
		}

		if (key.charCodeAt(1) !== slashCode) {
			throw new Error(
				`Exports field key should be relative path and start with "./" (key: ${JSON.stringify(
					key
				)})`
			);
		}

		walkPath(root, key, field[key]);
	}

	return root;
}

/**
 * @param {ImportsField} field imports field
 * @returns {PathTreeNode} root
 */
function buildImportsFieldPathTree(field) {
	const root = createNode();

	const keys = Object.keys(field);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];

		if (key.charCodeAt(0) !== hashCode) {
			throw new Error(
				`Imports field key should start with "#" (key: ${JSON.stringify(key)})`
			);
		}

		if (key.length === 1) {
			throw new Error(
				`Imports field key should have at least 2 characters (key: ${JSON.stringify(
					key
				)})`
			);
		}

		if (key.charCodeAt(1) === slashCode) {
			throw new Error(
				`Imports field key should not start with "#/" (key: ${JSON.stringify(
					key
				)})`
			);
		}

		walkPath(root, key, field[key]);
	}

	return root;
}


/***/ }),

/***/ 2505:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/



const EMPTY = "";

/**
 * @param {string} identifier identifier
 * @returns {[string, string, string]|null} parsed identifier
 */
function parseIdentifier(identifier) {
	const match = /^(#?[^?#]*)(\?[^#]*)?(#.*)?$/.exec(identifier);

	if (!match) return null;

	return [match[1] || EMPTY, match[2] || EMPTY, match[3] || EMPTY];
}

module.exports.parseIdentifier = parseIdentifier;


/***/ }),

/***/ 4030:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const path = __nccwpck_require__(5622);

const CHAR_HASH = "#".charCodeAt(0);
const CHAR_SLASH = "/".charCodeAt(0);
const CHAR_BACKSLASH = "\\".charCodeAt(0);
const CHAR_A = "A".charCodeAt(0);
const CHAR_Z = "Z".charCodeAt(0);
const CHAR_LOWER_A = "a".charCodeAt(0);
const CHAR_LOWER_Z = "z".charCodeAt(0);
const CHAR_DOT = ".".charCodeAt(0);
const CHAR_COLON = ":".charCodeAt(0);

const posixNormalize = path.posix.normalize;
const winNormalize = path.win32.normalize;

/**
 * @enum {number}
 */
const PathType = Object.freeze({
	Empty: 0,
	Normal: 1,
	Relative: 2,
	AbsoluteWin: 3,
	AbsolutePosix: 4,
	Internal: 5
});
exports.PathType = PathType;

/**
 * @param {string} p a path
 * @returns {PathType} type of path
 */
const getType = p => {
	switch (p.length) {
		case 0:
			return PathType.Empty;
		case 1: {
			const c0 = p.charCodeAt(0);
			switch (c0) {
				case CHAR_DOT:
					return PathType.Relative;
				case CHAR_SLASH:
					return PathType.AbsolutePosix;
				case CHAR_HASH:
					return PathType.Internal;
			}
			return PathType.Normal;
		}
		case 2: {
			const c0 = p.charCodeAt(0);
			switch (c0) {
				case CHAR_DOT: {
					const c1 = p.charCodeAt(1);
					switch (c1) {
						case CHAR_DOT:
						case CHAR_SLASH:
							return PathType.Relative;
					}
					return PathType.Normal;
				}
				case CHAR_SLASH:
					return PathType.AbsolutePosix;
				case CHAR_HASH:
					return PathType.Internal;
			}
			const c1 = p.charCodeAt(1);
			if (c1 === CHAR_COLON) {
				if (
					(c0 >= CHAR_A && c0 <= CHAR_Z) ||
					(c0 >= CHAR_LOWER_A && c0 <= CHAR_LOWER_Z)
				) {
					return PathType.AbsoluteWin;
				}
			}
			return PathType.Normal;
		}
	}
	const c0 = p.charCodeAt(0);
	switch (c0) {
		case CHAR_DOT: {
			const c1 = p.charCodeAt(1);
			switch (c1) {
				case CHAR_SLASH:
					return PathType.Relative;
				case CHAR_DOT: {
					const c2 = p.charCodeAt(2);
					if (c2 === CHAR_SLASH) return PathType.Relative;
					return PathType.Normal;
				}
			}
			return PathType.Normal;
		}
		case CHAR_SLASH:
			return PathType.AbsolutePosix;
		case CHAR_HASH:
			return PathType.Internal;
	}
	const c1 = p.charCodeAt(1);
	if (c1 === CHAR_COLON) {
		const c2 = p.charCodeAt(2);
		if (
			(c2 === CHAR_BACKSLASH || c2 === CHAR_SLASH) &&
			((c0 >= CHAR_A && c0 <= CHAR_Z) ||
				(c0 >= CHAR_LOWER_A && c0 <= CHAR_LOWER_Z))
		) {
			return PathType.AbsoluteWin;
		}
	}
	return PathType.Normal;
};
exports.getType = getType;

/**
 * @param {string} p a path
 * @returns {string} the normalized path
 */
const normalize = p => {
	switch (getType(p)) {
		case PathType.Empty:
			return p;
		case PathType.AbsoluteWin:
			return winNormalize(p);
		case PathType.Relative: {
			const r = posixNormalize(p);
			return getType(r) === PathType.Relative ? r : `./${r}`;
		}
	}
	return posixNormalize(p);
};
exports.normalize = normalize;

/**
 * @param {string} rootPath the root path
 * @param {string | undefined} request the request path
 * @returns {string} the joined path
 */
const join = (rootPath, request) => {
	if (!request) return normalize(rootPath);
	const requestType = getType(request);
	switch (requestType) {
		case PathType.AbsolutePosix:
			return posixNormalize(request);
		case PathType.AbsoluteWin:
			return winNormalize(request);
	}
	switch (getType(rootPath)) {
		case PathType.Normal:
		case PathType.Relative:
		case PathType.AbsolutePosix:
			return posixNormalize(`${rootPath}/${request}`);
		case PathType.AbsoluteWin:
			return winNormalize(`${rootPath}\\${request}`);
	}
	switch (requestType) {
		case PathType.Empty:
			return rootPath;
		case PathType.Relative: {
			const r = posixNormalize(rootPath);
			return getType(r) === PathType.Relative ? r : `./${r}`;
		}
	}
	return posixNormalize(rootPath);
};
exports.join = join;

const joinCache = new Map();

/**
 * @param {string} rootPath the root path
 * @param {string | undefined} request the request path
 * @returns {string} the joined path
 */
const cachedJoin = (rootPath, request) => {
	let cacheEntry;
	let cache = joinCache.get(rootPath);
	if (cache === undefined) {
		joinCache.set(rootPath, (cache = new Map()));
	} else {
		cacheEntry = cache.get(request);
		if (cacheEntry !== undefined) return cacheEntry;
	}
	cacheEntry = join(rootPath, request);
	cache.set(request, cacheEntry);
	return cacheEntry;
};
exports.cachedJoin = cachedJoin;

const checkExportsFieldTarget = relativePath => {
	let lastNonSlashIndex = 2;
	let slashIndex = relativePath.indexOf("/", 2);
	let cd = 0;

	while (slashIndex !== -1) {
		const folder = relativePath.slice(lastNonSlashIndex, slashIndex);

		switch (folder) {
			case "..": {
				cd--;
				if (cd < 0)
					return new Error(
						`Trying to access out of package scope. Requesting ${relativePath}`
					);
				break;
			}
			default:
				cd++;
				break;
		}

		lastNonSlashIndex = slashIndex + 1;
		slashIndex = relativePath.indexOf("/", lastNonSlashIndex);
	}
};
exports.checkExportsFieldTarget = checkExportsFieldTarget;


/***/ }),

/***/ 7129:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __nccwpck_require__(665)

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ 5871:
/***/ ((module) => {

module.exports = function (args, opts) {
    if (!opts) opts = {};
    
    var flags = { bools : {}, strings : {}, unknownFn: null };

    if (typeof opts['unknown'] === 'function') {
        flags.unknownFn = opts['unknown'];
    }

    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {
      flags.allBools = true;
    } else {
      [].concat(opts['boolean']).filter(Boolean).forEach(function (key) {
          flags.bools[key] = true;
      });
    }
    
    var aliases = {};
    Object.keys(opts.alias || {}).forEach(function (key) {
        aliases[key] = [].concat(opts.alias[key]);
        aliases[key].forEach(function (x) {
            aliases[x] = [key].concat(aliases[key].filter(function (y) {
                return x !== y;
            }));
        });
    });

    [].concat(opts.string).filter(Boolean).forEach(function (key) {
        flags.strings[key] = true;
        if (aliases[key]) {
            flags.strings[aliases[key]] = true;
        }
     });

    var defaults = opts['default'] || {};
    
    var argv = { _ : [] };
    Object.keys(flags.bools).forEach(function (key) {
        setArg(key, defaults[key] === undefined ? false : defaults[key]);
    });
    
    var notFlags = [];

    if (args.indexOf('--') !== -1) {
        notFlags = args.slice(args.indexOf('--')+1);
        args = args.slice(0, args.indexOf('--'));
    }

    function argDefined(key, arg) {
        return (flags.allBools && /^--[^=]+$/.test(arg)) ||
            flags.strings[key] || flags.bools[key] || aliases[key];
    }

    function setArg (key, val, arg) {
        if (arg && flags.unknownFn && !argDefined(key, arg)) {
            if (flags.unknownFn(arg) === false) return;
        }

        var value = !flags.strings[key] && isNumber(val)
            ? Number(val) : val
        ;
        setKey(argv, key.split('.'), value);
        
        (aliases[key] || []).forEach(function (x) {
            setKey(argv, x.split('.'), value);
        });
    }

    function setKey (obj, keys, value) {
        var o = obj;
        for (var i = 0; i < keys.length-1; i++) {
            var key = keys[i];
            if (key === '__proto__') return;
            if (o[key] === undefined) o[key] = {};
            if (o[key] === Object.prototype || o[key] === Number.prototype
                || o[key] === String.prototype) o[key] = {};
            if (o[key] === Array.prototype) o[key] = [];
            o = o[key];
        }

        var key = keys[keys.length - 1];
        if (key === '__proto__') return;
        if (o === Object.prototype || o === Number.prototype
            || o === String.prototype) o = {};
        if (o === Array.prototype) o = [];
        if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {
            o[key] = value;
        }
        else if (Array.isArray(o[key])) {
            o[key].push(value);
        }
        else {
            o[key] = [ o[key], value ];
        }
    }
    
    function aliasIsBoolean(key) {
      return aliases[key].some(function (x) {
          return flags.bools[x];
      });
    }

    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        
        if (/^--.+=/.test(arg)) {
            // Using [\s\S] instead of . because js doesn't support the
            // 'dotall' regex modifier. See:
            // http://stackoverflow.com/a/1068308/13216
            var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
            var key = m[1];
            var value = m[2];
            if (flags.bools[key]) {
                value = value !== 'false';
            }
            setArg(key, value, arg);
        }
        else if (/^--no-.+/.test(arg)) {
            var key = arg.match(/^--no-(.+)/)[1];
            setArg(key, false, arg);
        }
        else if (/^--.+/.test(arg)) {
            var key = arg.match(/^--(.+)/)[1];
            var next = args[i + 1];
            if (next !== undefined && !/^-/.test(next)
            && !flags.bools[key]
            && !flags.allBools
            && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                setArg(key, next, arg);
                i++;
            }
            else if (/^(true|false)$/.test(next)) {
                setArg(key, next === 'true', arg);
                i++;
            }
            else {
                setArg(key, flags.strings[key] ? '' : true, arg);
            }
        }
        else if (/^-[^-]+/.test(arg)) {
            var letters = arg.slice(1,-1).split('');
            
            var broken = false;
            for (var j = 0; j < letters.length; j++) {
                var next = arg.slice(j+2);
                
                if (next === '-') {
                    setArg(letters[j], next, arg)
                    continue;
                }
                
                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
                    setArg(letters[j], next.split('=')[1], arg);
                    broken = true;
                    break;
                }
                
                if (/[A-Za-z]/.test(letters[j])
                && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
                    setArg(letters[j], next, arg);
                    broken = true;
                    break;
                }
                
                if (letters[j+1] && letters[j+1].match(/\W/)) {
                    setArg(letters[j], arg.slice(j+2), arg);
                    broken = true;
                    break;
                }
                else {
                    setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
                }
            }
            
            var key = arg.slice(-1)[0];
            if (!broken && key !== '-') {
                if (args[i+1] && !/^(-|--)[^-]/.test(args[i+1])
                && !flags.bools[key]
                && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                    setArg(key, args[i+1], arg);
                    i++;
                }
                else if (args[i+1] && /^(true|false)$/.test(args[i+1])) {
                    setArg(key, args[i+1] === 'true', arg);
                    i++;
                }
                else {
                    setArg(key, flags.strings[key] ? '' : true, arg);
                }
            }
        }
        else {
            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
                argv._.push(
                    flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)
                );
            }
            if (opts.stopEarly) {
                argv._.push.apply(argv._, args.slice(i + 1));
                break;
            }
        }
    }
    
    Object.keys(defaults).forEach(function (key) {
        if (!hasKey(argv, key.split('.'))) {
            setKey(argv, key.split('.'), defaults[key]);
            
            (aliases[key] || []).forEach(function (x) {
                setKey(argv, x.split('.'), defaults[key]);
            });
        }
    });
    
    if (opts['--']) {
        argv['--'] = new Array();
        notFlags.forEach(function(key) {
            argv['--'].push(key);
        });
    }
    else {
        notFlags.forEach(function(key) {
            argv._.push(key);
        });
    }

    return argv;
};

function hasKey (obj, keys) {
    var o = obj;
    keys.slice(0,-1).forEach(function (key) {
        o = (o[key] || {});
    });

    var key = keys[keys.length - 1];
    return key in o;
}

function isNumber (x) {
    if (typeof x === 'number') return true;
    if (/^0x[0-9a-f]+$/i.test(x)) return true;
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}



/***/ }),

/***/ 6820:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }
  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const parseOptions = __nccwpck_require__(4920)
const {re, t} = __nccwpck_require__(8552)
const cmp = __nccwpck_require__(2876)
const debug = __nccwpck_require__(5842)
const SemVer = __nccwpck_require__(1714)
const Range = __nccwpck_require__(1396)


/***/ }),

/***/ 1396:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0)
        this.set = [first]
      else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim()

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',')
    const memoKey = `parseRange:${memoOpts}:${range}`
    const cached = cache.get(memoKey)
    if (cached)
      return cached

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range, re[t.COMPARATORTRIM])

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new Comparator(comp, this.options))

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const l = rangeList.length
    const rangeMap = new Map()
    for (const comp of rangeList) {
      if (isNullSet(comp))
        return [comp]
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has(''))
      rangeMap.delete('')

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const LRU = __nccwpck_require__(7129)
const cache = new LRU({ max: 1000 })

const parseOptions = __nccwpck_require__(4920)
const Comparator = __nccwpck_require__(6820)
const debug = __nccwpck_require__(5842)
const SemVer = __nccwpck_require__(1714)
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __nccwpck_require__(8552)

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<')
        pr = '-0'

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ 1714:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const debug = __nccwpck_require__(5842)
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __nccwpck_require__(8831)
const { re, t } = __nccwpck_require__(8552)

const parseOptions = __nccwpck_require__(4920)
const { compareIdentifiers } = __nccwpck_require__(8097)
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ 8068:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const parse = __nccwpck_require__(3265)
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ 2876:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const eq = __nccwpck_require__(7357)
const neq = __nccwpck_require__(9375)
const gt = __nccwpck_require__(701)
const gte = __nccwpck_require__(2365)
const lt = __nccwpck_require__(6102)
const lte = __nccwpck_require__(8998)

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ 5025:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const parse = __nccwpck_require__(3265)
const {re, t} = __nccwpck_require__(8552)

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null)
    return null

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ 9577:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ }),

/***/ 9890:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ }),

/***/ 3546:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ 7309:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const parse = __nccwpck_require__(3265)
const eq = __nccwpck_require__(7357)

const diff = (version1, version2) => {
  if (eq(version1, version2)) {
    return null
  } else {
    const v1 = parse(version1)
    const v2 = parse(version2)
    const hasPre = v1.prerelease.length || v2.prerelease.length
    const prefix = hasPre ? 'pre' : ''
    const defaultResult = hasPre ? 'prerelease' : ''
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}
module.exports = diff


/***/ }),

/***/ 7357:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ 701:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ 2365:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ 6001:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)

const inc = (version, release, options, identifier) => {
  if (typeof (options) === 'string') {
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(version, options).inc(release, identifier).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ }),

/***/ 6102:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ 8998:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ 5211:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ 9444:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ }),

/***/ 9375:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ 3265:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const {MAX_LENGTH} = __nccwpck_require__(8831)
const { re, t } = __nccwpck_require__(8552)
const SemVer = __nccwpck_require__(1714)

const parseOptions = __nccwpck_require__(4920)
const parse = (version, options) => {
  options = parseOptions(options)

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse


/***/ }),

/***/ 6424:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ }),

/***/ 4978:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const parse = __nccwpck_require__(3265)
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ }),

/***/ 9841:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compare = __nccwpck_require__(3546)
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ }),

/***/ 9794:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compareBuild = __nccwpck_require__(9577)
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const Range = __nccwpck_require__(1396)
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ 2589:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const compareBuild = __nccwpck_require__(9577)
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ }),

/***/ 3996:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const parse = __nccwpck_require__(3265)
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ 5621:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// just pre-load all the stuff that index.js lazily exports
const internalRe = __nccwpck_require__(8552)
module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: __nccwpck_require__(8831).SEMVER_SPEC_VERSION,
  SemVer: __nccwpck_require__(1714),
  compareIdentifiers: __nccwpck_require__(8097).compareIdentifiers,
  rcompareIdentifiers: __nccwpck_require__(8097).rcompareIdentifiers,
  parse: __nccwpck_require__(3265),
  valid: __nccwpck_require__(3996),
  clean: __nccwpck_require__(8068),
  inc: __nccwpck_require__(6001),
  diff: __nccwpck_require__(7309),
  major: __nccwpck_require__(5211),
  minor: __nccwpck_require__(9444),
  patch: __nccwpck_require__(6424),
  prerelease: __nccwpck_require__(4978),
  compare: __nccwpck_require__(3546),
  rcompare: __nccwpck_require__(9841),
  compareLoose: __nccwpck_require__(9890),
  compareBuild: __nccwpck_require__(9577),
  sort: __nccwpck_require__(2589),
  rsort: __nccwpck_require__(9794),
  gt: __nccwpck_require__(701),
  lt: __nccwpck_require__(6102),
  eq: __nccwpck_require__(7357),
  neq: __nccwpck_require__(9375),
  gte: __nccwpck_require__(2365),
  lte: __nccwpck_require__(8998),
  cmp: __nccwpck_require__(2876),
  coerce: __nccwpck_require__(5025),
  Comparator: __nccwpck_require__(6820),
  Range: __nccwpck_require__(1396),
  satisfies: __nccwpck_require__(5830),
  toComparators: __nccwpck_require__(9806),
  maxSatisfying: __nccwpck_require__(3403),
  minSatisfying: __nccwpck_require__(6743),
  minVersion: __nccwpck_require__(5230),
  validRange: __nccwpck_require__(7519),
  outside: __nccwpck_require__(8380),
  gtr: __nccwpck_require__(4621),
  ltr: __nccwpck_require__(1771),
  intersects: __nccwpck_require__(8392),
  simplifyRange: __nccwpck_require__(7004),
  subset: __nccwpck_require__(6393),
}


/***/ }),

/***/ 8831:
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ 5842:
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ 8097:
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ 4920:
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true
    return options
  }, {})
module.exports = parseOptions


/***/ }),

/***/ 8552:
/***/ ((module, exports, __nccwpck_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __nccwpck_require__(8831)
const debug = __nccwpck_require__(5842)
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ 4621:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Determine if version is greater than all the versions possible in the range.
const outside = __nccwpck_require__(8380)
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ }),

/***/ 8392:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const Range = __nccwpck_require__(1396)
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
module.exports = intersects


/***/ }),

/***/ 1771:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const outside = __nccwpck_require__(8380)
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ }),

/***/ 3403:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const Range = __nccwpck_require__(1396)

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ }),

/***/ 6743:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const Range = __nccwpck_require__(1396)
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ }),

/***/ 5230:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const Range = __nccwpck_require__(1396)
const gt = __nccwpck_require__(701)

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin)))
      minver = setMin
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ }),

/***/ 8380:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const SemVer = __nccwpck_require__(1714)
const Comparator = __nccwpck_require__(6820)
const {ANY} = Comparator
const Range = __nccwpck_require__(1396)
const satisfies = __nccwpck_require__(5830)
const gt = __nccwpck_require__(701)
const lt = __nccwpck_require__(6102)
const lte = __nccwpck_require__(8998)
const gte = __nccwpck_require__(2365)

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ }),

/***/ 7004:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __nccwpck_require__(5830)
const compare = __nccwpck_require__(3546)
module.exports = (versions, range, options) => {
  const set = []
  let min = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!min)
        min = version
    } else {
      if (prev) {
        set.push([min, prev])
      }
      prev = null
      min = null
    }
  }
  if (min)
    set.push([min, null])

  const ranges = []
  for (const [min, max] of set) {
    if (min === max)
      ranges.push(min)
    else if (!max && min === v[0])
      ranges.push('*')
    else if (!max)
      ranges.push(`>=${min}`)
    else if (min === v[0])
      ranges.push(`<=${max}`)
    else
      ranges.push(`${min} - ${max}`)
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ }),

/***/ 6393:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const Range = __nccwpck_require__(1396)
const { ANY } = __nccwpck_require__(6820)
const satisfies = __nccwpck_require__(5830)
const compare = __nccwpck_require__(3546)

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a subset of some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else return false
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
// - If any C is a = range, and GT or LT are set, return false
// - Else return true

const subset = (sub, dom, options) => {
  if (sub === dom)
    return true

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub)
        continue OUTER
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull)
      return false
  }
  return true
}

const simpleSubset = (sub, dom, options) => {
  if (sub === dom)
    return true

  if (sub.length === 1 && sub[0].semver === ANY)
    return dom.length === 1 && dom[0].semver === ANY

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=')
      gt = higherGT(gt, c, options)
    else if (c.operator === '<' || c.operator === '<=')
      lt = lowerLT(lt, c, options)
    else
      eqSet.add(c.semver)
  }

  if (eqSet.size > 1)
    return null

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0)
      return null
    else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<='))
      return null
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options))
      return null

    if (lt && !satisfies(eq, String(lt), options))
      return null

    for (const c of dom) {
      if (!satisfies(eq, String(c), options))
        return false
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt)
          return false
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options))
        return false
    }
    if (lt) {
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt)
          return false
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options))
        return false
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0)
      return false
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0)
    return false

  if (lt && hasDomGT && !gt && gtltComp !== 0)
    return false

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ }),

/***/ 9806:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const Range = __nccwpck_require__(1396)

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ }),

/***/ 7519:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const Range = __nccwpck_require__(1396)
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ }),

/***/ 4584:
/***/ ((module) => {

/* eslint-disable security/detect-non-literal-regexp */
/**
 * returns the module name that likely contains the package.json
 *
 * @param {string} pModuleName module name string as you'd require it
 */

const LOCAL_MODULE_RE = /^[.]{1,2}($|\/.*)/g;
const ABSOLUTE_MODULE_RE = /^\/.*/g;

const PACKAGE_RE = "[^/]+";
const SCOPED_PACKAGE_RE = "@[^/]+(/[^/]+)";
const ROOT_MODULE_RE = new RegExp(`^(${SCOPED_PACKAGE_RE}|${PACKAGE_RE})`, "g");

module.exports = function extractRootModuleName(pModuleName) {
  if (
    pModuleName.match(LOCAL_MODULE_RE) ||
    pModuleName.match(ABSOLUTE_MODULE_RE)
  ) {
    return pModuleName;
  } else {
    return (pModuleName.match(ROOT_MODULE_RE) || []).shift();
  }
};


/***/ }),

/***/ 5834:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const path = __nccwpck_require__(5622);
const semver = __nccwpck_require__(5621);
const extractRootModuleName = __nccwpck_require__(4584);

function getVersion(pModuleName) {
  return require(path.join(extractRootModuleName(pModuleName), "package.json"))
    .version;
}

/**
 * returns the (resolved) module identified by pModuleName:
 * - if it is available, and
 * - it satisfies the semantic version range specified by pSemVer
 *
 * returns false in all other cases
 *
 * @param  {string} pModuleName      the name of the module to resolve
 * @param  {string} pSemanticVersion (optional) a semantic version (range)
 * @return {any}                     the (resolved) module identified by pModuleName
 *                                   or false
 */
module.exports = (pModuleName, pSemanticVersion) => {
  let lReturnValue = false;

  try {
    lReturnValue = require(pModuleName);

    if (
      Boolean(pSemanticVersion) &&
      !semver.satisfies(
        semver.coerce(getVersion(pModuleName)).version,
        pSemanticVersion
      )
    ) {
      lReturnValue = false;
    }
  } catch (pError) {
    lReturnValue = false;
  }
  return lReturnValue;
};


/***/ }),

/***/ 8551:
/***/ ((module) => {

"use strict";

module.exports = x => {
	if (typeof x !== 'string') {
		throw new TypeError('Expected a string, got ' + typeof x);
	}

	// Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
	// conversion translates it to FEFF (UTF-16 BOM)
	if (x.charCodeAt(0) === 0xFEFF) {
		return x.slice(1);
	}

	return x;
};


/***/ }),

/***/ 1975:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class AsyncParallelBailHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, onDone }) {
		let code = "";
		code += `var _results = new Array(${this.options.taps.length});\n`;
		code += "var _checkDone = function() {\n";
		code += "for(var i = 0; i < _results.length; i++) {\n";
		code += "var item = _results[i];\n";
		code += "if(item === undefined) return false;\n";
		code += "if(item.result !== undefined) {\n";
		code += onResult("item.result");
		code += "return true;\n";
		code += "}\n";
		code += "if(item.error) {\n";
		code += onError("item.error");
		code += "return true;\n";
		code += "}\n";
		code += "}\n";
		code += "return false;\n";
		code += "}\n";
		code += this.callTapsParallel({
			onError: (i, err, done, doneBreak) => {
				let code = "";
				code += `if(${i} < _results.length && ((_results.length = ${i +
					1}), (_results[${i}] = { error: ${err} }), _checkDone())) {\n`;
				code += doneBreak(true);
				code += "} else {\n";
				code += done();
				code += "}\n";
				return code;
			},
			onResult: (i, result, done, doneBreak) => {
				let code = "";
				code += `if(${i} < _results.length && (${result} !== undefined && (_results.length = ${i +
					1}), (_results[${i}] = { result: ${result} }), _checkDone())) {\n`;
				code += doneBreak(true);
				code += "} else {\n";
				code += done();
				code += "}\n";
				return code;
			},
			onTap: (i, run, done, doneBreak) => {
				let code = "";
				if (i > 0) {
					code += `if(${i} >= _results.length) {\n`;
					code += done();
					code += "} else {\n";
				}
				code += run();
				if (i > 0) code += "}\n";
				return code;
			},
			onDone
		});
		return code;
	}
}

const factory = new AsyncParallelBailHookCodeFactory();

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function AsyncParallelBailHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = AsyncParallelBailHook;
	hook.compile = COMPILE;
	hook._call = undefined;
	hook.call = undefined;
	return hook;
}

AsyncParallelBailHook.prototype = null;

module.exports = AsyncParallelBailHook;


/***/ }),

/***/ 8814:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class AsyncParallelHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone }) {
		return this.callTapsParallel({
			onError: (i, err, done, doneBreak) => onError(err) + doneBreak(true),
			onDone
		});
	}
}

const factory = new AsyncParallelHookCodeFactory();

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function AsyncParallelHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = AsyncParallelHook;
	hook.compile = COMPILE;
	hook._call = undefined;
	hook.call = undefined;
	return hook;
}

AsyncParallelHook.prototype = null;

module.exports = AsyncParallelHook;


/***/ }),

/***/ 3644:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class AsyncSeriesBailHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, resultReturns, onDone }) {
		return this.callTapsSeries({
			onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
			onResult: (i, result, next) =>
				`if(${result} !== undefined) {\n${onResult(
					result
				)}\n} else {\n${next()}}\n`,
			resultReturns,
			onDone
		});
	}
}

const factory = new AsyncSeriesBailHookCodeFactory();

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function AsyncSeriesBailHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = AsyncSeriesBailHook;
	hook.compile = COMPILE;
	hook._call = undefined;
	hook.call = undefined;
	return hook;
}

AsyncSeriesBailHook.prototype = null;

module.exports = AsyncSeriesBailHook;


/***/ }),

/***/ 6249:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class AsyncSeriesHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone }) {
		return this.callTapsSeries({
			onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
			onDone
		});
	}
}

const factory = new AsyncSeriesHookCodeFactory();

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function AsyncSeriesHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = AsyncSeriesHook;
	hook.compile = COMPILE;
	hook._call = undefined;
	hook.call = undefined;
	return hook;
}

AsyncSeriesHook.prototype = null;

module.exports = AsyncSeriesHook;


/***/ }),

/***/ 5975:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class AsyncSeriesLoopHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone }) {
		return this.callTapsLooping({
			onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
			onDone
		});
	}
}

const factory = new AsyncSeriesLoopHookCodeFactory();

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function AsyncSeriesLoopHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = AsyncSeriesLoopHook;
	hook.compile = COMPILE;
	hook._call = undefined;
	hook.call = undefined;
	return hook;
}

AsyncSeriesLoopHook.prototype = null;

module.exports = AsyncSeriesLoopHook;


/***/ }),

/***/ 353:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class AsyncSeriesWaterfallHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, onDone }) {
		return this.callTapsSeries({
			onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
			onResult: (i, result, next) => {
				let code = "";
				code += `if(${result} !== undefined) {\n`;
				code += `${this._args[0]} = ${result};\n`;
				code += `}\n`;
				code += next();
				return code;
			},
			onDone: () => onResult(this._args[0])
		});
	}
}

const factory = new AsyncSeriesWaterfallHookCodeFactory();

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function AsyncSeriesWaterfallHook(args = [], name = undefined) {
	if (args.length < 1)
		throw new Error("Waterfall hooks must have at least one argument");
	const hook = new Hook(args, name);
	hook.constructor = AsyncSeriesWaterfallHook;
	hook.compile = COMPILE;
	hook._call = undefined;
	hook.call = undefined;
	return hook;
}

AsyncSeriesWaterfallHook.prototype = null;

module.exports = AsyncSeriesWaterfallHook;


/***/ }),

/***/ 6549:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const util = __nccwpck_require__(1669);

const deprecateContext = util.deprecate(() => {},
"Hook.context is deprecated and will be removed");

const CALL_DELEGATE = function(...args) {
	this.call = this._createCall("sync");
	return this.call(...args);
};
const CALL_ASYNC_DELEGATE = function(...args) {
	this.callAsync = this._createCall("async");
	return this.callAsync(...args);
};
const PROMISE_DELEGATE = function(...args) {
	this.promise = this._createCall("promise");
	return this.promise(...args);
};

class Hook {
	constructor(args = [], name = undefined) {
		this._args = args;
		this.name = name;
		this.taps = [];
		this.interceptors = [];
		this._call = CALL_DELEGATE;
		this.call = CALL_DELEGATE;
		this._callAsync = CALL_ASYNC_DELEGATE;
		this.callAsync = CALL_ASYNC_DELEGATE;
		this._promise = PROMISE_DELEGATE;
		this.promise = PROMISE_DELEGATE;
		this._x = undefined;

		this.compile = this.compile;
		this.tap = this.tap;
		this.tapAsync = this.tapAsync;
		this.tapPromise = this.tapPromise;
	}

	compile(options) {
		throw new Error("Abstract: should be overridden");
	}

	_createCall(type) {
		return this.compile({
			taps: this.taps,
			interceptors: this.interceptors,
			args: this._args,
			type: type
		});
	}

	_tap(type, options, fn) {
		if (typeof options === "string") {
			options = {
				name: options.trim()
			};
		} else if (typeof options !== "object" || options === null) {
			throw new Error("Invalid tap options");
		}
		if (typeof options.name !== "string" || options.name === "") {
			throw new Error("Missing name for tap");
		}
		if (typeof options.context !== "undefined") {
			deprecateContext();
		}
		options = Object.assign({ type, fn }, options);
		options = this._runRegisterInterceptors(options);
		this._insert(options);
	}

	tap(options, fn) {
		this._tap("sync", options, fn);
	}

	tapAsync(options, fn) {
		this._tap("async", options, fn);
	}

	tapPromise(options, fn) {
		this._tap("promise", options, fn);
	}

	_runRegisterInterceptors(options) {
		for (const interceptor of this.interceptors) {
			if (interceptor.register) {
				const newOptions = interceptor.register(options);
				if (newOptions !== undefined) {
					options = newOptions;
				}
			}
		}
		return options;
	}

	withOptions(options) {
		const mergeOptions = opt =>
			Object.assign({}, options, typeof opt === "string" ? { name: opt } : opt);

		return {
			name: this.name,
			tap: (opt, fn) => this.tap(mergeOptions(opt), fn),
			tapAsync: (opt, fn) => this.tapAsync(mergeOptions(opt), fn),
			tapPromise: (opt, fn) => this.tapPromise(mergeOptions(opt), fn),
			intercept: interceptor => this.intercept(interceptor),
			isUsed: () => this.isUsed(),
			withOptions: opt => this.withOptions(mergeOptions(opt))
		};
	}

	isUsed() {
		return this.taps.length > 0 || this.interceptors.length > 0;
	}

	intercept(interceptor) {
		this._resetCompilation();
		this.interceptors.push(Object.assign({}, interceptor));
		if (interceptor.register) {
			for (let i = 0; i < this.taps.length; i++) {
				this.taps[i] = interceptor.register(this.taps[i]);
			}
		}
	}

	_resetCompilation() {
		this.call = this._call;
		this.callAsync = this._callAsync;
		this.promise = this._promise;
	}

	_insert(item) {
		this._resetCompilation();
		let before;
		if (typeof item.before === "string") {
			before = new Set([item.before]);
		} else if (Array.isArray(item.before)) {
			before = new Set(item.before);
		}
		let stage = 0;
		if (typeof item.stage === "number") {
			stage = item.stage;
		}
		let i = this.taps.length;
		while (i > 0) {
			i--;
			const x = this.taps[i];
			this.taps[i + 1] = x;
			const xStage = x.stage || 0;
			if (before) {
				if (before.has(x.name)) {
					before.delete(x.name);
					continue;
				}
				if (before.size > 0) {
					continue;
				}
			}
			if (xStage > stage) {
				continue;
			}
			i++;
			break;
		}
		this.taps[i] = item;
	}
}

Object.setPrototypeOf(Hook.prototype, null);

module.exports = Hook;


/***/ }),

/***/ 6064:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


class HookCodeFactory {
	constructor(config) {
		this.config = config;
		this.options = undefined;
		this._args = undefined;
	}

	create(options) {
		this.init(options);
		let fn;
		switch (this.options.type) {
			case "sync":
				fn = new Function(
					this.args(),
					'"use strict";\n' +
						this.header() +
						this.contentWithInterceptors({
							onError: err => `throw ${err};\n`,
							onResult: result => `return ${result};\n`,
							resultReturns: true,
							onDone: () => "",
							rethrowIfPossible: true
						})
				);
				break;
			case "async":
				fn = new Function(
					this.args({
						after: "_callback"
					}),
					'"use strict";\n' +
						this.header() +
						this.contentWithInterceptors({
							onError: err => `_callback(${err});\n`,
							onResult: result => `_callback(null, ${result});\n`,
							onDone: () => "_callback();\n"
						})
				);
				break;
			case "promise":
				let errorHelperUsed = false;
				const content = this.contentWithInterceptors({
					onError: err => {
						errorHelperUsed = true;
						return `_error(${err});\n`;
					},
					onResult: result => `_resolve(${result});\n`,
					onDone: () => "_resolve();\n"
				});
				let code = "";
				code += '"use strict";\n';
				code += this.header();
				code += "return new Promise((function(_resolve, _reject) {\n";
				if (errorHelperUsed) {
					code += "var _sync = true;\n";
					code += "function _error(_err) {\n";
					code += "if(_sync)\n";
					code +=
						"_resolve(Promise.resolve().then((function() { throw _err; })));\n";
					code += "else\n";
					code += "_reject(_err);\n";
					code += "};\n";
				}
				code += content;
				if (errorHelperUsed) {
					code += "_sync = false;\n";
				}
				code += "}));\n";
				fn = new Function(this.args(), code);
				break;
		}
		this.deinit();
		return fn;
	}

	setup(instance, options) {
		instance._x = options.taps.map(t => t.fn);
	}

	/**
	 * @param {{ type: "sync" | "promise" | "async", taps: Array<Tap>, interceptors: Array<Interceptor> }} options
	 */
	init(options) {
		this.options = options;
		this._args = options.args.slice();
	}

	deinit() {
		this.options = undefined;
		this._args = undefined;
	}

	contentWithInterceptors(options) {
		if (this.options.interceptors.length > 0) {
			const onError = options.onError;
			const onResult = options.onResult;
			const onDone = options.onDone;
			let code = "";
			for (let i = 0; i < this.options.interceptors.length; i++) {
				const interceptor = this.options.interceptors[i];
				if (interceptor.call) {
					code += `${this.getInterceptor(i)}.call(${this.args({
						before: interceptor.context ? "_context" : undefined
					})});\n`;
				}
			}
			code += this.content(
				Object.assign(options, {
					onError:
						onError &&
						(err => {
							let code = "";
							for (let i = 0; i < this.options.interceptors.length; i++) {
								const interceptor = this.options.interceptors[i];
								if (interceptor.error) {
									code += `${this.getInterceptor(i)}.error(${err});\n`;
								}
							}
							code += onError(err);
							return code;
						}),
					onResult:
						onResult &&
						(result => {
							let code = "";
							for (let i = 0; i < this.options.interceptors.length; i++) {
								const interceptor = this.options.interceptors[i];
								if (interceptor.result) {
									code += `${this.getInterceptor(i)}.result(${result});\n`;
								}
							}
							code += onResult(result);
							return code;
						}),
					onDone:
						onDone &&
						(() => {
							let code = "";
							for (let i = 0; i < this.options.interceptors.length; i++) {
								const interceptor = this.options.interceptors[i];
								if (interceptor.done) {
									code += `${this.getInterceptor(i)}.done();\n`;
								}
							}
							code += onDone();
							return code;
						})
				})
			);
			return code;
		} else {
			return this.content(options);
		}
	}

	header() {
		let code = "";
		if (this.needContext()) {
			code += "var _context = {};\n";
		} else {
			code += "var _context;\n";
		}
		code += "var _x = this._x;\n";
		if (this.options.interceptors.length > 0) {
			code += "var _taps = this.taps;\n";
			code += "var _interceptors = this.interceptors;\n";
		}
		return code;
	}

	needContext() {
		for (const tap of this.options.taps) if (tap.context) return true;
		return false;
	}

	callTap(tapIndex, { onError, onResult, onDone, rethrowIfPossible }) {
		let code = "";
		let hasTapCached = false;
		for (let i = 0; i < this.options.interceptors.length; i++) {
			const interceptor = this.options.interceptors[i];
			if (interceptor.tap) {
				if (!hasTapCached) {
					code += `var _tap${tapIndex} = ${this.getTap(tapIndex)};\n`;
					hasTapCached = true;
				}
				code += `${this.getInterceptor(i)}.tap(${
					interceptor.context ? "_context, " : ""
				}_tap${tapIndex});\n`;
			}
		}
		code += `var _fn${tapIndex} = ${this.getTapFn(tapIndex)};\n`;
		const tap = this.options.taps[tapIndex];
		switch (tap.type) {
			case "sync":
				if (!rethrowIfPossible) {
					code += `var _hasError${tapIndex} = false;\n`;
					code += "try {\n";
				}
				if (onResult) {
					code += `var _result${tapIndex} = _fn${tapIndex}(${this.args({
						before: tap.context ? "_context" : undefined
					})});\n`;
				} else {
					code += `_fn${tapIndex}(${this.args({
						before: tap.context ? "_context" : undefined
					})});\n`;
				}
				if (!rethrowIfPossible) {
					code += "} catch(_err) {\n";
					code += `_hasError${tapIndex} = true;\n`;
					code += onError("_err");
					code += "}\n";
					code += `if(!_hasError${tapIndex}) {\n`;
				}
				if (onResult) {
					code += onResult(`_result${tapIndex}`);
				}
				if (onDone) {
					code += onDone();
				}
				if (!rethrowIfPossible) {
					code += "}\n";
				}
				break;
			case "async":
				let cbCode = "";
				if (onResult)
					cbCode += `(function(_err${tapIndex}, _result${tapIndex}) {\n`;
				else cbCode += `(function(_err${tapIndex}) {\n`;
				cbCode += `if(_err${tapIndex}) {\n`;
				cbCode += onError(`_err${tapIndex}`);
				cbCode += "} else {\n";
				if (onResult) {
					cbCode += onResult(`_result${tapIndex}`);
				}
				if (onDone) {
					cbCode += onDone();
				}
				cbCode += "}\n";
				cbCode += "})";
				code += `_fn${tapIndex}(${this.args({
					before: tap.context ? "_context" : undefined,
					after: cbCode
				})});\n`;
				break;
			case "promise":
				code += `var _hasResult${tapIndex} = false;\n`;
				code += `var _promise${tapIndex} = _fn${tapIndex}(${this.args({
					before: tap.context ? "_context" : undefined
				})});\n`;
				code += `if (!_promise${tapIndex} || !_promise${tapIndex}.then)\n`;
				code += `  throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise${tapIndex} + ')');\n`;
				code += `_promise${tapIndex}.then((function(_result${tapIndex}) {\n`;
				code += `_hasResult${tapIndex} = true;\n`;
				if (onResult) {
					code += onResult(`_result${tapIndex}`);
				}
				if (onDone) {
					code += onDone();
				}
				code += `}), function(_err${tapIndex}) {\n`;
				code += `if(_hasResult${tapIndex}) throw _err${tapIndex};\n`;
				code += onError(`_err${tapIndex}`);
				code += "});\n";
				break;
		}
		return code;
	}

	callTapsSeries({
		onError,
		onResult,
		resultReturns,
		onDone,
		doneReturns,
		rethrowIfPossible
	}) {
		if (this.options.taps.length === 0) return onDone();
		const firstAsync = this.options.taps.findIndex(t => t.type !== "sync");
		const somethingReturns = resultReturns || doneReturns;
		let code = "";
		let current = onDone;
		let unrollCounter = 0;
		for (let j = this.options.taps.length - 1; j >= 0; j--) {
			const i = j;
			const unroll =
				current !== onDone &&
				(this.options.taps[i].type !== "sync" || unrollCounter++ > 20);
			if (unroll) {
				unrollCounter = 0;
				code += `function _next${i}() {\n`;
				code += current();
				code += `}\n`;
				current = () => `${somethingReturns ? "return " : ""}_next${i}();\n`;
			}
			const done = current;
			const doneBreak = skipDone => {
				if (skipDone) return "";
				return onDone();
			};
			const content = this.callTap(i, {
				onError: error => onError(i, error, done, doneBreak),
				onResult:
					onResult &&
					(result => {
						return onResult(i, result, done, doneBreak);
					}),
				onDone: !onResult && done,
				rethrowIfPossible:
					rethrowIfPossible && (firstAsync < 0 || i < firstAsync)
			});
			current = () => content;
		}
		code += current();
		return code;
	}

	callTapsLooping({ onError, onDone, rethrowIfPossible }) {
		if (this.options.taps.length === 0) return onDone();
		const syncOnly = this.options.taps.every(t => t.type === "sync");
		let code = "";
		if (!syncOnly) {
			code += "var _looper = (function() {\n";
			code += "var _loopAsync = false;\n";
		}
		code += "var _loop;\n";
		code += "do {\n";
		code += "_loop = false;\n";
		for (let i = 0; i < this.options.interceptors.length; i++) {
			const interceptor = this.options.interceptors[i];
			if (interceptor.loop) {
				code += `${this.getInterceptor(i)}.loop(${this.args({
					before: interceptor.context ? "_context" : undefined
				})});\n`;
			}
		}
		code += this.callTapsSeries({
			onError,
			onResult: (i, result, next, doneBreak) => {
				let code = "";
				code += `if(${result} !== undefined) {\n`;
				code += "_loop = true;\n";
				if (!syncOnly) code += "if(_loopAsync) _looper();\n";
				code += doneBreak(true);
				code += `} else {\n`;
				code += next();
				code += `}\n`;
				return code;
			},
			onDone:
				onDone &&
				(() => {
					let code = "";
					code += "if(!_loop) {\n";
					code += onDone();
					code += "}\n";
					return code;
				}),
			rethrowIfPossible: rethrowIfPossible && syncOnly
		});
		code += "} while(_loop);\n";
		if (!syncOnly) {
			code += "_loopAsync = true;\n";
			code += "});\n";
			code += "_looper();\n";
		}
		return code;
	}

	callTapsParallel({
		onError,
		onResult,
		onDone,
		rethrowIfPossible,
		onTap = (i, run) => run()
	}) {
		if (this.options.taps.length <= 1) {
			return this.callTapsSeries({
				onError,
				onResult,
				onDone,
				rethrowIfPossible
			});
		}
		let code = "";
		code += "do {\n";
		code += `var _counter = ${this.options.taps.length};\n`;
		if (onDone) {
			code += "var _done = (function() {\n";
			code += onDone();
			code += "});\n";
		}
		for (let i = 0; i < this.options.taps.length; i++) {
			const done = () => {
				if (onDone) return "if(--_counter === 0) _done();\n";
				else return "--_counter;";
			};
			const doneBreak = skipDone => {
				if (skipDone || !onDone) return "_counter = 0;\n";
				else return "_counter = 0;\n_done();\n";
			};
			code += "if(_counter <= 0) break;\n";
			code += onTap(
				i,
				() =>
					this.callTap(i, {
						onError: error => {
							let code = "";
							code += "if(_counter > 0) {\n";
							code += onError(i, error, done, doneBreak);
							code += "}\n";
							return code;
						},
						onResult:
							onResult &&
							(result => {
								let code = "";
								code += "if(_counter > 0) {\n";
								code += onResult(i, result, done, doneBreak);
								code += "}\n";
								return code;
							}),
						onDone:
							!onResult &&
							(() => {
								return done();
							}),
						rethrowIfPossible
					}),
				done,
				doneBreak
			);
		}
		code += "} while(false);\n";
		return code;
	}

	args({ before, after } = {}) {
		let allArgs = this._args;
		if (before) allArgs = [before].concat(allArgs);
		if (after) allArgs = allArgs.concat(after);
		if (allArgs.length === 0) {
			return "";
		} else {
			return allArgs.join(", ");
		}
	}

	getTapFn(idx) {
		return `_x[${idx}]`;
	}

	getTap(idx) {
		return `_taps[${idx}]`;
	}

	getInterceptor(idx) {
		return `_interceptors[${idx}]`;
	}
}

module.exports = HookCodeFactory;


/***/ }),

/***/ 4899:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const util = __nccwpck_require__(1669);

const defaultFactory = (key, hook) => hook;

class HookMap {
	constructor(factory, name = undefined) {
		this._map = new Map();
		this.name = name;
		this._factory = factory;
		this._interceptors = [];
	}

	get(key) {
		return this._map.get(key);
	}

	for(key) {
		const hook = this.get(key);
		if (hook !== undefined) {
			return hook;
		}
		let newHook = this._factory(key);
		const interceptors = this._interceptors;
		for (let i = 0; i < interceptors.length; i++) {
			newHook = interceptors[i].factory(key, newHook);
		}
		this._map.set(key, newHook);
		return newHook;
	}

	intercept(interceptor) {
		this._interceptors.push(
			Object.assign(
				{
					factory: defaultFactory
				},
				interceptor
			)
		);
	}
}

HookMap.prototype.tap = util.deprecate(function(key, options, fn) {
	return this.for(key).tap(options, fn);
}, "HookMap#tap(key,…) is deprecated. Use HookMap#for(key).tap(…) instead.");

HookMap.prototype.tapAsync = util.deprecate(function(key, options, fn) {
	return this.for(key).tapAsync(options, fn);
}, "HookMap#tapAsync(key,…) is deprecated. Use HookMap#for(key).tapAsync(…) instead.");

HookMap.prototype.tapPromise = util.deprecate(function(key, options, fn) {
	return this.for(key).tapPromise(options, fn);
}, "HookMap#tapPromise(key,…) is deprecated. Use HookMap#for(key).tapPromise(…) instead.");

module.exports = HookMap;


/***/ }),

/***/ 3963:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);

class MultiHook {
	constructor(hooks, name = undefined) {
		this.hooks = hooks;
		this.name = name;
	}

	tap(options, fn) {
		for (const hook of this.hooks) {
			hook.tap(options, fn);
		}
	}

	tapAsync(options, fn) {
		for (const hook of this.hooks) {
			hook.tapAsync(options, fn);
		}
	}

	tapPromise(options, fn) {
		for (const hook of this.hooks) {
			hook.tapPromise(options, fn);
		}
	}

	isUsed() {
		for (const hook of this.hooks) {
			if (hook.isUsed()) return true;
		}
		return false;
	}

	intercept(interceptor) {
		for (const hook of this.hooks) {
			hook.intercept(interceptor);
		}
	}

	withOptions(options) {
		return new MultiHook(
			this.hooks.map(h => h.withOptions(options)),
			this.name
		);
	}
}

module.exports = MultiHook;


/***/ }),

/***/ 9418:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class SyncBailHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, resultReturns, onDone, rethrowIfPossible }) {
		return this.callTapsSeries({
			onError: (i, err) => onError(err),
			onResult: (i, result, next) =>
				`if(${result} !== undefined) {\n${onResult(
					result
				)};\n} else {\n${next()}}\n`,
			resultReturns,
			onDone,
			rethrowIfPossible
		});
	}
}

const factory = new SyncBailHookCodeFactory();

const TAP_ASYNC = () => {
	throw new Error("tapAsync is not supported on a SyncBailHook");
};

const TAP_PROMISE = () => {
	throw new Error("tapPromise is not supported on a SyncBailHook");
};

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function SyncBailHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = SyncBailHook;
	hook.tapAsync = TAP_ASYNC;
	hook.tapPromise = TAP_PROMISE;
	hook.compile = COMPILE;
	return hook;
}

SyncBailHook.prototype = null;

module.exports = SyncBailHook;


/***/ }),

/***/ 4303:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class SyncHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone, rethrowIfPossible }) {
		return this.callTapsSeries({
			onError: (i, err) => onError(err),
			onDone,
			rethrowIfPossible
		});
	}
}

const factory = new SyncHookCodeFactory();

const TAP_ASYNC = () => {
	throw new Error("tapAsync is not supported on a SyncHook");
};

const TAP_PROMISE = () => {
	throw new Error("tapPromise is not supported on a SyncHook");
};

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function SyncHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = SyncHook;
	hook.tapAsync = TAP_ASYNC;
	hook.tapPromise = TAP_PROMISE;
	hook.compile = COMPILE;
	return hook;
}

SyncHook.prototype = null;

module.exports = SyncHook;


/***/ }),

/***/ 1069:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class SyncLoopHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone, rethrowIfPossible }) {
		return this.callTapsLooping({
			onError: (i, err) => onError(err),
			onDone,
			rethrowIfPossible
		});
	}
}

const factory = new SyncLoopHookCodeFactory();

const TAP_ASYNC = () => {
	throw new Error("tapAsync is not supported on a SyncLoopHook");
};

const TAP_PROMISE = () => {
	throw new Error("tapPromise is not supported on a SyncLoopHook");
};

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function SyncLoopHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = SyncLoopHook;
	hook.tapAsync = TAP_ASYNC;
	hook.tapPromise = TAP_PROMISE;
	hook.compile = COMPILE;
	return hook;
}

SyncLoopHook.prototype = null;

module.exports = SyncLoopHook;


/***/ }),

/***/ 9666:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Hook = __nccwpck_require__(6549);
const HookCodeFactory = __nccwpck_require__(6064);

class SyncWaterfallHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, resultReturns, rethrowIfPossible }) {
		return this.callTapsSeries({
			onError: (i, err) => onError(err),
			onResult: (i, result, next) => {
				let code = "";
				code += `if(${result} !== undefined) {\n`;
				code += `${this._args[0]} = ${result};\n`;
				code += `}\n`;
				code += next();
				return code;
			},
			onDone: () => onResult(this._args[0]),
			doneReturns: resultReturns,
			rethrowIfPossible
		});
	}
}

const factory = new SyncWaterfallHookCodeFactory();

const TAP_ASYNC = () => {
	throw new Error("tapAsync is not supported on a SyncWaterfallHook");
};

const TAP_PROMISE = () => {
	throw new Error("tapPromise is not supported on a SyncWaterfallHook");
};

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function SyncWaterfallHook(args = [], name = undefined) {
	if (args.length < 1)
		throw new Error("Waterfall hooks must have at least one argument");
	const hook = new Hook(args, name);
	hook.constructor = SyncWaterfallHook;
	hook.tapAsync = TAP_ASYNC;
	hook.tapPromise = TAP_PROMISE;
	hook.compile = COMPILE;
	return hook;
}

SyncWaterfallHook.prototype = null;

module.exports = SyncWaterfallHook;


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


exports.__esModule = true;
exports.SyncHook = __nccwpck_require__(4303);
exports.SyncBailHook = __nccwpck_require__(9418);
exports.SyncWaterfallHook = __nccwpck_require__(9666);
exports.SyncLoopHook = __nccwpck_require__(1069);
exports.AsyncParallelHook = __nccwpck_require__(8814);
exports.AsyncParallelBailHook = __nccwpck_require__(1975);
exports.AsyncSeriesHook = __nccwpck_require__(6249);
exports.AsyncSeriesBailHook = __nccwpck_require__(3644);
exports.AsyncSeriesLoopHook = __nccwpck_require__(5975);
exports.AsyncSeriesWaterfallHook = __nccwpck_require__(353);
exports.HookMap = __nccwpck_require__(4899);
exports.MultiHook = __nccwpck_require__(3963);


/***/ }),

/***/ 4637:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TsconfigPathsPlugin = void 0;
var plugin_1 = __nccwpck_require__(9039);
Object.defineProperty(exports, "TsconfigPathsPlugin", ({ enumerable: true, get: function () { return plugin_1.TsconfigPathsPlugin; } }));
const plugin_2 = __nccwpck_require__(9039);
// tslint:disable-next-line:no-default-export
exports.default = plugin_2.TsconfigPathsPlugin;
// This is to make it importable in all these ways
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
// import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
const theClass = __nccwpck_require__(9039).TsconfigPathsPlugin;
theClass.TsconfigPathsPlugin = plugin_2.TsconfigPathsPlugin;
theClass.default = plugin_2.TsconfigPathsPlugin;
module.exports = theClass;


/***/ }),

/***/ 2699:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeLogger = void 0;
const console_1 = __nccwpck_require__(7082);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
const stderrConsole = new console_1.Console(process.stderr);
const stdoutConsole = new console_1.Console(process.stdout);
const doNothingLogger = (_message) => {
    /* Do nothing */
};
const makeLoggerFunc = (options) => options.silent
    ? (_whereToLog, _message) => {
        /* Do nothing */
    }
    : (whereToLog, message) => whereToLog.log(message);
const makeExternalLogger = (loaderOptions, logger) => (message) => logger(loaderOptions.logInfoToStdOut ? stdoutConsole : stderrConsole, message);
const makeLogInfo = (options, logger, green) => LogLevel[options.logLevel] <= LogLevel.INFO
    ? (message) => logger(options.logInfoToStdOut ? stdoutConsole : stderrConsole, green(message))
    : doNothingLogger;
const makeLogError = (options, logger, red) => LogLevel[options.logLevel] <= LogLevel.ERROR
    ? (message) => logger(stderrConsole, red(message))
    : doNothingLogger;
const makeLogWarning = (options, logger, yellow) => LogLevel[options.logLevel] <= LogLevel.WARN
    ? (message) => logger(stderrConsole, yellow(message))
    : doNothingLogger;
function makeLogger(options, colors) {
    const logger = makeLoggerFunc(options);
    return {
        log: makeExternalLogger(options, logger),
        logInfo: makeLogInfo(options, logger, colors.green),
        logWarning: makeLogWarning(options, logger, colors.yellow),
        logError: makeLogError(options, logger, colors.red),
    };
}
exports.makeLogger = makeLogger;


/***/ }),

/***/ 2863:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOptions = void 0;
const validOptions = [
    "configFile",
    "extensions",
    "baseUrl",
    "silent",
    "logLevel",
    "logInfoToStdOut",
    "context",
    "mainFields",
];
/**
 * Takes raw options from the webpack config,
 * validates them and adds defaults for missing options
 */
function getOptions(rawOptions) {
    validateOptions(rawOptions);
    const options = makeOptions(rawOptions);
    return options;
}
exports.getOptions = getOptions;
/**
 * Validate the supplied loader options.
 * At present this validates the option names only; in future we may look at validating the values too
 * @param rawOptions
 */
function validateOptions(rawOptions) {
    const loaderOptionKeys = Object.keys(rawOptions);
    for (let i = 0; i < loaderOptionKeys.length; i++) {
        const option = loaderOptionKeys[i];
        const isUnexpectedOption = validOptions.indexOf(option) === -1;
        if (isUnexpectedOption) {
            throw new Error(`tsconfig-paths-webpack-plugin was supplied with an unexpected loader option: ${option}
Please take a look at the options you are supplying; the following are valid options:
${validOptions.join(" / ")}
`);
        }
    }
}
function makeOptions(rawOptions) {
    const options = Object.assign(Object.assign({}, {
        configFile: "tsconfig.json",
        extensions: [".ts", ".tsx"],
        baseUrl: undefined,
        silent: false,
        logLevel: "WARN",
        logInfoToStdOut: false,
        context: undefined,
        colors: true,
        mainFields: ["main"],
    }), rawOptions);
    const options2 = Object.assign(Object.assign({}, options), { logLevel: options.logLevel.toUpperCase() });
    return options2;
}


/***/ }),

/***/ 9039:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TsconfigPathsPlugin = void 0;
const chalk = __nccwpck_require__(990);
const TsconfigPaths = __nccwpck_require__(6143);
const path = __nccwpck_require__(5622);
const Options = __nccwpck_require__(2863);
const Logger = __nccwpck_require__(2699);
const getInnerRequest = __nccwpck_require__(5306);
class TsconfigPathsPlugin {
    constructor(rawOptions = {}) {
        this.source = "described-resolve";
        this.target = "resolve";
        const options = Options.getOptions(rawOptions);
        this.extensions = options.extensions;
        // const colors = new chalk.constructor({ enabled: options.colors });
        this.log = Logger.makeLogger(options, new chalk.Instance({ level: options.colors ? undefined : 0 }));
        const context = options.context || process.cwd();
        const loadFrom = options.configFile || context;
        const loadResult = TsconfigPaths.loadConfig(loadFrom);
        if (loadResult.resultType === "failed") {
            this.log.logError(`Failed to load ${loadFrom}: ${loadResult.message}`);
        }
        else {
            this.log.logInfo(`tsconfig-paths-webpack-plugin: Using config file at ${loadResult.configFileAbsolutePath}`);
            this.baseUrl = options.baseUrl || loadResult.baseUrl;
            this.absoluteBaseUrl = options.baseUrl
                ? path.resolve(options.baseUrl)
                : loadResult.absoluteBaseUrl;
            this.matchPath = TsconfigPaths.createMatchPathAsync(this.absoluteBaseUrl, loadResult.paths, options.mainFields);
        }
    }
    apply(resolver) {
        if (!resolver) {
            this.log.logWarning("tsconfig-paths-webpack-plugin: Found no resolver, not applying tsconfig-paths-webpack-plugin");
            return;
        }
        const { baseUrl } = this;
        if (!baseUrl) {
            // Nothing to do if there is no baseUrl
            this.log.logWarning("tsconfig-paths-webpack-plugin: Found no baseUrl in tsconfig.json, not applying tsconfig-paths-webpack-plugin");
            return;
        }
        // The file system only exists when the plugin is in the resolve context. This means it's also properly placed in the resolve.plugins array.
        // If not, we should warn the user that this plugin should be placed in resolve.plugins and not the plugins array of the root config for example.
        // This should hopefully prevent issues like: https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/9
        if (!("fileSystem" in resolver)) {
            this.log.logWarning("tsconfig-paths-webpack-plugin: No file system found on resolver." +
                " Please make sure you've placed the plugin in the correct part of the configuration." +
                " This plugin is a resolver plugin and should be placed in the resolve part of the Webpack configuration.");
            return;
        }
        // getHook will only exist in Webpack 4 & 5, if so we should comply to the Webpack 4 plugin system.
        if ("getHook" in resolver && typeof resolver.getHook === "function") {
            resolver
                .getHook(this.source)
                .tapAsync({ name: "TsconfigPathsPlugin" }, createPluginCallback(this.matchPath, resolver, this.absoluteBaseUrl, resolver.getHook(this.target), this.extensions));
        }
        else if ("plugin" in resolver) {
            // This is the legacy (Webpack < 4.0.0) way of using the plugin system.
            const legacyResolver = resolver;
            legacyResolver.plugin(this.source, createPluginLegacy(this.matchPath, resolver, this.absoluteBaseUrl, this.target, this.extensions));
        }
    }
}
exports.TsconfigPathsPlugin = TsconfigPathsPlugin;
function createPluginCallback(matchPath, resolver, absoluteBaseUrl, hook, extensions) {
    const fileExistAsync = createFileExistAsync(resolver.fileSystem);
    const readJsonAsync = createReadJsonAsync(resolver.fileSystem);
    return (request, resolveContext, callback) => {
        const innerRequest = getInnerRequest(resolver, request);
        if (!innerRequest ||
            innerRequest.startsWith(".") ||
            innerRequest.startsWith("..")) {
            return callback();
        }
        matchPath(innerRequest, readJsonAsync, fileExistAsync, extensions, (err, foundMatch) => {
            if (err) {
                return callback(err);
            }
            if (!foundMatch) {
                return callback();
            }
            const newRequest = Object.assign(Object.assign({}, request), { request: foundMatch, path: absoluteBaseUrl });
            // Only at this point we are sure we are dealing with the latest Webpack version (>= 4.0.0)
            // So only now can we require the createInnerContext function.
            // (It doesn't exist in legacy versions)
            const createInnerContext = __nccwpck_require__(5733);
            return resolver.doResolve(hook, newRequest, `Resolved request '${innerRequest}' to '${foundMatch}' using tsconfig.json paths mapping`, 
            // tslint:disable-next-line:no-any
            createInnerContext(Object.assign({}, resolveContext)), (err2, result2) => {
                // Pattern taken from:
                // https://github.com/webpack/enhanced-resolve/blob/42ff594140582c3f8f86811f95dea7bf6774a1c8/lib/AliasPlugin.js#L44
                if (err2) {
                    return callback(err2);
                }
                // Don't allow other aliasing or raw request
                if (result2 === undefined) {
                    return callback(undefined, undefined);
                }
                // tslint:disable-next-line:no-any
                callback(undefined, result2);
            });
        });
    };
}
function createPluginLegacy(matchPath, resolver, absoluteBaseUrl, target, extensions) {
    const fileExistAsync = createFileExistAsync(resolver.fileSystem);
    const readJsonAsync = createReadJsonAsync(resolver.fileSystem);
    return (request, callback) => {
        const innerRequest = getInnerRequest(resolver, request);
        if (!innerRequest ||
            innerRequest.startsWith(".") ||
            innerRequest.startsWith("..")) {
            return callback();
        }
        matchPath(innerRequest, readJsonAsync, fileExistAsync, extensions, (err, foundMatch) => {
            if (err) {
                return callback(err);
            }
            if (!foundMatch) {
                return callback();
            }
            const newRequest = Object.assign(Object.assign({}, request), { request: foundMatch, path: absoluteBaseUrl });
            // Only at this point we are sure we are dealing with a legacy Webpack version (< 4.0.0)
            // So only now can we require the createInnerCallback function.
            // (It's already deprecated and might be removed down the line).
            const createInnerCallback = __nccwpck_require__(9249);
            return resolver.doResolve(target, newRequest, `Resolved request '${innerRequest}' to '${foundMatch}' using tsconfig.json paths mapping`, createInnerCallback(function (err2, result2) {
                // Note:
                //  *NOT* using an arrow function here because arguments.length implies we have "this"
                //  That means "this" has to be in the current function scope, and not the scope above.
                //  Pattern taken from:
                //  https://github.com/s-panferov/awesome-typescript-loader/blob/10653beff85f555f1f3b5d4bfd7d21513d0e54a4/src/paths-plugin.ts#L169
                if (arguments.length > 0) {
                    return callback(err2, result2);
                }
                // don't allow other aliasing or raw request
                callback(undefined, undefined);
            }, callback));
        });
    };
}
function readJson(fileSystem, path2, callback) {
    if ("readJson" in fileSystem && fileSystem.readJson) {
        return fileSystem.readJson(path2, callback);
    }
    fileSystem.readFile(path2, (err, buf) => {
        if (err) {
            return callback(err);
        }
        let data;
        try {
            // @ts-ignore  This will crash if buf is undefined, which I guess it can be...
            data = JSON.parse(buf.toString("utf-8"));
        }
        catch (e) {
            return callback(e);
        }
        return callback(undefined, data);
    });
}
function createReadJsonAsync(filesystem) {
    // tslint:disable-next-line:no-any
    return (path2, callback2) => {
        readJson(filesystem, path2, (err, json) => {
            // If error assume file does not exist
            if (err || !json) {
                callback2();
                return;
            }
            callback2(undefined, json);
        });
    };
}
function createFileExistAsync(filesystem) {
    return (path2, callback2) => {
        filesystem.stat(path2, (err, stats) => {
            // If error assume file does not exist
            if (err) {
                callback2(undefined, false);
                return;
            }
            callback2(undefined, stats ? stats.isFile() : false);
        });
    };
}


/***/ }),

/***/ 2878:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* module decorator */ module = __nccwpck_require__.nmd(module);


const wrapAnsi16 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => (...args) => {
	const rgb = fn(...args);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];

const setLazyProperty = (object, property, get) => {
	Object.defineProperty(object, property, {
		get: () => {
			const value = get();

			Object.defineProperty(object, property, {
				value,
				enumerable: true,
				configurable: true
			});

			return value;
		},
		enumerable: true,
		configurable: true
	});
};

/** @type {typeof import('color-convert')} */
let colorConvert;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
	if (colorConvert === undefined) {
		colorConvert = __nccwpck_require__(4750);
	}

	const offset = isBackground ? 10 : 0;
	const styles = {};

	for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
		const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
		if (sourceSpace === targetSpace) {
			styles[name] = wrap(identity, offset);
		} else if (typeof suite === 'object') {
			styles[name] = wrap(suite[targetSpace], offset);
		}
	}

	return styles;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
	setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});


/***/ }),

/***/ 990:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const ansiStyles = __nccwpck_require__(2878);
const {stdout: stdoutColor, stderr: stderrColor} = __nccwpck_require__(8534);
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = __nccwpck_require__(2655);

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = __nccwpck_require__(2043);
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

module.exports = chalk;


/***/ }),

/***/ 2043:
/***/ ((module) => {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	const u = c[0] === 'u';
	const bracket = c[1] === '{';

	if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	if (u && bracket) {
		return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, arguments_) {
	const results = [];
	const chunks = arguments_.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		const number = Number(chunk);
		if (!Number.isNaN(number)) {
			results.push(number);
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const [styleName, styles] of Object.entries(enabled)) {
		if (!Array.isArray(styles)) {
			continue;
		}

		if (!(styleName in current)) {
			throw new Error(`Unknown Chalk style: ${styleName}`);
		}

		current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
	}

	return current;
}

module.exports = (chalk, temporary) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
		if (escapeCharacter) {
			chunk.push(unescape(escapeCharacter));
		} else if (style) {
			const string = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(character);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMessage);
	}

	return chunks.join('');
};


/***/ }),

/***/ 2655:
/***/ ((module) => {

"use strict";


const stringReplaceAll = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

module.exports = {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
};


/***/ }),

/***/ 7176:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __nccwpck_require__(1462);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ 4750:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const conversions = __nccwpck_require__(7176);
const route = __nccwpck_require__(586);

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ 586:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const conversions = __nccwpck_require__(7176);

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ 1462:
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ 5733:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



module.exports = function createInnerContext(
	options,
	message,
	messageOptional
) {
	let messageReported = false;
	let innerLog = undefined;
	if (options.log) {
		if (message) {
			innerLog = msg => {
				if (!messageReported) {
					options.log(message);
					messageReported = true;
				}
				options.log("  " + msg);
			};
		} else {
			innerLog = options.log;
		}
	}
	const childContext = {
		log: innerLog,
		fileDependencies: options.fileDependencies,
		contextDependencies: options.contextDependencies,
		missingDependencies: options.missingDependencies,
		stack: options.stack
	};
	return childContext;
};


/***/ }),

/***/ 5306:
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



module.exports = function getInnerRequest(resolver, request) {
	if (
		typeof request.__innerRequest === "string" &&
		request.__innerRequest_request === request.request &&
		request.__innerRequest_relativePath === request.relativePath
	)
		return request.__innerRequest;
	let innerRequest;
	if (request.request) {
		innerRequest = request.request;
		if (/^\.\.?\//.test(innerRequest) && request.relativePath) {
			innerRequest = resolver.join(request.relativePath, innerRequest);
		}
	} else {
		innerRequest = request.relativePath;
	}
	request.__innerRequest_request = request.request;
	request.__innerRequest_relativePath = request.relativePath;
	return (request.__innerRequest = innerRequest);
};


/***/ }),

/***/ 5792:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 8534:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(2087);
const tty = __nccwpck_require__(3867);
const hasFlag = __nccwpck_require__(5792);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 2077:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var TsConfigLoader = __nccwpck_require__(5214);
var path = __nccwpck_require__(5622);
var options_1 = __nccwpck_require__(1473);
function loadConfig(cwd) {
    if (cwd === void 0) { cwd = options_1.options.cwd; }
    return configLoader({ cwd: cwd });
}
exports.loadConfig = loadConfig;
function configLoader(_a) {
    var cwd = _a.cwd, explicitParams = _a.explicitParams, _b = _a.tsConfigLoader, tsConfigLoader = _b === void 0 ? TsConfigLoader.tsConfigLoader : _b;
    if (explicitParams) {
        // tslint:disable-next-line:no-shadowed-variable
        var absoluteBaseUrl_1 = path.isAbsolute(explicitParams.baseUrl)
            ? explicitParams.baseUrl
            : path.join(cwd, explicitParams.baseUrl);
        return {
            resultType: "success",
            configFileAbsolutePath: "",
            baseUrl: explicitParams.baseUrl,
            absoluteBaseUrl: absoluteBaseUrl_1,
            paths: explicitParams.paths,
            mainFields: explicitParams.mainFields,
            addMatchAll: explicitParams.addMatchAll
        };
    }
    // Load tsconfig and create path matching function
    var loadResult = tsConfigLoader({
        cwd: cwd,
        getEnv: function (key) { return process.env[key]; }
    });
    if (!loadResult.tsConfigPath) {
        return {
            resultType: "failed",
            message: "Couldn't find tsconfig.json"
        };
    }
    if (!loadResult.baseUrl) {
        return {
            resultType: "failed",
            message: "Missing baseUrl in compilerOptions"
        };
    }
    var tsConfigDir = path.dirname(loadResult.tsConfigPath);
    var absoluteBaseUrl = path.join(tsConfigDir, loadResult.baseUrl);
    return {
        resultType: "success",
        configFileAbsolutePath: loadResult.tsConfigPath,
        baseUrl: loadResult.baseUrl,
        absoluteBaseUrl: absoluteBaseUrl,
        paths: loadResult.paths || {}
    };
}
exports.configLoader = configLoader;


/***/ }),

/***/ 5775:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var fs = __nccwpck_require__(5747);
function fileExistsSync(path) {
    try {
        var stats = fs.statSync(path);
        return stats.isFile();
    }
    catch (err) {
        // If error, assume file did not exist
        return false;
    }
}
exports.fileExistsSync = fileExistsSync;
/**
 * Reads package.json from disk
 * @param file Path to package.json
 */
// tslint:disable-next-line:no-any
function readJsonFromDiskSync(packageJsonPath) {
    if (!fs.existsSync(packageJsonPath)) {
        return undefined;
    }
    return require(packageJsonPath);
}
exports.readJsonFromDiskSync = readJsonFromDiskSync;
function readJsonFromDiskAsync(path, 
// tslint:disable-next-line:no-any
callback) {
    fs.readFile(path, "utf8", function (err, result) {
        // If error, assume file did not exist
        if (err || !result) {
            return callback();
        }
        var json = JSON.parse(result);
        return callback(undefined, json);
    });
}
exports.readJsonFromDiskAsync = readJsonFromDiskAsync;
function fileExistsAsync(path2, callback2) {
    fs.stat(path2, function (err, stats) {
        if (err) {
            // If error assume file does not exist
            return callback2(undefined, false);
        }
        callback2(undefined, stats ? stats.isFile() : false);
    });
}
exports.fileExistsAsync = fileExistsAsync;
function removeExtension(path) {
    return path.substring(0, path.lastIndexOf(".")) || path;
}
exports.removeExtension = removeExtension;


/***/ }),

/***/ 6143:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// register is used from register.js in root dir
var match_path_sync_1 = __nccwpck_require__(1810);
exports.createMatchPath = match_path_sync_1.createMatchPath;
exports.matchFromAbsolutePaths = match_path_sync_1.matchFromAbsolutePaths;
var match_path_async_1 = __nccwpck_require__(4479);
exports.createMatchPathAsync = match_path_async_1.createMatchPathAsync;
exports.matchFromAbsolutePathsAsync = match_path_async_1.matchFromAbsolutePathsAsync;
var register_1 = __nccwpck_require__(5174);
exports.register = register_1.register;
var config_loader_1 = __nccwpck_require__(2077);
exports.loadConfig = config_loader_1.loadConfig;


/***/ }),

/***/ 5121:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var path = __nccwpck_require__(5622);
/**
 * Converts an absolute baseUrl and paths to an array of absolute mapping entries.
 * The array is sorted by longest prefix.
 * Having an array with entries allows us to keep a sorting order rather than
 * sort by keys each time we use the mappings.
 * @param absoluteBaseUrl
 * @param paths
 * @param addMatchAll
 */
function getAbsoluteMappingEntries(absoluteBaseUrl, paths, addMatchAll) {
    // Resolve all paths to absolute form once here, and sort them by
    // longest prefix once here, this saves time on each request later.
    // We need to put them in an array to preseve the sorting order.
    var sortedKeys = sortByLongestPrefix(Object.keys(paths));
    var absolutePaths = [];
    for (var _i = 0, sortedKeys_1 = sortedKeys; _i < sortedKeys_1.length; _i++) {
        var key = sortedKeys_1[_i];
        absolutePaths.push({
            pattern: key,
            paths: paths[key].map(function (pathToResolve) {
                return path.join(absoluteBaseUrl, pathToResolve);
            })
        });
    }
    // If there is no match-all path specified in the paths section of tsconfig, then try to match
    // all paths relative to baseUrl, this is how typescript works.
    if (!paths["*"] && addMatchAll) {
        absolutePaths.push({
            pattern: "*",
            paths: [absoluteBaseUrl.replace(/\/$/, "") + "/*"]
        });
    }
    return absolutePaths;
}
exports.getAbsoluteMappingEntries = getAbsoluteMappingEntries;
/**
 * Sort path patterns.
 * If a module name can be matched with multiple patterns then pattern with the longest prefix will be picked.
 */
function sortByLongestPrefix(arr) {
    return arr
        .concat()
        .sort(function (a, b) { return getPrefixLength(b) - getPrefixLength(a); });
}
function getPrefixLength(pattern) {
    var prefixLength = pattern.indexOf("*");
    return pattern.substr(0, prefixLength).length;
}


/***/ }),

/***/ 4479:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var path = __nccwpck_require__(5622);
var TryPath = __nccwpck_require__(4231);
var MappingEntry = __nccwpck_require__(5121);
var Filesystem = __nccwpck_require__(5775);
/**
 * See the sync version for docs.
 */
function createMatchPathAsync(absoluteBaseUrl, paths, mainFields, addMatchAll) {
    if (mainFields === void 0) { mainFields = ["main"]; }
    if (addMatchAll === void 0) { addMatchAll = true; }
    var absolutePaths = MappingEntry.getAbsoluteMappingEntries(absoluteBaseUrl, paths, addMatchAll);
    return function (requestedModule, readJson, fileExists, extensions, callback) {
        return matchFromAbsolutePathsAsync(absolutePaths, requestedModule, readJson, fileExists, extensions, callback, mainFields);
    };
}
exports.createMatchPathAsync = createMatchPathAsync;
/**
 * See the sync version for docs.
 */
function matchFromAbsolutePathsAsync(absolutePathMappings, requestedModule, readJson, fileExists, extensions, callback, mainFields) {
    if (readJson === void 0) { readJson = Filesystem.readJsonFromDiskAsync; }
    if (fileExists === void 0) { fileExists = Filesystem.fileExistsAsync; }
    if (extensions === void 0) { extensions = Object.keys(require.extensions); }
    if (mainFields === void 0) { mainFields = ["main"]; }
    var tryPaths = TryPath.getPathsToTry(extensions, absolutePathMappings, requestedModule);
    if (!tryPaths) {
        return callback();
    }
    findFirstExistingPath(tryPaths, readJson, fileExists, callback, 0, mainFields);
}
exports.matchFromAbsolutePathsAsync = matchFromAbsolutePathsAsync;
function findFirstExistingMainFieldMappedFile(packageJson, mainFields, packageJsonPath, fileExistsAsync, doneCallback, index) {
    if (index === void 0) { index = 0; }
    if (index >= mainFields.length) {
        return doneCallback(undefined, undefined);
    }
    var tryNext = function () {
        return findFirstExistingMainFieldMappedFile(packageJson, mainFields, packageJsonPath, fileExistsAsync, doneCallback, index + 1);
    };
    var mainFieldMapping = packageJson[mainFields[index]];
    if (typeof mainFieldMapping !== "string") {
        // Skip mappings that are not pointers to replacement files
        return tryNext();
    }
    var mappedFilePath = path.join(path.dirname(packageJsonPath), mainFieldMapping);
    fileExistsAsync(mappedFilePath, function (err, exists) {
        if (err) {
            return doneCallback(err);
        }
        if (exists) {
            return doneCallback(undefined, mappedFilePath);
        }
        return tryNext();
    });
}
// Recursive loop to probe for physical files
function findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index, mainFields) {
    if (index === void 0) { index = 0; }
    if (mainFields === void 0) { mainFields = ["main"]; }
    var tryPath = tryPaths[index];
    if (tryPath.type === "file" ||
        tryPath.type === "extension" ||
        tryPath.type === "index") {
        fileExists(tryPath.path, function (err, exists) {
            if (err) {
                return doneCallback(err);
            }
            if (exists) {
                // Not sure why we don't just return the full path? Why strip it?
                return doneCallback(undefined, TryPath.getStrippedPath(tryPath));
            }
            if (index === tryPaths.length - 1) {
                return doneCallback();
            }
            // Continue with the next path
            return findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index + 1, mainFields);
        });
    }
    else if (tryPath.type === "package") {
        readJson(tryPath.path, function (err, packageJson) {
            if (err) {
                return doneCallback(err);
            }
            if (packageJson) {
                return findFirstExistingMainFieldMappedFile(packageJson, mainFields, tryPath.path, fileExists, function (mainFieldErr, mainFieldMappedFile) {
                    if (mainFieldErr) {
                        return doneCallback(mainFieldErr);
                    }
                    if (mainFieldMappedFile) {
                        // Not sure why we don't just return the full path? Why strip it?
                        return doneCallback(undefined, Filesystem.removeExtension(mainFieldMappedFile));
                    }
                    // No field in package json was a valid option. Continue with the next path.
                    return findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index + 1, mainFields);
                });
            }
            // This is async code, we need to return unconditionally, otherwise the code still falls
            // through and keeps recursing. While this might work in general, libraries that use neo-async
            // like Webpack will actually not allow you to call the same callback twice.
            //
            // An example of where this caused issues:
            // https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/11
            //
            // Continue with the next path
            return findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index + 1, mainFields);
        });
    }
    else {
        TryPath.exhaustiveTypeException(tryPath.type);
    }
}


/***/ }),

/***/ 1810:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var path = __nccwpck_require__(5622);
var Filesystem = __nccwpck_require__(5775);
var MappingEntry = __nccwpck_require__(5121);
var TryPath = __nccwpck_require__(4231);
/**
 * Creates a function that can resolve paths according to tsconfig paths property.
 * @param absoluteBaseUrl Absolute version of baseUrl as specified in tsconfig.
 * @param paths The paths as specified in tsconfig.
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @param addMatchAll Add a match-all "*" rule if none is present
 * @returns a function that can resolve paths.
 */
function createMatchPath(absoluteBaseUrl, paths, mainFields, addMatchAll) {
    if (mainFields === void 0) { mainFields = ["main"]; }
    if (addMatchAll === void 0) { addMatchAll = true; }
    var absolutePaths = MappingEntry.getAbsoluteMappingEntries(absoluteBaseUrl, paths, addMatchAll);
    return function (requestedModule, readJson, fileExists, extensions) {
        return matchFromAbsolutePaths(absolutePaths, requestedModule, readJson, fileExists, extensions, mainFields);
    };
}
exports.createMatchPath = createMatchPath;
/**
 * Finds a path from tsconfig that matches a module load request.
 * @param absolutePathMappings The paths to try as specified in tsconfig but resolved to absolute form.
 * @param requestedModule The required module name.
 * @param readJson Function that can read json from a path (useful for testing).
 * @param fileExists Function that checks for existance of a file at a path (useful for testing).
 * @param extensions File extensions to probe for (useful for testing).
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @returns the found path, or undefined if no path was found.
 */
function matchFromAbsolutePaths(absolutePathMappings, requestedModule, readJson, fileExists, extensions, mainFields) {
    if (readJson === void 0) { readJson = Filesystem.readJsonFromDiskSync; }
    if (fileExists === void 0) { fileExists = Filesystem.fileExistsSync; }
    if (extensions === void 0) { extensions = Object.keys(require.extensions); }
    if (mainFields === void 0) { mainFields = ["main"]; }
    var tryPaths = TryPath.getPathsToTry(extensions, absolutePathMappings, requestedModule);
    if (!tryPaths) {
        return undefined;
    }
    return findFirstExistingPath(tryPaths, readJson, fileExists, mainFields);
}
exports.matchFromAbsolutePaths = matchFromAbsolutePaths;
function findFirstExistingMainFieldMappedFile(packageJson, mainFields, packageJsonPath, fileExists) {
    for (var index = 0; index < mainFields.length; index++) {
        var mainFieldName = mainFields[index];
        var candidateMapping = packageJson[mainFieldName];
        if (candidateMapping && typeof candidateMapping === "string") {
            var candidateFilePath = path.join(path.dirname(packageJsonPath), candidateMapping);
            if (fileExists(candidateFilePath)) {
                return candidateFilePath;
            }
        }
    }
    return undefined;
}
function findFirstExistingPath(tryPaths, readJson, fileExists, mainFields) {
    if (readJson === void 0) { readJson = Filesystem.readJsonFromDiskSync; }
    if (mainFields === void 0) { mainFields = ["main"]; }
    for (var _i = 0, tryPaths_1 = tryPaths; _i < tryPaths_1.length; _i++) {
        var tryPath = tryPaths_1[_i];
        if (tryPath.type === "file" ||
            tryPath.type === "extension" ||
            tryPath.type === "index") {
            if (fileExists(tryPath.path)) {
                // Not sure why we don't just return the full path? Why strip it?
                return TryPath.getStrippedPath(tryPath);
            }
        }
        else if (tryPath.type === "package") {
            var packageJson = readJson(tryPath.path);
            if (packageJson) {
                var mainFieldMappedFile = findFirstExistingMainFieldMappedFile(packageJson, mainFields, tryPath.path, fileExists);
                if (mainFieldMappedFile) {
                    // Not sure why we don't just return the full path? Why strip it?
                    return Filesystem.removeExtension(mainFieldMappedFile);
                }
            }
        }
        else {
            TryPath.exhaustiveTypeException(tryPath.type);
        }
    }
    return undefined;
}


/***/ }),

/***/ 1473:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var minimist = __nccwpck_require__(5871);
var argv = minimist(process.argv.slice(2), {
    string: ["project"],
    alias: {
        project: ["P"]
    }
});
var project = argv && argv.project;
exports.options = {
    cwd: project || process.cwd()
};


/***/ }),

/***/ 5174:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var match_path_sync_1 = __nccwpck_require__(1810);
var config_loader_1 = __nccwpck_require__(2077);
var options_1 = __nccwpck_require__(1473);
var noOp = function () { return void 0; };
function getCoreModules(builtinModules) {
    builtinModules = builtinModules || [
        "assert",
        "buffer",
        "child_process",
        "cluster",
        "crypto",
        "dgram",
        "dns",
        "domain",
        "events",
        "fs",
        "http",
        "https",
        "net",
        "os",
        "path",
        "punycode",
        "querystring",
        "readline",
        "stream",
        "string_decoder",
        "tls",
        "tty",
        "url",
        "util",
        "v8",
        "vm",
        "zlib"
    ];
    var coreModules = {};
    for (var _i = 0, builtinModules_1 = builtinModules; _i < builtinModules_1.length; _i++) {
        var module_1 = builtinModules_1[_i];
        coreModules[module_1] = true;
    }
    return coreModules;
}
/**
 * Installs a custom module load function that can adhere to paths in tsconfig.
 * Returns a function to undo paths registration.
 */
function register(explicitParams) {
    var configLoaderResult = config_loader_1.configLoader({
        cwd: options_1.options.cwd,
        explicitParams: explicitParams
    });
    if (configLoaderResult.resultType === "failed") {
        console.warn(configLoaderResult.message + ". tsconfig-paths will be skipped");
        return noOp;
    }
    var matchPath = match_path_sync_1.createMatchPath(configLoaderResult.absoluteBaseUrl, configLoaderResult.paths, configLoaderResult.mainFields, configLoaderResult.addMatchAll);
    // Patch node's module loading
    // tslint:disable-next-line:no-require-imports variable-name
    var Module = __nccwpck_require__(2282);
    var originalResolveFilename = Module._resolveFilename;
    var coreModules = getCoreModules(Module.builtinModules);
    // tslint:disable-next-line:no-any
    Module._resolveFilename = function (request, _parent) {
        var isCoreModule = coreModules.hasOwnProperty(request);
        if (!isCoreModule) {
            var found = matchPath(request);
            if (found) {
                var modifiedArguments = [found].concat([].slice.call(arguments, 1)); // Passes all arguments. Even those that is not specified above.
                // tslint:disable-next-line:no-invalid-this
                return originalResolveFilename.apply(this, modifiedArguments);
            }
        }
        // tslint:disable-next-line:no-invalid-this
        return originalResolveFilename.apply(this, arguments);
    };
    return function () {
        // Return node's module loading to original state.
        Module._resolveFilename = originalResolveFilename;
    };
}
exports.register = register;


/***/ }),

/***/ 4231:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var path = __nccwpck_require__(5622);
var path_1 = __nccwpck_require__(5622);
var filesystem_1 = __nccwpck_require__(5775);
/**
 * Builds a list of all physical paths to try by:
 * 1. Check for file named exactly as request.
 * 2. Check for files named as request ending in any of the extensions.
 * 3. Check for file specified in package.json's main property.
 * 4. Check for files named as request ending in "index" with any of the extensions.
 */
function getPathsToTry(extensions, absolutePathMappings, requestedModule) {
    if (!absolutePathMappings ||
        !requestedModule ||
        requestedModule[0] === "." ||
        requestedModule[0] === path.sep) {
        return undefined;
    }
    var pathsToTry = [];
    for (var _i = 0, absolutePathMappings_1 = absolutePathMappings; _i < absolutePathMappings_1.length; _i++) {
        var entry = absolutePathMappings_1[_i];
        var starMatch = entry.pattern === requestedModule
            ? ""
            : matchStar(entry.pattern, requestedModule);
        if (starMatch !== undefined) {
            var _loop_1 = function (physicalPathPattern) {
                var physicalPath = physicalPathPattern.replace("*", starMatch);
                pathsToTry.push({ type: "file", path: physicalPath });
                pathsToTry.push.apply(pathsToTry, extensions.map(function (e) { return ({ type: "extension", path: physicalPath + e }); }));
                pathsToTry.push({
                    type: "package",
                    path: path.join(physicalPath, "/package.json")
                });
                var indexPath = path.join(physicalPath, "/index");
                pathsToTry.push.apply(pathsToTry, extensions.map(function (e) { return ({ type: "index", path: indexPath + e }); }));
            };
            for (var _a = 0, _b = entry.paths; _a < _b.length; _a++) {
                var physicalPathPattern = _b[_a];
                _loop_1(physicalPathPattern);
            }
        }
    }
    return pathsToTry.length === 0 ? undefined : pathsToTry;
}
exports.getPathsToTry = getPathsToTry;
// Not sure why we don't just return the full found path?
function getStrippedPath(tryPath) {
    return tryPath.type === "index"
        ? path_1.dirname(tryPath.path)
        : tryPath.type === "file"
            ? tryPath.path
            : tryPath.type === "extension"
                ? filesystem_1.removeExtension(tryPath.path)
                : tryPath.type === "package"
                    ? tryPath.path
                    : exhaustiveTypeException(tryPath.type);
}
exports.getStrippedPath = getStrippedPath;
function exhaustiveTypeException(check) {
    throw new Error("Unknown type " + check);
}
exports.exhaustiveTypeException = exhaustiveTypeException;
/**
 * Matches pattern with a single star against search.
 * Star must match at least one character to be considered a match.
 * @param patttern for example "foo*"
 * @param search for example "fooawesomebar"
 * @returns the part of search that * matches, or undefined if no match.
 */
function matchStar(pattern, search) {
    if (search.length < pattern.length) {
        return undefined;
    }
    if (pattern === "*") {
        return search;
    }
    var star = pattern.indexOf("*");
    if (star === -1) {
        return undefined;
    }
    var part1 = pattern.substring(0, star);
    var part2 = pattern.substring(star + 1);
    if (search.substr(0, star) !== part1) {
        return undefined;
    }
    if (search.substr(search.length - part2.length) !== part2) {
        return undefined;
    }
    return search.substr(star, search.length - part2.length);
}


/***/ }),

/***/ 5214:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var path = __nccwpck_require__(5622);
var fs = __nccwpck_require__(5747);
// tslint:disable:no-require-imports
var JSON5 = __nccwpck_require__(289);
var StripBom = __nccwpck_require__(8551);
function tsConfigLoader(_a) {
    var getEnv = _a.getEnv, cwd = _a.cwd, _b = _a.loadSync, loadSync = _b === void 0 ? loadSyncDefault : _b;
    var TS_NODE_PROJECT = getEnv("TS_NODE_PROJECT");
    // tsconfig.loadSync handles if TS_NODE_PROJECT is a file or directory
    var loadResult = loadSync(cwd, TS_NODE_PROJECT);
    return loadResult;
}
exports.tsConfigLoader = tsConfigLoader;
function loadSyncDefault(cwd, filename) {
    // Tsconfig.loadSync uses path.resolve. This is why we can use an absolute path as filename
    var configPath = resolveConfigPath(cwd, filename);
    if (!configPath) {
        return {
            tsConfigPath: undefined,
            baseUrl: undefined,
            paths: undefined
        };
    }
    var config = loadTsconfig(configPath);
    return {
        tsConfigPath: configPath,
        baseUrl: config && config.compilerOptions && config.compilerOptions.baseUrl,
        paths: config && config.compilerOptions && config.compilerOptions.paths
    };
}
function resolveConfigPath(cwd, filename) {
    if (filename) {
        var absolutePath = fs.lstatSync(filename).isDirectory()
            ? path.resolve(filename, "./tsconfig.json")
            : path.resolve(cwd, filename);
        return absolutePath;
    }
    if (fs.statSync(cwd).isFile()) {
        return path.resolve(cwd);
    }
    var configAbsolutePath = walkForTsConfig(cwd);
    return configAbsolutePath ? path.resolve(configAbsolutePath) : undefined;
}
function walkForTsConfig(directory, existsSync) {
    if (existsSync === void 0) { existsSync = fs.existsSync; }
    var configPath = path.join(directory, "./tsconfig.json");
    if (existsSync(configPath)) {
        return configPath;
    }
    var parentDirectory = path.join(directory, "../");
    // If we reached the top
    if (directory === parentDirectory) {
        return undefined;
    }
    return walkForTsConfig(parentDirectory, existsSync);
}
exports.walkForTsConfig = walkForTsConfig;
function loadTsconfig(configFilePath, existsSync, readFileSync) {
    if (existsSync === void 0) { existsSync = fs.existsSync; }
    if (readFileSync === void 0) { readFileSync = function (filename) {
        return fs.readFileSync(filename, "utf8");
    }; }
    if (!existsSync(configFilePath)) {
        return undefined;
    }
    var configString = readFileSync(configFilePath);
    var cleanedJson = StripBom(configString);
    var config = JSON5.parse(cleanedJson);
    var extendedConfig = config.extends;
    if (extendedConfig) {
        if (typeof extendedConfig === "string" &&
            extendedConfig.indexOf(".json") === -1) {
            extendedConfig += ".json";
        }
        var currentDir = path.dirname(configFilePath);
        var base = loadTsconfig(path.join(currentDir, extendedConfig), existsSync, readFileSync) || {};
        // baseUrl should be interpreted as relative to the base tsconfig,
        // but we need to update it so it is relative to the original tsconfig being loaded
        if (base && base.compilerOptions && base.compilerOptions.baseUrl) {
            var extendsDir = path.dirname(extendedConfig);
            base.compilerOptions.baseUrl = path.join(extendsDir, base.compilerOptions.baseUrl);
        }
        return __assign({}, base, config, { compilerOptions: __assign({}, base.compilerOptions, config.compilerOptions) });
    }
    return config;
}
exports.loadTsconfig = loadTsconfig;


/***/ }),

/***/ 289:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));var _parse=__nccwpck_require__(651);var _parse2=_interopRequireDefault(_parse);var _stringify=__nccwpck_require__(4614);var _stringify2=_interopRequireDefault(_stringify);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default={parse:_parse2.default,stringify:_stringify2.default};module.exports=exports['default'];

/***/ }),

/***/ 651:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};exports.default=parse;var _util=__nccwpck_require__(4118);var util=_interopRequireWildcard(_util);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}var source=void 0;var parseState=void 0;var stack=void 0;var pos=void 0;var line=void 0;var column=void 0;var token=void 0;var key=void 0;var root=void 0;function parse(text,reviver){source=String(text);parseState='start';stack=[];pos=0;line=1;column=0;token=undefined;key=undefined;root=undefined;do{token=lex();parseStates[parseState]()}while(token.type!=='eof');if(typeof reviver==='function'){return internalize({'':root},'',reviver)}return root}function internalize(holder,name,reviver){var value=holder[name];if(value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'){for(var _key in value){var replacement=internalize(value,_key,reviver);if(replacement===undefined){delete value[_key]}else{value[_key]=replacement}}}return reviver.call(holder,name,value)}var lexState=void 0;var buffer=void 0;var doubleQuote=void 0;var _sign=void 0;var c=void 0;function lex(){lexState='default';buffer='';doubleQuote=false;_sign=1;for(;;){c=peek();var _token=lexStates[lexState]();if(_token){return _token}}}function peek(){if(source[pos]){return String.fromCodePoint(source.codePointAt(pos))}}function read(){var c=peek();if(c==='\n'){line++;column=0}else if(c){column+=c.length}else{column++}if(c){pos+=c.length}return c}var lexStates={default:function _default(){switch(c){case'\t':case'\x0B':case'\f':case' ':case'\xA0':case'\uFEFF':case'\n':case'\r':case'\u2028':case'\u2029':read();return;case'/':read();lexState='comment';return;case undefined:read();return newToken('eof');}if(util.isSpaceSeparator(c)){read();return}return lexStates[parseState]()},comment:function comment(){switch(c){case'*':read();lexState='multiLineComment';return;case'/':read();lexState='singleLineComment';return;}throw invalidChar(read())},multiLineComment:function multiLineComment(){switch(c){case'*':read();lexState='multiLineCommentAsterisk';return;case undefined:throw invalidChar(read());}read()},multiLineCommentAsterisk:function multiLineCommentAsterisk(){switch(c){case'*':read();return;case'/':read();lexState='default';return;case undefined:throw invalidChar(read());}read();lexState='multiLineComment'},singleLineComment:function singleLineComment(){switch(c){case'\n':case'\r':case'\u2028':case'\u2029':read();lexState='default';return;case undefined:read();return newToken('eof');}read()},value:function value(){switch(c){case'{':case'[':return newToken('punctuator',read());case'n':read();literal('ull');return newToken('null',null);case't':read();literal('rue');return newToken('boolean',true);case'f':read();literal('alse');return newToken('boolean',false);case'-':case'+':if(read()==='-'){_sign=-1}lexState='sign';return;case'.':buffer=read();lexState='decimalPointLeading';return;case'0':buffer=read();lexState='zero';return;case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':buffer=read();lexState='decimalInteger';return;case'I':read();literal('nfinity');return newToken('numeric',Infinity);case'N':read();literal('aN');return newToken('numeric',NaN);case'"':case'\'':doubleQuote=read()==='"';buffer='';lexState='string';return;}throw invalidChar(read())},identifierNameStartEscape:function identifierNameStartEscape(){if(c!=='u'){throw invalidChar(read())}read();var u=unicodeEscape();switch(u){case'$':case'_':break;default:if(!util.isIdStartChar(u)){throw invalidIdentifier()}break;}buffer+=u;lexState='identifierName'},identifierName:function identifierName(){switch(c){case'$':case'_':case'\u200C':case'\u200D':buffer+=read();return;case'\\':read();lexState='identifierNameEscape';return;}if(util.isIdContinueChar(c)){buffer+=read();return}return newToken('identifier',buffer)},identifierNameEscape:function identifierNameEscape(){if(c!=='u'){throw invalidChar(read())}read();var u=unicodeEscape();switch(u){case'$':case'_':case'\u200C':case'\u200D':break;default:if(!util.isIdContinueChar(u)){throw invalidIdentifier()}break;}buffer+=u;lexState='identifierName'},sign:function sign(){switch(c){case'.':buffer=read();lexState='decimalPointLeading';return;case'0':buffer=read();lexState='zero';return;case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':buffer=read();lexState='decimalInteger';return;case'I':read();literal('nfinity');return newToken('numeric',_sign*Infinity);case'N':read();literal('aN');return newToken('numeric',NaN);}throw invalidChar(read())},zero:function zero(){switch(c){case'.':buffer+=read();lexState='decimalPoint';return;case'e':case'E':buffer+=read();lexState='decimalExponent';return;case'x':case'X':buffer+=read();lexState='hexadecimal';return;}return newToken('numeric',_sign*0)},decimalInteger:function decimalInteger(){switch(c){case'.':buffer+=read();lexState='decimalPoint';return;case'e':case'E':buffer+=read();lexState='decimalExponent';return;}if(util.isDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},decimalPointLeading:function decimalPointLeading(){if(util.isDigit(c)){buffer+=read();lexState='decimalFraction';return}throw invalidChar(read())},decimalPoint:function decimalPoint(){switch(c){case'e':case'E':buffer+=read();lexState='decimalExponent';return;}if(util.isDigit(c)){buffer+=read();lexState='decimalFraction';return}return newToken('numeric',_sign*Number(buffer))},decimalFraction:function decimalFraction(){switch(c){case'e':case'E':buffer+=read();lexState='decimalExponent';return;}if(util.isDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},decimalExponent:function decimalExponent(){switch(c){case'+':case'-':buffer+=read();lexState='decimalExponentSign';return;}if(util.isDigit(c)){buffer+=read();lexState='decimalExponentInteger';return}throw invalidChar(read())},decimalExponentSign:function decimalExponentSign(){if(util.isDigit(c)){buffer+=read();lexState='decimalExponentInteger';return}throw invalidChar(read())},decimalExponentInteger:function decimalExponentInteger(){if(util.isDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},hexadecimal:function hexadecimal(){if(util.isHexDigit(c)){buffer+=read();lexState='hexadecimalInteger';return}throw invalidChar(read())},hexadecimalInteger:function hexadecimalInteger(){if(util.isHexDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},string:function string(){switch(c){case'\\':read();buffer+=escape();return;case'"':if(doubleQuote){read();return newToken('string',buffer)}buffer+=read();return;case'\'':if(!doubleQuote){read();return newToken('string',buffer)}buffer+=read();return;case'\n':case'\r':throw invalidChar(read());case'\u2028':case'\u2029':separatorChar(c);break;case undefined:throw invalidChar(read());}buffer+=read()},start:function start(){switch(c){case'{':case'[':return newToken('punctuator',read());}lexState='value'},beforePropertyName:function beforePropertyName(){switch(c){case'$':case'_':buffer=read();lexState='identifierName';return;case'\\':read();lexState='identifierNameStartEscape';return;case'}':return newToken('punctuator',read());case'"':case'\'':doubleQuote=read()==='"';lexState='string';return;}if(util.isIdStartChar(c)){buffer+=read();lexState='identifierName';return}throw invalidChar(read())},afterPropertyName:function afterPropertyName(){if(c===':'){return newToken('punctuator',read())}throw invalidChar(read())},beforePropertyValue:function beforePropertyValue(){lexState='value'},afterPropertyValue:function afterPropertyValue(){switch(c){case',':case'}':return newToken('punctuator',read());}throw invalidChar(read())},beforeArrayValue:function beforeArrayValue(){if(c===']'){return newToken('punctuator',read())}lexState='value'},afterArrayValue:function afterArrayValue(){switch(c){case',':case']':return newToken('punctuator',read());}throw invalidChar(read())},end:function end(){throw invalidChar(read())}};function newToken(type,value){return{type:type,value:value,line:line,column:column}}function literal(s){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=s[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _c=_step.value;var p=peek();if(p!==_c){throw invalidChar(read())}read()}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}function escape(){var c=peek();switch(c){case'b':read();return'\b';case'f':read();return'\f';case'n':read();return'\n';case'r':read();return'\r';case't':read();return'\t';case'v':read();return'\x0B';case'0':read();if(util.isDigit(peek())){throw invalidChar(read())}return'\0';case'x':read();return hexEscape();case'u':read();return unicodeEscape();case'\n':case'\u2028':case'\u2029':read();return'';case'\r':read();if(peek()==='\n'){read()}return'';case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':throw invalidChar(read());case undefined:throw invalidChar(read());}return read()}function hexEscape(){var buffer='';var c=peek();if(!util.isHexDigit(c)){throw invalidChar(read())}buffer+=read();c=peek();if(!util.isHexDigit(c)){throw invalidChar(read())}buffer+=read();return String.fromCodePoint(parseInt(buffer,16))}function unicodeEscape(){var buffer='';var count=4;while(count-->0){var _c2=peek();if(!util.isHexDigit(_c2)){throw invalidChar(read())}buffer+=read()}return String.fromCodePoint(parseInt(buffer,16))}var parseStates={start:function start(){if(token.type==='eof'){throw invalidEOF()}push()},beforePropertyName:function beforePropertyName(){switch(token.type){case'identifier':case'string':key=token.value;parseState='afterPropertyName';return;case'punctuator':pop();return;case'eof':throw invalidEOF();}},afterPropertyName:function afterPropertyName(){if(token.type==='eof'){throw invalidEOF()}parseState='beforePropertyValue'},beforePropertyValue:function beforePropertyValue(){if(token.type==='eof'){throw invalidEOF()}push()},beforeArrayValue:function beforeArrayValue(){if(token.type==='eof'){throw invalidEOF()}if(token.type==='punctuator'&&token.value===']'){pop();return}push()},afterPropertyValue:function afterPropertyValue(){if(token.type==='eof'){throw invalidEOF()}switch(token.value){case',':parseState='beforePropertyName';return;case'}':pop();}},afterArrayValue:function afterArrayValue(){if(token.type==='eof'){throw invalidEOF()}switch(token.value){case',':parseState='beforeArrayValue';return;case']':pop();}},end:function end(){}};function push(){var value=void 0;switch(token.type){case'punctuator':switch(token.value){case'{':value={};break;case'[':value=[];break;}break;case'null':case'boolean':case'numeric':case'string':value=token.value;break;}if(root===undefined){root=value}else{var parent=stack[stack.length-1];if(Array.isArray(parent)){parent.push(value)}else{parent[key]=value}}if(value!==null&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'){stack.push(value);if(Array.isArray(value)){parseState='beforeArrayValue'}else{parseState='beforePropertyName'}}else{var current=stack[stack.length-1];if(current==null){parseState='end'}else if(Array.isArray(current)){parseState='afterArrayValue'}else{parseState='afterPropertyValue'}}}function pop(){stack.pop();var current=stack[stack.length-1];if(current==null){parseState='end'}else if(Array.isArray(current)){parseState='afterArrayValue'}else{parseState='afterPropertyValue'}}function invalidChar(c){if(c===undefined){return syntaxError('JSON5: invalid end of input at '+line+':'+column)}return syntaxError('JSON5: invalid character \''+formatChar(c)+'\' at '+line+':'+column)}function invalidEOF(){return syntaxError('JSON5: invalid end of input at '+line+':'+column)}function invalidIdentifier(){column-=5;return syntaxError('JSON5: invalid identifier character at '+line+':'+column)}function separatorChar(c){console.warn('JSON5: \''+c+'\' is not valid ECMAScript; consider escaping')}function formatChar(c){var replacements={'\'':'\\\'','"':'\\"','\\':'\\\\','\b':'\\b','\f':'\\f','\n':'\\n','\r':'\\r','\t':'\\t','\x0B':'\\v','\0':'\\0','\u2028':'\\u2028','\u2029':'\\u2029'};if(replacements[c]){return replacements[c]}if(c<' '){var hexString=c.charCodeAt(0).toString(16);return'\\x'+('00'+hexString).substring(hexString.length)}return c}function syntaxError(message){var err=new SyntaxError(message);err.lineNumber=line;err.columnNumber=column;return err}module.exports=exports['default'];

/***/ }),

/***/ 4614:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};exports.default=stringify;var _util=__nccwpck_require__(4118);var util=_interopRequireWildcard(_util);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function stringify(value,replacer,space){var stack=[];var indent='';var propertyList=void 0;var replacerFunc=void 0;var gap='';var quote=void 0;if(replacer!=null&&(typeof replacer==='undefined'?'undefined':_typeof(replacer))==='object'&&!Array.isArray(replacer)){space=replacer.space;quote=replacer.quote;replacer=replacer.replacer}if(typeof replacer==='function'){replacerFunc=replacer}else if(Array.isArray(replacer)){propertyList=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=replacer[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var v=_step.value;var item=void 0;if(typeof v==='string'){item=v}else if(typeof v==='number'||v instanceof String||v instanceof Number){item=String(v)}if(item!==undefined&&propertyList.indexOf(item)<0){propertyList.push(item)}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}if(space instanceof Number){space=Number(space)}else if(space instanceof String){space=String(space)}if(typeof space==='number'){if(space>0){space=Math.min(10,Math.floor(space));gap='          '.substr(0,space)}}else if(typeof space==='string'){gap=space.substr(0,10)}return serializeProperty('',{'':value});function serializeProperty(key,holder){var value=holder[key];if(value!=null){if(typeof value.toJSON5==='function'){value=value.toJSON5(key)}else if(typeof value.toJSON==='function'){value=value.toJSON(key)}}if(replacerFunc){value=replacerFunc.call(holder,key,value)}if(value instanceof Number){value=Number(value)}else if(value instanceof String){value=String(value)}else if(value instanceof Boolean){value=value.valueOf()}switch(value){case null:return'null';case true:return'true';case false:return'false';}if(typeof value==='string'){return quoteString(value,false)}if(typeof value==='number'){return String(value)}if((typeof value==='undefined'?'undefined':_typeof(value))==='object'){return Array.isArray(value)?serializeArray(value):serializeObject(value)}return undefined}function quoteString(value){var quotes={'\'':0.1,'"':0.2};var replacements={'\'':'\\\'','"':'\\"','\\':'\\\\','\b':'\\b','\f':'\\f','\n':'\\n','\r':'\\r','\t':'\\t','\x0B':'\\v','\0':'\\0','\u2028':'\\u2028','\u2029':'\\u2029'};var product='';var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=value[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var c=_step2.value;switch(c){case'\'':case'"':quotes[c]++;product+=c;continue;}if(replacements[c]){product+=replacements[c];continue}if(c<' '){var hexString=c.charCodeAt(0).toString(16);product+='\\x'+('00'+hexString).substring(hexString.length);continue}product+=c}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}var quoteChar=quote||Object.keys(quotes).reduce(function(a,b){return quotes[a]<quotes[b]?a:b});product=product.replace(new RegExp(quoteChar,'g'),replacements[quoteChar]);return quoteChar+product+quoteChar}function serializeObject(value){if(stack.indexOf(value)>=0){throw TypeError('Converting circular structure to JSON5')}stack.push(value);var stepback=indent;indent=indent+gap;var keys=propertyList||Object.keys(value);var partial=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=keys[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var key=_step3.value;var propertyString=serializeProperty(key,value);if(propertyString!==undefined){var member=serializeKey(key)+':';if(gap!==''){member+=' '}member+=propertyString;partial.push(member)}}}catch(err){_didIteratorError3=true;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}var final=void 0;if(partial.length===0){final='{}'}else{var properties=void 0;if(gap===''){properties=partial.join(',');final='{'+properties+'}'}else{var separator=',\n'+indent;properties=partial.join(separator);final='{\n'+indent+properties+',\n'+stepback+'}'}}stack.pop();indent=stepback;return final}function serializeKey(key){if(key.length===0){return quoteString(key,true)}var firstChar=String.fromCodePoint(key.codePointAt(0));if(!util.isIdStartChar(firstChar)){return quoteString(key,true)}for(var i=firstChar.length;i<key.length;i++){if(!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))){return quoteString(key,true)}}return key}function serializeArray(value){if(stack.indexOf(value)>=0){throw TypeError('Converting circular structure to JSON5')}stack.push(value);var stepback=indent;indent=indent+gap;var partial=[];for(var i=0;i<value.length;i++){var propertyString=serializeProperty(String(i),value);partial.push(propertyString!==undefined?propertyString:'null')}var final=void 0;if(partial.length===0){final='[]'}else{if(gap===''){var properties=partial.join(',');final='['+properties+']'}else{var separator=',\n'+indent;var _properties=partial.join(separator);final='[\n'+indent+_properties+',\n'+stepback+']'}}stack.pop();indent=stepback;return final}}module.exports=exports['default'];

/***/ }),

/***/ 4944:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));var Space_Separator=exports.Space_Separator=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/;var ID_Start=exports.ID_Start=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/;var ID_Continue=exports.ID_Continue=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;

/***/ }),

/***/ 4118:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.isSpaceSeparator=isSpaceSeparator;exports.isIdStartChar=isIdStartChar;exports.isIdContinueChar=isIdContinueChar;exports.isDigit=isDigit;exports.isHexDigit=isHexDigit;var _unicode=__nccwpck_require__(4944);var unicode=_interopRequireWildcard(_unicode);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function isSpaceSeparator(c){return unicode.Space_Separator.test(c)}function isIdStartChar(c){return c>='a'&&c<='z'||c>='A'&&c<='Z'||c==='$'||c==='_'||unicode.ID_Start.test(c)}function isIdContinueChar(c){return c>='a'&&c<='z'||c>='A'&&c<='Z'||c>='0'&&c<='9'||c==='$'||c==='_'||c==='\u200C'||c==='\u200D'||unicode.ID_Continue.test(c)}function isDigit(c){return /[0-9]/.test(c)}function isHexDigit(c){return /[0-9A-Fa-f]/.test(c)}

/***/ }),

/***/ 4091:
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ 665:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __nccwpck_require__(4091)(Yallist)
} catch (er) {}


/***/ }),

/***/ 9249:
/***/ ((module) => {

module.exports = eval("require")("enhanced-resolve/lib/createInnerCallback");


/***/ }),

/***/ 7289:
/***/ ((module) => {

module.exports = eval("require")("pnpapi");


/***/ }),

/***/ 8275:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"dependency-cruiser@^9.25.0","_id":"dependency-cruiser@9.25.0","_inBundle":false,"_integrity":"sha512-UaMcGh+DTTx9wFOro6K4LYrNwTz0IUEdmLdkC7Tw6gp0yvB6ZxGpNXDuD0OCYyAE6SaLJ3O0kDCb2Oj2DvogKw==","_location":"/dependency-cruiser","_phantomChildren":{"lru-cache":"6.0.0","minimist":"1.2.5","regexp-tree":"0.1.23","require-from-string":"2.0.2","string-width":"4.2.2","strip-ansi":"6.0.0","uri-js":"4.2.2"},"_requested":{"type":"range","registry":true,"raw":"dependency-cruiser@^9.25.0","name":"dependency-cruiser","escapedName":"dependency-cruiser","rawSpec":"^9.25.0","saveSpec":null,"fetchSpec":"^9.25.0"},"_requiredBy":["#DEV:/","#USER"],"_resolved":"https://registry.npmjs.org/dependency-cruiser/-/dependency-cruiser-9.25.0.tgz","_shasum":"73d79749ff876e7ced33c0bec00e492e05db6b4e","_spec":"dependency-cruiser@^9.25.0","_where":"/Users/victorchabbert/p/dependency-cruiser-action","author":{"name":"Sander Verweij","url":"https://sverweij.github.io"},"bin":{"dependency-cruiser":"bin/dependency-cruise.js","dependency-cruise":"bin/dependency-cruise.js","depcruise":"bin/dependency-cruise.js","depcruise-fmt":"bin/depcruise-fmt.js","depcruise-wrap-stream-in-html":"bin/wrap-stream-in-html.js"},"bugs":{"url":"https://github.com/sverweij/dependency-cruiser/issues"},"bundleDependencies":false,"contributors":[{"name":"Klaus Meinhardt","url":"https://github.com/ajafff"}],"dependencies":{"acorn":"8.1.0","acorn-jsx":"5.3.1","acorn-jsx-walk":"2.0.0","acorn-loose":"8.0.2","acorn-walk":"8.0.2","ajv":"8.0.5","chalk":"4.1.0","commander":"7.2.0","enhanced-resolve":"5.1.0","figures":"3.2.0","get-stream":"6.0.0","glob":"7.1.6","handlebars":"4.7.7","indent-string":"4.0.0","inquirer":"7.3.3","json5":"2.2.0","lodash":"4.17.21","safe-regex":"2.1.1","semver":"7.3.5","semver-try-require":"4.0.1","teamcity-service-messages":"0.1.11","tsconfig-paths-webpack-plugin":"3.5.1","wrap-ansi":"7.0.0"},"deprecated":false,"description":"Validate and visualize dependencies. With your rules. JavaScript, TypeScript, CoffeeScript. ES6, CommonJS, AMD.","devDependencies":{"@babel/core":"7.13.14","@babel/plugin-transform-modules-commonjs":"7.13.8","@babel/preset-typescript":"7.13.0","@swc/core":"1.2.51","@typescript-eslint/eslint-plugin":"4.20.0","@typescript-eslint/parser":"4.20.0","chai":"4.3.4","chai-json-schema":"1.5.1","coffeescript":"2.5.1","eslint":"7.23.0","eslint-config-moving-meadow":"2.0.9","eslint-config-prettier":"8.1.0","eslint-plugin-budapestian":"2.3.0","eslint-plugin-import":"2.22.1","eslint-plugin-mocha":"8.1.0","eslint-plugin-node":"11.1.0","eslint-plugin-security":"1.4.0","eslint-plugin-unicorn":"29.0.0","husky":"4.3.0","intercept-stdout":"0.1.2","lint-staged":"10.5.4","mocha":"8.3.2","normalize-newline":"3.0.0","npm-run-all":"4.1.5","nyc":"15.1.0","prettier":"2.2.1","shx":"0.3.3","svelte":"3.37.0","symlink-dir":"4.1.0","typescript":"4.2.3","upem":"5.0.0","vue-template-compiler":"2.6.12","yarn":"1.22.10"},"engines":{"node":"^10||^12||>=13"},"eslintIgnore":["node_modules","coverage","tmp","src/**/*.template.js","src/cli/tools/svg-in-html-snippets/script.snippet.js","test/integration/**","test/*/fixtures/**","test/*/*/fixtures/**","types/**"],"exports":{".":"./src/main/index.js","./config-utl/extract-babel-config":"./src/config-utl/extract-babel-config.js","./config-utl/extract-depcruise-config":"./src/config-utl/extract-depcruise-config/index.js","./config-utl/extract-ts-config":"./src/config-utl/extract-ts-config.js","./config-utl/extract-webpack-resolve-config":"./src/config-utl/extract-webpack-resolve-config.js","./sample-reporter-plugin":"./configs/plugins/stats-reporter-plugin.js"},"files":["bin","configs/**/*.js","src","!src/**/*.hbs","!src/**/*.md","!**/*.DS_Store","types/*.d.ts","LICENSE","package.json","README.md"],"homepage":"https://github.com/sverweij/dependency-cruiser","husky":{"hooks":{"pre-commit":"lint-staged"}},"keywords":["static analysis","circular","dependencies","typescript","javascript","coffeescript","ES6","ES2015","AMD","CommonJS","validation","spelunking"],"license":"MIT","lint-staged":{"{tools,src,config}/**/*.js":["eslint --fix"],"{tools,src,config}/**/*.{mjs,js,json}":["prettier --write"],"bin/*":["eslint --fix","prettier --write"],"test/**/*.{utl,spec}.js":["eslint --fix","prettier --write"],"*.d.ts":["eslint --config types/.eslintrc.json --fix","prettier --write --ignore-path .prettierignore"]},"main":"src/main/index.js","name":"dependency-cruiser","nyc":{"statements":99.85,"branches":99.7,"functions":100,"lines":99.85,"exclude":["bin","configs/**/*","test/**/*","src/**/*.template.js","src/cli/tools/svg-in-html-snippets/script.snippet.js","src/cli/init-config/get-user-input.js","src/cli/listeners/*/index.js","coverage/**/*","tmp*","tools/**/*","docs/**/*","doc/**/*","webpack.conf.js"],"reporter":["text-summary","html","json-summary"],"all":true},"repository":{"type":"git","url":"git+https://github.com/sverweij/dependency-cruiser.git"},"scripts":{"build":"make dev-build","build:clean":"make clean","check":"npm-run-all build lint depcruise test:cover","check:full":"npm-run-all check test:glob test:yarn-pnp","depcruise":"node ./bin/dependency-cruise.js src bin test configs types tools --config","depcruise:explain":"node ./bin/dependency-cruise.js src bin test configs types tools --output-type err-long --config --progress none","depcruise:graph:dev":"node ./bin/dependency-cruise.js bin src --prefix vscode://file/$(pwd)/ --config --output-type dot --progress cli-feedback | dot -T svg | node ./bin/wrap-stream-in-html.js | browser","depcruise:graph:doc":"npm-run-all depcruise:graph:doc:json --parallel depcruise:graph:doc:fmt-* depcruise:graph:doc:samples","depcruise:graph:doc:fmt-archi":"./bin/depcruise-fmt.js -T archi -f - tmp_graph_deps.json | dot -T svg -Grankdir=TD | tee doc/real-world-samples/dependency-cruiser-archi-graph.svg | node bin/wrap-stream-in-html.js > docs/dependency-cruiser-archi-graph.html","depcruise:graph:doc:fmt-detail":"./bin/depcruise-fmt.js -T dot -f - tmp_graph_deps.json | dot -T svg | tee doc/real-world-samples/dependency-cruiser-without-node_modules.svg | node bin/wrap-stream-in-html.js > docs/dependency-cruiser-dependency-graph.html","depcruise:graph:doc:fmt-dir":"./bin/depcruise-fmt.js -T ddot -f - tmp_graph_deps.json | dot -T svg -Grankdir=TD | tee doc/real-world-samples/dependency-cruiser-dir-graph.svg | node bin/wrap-stream-in-html.js > docs/dependency-cruiser-dir-graph.html","depcruise:graph:doc:fmt-schema":"cd tools/schema && node ../../bin/dependency-cruise.js . --config --output-type dot | dot -T svg | tee ../overview.svg | node ../../bin/wrap-stream-in-html.js > ../../docs/schema-overview.html && cd -","depcruise:graph:doc:fmt-types":"cd types && node ../bin/dependency-cruise.js . --ts-pre-compilation-deps --config --output-type dot | dot -T svg > overview.svg && cd -","depcruise:graph:doc:json":"node ./bin/dependency-cruise.js bin src test --config --output-type json --output-to tmp_graph_deps.json --progress","depcruise:graph:doc:samples":"sh tools/generate-samples.sh","depcruise:graph:dot":"node ./bin/dependency-cruise.js bin src --config --output-type dot | dot -T svg > tmp_deps.svg","depcruise:graph:fdp":"node ./bin/dependency-cruise.js bin src --config --output-type dot | fdp -GK=0.1 -Gsplines=true -T svg > tmp_deps.svg","depcruise:graph:osage":"node ./bin/dependency-cruise.js bin src --config --output-type dot | osage -Gpack=32 -GpackMode=array2 -T svg > tmp_deps.svg","depcruise:report":"node ./bin/dependency-cruise.js src bin test configs types --output-type err-html --config --output-to dependency-violations.html","lint":"npm-run-all --parallel --aggregate-output lint:eslint lint:prettier:check lint:types","lint:eslint":"eslint bin/dependency-cruise.js src test configs tools/**/*.js tools/schema/**/*.mjs --cache --cache-location .cache/eslint/","lint:eslint:fix":"eslint --fix bin src test configs tools/**/*.js tools/schema/**/*.mjs --cache --cache-location .cache/eslint/","lint:fix":"npm-run-all lint:eslint:fix lint:prettier lint:types:fix","lint:prettier":"prettier --loglevel warn --write src/**/*.{js,json} {tools,configs}/**/*.js tools/**/*.mjs bin/* !**/*.template.js types/*.d.ts test/**/*.{spec,utl}.js","lint:prettier:check":"prettier --loglevel warn --check src/**/*.{js,json} {tools,configs}/**/*.js tools/**/*.mjs bin/* !**/*.template.js types/*.d.ts test/**/*.{spec,utl}.js","lint:types":"npm-run-all lint:types:tsc lint:types:lint","lint:types:fix":"eslint --no-ignore --config types/.eslintrc.json --fix types/*.d.ts","lint:types:lint":"eslint --no-ignore --config types/.eslintrc.json types/*.d.ts","lint:types:tsc":"tsc --noEmit --strict --types --noUnusedLocals --noUnusedParameters types/dependency-cruiser.d.ts","scm:push":"run-p --aggregate-output scm:push:*","scm:push:bitbucket-mirror":"run-p --aggregate-output scm:push:bitbucket-mirror:*","scm:push:bitbucket-mirror:commits":"git push bitbucket-mirror","scm:push:bitbucket-mirror:tags":"git push --tags bitbucket-mirror","scm:push:github":"run-p --aggregate-output scm:push:github:*","scm:push:github:commits":"git push","scm:push:github:tags":"git push --tags","scm:push:gitlab-mirror":"run-p --aggregate-output scm:push:gitlab-mirror:*","scm:push:gitlab-mirror:commits":"git push gitlab-mirror","scm:push:gitlab-mirror:tags":"git push --tags gitlab-mirror","scm:stage":"git add .","test":"mocha --timeout 4000 \\"test/**/*.spec.js\\"","test:cover":"nyc --check-coverage npm test","test:glob":"set -f && test \\"`bin/dependency-cruise.js test/extract/fixtures/gather-globbing/packages/**/src/**/*.js | grep \\"no dependency violations found\\"`\\" = \\"✔ no dependency violations found (6 modules, 0 dependencies cruised)\\"","test:load":"hyperfine --warmup 3 --runs 30 \\"bin/dependency-cruise.js --validate -- src bin test configs types tools\\"","test:load:short":"hyperfine --warmup 1 --runs 5 \\"bin/dependency-cruise.js --validate -- src bin test configs types tools\\"","test:watch":"mocha --watch --watch-extensions=json --reporter=min test/\\\\*\\\\*/\\\\*.spec.js","test:yarn-pnp":"npm-run-all test:yarn-pnp:cleanup test:yarn-pnp:pack test:yarn-pnp:copy test:yarn-pnp:install test:yarn-pnp:version test:yarn-pnp:run test:yarn-pnp:test test:yarn-pnp:cleanup","test:yarn-pnp:cleanup":"shx rm -rf test/integration/yarn-pnp.testing-ground dependency-cruiser*.tgz","test:yarn-pnp:copy":"shx cp -r test/integration/yarn-pnp.template test/integration/yarn-pnp.testing-ground","test:yarn-pnp:install":"cd test/integration/yarn-pnp.testing-ground && yarn && yarn add -D ../../../dependency-cruiser*.tgz","test:yarn-pnp:pack":"npm pack","test:yarn-pnp:run":"cd test/integration/yarn-pnp.testing-ground && yarn dependency-cruise:json","test:yarn-pnp:test":"cd test/integration/yarn-pnp.testing-ground && yarn test","test:yarn-pnp:version":"cd test/integration/yarn-pnp.testing-ground && yarn dependency-cruise:version","update-dependencies":"npm-run-all upem:update upem:install build:clean build lint:fix depcruise test:cover","upem:install":"npm install","upem:update":"npm outdated --json | upem","version":"npm-run-all build depcruise:graph:doc scm:stage"},"supportedTranspilers":{"babel":">=7.0.0 <8.0.0","coffee-script":">=1.0.0 <2.0.0","coffeescript":">=1.0.0 <3.0.0","livescript":">=1.0.0 <2.0.0","svelte":">=3.0.0 <4.0.0","swc":">=1.0.0 <2.0.0","typescript":">=2.0.0 <5.0.0","vue-template-compiler":">=2.0.0 <3.0.0"},"types":"types/dependency-cruiser.d.ts","upem":{"donotup":[{"package":"husky","because":"https://github.com/typicode/husky/issues/822"},{"package":"enhanced-resolve","because":"version 5.1.0 is dramatically faster than any later version"},{"package":"inquirer","because":"version 8 dropped support for node 10, which we still have"}]},"version":"9.25.0"}');

/***/ }),

/***/ 7082:
/***/ ((module) => {

"use strict";
module.exports = require("console");;

/***/ }),

/***/ 7291:
/***/ ((module) => {

"use strict";
module.exports = require("dependency-cruiser");;

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 2282:
/***/ ((module) => {

"use strict";
module.exports = require("module");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 3867:
/***/ ((module) => {

"use strict";
module.exports = require("tty");;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__nccwpck_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 	var __webpack_exports__ = __nccwpck_require__(3109);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map