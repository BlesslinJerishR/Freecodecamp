function sumPrimes(num) {
    let arr = [];
    let sum = 0;
    for(let i=0; i <=num; i++){
      let flag = 0;
      for(let j = 2; j < i; j++){
        if(i%j == 0){
          flag = 1;
          break;
        }
      }
      if(i > 1 && flag == 0){
        arr.push(i);
      }
    }
    for(let prime of arr){
      sum += prime;
    }
    return sum;
  }
  
  sumPrimes(10);