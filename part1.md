## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
      impeative programing is a sequance of commands that the computer follows step by step, kind of like a recepie.
   1. [5 points] Object Oriented
      object oriented programing is organized using object, each object holds data and behivioirs. Objeect interact with each other and pass data between one another.
   1. [5 points] Functional
      Functional Programing is kind of like evaluating a math expression. Is by evaluating nested functions/expressions and avoids mutating values and side effects

1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
    OOP improved over imperative by being more organized and writing programs around objects that each have data and behaviord. This groups related things togerher, and helps make sure that not every part of the program only knows what it needs to know. Overall it omproved encapsulation and abstraction, and makes a program easier to understand and maintain, especially when it gets bigger and impartive programing becomes harder to manage. 
    
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?
    Functional programming improves OOP by avoiding mutation and shared states. It builds programs around pure functions and expressions, and not around objects whose data changes. This makes the code easier to understand, test, reuse, and parallelize.
### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
  const discountedProducts = inventory.filter(product => product.discounted);

  if (discountedProducts.length===0) 
    return 0;
  const sum = discountedProducts.map(product => product.price).reduce((acc,curr) => acc + curr , 0);

  return sum / discountedProducts.length;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
            <T>(x:T[], y:(x:T) => boolean) => boolean
2. [3 points] `x => x.map(y => y * 2)`
            (x:number[]) => number[]
3. [3 points] `(x, y) => x.filter(y)`
            <T>(x: T[], y: (x:T) => boolean) => T[]
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
            (x:number[]) => number
5. [3 points] `(x, y) => x ? y[0] : y[1]`
            <T>(x:boolean, y:T[]) => T
            
6. [3 points] `(f,g) => x => f(g(x+1))`
            <U,V>(f: (x:U) => V, g:(x:number) => U) => (x:number) => V
