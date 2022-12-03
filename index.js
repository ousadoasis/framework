const Binance = require('node-binance-api');
require('dotenv').config()


/**
 * Get trading dashboard
 */
const binance = new Binance().options({
  APIKEY: process.env.binanceAPIKEY,
  APISECRET: process.env.BINANCEAPISECRET
});

binance.trades("BTCBUSD", (error, trades, symbol) => {
  console.info(symbol+" trade history", trades);
});
