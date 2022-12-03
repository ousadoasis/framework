const Binance = require('node-binance-api');
const jsonexport = require('jsonexport');
const fs = require('fs');
require('dotenv').config()

const toDateDashed = (d) => d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();


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

  // If trades are for today, then delete the file as likely out of date
  const todayDate = toDateDashed(new Date());
  fs.rmSync(`trades-${todayDate}.csv`);

  
  trades.forEach((v) => { 
    var d = new Date(v.time);
    const tidyDate = toDateDashed(d);
    //if(v.isBuyer){
    runningTotals[tidyDate] = ((runningTotals[tidyDate] ?? 0) + parseFloat(v.quoteQty)) ?? 0
    //}
    fs.appendFileSync(`trades-${tidyDate}.csv`, JSON.stringify({...v, tidyDate }) + '\n');
  });
  console.log('runningTotals', runningTotals);
  fs.writeFileSync('running-totals.json', JSON.stringify(runningTotals));
})
