var cron = require('node-cron');
 
const priceCompareCron = ()=>{
  cron.schedule('*/2 * * * *', () => {
    console.log('running a task every two minutes');
  });
}

module.exports = {priceCompareCron}
