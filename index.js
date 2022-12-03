const Binance = require('node-binance-api');
const jsonexport = require('jsonexport');
const fs = require('fs');
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
  const runningTotals = {}
  
  trades.forEach((v) => { 
    var d = new Date(v.time);
    const tidyDate = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
    if(v.isBuyer){
      runningTotals[tidyDate] = (runningTotals[tidyDate] ?? 0) + parseInt(v.quoteQty);
    }
    fs.appendFileSync(`trades-${tidyDate}.csv`, JSON.stringify({...v, tidyDate }) + '\n');
  });
  console.log('runningTotals', runningTotals);
  fs.writeFileSync('running-totals.json', JSON.stringify(runningTotals));
})
