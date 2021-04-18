# Problems

Problem
* When updating and then immediately accessing a state variable, the state has not updated yet. This happens because React queues updates, but doesn't update them immediately.

Attempted
* Tried deep cloning state variable before settings it.
* Tried using previousState callback inside setter.
* Tried using useEffect to call business logic after React updates state.

Solution
* I wanted access to variable immediately to continue executing business logic, so I decoupled the variable into 1 react variable for rendering the change to the DOM, and a new js variable for running the business logic and holding the state. With the js variable I could access the state immediately, then React could update the DOM whenever it was ready (the most optimized time).

---

Problem
* When testing on mobile emultor in chrome, sizing and position was responsive and perfect. However when testing on mobile hitting localhost:3000 on my phone, I noticed some extra scrollable space that messed up the initial view, and cut off the game buttons, and forcing the plaer to scroll.

Attempted.
* Commented all HTML and CSS that React would allow me to without throwing errors (removing #root element). However the scroll was still there, and I couldn't tell using the dev tools what was causing it.