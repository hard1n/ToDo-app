const $template = document.getElementById("task-template");

document.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target);
});
