/**
 * @function
 * @param {Number} val
 * @returns void
 * 
 * This function would have a runtime of O(numDigits)
 */
function printVert(val) {
  
  // Hoist the remainder of the number for the 
  const remainder = val % 10;

  // Subtract the remainder to give us a number divisible by ten
  // Divide by ten to remove the left most space for the digit
  const num = (val - remainder) / 10;
  
  // If our value passed in is 0, we are done and exit out of the process
  if(val === 0) { return; }

  /** Continue to populate the call stack with print functions.
   * This should resolve in the last value added being the first
   * integer. When we start popping functions off of the stack,
   * we will print the number in order.
   */
  printVert(num);

  // Print the remainder value to a single line of the console
  console.log(remainder);
}

printVert(1234);