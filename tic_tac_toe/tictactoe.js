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

var game = {
  X: 'X',
  O: 'O',
  Empty: '',

  currentPlayer: X,
  moves: 0,

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
      // $(this).one('click', function () {
      //   alert("That cell is already filled");
      // });
    });
  },

  displayInstructions: function (instructions) {
    $('.instructions').html(instructions);
  },

  switchPlayer: function () {
    currentPlayer = (currentPlayer === X) ? O : X;
    displayInstructions('Current Move: ' + currenPlayer);
  },

  doubleClick: function (index) {
    if (board[index] === Empty) {
      return true;
    } else {
      displayInstructions('That cell is already filled');
      return false;
    };
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
      board = [];
    });
  },














};

game.boardClick();
reset.resetClick();
