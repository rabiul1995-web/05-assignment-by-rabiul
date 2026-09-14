Project Name : Dev Stack

Project Description :
Dev Stack is a modern and responsive web application where users can explore different web development technologies and create their own personal technology stack. Users can view technology details, add technologies to their stack, remove individual technologies and remove all technologies from the stack.

Used Technologies :
1. React
2. Vite
3. Tailwind CSS
4. DaisyUI
5. React Toastify
6. JavaScript
7. JSON

Three Features :
1. Explore Technologies-
Users can explore different web development technologies with their category, difficulty, rating, and description.

2. Build Your Stack-
Users can add technologies to their personal stack and see the total number of selected technologies.

3.Interactive Stack Management-
Users can remove individual technologies or remove all technologies. Toast notifications are shown for different actions.


--React Questions & Answers--
1. What is JSX, and why is it used in React?
ANSWER: JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make UI code easier to read and write.

2. What is the difference between props and state?
ANSWER:
Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
ANSWER:
useState lets us create and manage changing data in a React component.

I used useState in the Technology Section to manage the technologies, loading state, and user's selected stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
ANSWER:
useEffect runs code after a component renders.

I used it to fetch the technology data from technologies.json when the Technology Section loads.

5. Why does every item in a .map() list need a unique key prop?
ANSWER:
React uses the key to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.


6. What is conditional rendering? Show one place you used it.
ANSWER:
Conditional rendering means showing different UI depending on a condition.

I used it to show an empty message when the user's stack has no technologies:

{stack.length === 0 && (
  <p>Your stack is empty. Add some technologies to get started.</p>
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
ANSWER:
A parent sends data to a child using props.
A child can send information back by calling a function passed from the parent as a prop.