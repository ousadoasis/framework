/**
 * Moving Average Convergence Divergence (MACD)
 */
 const macd = (data, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) => {
  const fastEMA = ema(data, fastPeriod);
  const slowEMA = ema(data, slowPeriod);
  const macd = fastEMA.map((fast, i) => fast - slowEMA[i]);
  const signal = ema(macd, signalPeriod);
  const histogram = macd.map((macd, i) => macd - signal[i]);
  return { macd, signal, histogram };
}

export default macd