Dino = function(){
};

Dino.prototype.writeLetter = function(name, recipient, number) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=' + number).then(function(response) {
    console.log(response);
      // displayLetter(name, recipient, response.main.humidity);
  }).fail(function(error) {
    $('.showLetter').text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;
