function pairElement(str) {

    const arrDNA = [];
  
    for (let i = 0; i < str.length; i += 1) {
  
      if (str[i] === 'A') arrDNA.push([str[i], 'T']);
      if (str[i] === 'T') arrDNA.push([str[i], 'A']);
      if (str[i] === 'C') arrDNA.push([str[i], 'G']);
      if (str[i] === 'G') arrDNA.push([str[i], 'C']);
    }
    return arrDNA;
  }
  
  pairElement("GCG");