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
var reset = {
  resetClick: function () {
    var reset = $('.reset');
    var p1Wins = $('.p1');
    var p2Wins = $('.p2');
    var cells = $('.cell');
    reset.on('click', function (e) {
      p1Wins.text('Player 1 Wins: 0');
      p2Wins.text('Player 2 Wins: 0');
      cells.text('');
    });
  },

};

game.boardClick();
reset.resetClick();
