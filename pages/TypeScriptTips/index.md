# TypeScript Tips

If you are familiar with JavaScript, learning how to use TypeScript may not be a difficult job. And most of the modern front-end frameworks are compatible with TypeScript, so I believe learning something about TypeScript is necessary for every JavaScript developer.

## Type Aliases or Interfaces

In most cases, you can choose between them freely. There are some syntax differences, but does not matter. The key difference may be that the type cannot add new properties but the interface is always extendable.

Refer to the Documentation, `Interface` is preferred:

> You should prefer interface. Use type when you need specific features.

> If you would like a heuristic, use interface until you need to use features from type.

```javascript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// no error
const person: Person = {
  name: "Mark",
  age: 25,
};

type Article = {
  title: string,
};

type Article = {
  id: number,
};
// Error: Duplicate identifier 'Article'.
```

- Interfaces may only be used to declare the shapes of objects, not rename primitives.
- Type aliases may not participate in declaration merging, but interfaces can.

To be honest, I don't know why the TypeScript team chose to provide two forms to declare type, it is really confusing. If you search the internet, you will find a bunch of questions like 'Should I use type or interface ?'.

## Type Assertions

Sometimes you know the type of a value that TypeScript didn't understand, you can use Type Assertions to specify a value.

```javascript
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
```

For more complex cases, you can use Type Assertions to change the type of a value to anything you want. This way will cheat the type system, so use it carefully.

```javascript
const documentAsString = document as any as string;
```

## Type predicates

We can use type predicates function to define a user-defined type guard.

```javascript
interface Fish {
  swim: () => void
}
interface Bird {
  fly: () => void
}

const isFish = (v: Fish | Bird) : v is Fish => {
  return typeof (v as Fish).swim === 'function'
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }

  return animal.fly();
}
```

## The `never` type

Typescript use `never` to represent value that should never exist.

```javascript
// for example you can use nerver to declare a function that can't accept any arguments
function foo(...args: never[]) {
  console.log("function with zero argument");
}
foo(1);
```
