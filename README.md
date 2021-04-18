# Welcome To Card Matcher!

## Play Online
Click [here](https://card-matching-game-christianb.herokuapp.com/) to play the game on Heroku!

Click [here](https://card-matcher-chistian-brooks.netlify.app/) to play the game on Netlify!

## How-To Run For a Developer

First clone the repository to your hard drive. (You may need to fork the repo first.)

```
git clone https://github.com/ChristianDBrooks/card-matching-game.git
```
Next you will want to navigate into the folder

```
cd card-matching-game
```

Next you can choose to one of two things:

1) Run the production code on a local web server.
2) Install dependencies and run the code using React.

First Option Using `Serve`
```
npm install -g serve
serve -s build
```

Second Option Using `React`
```
yarn install
npm start
```

## Thought Process

I immediately knew the genereal lay out I wanted for the design and that I could leverage CSS grid to make this easy.

I knew I wanted to keep a single source of truth for the data structure and state management. So I started there, buy creating a function that could generate that data for me. I wanted to create pairs of objects, that I could see if they were in the same group, and if they were, they would be a match. So my "Card" object ultimately had an id, an index for referencing the deck, and a groupId, that would relate 2 objects together. This is what delegated the matching pairs.

As for the business logic, I just took it piece by piece, and then refactored out my code into smaller functions to make the code more understandable and readable as I went. So essentially I created the logic with functional programming. The main portion of the logic was in the clickHandler and that was driver of the application, and from there it was just manipulating my "deck", throwing in some animations and styling to make the game, make sense, and few conditions here and there, for player turns, game over, etc.

On the React side of things I decided to go with functional components even thought my experience in the past I mostly dealt with classes. But I see its pretty common now, to use the "useState" hook, which is also something I hadn't used. So those were great learning experiences.

As for state management I tried keep the Game component the smartest component for state, and keep any other components as stateless as possible. So all the game logic could run at the top level, and be passed down as needed.

For styling strategies in React, I really wasn't sure what the standard is, I researched a couple different strategies, but it seemed like a lot of them involved bringing in other packages. So I just kept all of my styles in css files, tried not to use in-line styles where I could manage, and was careful to not overlap naming within components.

If I implemented more features in the future some ideas would be:
* Changing how I set the card images to a scalable solution. I couldn't get require() working.
* Introduce an api where I could fetch new images everytime the deck is shuffled
* Add a timer, and make games or turns timed
* Clean up UI, make the page even more responsive. Maybe change them/add to the theme.
* Make the game configurable with the capability to add more cards. Its almost do able now, but the images is where I would have problems.
* Unit testing
* Make player names customizable

## Issues

Problem #1
* When updating and then immediately accessing a state variable, the state has not updated yet. This happens because React queues updates, but doesn't update them immediately.

Attempted
* Tried deep cloning state variable before settings it.
* Tried using previousState callback inside setter.
* Tried using useEffect to call business logic after React updates state.

Solution
* I wanted access to variable immediately to continue executing business logic, so I decoupled the variable into 1 react variable for rendering the change to the DOM, and a new js variable for running the business logic and holding the state. With the js variable I could access the state immediately, then React could update the DOM whenever it was ready (the most optimized time).

---

Problem #2
* When testing on mobile emultor in chrome, sizing and position was responsive and perfect. However when testing on mobile hitting localhost:3000 on my phone, I noticed some extra scrollable space that messed up the initial view, and cut off the game buttons, and forcing the plaer to scroll.

Attempted.
* Commented all HTML and CSS that React would allow me to without throwing errors (removing #root element). However the scroll was still there, and I couldn't tell using the dev tools what was causing it.

---

Problem #3
* Tried using require() in a src img and dynamically set the src url, but the img was detected and then would not show up on load.

Attempted.
* I attempted using require()
* Tried relative and absolute path.

Solution
* After many stack overflows I hard coded the 10 images I picked out to a specific className then dynamically changed the classe, instead of dynamically changing the src url.

---
