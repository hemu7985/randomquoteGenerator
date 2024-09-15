const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
    "You are the most important person in your life",
    "Only demonstrate your strength when it is required",
    "You are never too old to set another goal or to dream a new dream.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    

];

btn.addEventListener("click", () => {
    console.log("clicked");
    let random = Math.floor(Math.random() * quote.length);
    output.textContent = quote[random];
});
