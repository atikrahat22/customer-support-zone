# React Questions

এই ফাইলটিতে React-এর গুরুত্বপূর্ণ কিছু প্রশ্ন এবং তাদের উত্তর Markdown ফরম্যাটে দেওয়া হয়েছে।

---

## 1. JSX কি, এবং কেন ব্যবহার করা হয়?

**উত্তর:**
JSX (JavaScript XML) হল একটি syntax extension যা HTML-এর মতো দেখায়। React-এ UI তৈরি করার জন্য এটি ব্যবহার করা হয়।

**মূল বিষয়গুলো:**

* JSX ব্যবহার করে HTML এবং JavaScript একসাথে লেখা যায়।
* কোড পড়া ও লেখা সহজ হয়।
* ব্রাউজার সরাসরি JSX বুঝতে পারে না; React এটি JavaScript-এ রূপান্তর করে।

**উদাহরণ:**

```jsx
const element = <h1>Hello, world!</h1>;
```

---

## 2. State এবং Props-এর পার্থক্য

| Feature    | State                                     | Props                                         |
| ---------- | ----------------------------------------- | --------------------------------------------- |
| Definition | Component-এর internal data যা পরিবর্তনশীল | Parent থেকে child-এ পাঠানো read-only data     |
| Mutability | পরিবর্তনযোগ্য                             | পরিবর্তন অযোগ্য                               |
| Scope      | Component-এর মধ্যে সীমিত                  | Parent থেকে child-এ external                  |
| Usage      | Component-এর dynamic data manage করতে     | Child component configure করতে বা data পাঠাতে |

**উদাহরণ:**

```jsx
function Child({ name }) {  // props
  return <h1>Hello, {name}!</h1>;
}

function Parent() {
  const [count, setCount] = React.useState(0); // state
  return (
    <div>
      <Child name="Rahat" />
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}
```

---

## 3. useState Hook কি, এবং কিভাবে কাজ করে?

**উত্তর:**
`useState` হল React-এর built-in hook যা functional component-এ state যোগ করতে ব্যবহার হয়।

**কাজের ধরন:**

* `useState` একটি array return করে: `[currentState, setStateFunction]`
* state update করলে component পুনরায় render হয়।

**উদাহরণ:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 4. React-এ component-এর মধ্যে state কিভাবে share করা যায়?

**উত্তর:**
State share করার উপায়:

1. **Lifting state up:** State common parent-এ রাখুন এবং child-এ props দিয়ে পাঠান।
2. **Context API:** State global ভাবে share করতে পারে।
3. **State management library:** যেমন Redux, Zustand, Recoil বড় application-এর জন্য।

**উদাহরণ (Lifting State Up):**

```jsx
function Parent() {
  const [message, setMessage] = React.useState("Hello");

  return (
    <div>
      <Child message={message} />
      <button onClick={() => setMessage("Hi")}>Change Message</button>
    </div>
  );
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

---

## 5. React-এ Event Handling কিভাবে হয়?

**উত্তর:**

* React-এ event handler-এর নাম camelCase হয়, যেমন `onClick`, `onChange`।
* Handler-এ function পাঠানো হয়, string নয়।
* Event handler একটি synthetic event পায়, যা ব্রাউজারের পার্থক্য normalize করে।

**উদাহরণ:**

```jsx
function Button() {
  const handleClick = (e) => {
    console.log("Button clicked!", e);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```


