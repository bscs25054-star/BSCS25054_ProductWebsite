 window.onload = function welcome() {
  let page = window.location.pathname;
  if (page.includes("bscs25054_homepage.html")){
    alert("Welcome, Creativity thrives here!")
  }
 };
 
let year = new Date().getFullYear();
console.log(year);

function stockid(id) {
    if(id == "in Stock")
        {
        alert("item is in stock");
    }
        else {
        alert("Item is out of Stock"); 
    }
}

function validateForm() 
{
   let name = document.forms["myForm"]["fname"].value;
   let email= document.forms["myForm"]["fname"].value;
  if (name == ""){ 
    alert("Name must be filled out");
    return false;}
  if (email == ""){
    alert("email must be filled out");
    return false;
  }
}
function sendMessage() {
let input = document.getElementById("user-input").value.toLowerCase();
let chatLog = document.getElementById("chat-log")
let userMsg = document.createElement("p");
userMsg.textContent = "You: " + input;
chatLog.appendChild(userMsg);
}
function getBotResponse(input) {
  input = input.toLowerCase()
if ((input == "hello") || (input == "hi")) {
     return "Hello and Welcome to Painterella. Your one stop shop for all your creative needs"
}
 else if(input == "where are your products"){
      return "Click the Next button on the bottom right to browse our products"
} 
else if(input == "Customer Support"){
   return "What seems to be the issue"
}
function UserMessage(){
  let chatContent = document.getElementById("form-container textarea:focus");
}
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
