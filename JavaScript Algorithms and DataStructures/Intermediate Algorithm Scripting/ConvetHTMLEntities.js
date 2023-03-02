function convertHTML(str) {
  let strArr = [];
  let newStr = [];
  let final = "";
  strArr = str.split("");
  for(let s of strArr){
    if(s === "&"){
      s = "&amp;";
      newStr.push(s);
    }
    else if(s === "<"){
      s = "&lt;";
      newStr.push(s);
    }
    else if(s === ">"){
      s = "&gt;";
      newStr.push(s);
    }
    else if(s === '"'){
      s = "&quot;";
      newStr.push(s);
    }
    else if(s === "'"){
      s = "&apos;";
      newStr.push(s);
    }
    else if(s === "<>"){
      s = "&lt;&gt;";
      newStr.push(s);
    }
    else{
      newStr.push(s);
    }
  }
  final = newStr.join("");
  return final;
}

convertHTML("Dolce & Gabbana");