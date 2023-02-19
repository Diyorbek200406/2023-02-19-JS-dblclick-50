/*           Lesson-49 Js Event Click       */

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("Item Clicked");
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = "line-through";
    e.target.style.opacity = "0.5";
    console.log("Chiziq Chizildi Va Opasity = 0.5 ga ");
  });
});

items.forEach((item) => {
  item.addEventListener("dblclick", (e) => {
    console.log("o'chirib tashlandi ");
    e.target.remove();
  });
});

/*-------------- 50-lesson -------------- */

const ul = document.querySelector("ul");
// ul.remove();
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("You Are Clicked Me !");
  // ul.innerHTML += "<li>Something New Text </li>";
  // js da element yaratish
  const li = document.createElement("li");
  li.textContent = "Something New Text";
  ul.prepend(li);
});
