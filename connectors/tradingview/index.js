import tradingview from 'tradingview-connector'
import { get } from 'lodash'


/**
 * Initialize the connector
 * @param {Object} config - The configuration object
 * @returns {Object} The connector
 * @example
 * const config = {
 *  tradingview: {
 *    apiKey: 'YOUR API KEY',
 *   apiSecret: 'YOUR API SECRET'
 * }
 */
const getTradingview = (config) => {
  const tradingviewConfig = get(config, 'tradingview', {})
  const tradingviewClient = tradingview(tradingviewConfig)
  return tradingviewClient
}

export default getTradingview