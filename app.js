let r = document.querySelector(".adddata")
let storage = JSON.parse(localStorage.getItem('todos')) || [];
window.onload = onReload;
function onReload() {
    r.innerHTML = "";
    storage.forEach(data => {
        let div = document.createElement("div")
        div.classList.add('highlight');
div.innerHTML =`${data.text} <button class="edited">Edit</button><button class="delete">Delete</button>`
r.appendChild(div)
});
    console.log("Page reloaded!");
}
function add(){
    let a = document.querySelector("#text").value
    if(a !== ""){
    r.innerHTML = "";
    const object = { text: a };
    storage.push(object);
    localStorage.setItem('todos', JSON.stringify(storage));
    storage.forEach(data => {
        let div = document.createElement("div")
        div.classList.add('highlight');
        div.innerHTML =`${data.text} <button class="edited">Edit</button><button class="delete">Delete</button>`
        r.appendChild(div)
console.log(a);
    });
}
}
r.addEventListener("click",function(e){
//    console.log(e.target)
if(e.target.classList.contains("delete")){

    const li = e.target.parentElement;
    const index = Array.from(e.target.parentElement.parentElement.children).indexOf(li);
    console.log(index);
    console.log(li);
    storage.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(storage));
    console.log(e.target.parentElement.remove()); 
}
else if(e.target.classList.contains("edited")){
console.log("edited");
let replace = prompt("edit that you want")
const object = { text: replace };
const li = e.target.parentElement;
const index = Array.from(e.target.parentElement.parentElement.children).indexOf(li);
console.log(index);
console.log(li);
storage.splice(index, 1,object);
localStorage.setItem('todos', JSON.stringify(storage));
location.reload();
}
})





