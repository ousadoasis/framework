
/**
 * Exponential Moving Average (EMA)
 */
 const ema = (data, period = 14) => {
  const k = 2 / (period + 1);
  const ema = data.map((price, i, _prices) => {
    if (i === 0) return price;
    return price * k + ema[i - 1] * (1 - k);
  });
  return ema;
}

export default ema