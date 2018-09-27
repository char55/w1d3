var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ],

  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ],
  }
];



function sumOf(saleNumb) {
  // takes array and sums it
  var summation = 0;
  for(var i =0; i < saleNumb.length; i++) {
    summation += saleNumb[i];
  }
  return summation;
}


function calculateSalesTax(salesData, taxRates) {
  output = {};

      for(var i = 0; i < salesData.length; i++) {
        var tempSales = sumOf(salesData[i].sales);
        var tempObj = salesData[i];

        if (!output[tempObj.name]) {
              output[tempObj.name] = {
                totalSales: tempSales,
                totalTaxes: tempSales * taxRates[tempObj.province]
              };
        } else {
              output[tempObj.name].totalSales += tempSales;
              output[tempObj.name].totalTaxes += tempSales * taxRates[tempObj.province];
        }
      }

  return output;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/