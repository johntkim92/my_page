var game = {
  boardClick: function () {
    var clicks = 0;
    var cell = $('.cell');
    cell.click(function () {
      if (clicks === 0 || clicks%2 === 0) {
      $(this).text('X');
      clicks += 1;
    } else {
      $(this).text('O');
      clicks += 1;
    };
    });

  },

};

var player1 = {
  moves: 0,
  wins: 0,
};

var play2 = {
  moves: 0,
  wins: 0,

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
