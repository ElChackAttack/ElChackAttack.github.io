// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modalContent");
// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("relevantWorkExperience");
var btn2 = document.getElementById("leadershipExperience");
var btn3 = document.getElementById("education");
var btn4 = document.getElementById("softwareProficiencies");
var btn5 = document.getElementById("languages");
var btn6 = document.getElementById("skills");
var btn7 = document.getElementById("interestsAndHobbies");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
btn1.onclick = function() {
    console.log(modalContent.innerHTML);
    modalContent.innerHTML = document.getElementById("relevantWorkExperience").innerHTML;
    modal.style.display = "block";
}
btn2.onclick = function() {
    console.log(modalContent.innerHTML);
    modalContent.innerHTML = document.getElementById("leadershipExperience").innerHTML;
    modal.style.display = "block";
}
btn3.onclick = function() {
    console.log(modalContent.innerHTML);
    modalContent.innerHTML = document.getElementById("education").innerHTML;
    modal.style.display = "block";
}
btn4.onclick = function() {
    console.log(modalContent.innerHTML);
    modalContent.innerHTML = document.getElementById("softwareProficiencies").innerHTML;
    modal.style.display = "block";
}
btn5.onclick = function() {
    console.log(modalContent.innerHTML);
    modalContent.innerHTML = document.getElementById("languages").innerHTML;
    modal.style.display = "block";
}

btn6.onclick = function() {
    console.log(modalContent.innerHTML);
    modalContent.innerHTML = document.getElementById("skills").innerHTML;
    modal.style.display = "block";
}
btn7.onclick = function() {
    console.log(modalContent.innerHTML);
    modalContent.innerHTML = document.getElementById("interestsAndHobbies").innerHTML;
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
