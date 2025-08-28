// Generics

// function identity<Type>(val:Type):Type{
//     return val;
// }

interface greeting{
    message : string
}

function identity<T>(val:T):T{
    return val;
}

const greeting = identity("Hello");
const num = identity(42);
const obj = identity({ name: "Alice" });

identity<greeting>({
    message:'hello'
})

console.log(greeting);
console.log(num);
console.log(obj);