# If Kahoot is that good, why isn't there a Kahoot 2?
Introducing, Kahoot 2!
I will be creating my very own Kahoot-esque quiz.
Our coaches gave us a quiz database called the [open trivia database](https://opentdb.com/).
And with all the information they gave us, I created the following carefully crafted formula:
````
(API + React*(creativity)) / Intensification Of Kahoot Music = Successful Quiz App
````

So in general, the goal of this assignment is to learn how to work with React, and practice my API-knowledge again.
But my personal goal is to fully complete this assignment and add a custom made quiz of my own on a json file.
In the past I have had some problems fetching data from a json, so I'd like to use this assignment as a learning opportunity for that specifically.

This will require me to work on this in my free time as well, something I am more than willing to do to complete and understand this assignment.
All for the sake of having a working Quiz application, a fergalicious README, and two custom-made quizes about my two favourite topics, **Anime/Manga and MEMES**.

So this means the README will be split into two parts:
* My journey to understanding React through theory
  * What is React
    * Components
      * Functional Components
      * Class Components
    * ...
* Working on the assignment itself
  * My TODO-list
  * Some texts about what problems I encountered and how I solved them
  * ...

---

## React: Really Extravagant And Cruel Technology
I personally have not worked with React yet, but I did work with Angular in a prior assignment.
So I'm a little familiar with frameworks and libraries.
But all frameworks/libraries are different, with their own advantages and disadvantages.
So for starters, I will try to learn a bit more about how React works, learn a bit about Hooks, Functional Components, Components in general, and more!

### What's up with React?!
The very short and very sweet sentence given to me by the React documentation describes React as follows: "A javascript library for building user interfaces".
It's also very important to state that React is 'Declarative' and 'Component-Based'.

Design simple views **for each state**  in your application. <br>
React will efficiently update and render *juuuuust* the right components with your data changes. <br>
This will all help you to create interactive UIs.

I will also follow the React introduction given in the official React documentation: [here!](https://reactjs.org/tutorial/tutorial.html)
This is something I'd like to do, because I personally learn more by doing something instead of reading something.
Once I have seen myself just how a React application works, what steps were taken to make everything work and the like, will I really be able to know what steps need to be taken for this assignment.


## Components
I have used components in the past with Angular, but I still quite don't understand what components are.
This offends me on a spiritual level, since my fragile ego cannot accept that I still don't understand something I have already experienced.
So I will be spending quite some time researching what components are, how they should be used (in React) and why we should use them.

### What are Components?
I'd like to start my explanation by giving a special shout-out to [w3schools](https://www.w3schools.com/react/react_components.asp).
If nobody else got me, I know w3schools got me!

There it was explained that components are like functions, that return HTML elements.
Normally, I like to rewrite the text I read into my own words to understand it better.
But I really like the w3schools explanation, so I will be quoting it into my README without changing anything.

````
Components are independent and reusable bits of code.
They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components.
````

So I believe that Components should adhere to the Four Pillars of OOP.

### Class Components
A Component's name should **always** start with an upper case letter. <br>

When creating a **Class** Components, you must also include the <code>extends React.Component</code> statement.<br>
Through Inheritance (looking at you OOP) it gives the Component access React.Component's functions.<br>
The component requires a render() method, this is the method that returns the HTML.
More specifically, it returns JSX, which is synthetically similar to HTML.<br>
We can also place Components into Components, and separate the Components into files.<br>
Separating the Components into files is the recommended way to go.<br>
We then need to import this Component wherever it is needed. <br>

A Class Component is instantiated, and it has a different life-cycle.
It is being kept alive, running and invoked depending on the phase of the Class Component. <br>
They're known as Stateful Components, because they implement logic and state.
The React lifecycle **methods** can be used inside Class Components. <br>
Since they're classes, constructors are needed. <br>
Hooks can also be used inside Class Components, but they require a different syntax.

````
example: constructor(props) {
super(props);
this.state = {name: ‘ ‘}
}
````

### Function Components
Function Components are very similar to Class Components, they behave the same and return HTML.
But Functions can be written using much less code, and they are easier to understand.
They are way more common, and they are basically just Javascript functions.

Unlike the Class Components, Function Components do not have a render method. <br>
They run from **top to bottom** and once the function is returned, it cannot be kept alive. <br>
They're also known as **Stateless Components**, as they simply accept data and display them in some form.
That data is mainly responsible for rendering UI. <br>
React lifecycle methods cannot be used in Functional Components. <br>
They don't have constructors, since they aren't classes but functions. <br>
Hooks can be very easily used in Functional Components, as they make them Stateful.
````
example: const [name,SetName]= React.useState(‘ ‘)
````

### Why should we use Components
We use Components in React, to create an interface the user can easily interact with.
That's also probably why the library is called React, because it specializes in React-ing to the user.
Components make the code more predictable, readable, and easier to debug.
Also, ya' can't use React without Components!
I mean you can, you **definitely** can, but you *really, really* shouldn't!

So in short, class components are the classes we all know and love, but in React they're used to return HTML elements.
And function components are functions that return HTML.
We use them in order to build an interactive app in a very clean and fast way.

## Hooks - You're Still Not Experienced Enough Young Student :alien:
Hooks let us use state and other React features, without actually writing a class.
Just because of that one sentence I can already understand why they're mainly used in Function Components.

Reading through the documentation on Hooks, I decided that it is still a bit too complicated for me now.
I'll now start working on the assignment itself, and once I hit a wall somewhere where I need to use Hooks, I'll be able to understand and learn it a lot faster.

## Helper Functions
Because I've been reading about components for about +/-3 hours, I completely forgot normal functions were a thing.
If your Components ever need a function to do something, but not show anything in HTML, you can use a function.
And if that function is an integral part of your code and will be used/called repeatedly, it becomes a helper.

Helper functions should also be made in separate JS files, that will be imported to the necessary component and called there.

## Challenge Numero Uno: Writing HTML
If you'd ever tell me that I would ever have trouble with making HTML appear on my screen, I would call you a fool and a mad-man.
But alas, you may not have been as foolish or mad as one may have thought.

Because that is the very first goal I have set for me and the very first hurdle I encountered.
But after a lot of experimenting and some asking around, I was finally able to show a lil' Hello World!

## Tic-Tac-T-OH-My-God
![oh-my-god](images/jojo-oh-my-god.gif)

Because React was a bit more complicated than expected, I decided to do the Tic-Tac-Toe exercise that the official React documentation had given us.
[Here is the repository for that exercise.](https://github.com/besartelezi/react-tic-tac-toe)
The exercise helped me out **a lot**!
If you want to know morea bout my experience and thoughts on that exercise, just visit the repository that I linked above.

---

## TO-D(Okily-Dokily Neighbourino) List

- [x] Create a React project
  - <code>npx create-react-app kahoot-two-electric-boogaloo</code>
- [x] Do some of your own research, and write it down in the README
- [x] Read some more documentation: [Like this one!](https://reactjs.org/docs/getting-started.html)
- [x] Add helpers folder
- [x] Play around in React
  - [x] Look at the Coaches' README, read how React works according to it.
  - [x] Make some HTML appear!
  - [x] Create multiple function components
  - [x] Make all the HTML of those functional components appear at the same time
- Some layout components worth noting = (Header, Navigation, Footer, GameWindow, ...)
