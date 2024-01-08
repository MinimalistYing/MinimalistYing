# TypeScript Tips
If you are familiar with JavaScript, learning how to use TypeScript may not a difficult job. And most of the modern front-end frameworks are compatible with TypeScript, so I believe learning something about TypeScript is necessary for every JavaScript developer.

## Type Aliases or Interfaces
In most cases, you can choose between them freely. There are some syntax differences, but does not really matter. The key difference may be that the type cannot add new properties but the interface is always extendable.

```javascript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// no error
const person: Person = {
  name: 'Mark',
  age: 25
};

type Article = {
  title: string;
}

type Article = {
  id: number;
}
// Error: Duplicate identifier 'Article'.
```
To be honest, I don't know why the TypeScript team chose to provide two forms to declare type, it is really confusing. If you search the internet, you will find a bunch of questions like 'Should I use type or interface ?'.  
