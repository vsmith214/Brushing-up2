// function sometimes(fn) {
//    var i = 0;
//    return function() {
//      if (++i >= 4 && (i % 2 === 0)) {
//        return "I do not know!";
//      }

//      return fn.apply(null, arguments);
//    };
//  }

function sometimes(add){
  var counter = 0;
  var someFunc = function(a, b) {
    console.log(counter);
    if (counter > 2 && counter%2 !=0) {
      counter++;
      return 'I do not know!';
    }
    counter++;
    //console.log("add.apply(a,b) is " + add.apply(a,b));
    return add(a,b);
  }
  return someFunc;
}
