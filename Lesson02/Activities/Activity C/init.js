const code = 'MSFT';
const stockPrice = new StockPrice(code);
stockPrice.start();

function StockPrice(stockCode) {
  const stock = stockCode;

  return {
    start: () => {
      console.log("starting...");
      // start the calculator which will register an event listener for stock updates
      // load file by passing the stockCode which starts the process of reading
      const Consumer = require('stockConsumer/Consumer');
      const consumer = new Consumer(code);

      const Calculator = require('stockCalculator/Calculator');
      const stockCalculator = new Calculator(code, consumer);

      consumer.readStocks();
    }
  }
}
