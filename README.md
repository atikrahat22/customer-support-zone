

## 1. JSX কি, এবং কেন ব্যবহার করা হয়?

# React Concepts – README

## 1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write UI elements in a more readable and declarative way within React components.  

**Why it is used**:  
- Makes code more readable and easier to understand.  
- Allows embedding JavaScript expressions inside HTML-like syntax.  
- React transforms JSX into JavaScript objects that browsers can understand.  

**Example:**
```jsx
const element = <h1>Hello, World!</h1>;



2. What is the difference between State and Props?

State:

A built-in object in React that stores data specific to a component.

State can change over time (mutable).

Managed within the component itself using hooks like useState.

Props:

Short for "properties".

Used to pass data from a parent component to a child component.

Props are read-only (immutable).

Example:
// Using props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


3. What is the useState hook, and how does it work?

useState is a React hook that allows functional components to use state.

It returns an array with two values:

The current state value.

A function to update the state.

Example:
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}


4. How can you share state between components in React?

To share state between components:

Lift state up: Move the state to the nearest common parent component and pass it down as props.

Context API: Use React’s Context to share state across multiple levels of components without prop drilling.

Example (lifting state up):
function Parent() {
  const [data, setData] = useState("Hello");

  return (
    <div>
      <Child data={data} />
    </div>
  );
}

function Child({ data }) {
  return <h1>{data}</h1>;
}

5. How is event handling done in React?

Events in React are handled using camelCase syntax (e.g., onClick, onChange).

Instead of strings, functions are passed as event handlers.

Example:
function Button() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}


