//displays msg list
function displayReplys() {
  let chatDisplay = document.getElementById("noDisp");
  chatDisplay.classList.remove("noChatDisplay");
  // chatDisplay.classList.toggle("noChatDisplay");
  chatDisplay.classList.add("chatDisplay");
}
//removes msg list
function hideReplys() {
  console.log("call me");
  let noDisplay = document.getElementById("noDisp");
  noDisplay.classList.remove("chatDisplay");
  // noDisplay.classList.toggle("noChatDisplay");
  noDisplay.classList.add("noChatDisplay");
}
function dispHi() {
  console.log("i am called");
  let sound = new Audio("../Audios/hi.mp3");

  sound.play();
  //for user msg display
  let parentDiv = document.getElementById("msg-list");
  let currDiv = document.createElement("div");
  currDiv.textContent = "Hi";
  currDiv.classList.add("userMsg");
  parentDiv.appendChild(currDiv);
  //for reply msg display
  let replyDiv = document.createElement("div");
  replyDiv.textContent = "Hey, how are you?";
  replyDiv.classList.add("replyUserMsg");
  parentDiv.appendChild(replyDiv);
  var audio = new Audio("./Audios/hey");
  audio.play();
  parentDiv.scrollTo(0, 500);
}
function dispLike() {
  let sound = new Audio("../Audios/blush.mp3");
  sound.play();
  let parentDiv = document.getElementById("msg-list");
  let currDiv = document.createElement("div");
  currDiv.textContent = "I like You!";
  currDiv.classList.add("userMsg");
  parentDiv.appendChild(currDiv);
  let replyDiv = document.createElement("div");
  replyDiv.textContent = "😊😂";
  replyDiv.classList.add("replyUserMsg");
  parentDiv.appendChild(replyDiv);
  parentDiv.scrollTo(0, 500);
}
function dispHate() {
  let sound = new Audio("../Audios/cry.mp3");
  sound.play();
  let parentDiv = document.getElementById("msg-list");
  let currDiv = document.createElement("div");
  currDiv.textContent = "I hate you!";
  currDiv.classList.add("userMsg");
  parentDiv.appendChild(currDiv);
  let replyDiv = document.createElement("div");
  replyDiv.textContent = "😭🥹";
  replyDiv.classList.add("replyUserMsg");
  parentDiv.appendChild(replyDiv);
  parentDiv.scrollTo(0, 500);
}
function delUserMsg() {
  let divToDel = document.getElementById("msg-list");
  divToDel.innerHTML = "";
  count = 0;
}
