const form = document.querySelector("#add-form");
const itemList = document.querySelector("#item-list");
const filter = document.querySelector("#filter");

// form submit event
form.addEventListener("submit", addItems);

// delete item event
itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);

// delete item func
function removeItem(e) {
  console.log(e.type);
  if (e.target.classList.contains("del-btn")) {
    if (confirm("yes or no")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// add item func
function addItems(e) {
  e.preventDefault();

  //   get item
  const item = document.querySelector("#text-input").value;

  //   create new li element
  const li = document.createElement("li");

  //   add item to li
  li.appendChild(document.createTextNode(item));

  //   create and set content for button element for li
  const delButton = document.createElement("button");
  delButton.textContent = "X";
  delButton.classList = "del-btn";

  //   add delButton to li
  li.appendChild(delButton);

  //   set attribute(s) for li
  li.setAttribute("class", "no-top");

  // insert new li into html
  itemList.appendChild(li);
}

function filterItems(e) {
  e.preventDefault();
  const text = e.target.value.toLowerCase();

  const items = itemList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;

    // check for match
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
