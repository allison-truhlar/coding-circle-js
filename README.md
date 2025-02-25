## Coding Circle: "Hello world!" with JS

These are notes/instructions to go along with `index.js`.

### 1. In the browser console

- JavaScript is the only* programming language that allows interactivity on webpages. (*[WebAssembly](https://web.dev/articles/what-is-webassembly) is working to change this).
- You can access JS in the browser console - no download needed. Right click and select "Inspect" to open the console.
- `console.log()` is a method on the [console object](https://developer.mozilla.org/en-US/docs/Web/API/console) that allows you to log/print to the console.

_Side note:_ [MDN web docs](https://developer.mozilla.org/en-US/docs/Web) are a good resource for JavaScript, CSS, HTML, Web APIs, and other web-related documentation.

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
- Where you put the `<script>` tag is important - the browser will read down the HTML file and execute the script when it reaches the tag.
  - You can use the [Window:load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) to wait until the whole page is loaded to execute the script.
- The example in `index.js` also demonstrates:
  1. How to add [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to your document. This sets up a function that will be called whenever the specified event occurs on the target. [Read more about events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events).
  2. [`Window.alert()` method](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) - another way to say "hello world!"
  3. [if/else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) in JS
  4. [Triple equals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) in JS

### 5. Using Node.js in terminal

- JavaScript is sandboxed to the browser - this prevents the browser from gaining access to your computer.
- You can run JS on your machine or external servers using [Node.js](https://nodejs.org/en/download). This lets you use one language - JavaScript - to build both the frontend and backend of an app.
  - As a trivial example, you can use Node to execute a JS script file in your terminal - e.g., `node index.js` would run the script `index.js`.
- Node comes with a built-in package manager, `npm`, which allows you to access JavaScript packages.
- Alternative JS runtimes - [bun and deno](https://zerotomastery.io/blog/deno-vs-node-vs-bun-comparison-guide/). Select differences:
  - Deno natively understands TypeScript; it is secure by default - programs don't have access to the network and file system by default
  - Bun uses less memory than Node and so it is very fast

### 6. JS frameworks

- Most web apps are made using a JS framework, not "vanilla" JS (what we've looked at so far).
- React is a popular, open-source JS framework, backed by Facebook.
- React code typically uses JSX, JavaScript XML, to create HTML-like objects that compile to HTML elements and JS. But you can also write React in an HTML file, injecting React dependencies via a CDN (content delivery network) script (see `react.html`).
- To start up a React project, you can use any of several popular React frameworks, e.g. [React Router](https://reactrouter.com/home), [Next.JS](https://nextjs.org/docs), or [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview).

### 7. Fetch API

- The Fetch API is the primary modern JS request method. It is promise based - there is a promise you will receive a response back from the server (the promise will resolve to a Response object). If the request is successful, you can extract the body of the response through another promise-based method, like `response.json()` to extract JSON data.
- [Minimal example](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) of using the Fetch API.

### Other fun JS stuff

- [JS quirks](https://github.com/denysdovhan/wtfjs)
