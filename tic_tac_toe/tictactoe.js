var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var playerX = 'X',
    PlayerO = 'O',
    cellEmpty = '',
    currentPlayer = playerX,
    moves = 0;

var game = {


  boardClick: function () {
    var clicks = 0;
    var cell = $('.cell');
    cell.click(function (event) {
      var target = $(event.target);
      if (clicks === 0 || clicks%2 === 0) {
        target.text('X');
        clicks += 1;
        if ($(this) == $('#0')) {
          console.log('hi');
        };
      } else {
      target.text('O');
      clicks += 1;
    };

    });
  },

  displayInstructions: function (instructions) {
    $('.instructions').html(instructions);
  },

  switchPlayer: function () {
    currentPlayer = (currentPlayer === X) ? O : X;
    displayInstructions('Current Move: ' + currentPlayer);
  },

  doubleClick: function (index) {
    if (board[index] === cellEmpty) {
      return true;
    } else {
      displayInstructions('That cell is already filled');
      return false;
    };
  },


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
      board = [];
    });
  },














};

game.boardClick();
reset.resetClick();
