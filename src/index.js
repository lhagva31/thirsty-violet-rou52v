import "./styles.css";

const onClickAdd = () => {
  // textbox
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// incomplete ees ustgah

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
// incomlete list d nemeh
const createIncompleteList = (text) => {
  // ehnii div
  const div = document.createElement("div");
  div.className = "list-roll";

  //  li tag
  const li = document.createElement("li");
  li.innerText = text;

  // button add d tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", () => {
    // incomplete ees ustgah
    deleteFromIncompleteList(completeButton.parentNode);
    // complate d nemeh
    const addTarget = completeButton.parentNode;

    // todo dotrohiig zaah
    const text = addTarget.firstElementChild.innerText;

    // div iin dor oorchloh

    addTarget.textContent = null;

    // li  tag oruullaa

    const li = document.createElement("li");
    li.innerText = text;

    // button oruulah
    const backButton = document.createElement("button");
    backButton.innerText = "back";
    backButton.addEventListener("click", () => {
      // back darhaar ustgah
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // text awah
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // div tag iin dood taliin nemeh
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // complete d nemeh
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button delete tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // div ees ustgah
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // div door ni bichih

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // incomplate d nemeh

  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
