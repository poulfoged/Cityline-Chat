
// declared on static class via a guid to prevent conflicts with iterators etc.
export const Typename = "09fefbcb3ee8"; // in the future this can be a Symbol()

/**
 * Declares a property on a class that is not minified.
 * 
 * Used with Typename to get and set:
```typescript
@ClassTypename("MyClass")
class MyClass { }
  
var className = MyClass[Typename];
 * ```
 */
export function ClassTypename(typeName: string) { // this is the decorator factory
    return function (target: Function) { // this is the decorator
        target[Typename] = typeName;
        
    }
}
