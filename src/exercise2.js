var mapCustomer = function(input) {
  if (input != {}) {
    var output = Object.assign({}, input);
    var somme = 0;
    for (var i = 0; i < output.products.length; i++) {
      somme += output.products[i].price;
    }
    output.moneySpent = Number(somme);
    return output;

  }
  else {
    var output = {
      firstname: 'John',
      lastname: 'Doe',
      products: [],
      moneySpent: 0
    };
    return output;

  }
}
var input = {
  firstname: 'Jack',
  lastname: 'Smith',
  products: [{ label: 'shoes', price: 89 }, { label: 'book', price: 14 }, { label: 'smartphone', price: 499 }]
}



module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
