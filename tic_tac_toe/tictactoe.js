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
        if (target.is('#0')) {
          board[0] = 'X';
        } else if (target.is('#1')) {
          board[1] = 'X';
        } else if (target.is('#2')) {
          board[2] = 'X';
        } else if (target.is('#3')) {
          board[3] = 'X';
        } else if (target.is('#4')) {
          board[4] = 'X';
        } else if (target.is('#5')) {
          board[5] = 'X';
        } else if (target.is('#6')) {
          board[6] = 'X';
        } else if (target.is('#7')) {
          board[7] = 'X';
        } else if (target.is('#8')) {
          board[8] = 'X';
        };
      } else {
      target.text('O');
      clicks += 1;
      if (target.is('#0')) {
        board[0] = 'O';
      } else if (target.is('#1')) {
        board[1] = 'O';
      } else if (target.is('#2')) {
        board[2] = 'O';
      } else if (target.is('#3')) {
        board[3] = 'O';
      } else if (target.is('#4')) {
        board[4] = 'O';
      } else if (target.is('#5')) {
        board[5] = 'O';
      } else if (target.is('#6')) {
        board[6] = 'O';
      } else if (target.is('#7')) {
        board[7] = 'O';
      } else if (target.is('#8')) {
        board[8] = 'O';
      };
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
