

var countLetters = function(input) {
  var output = {};
  input = input.replace(/ /g, "").split("");

  for(var i = 0; i < input.length; i++) {
    if(!output[input[i]]) {
      output[input[i]] = 1;
    } else {
      output[input[i]]++;
    }

  }


  return output;
};

console.log(countLetters("lighthouse in the house"));