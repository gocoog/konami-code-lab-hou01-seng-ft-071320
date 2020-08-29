const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0

function init() {
  document.body.addEventListener("keydown", (e) => {
    // Now, how can we check for which specific key was pressed?
    let key = e.key
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Hurray")
      }
    } else {
      index = 0
    }
  })
}
