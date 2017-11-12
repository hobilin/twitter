//para agrandar el textarea con enters
var textarea = document.getElementById("comment");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};


//para que al precionar el botón se agregue un comentario
var button = document.getElementById("button");

button.addEventListener('click', function(){

  var comments = document.getElementById('comment').value;
  document.getElementById('comment').value = '';
/*
//para deshabilitar el botón cuando el campo de textarea este vacío
      if (messages.length == 0 || messages == null) {
        document.getElementById("btn").disabled = true;
        return false;
    } else {
        document.getElementById("btn").disabled = false;
    }*/


    var containerText = document.getElementById('newText');
    var paragraph = document.createElement('p');
    var paragraphText = document.createTextNode(comments);


    paragraph.appendChild(paragraphText);
    containerText.appendChild(paragraph);


    var charLeftLabel = "char-left";
    var charLeft = document.getElementsByClassName(charLeftLabel)[0];
    charLeft.innerHTML = "140";
    charLeft.className = "char-left";


});

//para hacer un contador que retroceda y cambie de color
(function(){
  var msg = document.getElementsByClassName("comment")[0];
  var charLeftLabel = "char-left";
  var charLeft = document.getElementsByClassName(charLeftLabel)[0];
  var maxChar = 140;
  var redWarn = 20;
  var blueWarn = 30;
  var redNegative = 1;
      // show characters left at start
      charLeft.innerHTML = maxChar;

     // update while typing
      msg.onkeydown = function(){
        setTimeout(function(){
          charLeft.innerHTML = maxChar - msg.value.length;

          // whether or not to display warning class based on characters left
          if (msg.value.length >= maxChar - redWarn) {
            charLeft.className = charLeftLabel + " redWarn";
          } else if (msg.value.length >= maxChar - blueWarn) {
            charLeft.className = charLeftLabel + " blueWarn";
          }else if (msg.value.length > maxChar - redNegative){
            charLeft.className = charLeftLabel + " redNegative";
          }else {
            charLeft.className = charLeftLabel;
          }
      }, 1);
    };
})();
