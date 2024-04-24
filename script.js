var ul = document.getElementById("list-container")
var del = document.getElementById("delete")
var inputbox = document.getElementById("inputbox")

function additem(){

    var listitem = document.createElement("li")
    listitem.innerHTML = inputbox.value +"<button onclick='deleteitem(event)' id='delete' class='delete'>Delete</button><hr class='line'>"
    ul.append(listitem)
}

function deleteitem(event){
    event.target.parentElement.remove()
}