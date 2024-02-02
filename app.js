const $form = document.getElementById("task-form");
const $taskContainer = document.getElementById("tasks-container");
const $taskWarning = document.getElementById("task-warning");
const $template = document.getElementById("task-template");
const $fragment = document.createDocumentFragment();
const tasks = {};

/** Functions **/
const setTask = (e) => {
  const $input = e.target.querySelector("input");
  if ($input.value !== "") {
    /* Creating new task */
    const newTask = {
      id: Date.now(),
      text: $input.value,
      state: false,
    };
    /* Adding new task */
    tasks[newTask.id] = newTask;
    renderTasks();

    $form.reset();
    $input.focus();
  } else {
    console.log("Input Vacío!");
    return;
  }
};
const renderTasks = () => {
  // console.log(tasks);
  const $clone = $template.content.cloneNode(true);

  for (const id in tasks) {
    // console.log(tasks[id].text);
    $clone.querySelector("p").textContent = tasks[id].text;
    $fragment.appendChild($clone);
    $taskContainer.appendChild($fragment);
  }

  // $taskContainer.appendChild($fragm  ent);
  // tasks.forEach((task) => {
  // $clone.querySelector("p").textContent = task[text];
  // $fragment.appendChild($clone);
  // $taskContainer.appendChild($fragment);
  // });
  // $input.value = "";
  // console.log($taskWarning);
};

document.addEventListener("DOMContentLoaded", renderTasks);

document.addEventListener("submit", (e) => {
  e.preventDefault();

  // if ($input.value !== "") {
  //   // console.log($input.value);
  //   // $taskWarning.classList.add("ocultar");
  //   const $input = e.target.querySelector("input");
  //   const $clone = $template.content.cloneNode(true);

  //   $clone.querySelector("p").textContent = $input.value;
  //   $fragment.appendChild($clone);
  //   $taskContainer.appendChild($fragment);
  //   $input.value = "";
  //   console.log($taskWarning);
  // }
  setTask(e);
});
