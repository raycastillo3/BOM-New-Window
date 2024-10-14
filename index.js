import "./styles.css";

// Get information about the user's screen.
// We'll use this information below to create
// a new window that is 75% of the user's screen,
// and place it centered on their screen.
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;
let left = (window.innerWidth - availW) / 2;
let top = (window.innerHeight - availH) / 2;

let myWindow;

function newWindow() {
  myWindow = window.open(
    "https://perscholas.org/",
    "perscholas",
    `width=${availW * 0.75}, height=${availH * 0.75}, left=${left}
    }, top=${top}, resizable=yes, scrollbars=yes, location=yes`
  );
  myWindow.focus();
}

function closeWindow() {
  myWindow.close();
}

// A sneak peek at event handling!
// This will be covered in depth during a future lesson.
document.getElementById("openWindowBtn").addEventListener("click", newWindow);
document
  .getElementById("closeWindowBtn")
  .addEventListener("click", closeWindow);
