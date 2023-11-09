const DOMselectors = {
  form: document.querySelector("#form"),
  firstname: document.querySelector(".firstName"),
  lastname: document.querySelector(".lastName"),
  image: document.querySelector(".image"),
};
function createobject() {
  const card = {
    firstname: DOMselectors.firstname.value,
    image: DOMselectors.image.value,
    lastname: DOMselectors.lastname.value,
  };
  const newCard = createCard(card);
  const container = document.querySelector(".container");
  container.appendChild(newCard);
  clearFields();
}
function createCard(card) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  const firstname = document.createElement("h2");
  firstname.innerText = card.firstname;
  firstname.classList.add("displayartist");
  const lastname = document.createElement("h3");
  lastname.classList.add("displayalbum");
  lastname.innerText = card.lastname;
  const image = document.createElement("img");
  image.src = card.image;
  image.classList.add("display-image");
  const button = document.createElement("button");
  button.classList.add("button");
  button.addEventListener("click", deleteParent);
  button.innerText = "delete";
  newCard.appendChild(firstname);
  newCard.appendChild(image);
  newCard.appendChild(lastname);
  newCard.appendChild(button);
  return newCard;
}
function clearFields() {
  DOMselectors.firstname.value = "";
  DOMselectors.image.value = "";
  DOMselectors.lastname.value = "";
}
function deleteParent(event) {
  event.target.parentElement.remove();
}
// document.querySelector(".submitbutton").addEventListener("click", function(event){
//     createobject()
// })
//no "onclick"
//const Album= makeAlbum()
//addCard(Album)
//clearFields()
//addRemoveButton

/*function.removebutton(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn)=>
    btn.addEventListener("click", function(event)){
        console.log(event.target.parentElement.parentElement);
    })
    );
} 
removebutton();*/
