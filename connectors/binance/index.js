import binance from 'node-binance-api';
import { get } from 'lodash';

/**
 * Initialize the connector
 * @param {Object} config - The configuration object
 * @returns {Object} The connector
 */
const getBinance = (config) => {
  const binanceConfig = get(config, 'binance', {});
  const binanceClient = binance().options(binanceConfig);
  return binanceClient;
}

export default getBinance;