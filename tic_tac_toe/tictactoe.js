var game = {
  boardClick: function () {
    var board = $('.full-block');
    board.on('click', function (e) {
      e.html('X');
      e.append();
    })
  }
};

var player1 = {

};

var play2 = {

};

game.boardClick();
