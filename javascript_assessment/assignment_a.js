// Functions;

function Sum_Nums_With_For_Loop(nums) {
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      sum += num;
    }
  
    return sum;
  }
  
  function Sum_Nums_With_While_Loop(nums) {
    let sum = 0;
    let idx = 0;
  
    while (idx < nums.length) {
      let num = nums[idx];
      sum += num;
      idx++;
    }
  
    return sum;
  }
  
  function Sum_Nums_With_For_Each(nums) {
    let sum = 0;
    
    nums.forEach(function(num) {
      sum += num
    });
  
    return sum;
  }
  
  function Sum_Nums_With_Reduce(nums) {
    return nums.reduce(function(acc, curr) {
      return acc + curr;
    });
  }
  
  function Sum_Nums_With_For_In_Loop(nums) {
    let sum = 0;
  
    for (let idx in nums) {
      let value = nums[idx];
      sum += value;
    }
  
    return sum;
  }
  
  function Sum_Nums_With_For_Of_Loop(nums) {
    let sum = 0;
  
    for (let num of nums) {
      sum += num;
    }
  
    return sum;
  }
  
  function Populate_Object_With_Frequency(obj, str) {
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      obj[character] = obj[character] + 1 || 1;
    }
    return obj;
  }
  
  // Special Note: Rewrite this into a multi-line arrow function expression;
  function Greet_Person(greeting, name) { 
    return `${greeting} ${name}!`; // Note: template strings/string interpolation;
  }
  
  // Special Note: Rewrite this into a one-line arrow function expression;
  function adder(num1, num2) {
    return num1 + num2;
  }
  
  // Test Cases;
  
  let exampleNums = [1,2,3,4,5,6,7,8,9,10];
  
  console.log(Sum_Nums_With_For_Loop(exampleNums));
  console.log(Sum_Nums_With_While_Loop(exampleNums));
  console.log(Sum_Nums_With_For_Each(exampleNums));
  console.log(Sum_Nums_With_Reduce(exampleNums));
  console.log(Sum_Nums_With_For_In_Loop(exampleNums));
  console.log(Sum_Nums_With_For_Of_Loop(exampleNums));
  
  console.log("");
  
  let exampleObj = {};
  Populate_Object_With_Frequency(exampleObj, "Matthew");
  console.log(exampleObj); // Side Note: The object declared on line 95 was apparently mutated/modified. Objects (and arrays) are passed by reference whereas everything else (primitive data types) are passed by value;
  
  console.log("");
  
  let exampleGreeting = "Welcome";
  let exampleName = "James";
  
  console.log(Greet_Person(exampleGreeting, exampleName));
  
  console.log("");
  
  let exampleNum1 = 3;
  let exampleNum2 = 7;
  
  console.log(adder(exampleNum1, exampleNum2));
  
  /* EXPECTED OUTPUT;
  
  55
  55
  55
  55
  55
  55
  
  { M: 1, a: 1, t: 2, h: 1, e: 1, w: 1 }
  
  Welcome James!
  
  10
  
  */