var Dino = require('./../js/dino.js').dinoModule;

var displayLetter = function(name, recipient, letterContent) {
  $('.showLetter').html("<h3>Dear " + recipient + ",</h3>" + "<p>" + letterContent + "</p>" + "<h3>Sincerely, <br>" + name + "</h3>");
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
