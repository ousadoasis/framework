
/**
 * Is the candle a bullish candle?
 * @param {*} candle 
 * @returns 
 */
const isHammer = (candle) => {
  return candle.open > candle.close && candle.open - candle.close > 2 * (candle.high - candle.open);
}

export { isHammer };