## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative - explicit sequence of commands

   1. [5 points] Object Oriented - computation is effected by sending messages to objects. objects encapsulated state and exhibit bevhior.

   1. [5 points] Functional - computation proceeds by nested function calls that avoid any global state mutation and through definition of function composition.

1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
Object Oriented paragidm is more flexible and easier to manage or adjust than the Imperative paradigm.


1. [5 points] How does the functional paradigm improve over the object oriented paradigm?

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
2. [3 points] `x => x.map(y => y * 2)`
3. [3 points] `(x, y) => x.filter(y)`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
5. [3 points] `(x, y) => x ? y[0] : y[1]`
6. [3 points] `(f,g) => x => f(g(x+1))`
