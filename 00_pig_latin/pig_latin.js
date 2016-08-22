// function translate(phrase){
//    var vowels = 'aeiou';
//    var index = 0;
//    var finalPhrase = [];

//    phrase.split(' ').forEach(function(word){
//      for(var i = 0; i < word.length; i++){
//        if(vowels.indexOf(word[i]) >= 0){
//          if(word[i] !== 'u' || (word[i] === 'u' && word[i] !== 'q')){
//            index = i;
//            break;
//          }

//        }
//      }
//      finalPhrase.push(word.slice(index,word.length) + word.slice(0,index) + 'ay');
//    });
//    return finalPhrase.join(' ');
//  }


//  function translate(wordString){
// 	var vowel = "aeiou";
// 	var index = 0;
// 	var inputWordArr = wordString.split(" ");
// 	var pigWordArray = [];

// 	inputWordArr.forEach(function(word){
//   	for(var i = 0; i < word.length; i++){
//   		if(vowel.search(word[i]) !== -1){ // is the character word[i] a vowel?
//   			if(word[i] !== "u" || (word[i] === "u" && word[i-1] !== "q")){
//   				index = i;
//   				break;
//   			}
//   		}
//   	}
//   	pigWordArray.push(word.substring(index, word.length) + word.substring(0, index) + 'ay');
//   });

//   return pigWordArray.join(" ");
// }


// function translate(phrase) {
//   var returnedWord = ""; 
//   var splitPhrase = phrase.split(" ");
//   console.log(splitPhrase);
//   if (splitPhrase.length == 1) {
//     if (splitPhrase[0].indexOf("a") == 0 || splitPhrase[0].indexOf("e") == 0 || splitPhrase[0].indexOf("i") == 0 || splitPhrase[0].indexOf("o") == 0 || splitPhrase[0].indexOf("u") == 0){
//       //starts with a vowel
//       return splitPhrase + "ay";
//     } else if (splitPhrase[0].indexOf("che") == 0) {
//       // phrase: "cherry"
//       // want: errychay
//       return splitPhrase[0].slice(2) + "chay";
//     } else {
//       //starts with a consonant
//       var firstLetter = splitPhrase[0][0];
//       return splitPhrase[0].slice(1) + firstLetter + "ay";
//     }
//   } else {
//     // multiple words
//     // TODO somehow "eat pie" is not entering this condition
//     console.log("hello");
//     console.log(splitPhrase.slice(1));
//     console.log(splitPhrase);
//     returnedWord += translate(splitPhrase.slice(1));
//     return returnedWord
//   }

// }

// function translate(phrase) {
//   var returnedWord = "";
//   var splitPhrase = phrase.split();
//   if (splitPhrase.length == 1) {
//     if (splitPhrase[0].indexOf("a") == 0 || splitPhrase[0].indexOf("e") == 0 || splitPhrase[0].indexOf("i") == 0 || splitPhrase[0].indexOf("o") == 0 || splitPhrase[0].indexOf("u") == 0){
//       //starts with a vowel
//       return splitPhrase + "ay";
//     } else if (splitPhrase[0].indexOf("che") == 0) {
//       // phrase: "cherry"
//       // want: errychay
//       return splitPhrase[0].slice(2) + "chay";
//     } else {
//       //starts with a consonant
//       var firstLetter = splitPhrase[0][0];
//       return splitPhrase[0].slice(1) + firstLetter + "ay";
//     }
//   } else {
//     // multiple words
//     // TODO somehow "eat pie" is not entering this condition
//     console.log("hello");
//     console.log(splitPhrase.slice(1));
//     returnedWord += translate(splitPhrase.slice(1));
//     return returnedWord
//   }

// }

// function translateSubFunc(word) {
//   if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u"){
//     //if the word begins with a vowel
//     return word + "ay";
//   } else {
//     // if the word begins with a consonant
//     firstWord = word[0];
//     return word.slice(1) + word[0] + "ay";
//   }
// };


// console.log(translateSubFunc);




















// var translate = function(str){
//   var indexArray = [];
//   indexArray.push( str.indexOf('a') ); 
//   indexArray.push( str.indexOf('e') );
//   indexArray.push( str.indexOf('i') );
//   indexArray.push( str.indexOf('o') );
//   indexArray.push( str.indexOf('u') );

//   var minIndex = -1;
//   for(var i = 0; i < indexArray.length; i++){
//     if(indexArray[i] != -1){
//       if(minIndex == -1){
//         minIndex = i;
//       } else if (indexArray[i] < indexArray[minIndex]){
//         minIndex = i;
//       }
//     }
//   }

//   // finds minIndex


//   if(minIndex > 1 && str.charAt(minIndex - 1) == q){
//       indexArray.pop();
//       //Can put this into a separate function I suppose
//       var minIndex = -1;
//       for(var i = 0; i < indexArray.length; i++){
//       if(indexArray[i] != -1){
//         if(minIndex == -1){
//           minIndex = i;
//         } else if (indexArray[i] < indexArray[minIndex]){
//           minIndex = i;
//         }
//       }
//     }
//   }





//   return str.substring(indexArray[minIndex], str.length) + str.substr(0, indexArray[minIndex]) + "ay";
// }



function translate(string) {
  var consonants = /[^aeiou]/;
  var vowels = ["a", "e", "i", "o", "u"];



  


/* checks for spaces within the string */
/*for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    console.log("space at index " + i);
  }
}
*/

var arrOfWords = string.split(" ");
var arr = [];


  arrOfWords.forEach(function(word){

  var oneCons = word.slice(1) + word[0] + "ay";
  var twoCons = word.slice(2) + word[0] + word[1] + "ay";
  var threeCons = word.slice(3) + word[0] + word[1] + word[2] + "ay";



    for (var j = 0; j < word.length; j++) {  
    for (var i = 0; i < vowels.length; i++) {
      if (word.indexOf(vowels[i]) === 0) {
        arr.push(word + "ay");
        break
      } 
      else if ((word.indexOf(vowels[i] === -1) && (word.indexOf(vowels[i]) === 1))) {
        word = oneCons;
      } 
      else if ((word[0] && word[1] && word[2]).match(consonants)) {
        word = threeCons;
      } 
      else if (word.match(/[^aeiou]qu/)) {
        word = threeCons;
      }
      else if ((word[0] && word[1]).match(consonants)) {
        word = twoCons;
      } 
      else if (word.match(/qu/)) {
        word = twoCons;
      }
      
    }
    arr.push(word);
    break
  }  
  });
  console.log(arr);
  return arr.join(" ");
    
}


// function translateSubFunc(word) {
//   if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u"){
//     //if the word begins with a vowel
//     return word + "ay";
//   } else {
//     // if the word begins with a consonant
//     firstWord = word[0];
//     return word.slice(1) + word[0] + "ay";
//   }

// }












