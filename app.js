const $taskContainer = document.getElementById("tasks-container");
const $taskWarning = document.getElementById("task-warning");
const $template = document.getElementById("task-template");
const $fragment = document.createDocumentFragment();

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const $input = e.target.querySelector("input");
  const $clone = $template.content.cloneNode(true);

  if ($input.value !== "") {
    // console.log($input.value);
    // $taskWarning.classList.add("ocultar");
    console.log($taskWarning);
    $clone.querySelector("p").textContent = $input.value;
    $fragment.appendChild($clone);
    $taskContainer.appendChild($fragment);
    $input.value = "";
  }
});
