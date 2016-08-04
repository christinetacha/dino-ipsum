Dino = function(){
};

Dino.prototype.writeLetter = function(name, recipient, number, displayLetter) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + number).then(function(response) {
    console.log(response);
    displayLetter(name, recipient, response);
  }).fail(function(error) {
    $('.showLetter').text(error.response.message);
  });
};

exports.dinoModule = Dino;
