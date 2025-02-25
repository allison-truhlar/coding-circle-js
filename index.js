//  "Hello world!" with JS
// See README.md for more details

// 1. In the browser console
console.log("Hello world from the console!");

// 2. As a function in the browser console
function hello() {
  console.log("Hello world from a function in the console!");
}

// 3. As a function that manipulates the DOM from the browser console
function helloDOM() {
  document.body.innerHTML = "Hello world!";
}

// Or, for example, in a new Firefox tab
function helloDOMFirefox() {
  let elem = document.getElementsByClassName("wordmark");
  elem[0].innerHTML = "hello world";
  elem[0].style.background = "none";
}

// 4. Importing JS file in HTML
// <script src="index.js"></script>
// const helloElem = document.getElementById("hello");

// function onClick() {
//   // Example 1:
//   alert("Hello world!");

//   // Example 2:
//   // helloElem.innerHTML = "Hello world!";

//   // Example 3:
//   // const text = helloElem.innerHTML;
//   // if (text === "Coding Circle is awesome!") {
//   //   helloElem.innerHTML = "Hello world!";
//   // } else if (text === "Hello world!") {
//   //   helloElem.innerHTML = "Coding Circle is awesome!";
//   // }
// }

// helloElem.addEventListener("click", onClick);

// 5. Using Node.js in terminal
// node index.js
hello();

// 6. Brief mention of React
// npx create-react-router@latest my-react-router-app

// 7. Using the fetch API
// async function getData() {
//   const url = "https://dis.int.janelia.org/citation/10.1016/j.cell.2021.11.024";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// getData();
