var removeNegativeValue = function(input) {
  if (input === undefined)
  {
    var output = [];
    return output;
  }
  else
  {
    var output = input.filter(function(number)
      {
        return number > -1;
      })
    return output;
  }
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
