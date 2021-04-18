# Welcome To Card Matcher!

To play the game click [here](https://card-matching-game-christianb.herokuapp.com/)!

## Thought Process

I immediately knew the genereal lay out I wanted for the design and that I could leverage CSS grid to make this easy.

I knew I wanted to keep a single source of truth for the data structure and state management. So I started there, buy creating a function that could generate that data for me. I wanted to create pairs of objects, that I could see if they were in the same group, and if they were, they would be a match. So my "Card" object ultimately had an id, an index for referencing the deck, and a groupId, that would relate 2 objects together. This is what delegated the matching pairs.

As for the business logic, I just took it piece by piece, and then refactored out my code into smaller functions to make the code more understandable and readable as I went. Tthe main portion of the logic was in the clickHandler and that was driver of the application, and from there it was just manipulating my "deck", throwing in some animations and styling to make the game, make sense.

On the React side of things I decided to go with functional components even thought my experience in the past I mostly dealt with classes. But I see its pretty common now, to use the "useState" hook, which is also something I hadn't used. So those were great learning experiences.

If I implemented more features in the future it some ideas would be:
* Changing how I set the card images to a scalable solution. I couldn't get require() working.
* Introduce an api where I could fetch new images everytime the deck is shuffled.
* Add a timer, and make games timed, or turns timed.
* Clean up UI, make the page even cleanly reponsive.
* Make the game configurable to more cards. Its almost do able now, but the images is where I would have problems.


## Problems

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

---

Problem
* Tried using require() in a src img and dynamically set the src url, but the img was detected and then would not show up on load.

Attempted.
* I attempted using require()
* Tried relative and absolute path.

Solution
* After many stack overflows I hard coded the 10 images I picked out to a specific className then dynamically changed the classe, instead of dynamically changing the src url.

---