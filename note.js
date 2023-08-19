const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



CreateBtn.addEventListener("click", () => {
     let inputB0X = document.createElement("p")
     let img = document.createElement("img")
     inputB0X.className = "inpute-box";
     inputB0X.setAttribute("contenteditable" , "true");
     img.src = "img/delete.png";
     inputB0X.classList.toggle("active")
     notesContainer.appendChild(inputB0X).appendChild(img);

})

// // notesContainer.addEventListener("click", function(e){
// //     if(e.target.tagName === "IMG")
//      e.target.parentElement.remove( )
// // })