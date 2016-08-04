var Dino = require('./../js/dino.js').dinoModule;

var displayLetter = function(name, recipient, letterContent) {
  $('.showLetter').text("Dear" + recipient + letterContent + "Sincerely," + name);
};

$(document).ready(function() {
  console.log("hello");
  var dinoObject = new Dino();
  $('#dino-form').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    var recipient = $('#recipient').val();
    var number = $('#number').val();
    console.log(name);
    dinoObject.writeLetter(name, recipient, number, displayLetter);
  });
});
