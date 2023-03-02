// USING REGEX

function translatePigLatin(str) {
    let conso = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    let vowels = ['a','e','i','o','u']
    let word = [];
    let last = "";
    let pigLatin = "";

    // for(let i=0; i < conso.length;i++){
    //     if(str[i] === conso[i]){
    //         last += str[i];
    //         console.log(last);
    //     }  
    //     else{word = str.slice(i); console.log(word);};
    // }

    for(let c of conso){
       if(str.startsWith(c)){
          last = str[0];
          word = str.slice(1);
       }
    }
    pigLatin = word + last + "ay"
    return pigLatin;
  }
  
  translatePigLatin("consonant");