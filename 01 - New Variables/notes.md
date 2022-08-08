# 1. var Scoping Refresher
## 1.1 var

### can be reassigned with keyword `var`

```javascript
var width = 100;
var width = 200; // correct
```

- works without `var`
```javascript
var width = 100;
width = 200; // correct
```

### function scope
- example 1

```javascript
function setWidth() {
    var width = 100;
    console.log(width);
}
setWidth(); 

console.log(width); // not available
```

- fixed example 1

```javascript
var width;
function setWidth() {
    width = 100;
    console.log(width);
}
setWidth(); 

console.log(width); // now it works but not preferred
```

- problem of function scope and that requires use of `let` and `const`
```javascript
var age = 100;
if (age > 12) {
	var dogYears = age * 7; // leaked outside the if statement
	console.log(`you are ${dogYears} years old.`);
}
console.log(dogYears); // still accessible
```

change it to `let` or `const` to make it block-scoped
```javascript
var age = 100;
if (age > 12) {
	let dogYears = age * 7;
	console.log(`you are ${dogYears} years old.`);
}
console.log(dogYears); // not accessible anymore
```


## 1.2 let

### cannnot be reassgined with keyword `let`
```javascript
let points = 50;
let points = 60; // SyntaxError: Identifier 'points' has already been declared
```

- works without `let`
```javascript
let points = 50;
points = 60; // works
```

### block scope
```javascript
let points = 50;
let winner = false; // scoped to the window
if (points > 40) {
    let winner = true; // scoped to the block
}
```

## 1.3 const
### cannot update a `const` var
- Exception: Object

```javascript
const person = {
    name: 'John'
};

person = {name: "Teddy"}; // TypeError

person.name = 'Nancy'; // works

const wes = Object.freeze(person); // freezes person as wes
```

### block scope


# 2. let VS const
Included above

# 3. let and const in the Real World

## 3.1 IIFE 
- prevent global scope pollution
```javascript
(function() {
    var name = 'wes';
})();
console.log(name); // cannot access name in IIFE


{
    const name = 'wes';
}
console.log(name); // let and const in a scope work like IIFE



for(var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(() => {
        console.log(i); // all prints 10
    }, 1000);
}

// change var to let for block scope
for(let i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(() => {
        console.log(i);  // prints 0, 1, 2, ..., 9
    }, 1000);
}
```


# 4. Temporal Dead Zone

## var
```javascript
console.log(pizza); // undefined
var pizza = 'Deep Dish';
```

## let & const
```javascript
console.log(pizza); // ReferenceError
let pizza = 'Deep Dish';
```

# 5. Is var Dead? What should I use?
## Rules 1
1. Use `const` by default
2. only use `let` if rebinding is needed
3. `var` shouldn't be used in ES6

## Rules 2
1. use `var` for top-level variables that are shared across many scopes
2. use `let` for localized variables in smaller scopes
3. Refactor `let` to `const` only after some code has been written and you are sure that there won't be variable reassignment

