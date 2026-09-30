{/**You will be given an array containing exactly five integer values. Your task is to count how many of these values are even, how many are odd, how many are positive, and how many are negative.
    Return an object with four properties: even, odd, positive, and negative, each holding the respective count.
    Remember that 0 is considered an even number, but it is neither positive nor negative.

Example 1
Input: numbers = [-5,0,3,-4,1]
Output: {"even":2,"negative":2,"odd":3,"positive":2}

Example 2
Input: numbers = [2,4,6,8,10]
Output: {"even":5,"negative":0,"odd":0,"positive":5} */}

function countNumberProperties(numbers) {
  
  let even = 0, odd = 0, positive = 0, negative = 0;
  for (let number of numbers){
    if(number % 2 === 0){
        even++;
    }
    else{
       odd++;
    }

    if(number > 0){
      positive++;
    }
    else if(number < 0){
      negative++;
    }
  }
  return {even, odd, positive, negative};
}