## Coding Circle: "Hello world!" with JS

### 1. In the browser console

- JavaScript is the programming language that allows interactivity on webpages. You can access it directly from the browser console.
- Hit F11 or right click and select "Inspect" to open the console.
- `console.log()` is a method on the [console object](https://developer.mozilla.org/en-US/docs/Web/API/console) that allows you to log/print to the console.

_Side note:_ [MDN web docs](https://developer.mozilla.org/en-US/docs/Web) are a good resource for [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), CSS, HTML, Web APIs, and other web-related documentation.

### 2. As a function in the browser console

- You can define a function inside the console and then call it using the function name followed by open parantheses.

### 3. As a function that manipulates the DOM from the browser console

- DOM = Document Object Model. This is the current representation of your HTML document in the browser. You can view it in the browser console, in the `inspector` tab. It consists of nodes that can be manipulated by JS to change the document's structure, style, or content.
- You can access the HTML document and nodes using the [`Document` interface](https://developer.mozilla.org/en-US/docs/Web/API/Document). For example, the `document.body` property represents the `<body>` node of the current document.
- Inside the nodes are objects, or elements. For example, `document.body.innerHTML` represents the [innerHTML element](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) of the `<body>` node. You can either read or set the contents of this object.

#### Firefox new tab example

- The `Document` interface also has methods - for example, [getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) or [getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName). These make use of the `id` and `class` properties you can add to HTML elements, respectively, to grab the HTML elements in the document that match the value provided to the method. From there, you can manipulate the elements, for example, changing the `innerHTML` or [`style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) properties on the elements.

### 4. Importing JS file in HTML

- You typically do not run JS from the browser console - you import it to the HTML document using a `<script>` tag.
- This example also demonstrates:
  1. How to add [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to your document. This sets up a function that will be called whenever the specified event occurs on the target. [Read more about events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events).
  2. [`Window.alert()` method](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) - another way to say "hello world!"
  3. [if/else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) in JS
  4. [Triple equals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) in JS

### 5. Using Node.js in terminal

- JavaScript is sandboxed to the browser - this prevents the browser from gaining access to your computer.
- You can run JS on your machine using [Node.js](https://nodejs.org/en/download). Practically, this is a requirement for modern web development, which relies on a lot of third-party packages to build website and apps. Do use these packages, you need to install them with `npm` (comes installed with Node), and then run commands to compile the code you write to regular HTML, CSS, and JS that the browser can understand, etc.
- Running a JS script file in your terminal is then like running a Python script, e.g., `node index.js` would run the script `index.js`.

### 6. Brief mention of React

- React is a popular, open-source JavaScript framework, backed by Facebook.
- React code typically uses JSX, JavaScript XML, to create HTML-like objects that compile to HTML elements and JS.
- To start up a React project, I would typically use [Vite](https://vite.dev/guide/), a build tool that sets up a lot of the React boilerplate for you.
- React is for single-page applications - if you want routing, use [React Router](https://reactrouter.com/home).
- React Router used as a framework can build fullstack applications (React is frontend only).
- [Next.JS](https://nextjs.org/docs) is another popular framework for fullstack React applications.
