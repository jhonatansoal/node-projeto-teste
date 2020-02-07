const logger = require('../api/helpers/logger');
const defaults = require('./default.js');
const _ = require('lodash');

const env = process.env.NODE_ENV || 'development';

const configFile = `./${env}.js`;

logger.debug(`Loading config from ${configFile}`);

let config = require(configFile); // eslint-disable-line import/no-dynamic-require
config = { ...defaults, ...config };
const configObject = _.merge({}, defaults, config, { db: { password: 'XXXXXXX' } });
logger.info(configObject);
module.exports = config;
