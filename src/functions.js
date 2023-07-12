const input = document.querySelector("input");
const sendbtn = document.querySelector(".sendbtn");
const deletebtn = document.querySelector(".deletebtn");
const ul = document.querySelector("ul");

const showtext = () => {
  // get data form local Stroage
  let todolist = [];
  if (localStorage.getItem("lskey")) {
    todolist = JSON.parse(localStorage.getItem("lskey"));
  }

  let content = "";
  todolist.forEach((item, index) => {
    content += `<li>
                <p><i class="fa-solid fa-check"></i> ${item}
                </p>
                <button onclick="deleteTodo('${item}')" class="deletebtn" ">
                   <i class=" fa-solid fa-trash-can "></i>
                </button>
            </li>`;
  });
  ul.innerHTML = content;
};

//  send the data form the input by click
sendbtn.onclick = () => {
  let inputValue = input.value;

  // get data form local Stroage
  let todolist = [];
  if (localStorage.getItem("lskey")) {
    todolist = JSON.parse(localStorage.getItem("lskey"));
  }

  if (inputValue) {
    todolist.push(inputValue);

    input.value = "";
  } else {
    alert("Enter your data");
  }
  localStorage.setItem("lskey", JSON.stringify(todolist));
  showtext();
};

showtext();
// get data form local Stroage
let todolist = [];
if (localStorage.getItem("lskey")) {
  todolist = JSON.parse(localStorage.getItem("lskey"));
}

function deleteTodo(item) {
  const updateTodo = todolist.filter(data => data != item);
  // set data form localStorage
  localStorage.setItem("lskey", JSON.stringify(updateTodo));
  showtext();
}
