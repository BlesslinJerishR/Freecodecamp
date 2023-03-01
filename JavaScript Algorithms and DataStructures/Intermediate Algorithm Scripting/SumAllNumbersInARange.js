function sumAll(arr) {
    let total = 0;
    let nums = [];
    let lower = Math.min(...arr);
    let upper = Math.max(...arr);
  
    for(let num = lower; num <= upper; num++ ){
        nums.push(num);
    }
    
    for(let number in nums){
      total += nums[number];
    }
  
    return total;
  }
  
  sumAll([1, 4]);