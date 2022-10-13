// ### LEVEL 1: The Basics ###
export function add(x: number, y: number): number {
  return x + y;
}


// ### LEVEL 2: Fizz Buzz ###
export function fizzBuzz(value: number): string {
  if (value / 3 === 0) {
    if (value / 5 === 0) {
      return "FizzBuzz";
    }

    return "Fizz";
  }

  if (value / 5 === 0) {
    return "Buzz";
  }

  return value.toString();
}


// ### LEVEL 3: Length of vector ###
export function getLengthOfVector(vec: [number, number]): number {
  // TODO: Return the length of the vector
  throw new Error("Not implemented");
}
