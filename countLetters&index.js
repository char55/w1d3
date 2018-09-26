

var countLetters = function(input) {
  var output = {};
  input = input.replace(/ /g, "").split("");

  for(var i = 0; i < input.length; i++) {
    if(!output[input[i]]) {
      output[input[i]][count] = 1;
      output[input[i]][index] = [i];
    } else {
      output[input[i][count]]++;
      output[input[i]][index].push(i);
    }

  }


  return output;
};

console.log(countLetters("lighthouse in the house"));