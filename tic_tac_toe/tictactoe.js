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

var highlightWinner = function () {
  if (($('#0').text() === 'X' && $('#1').text() === 'X' && $('#2').text() === 'X') || (($('#0').text() === 'O' && $('#1').text() === 'O' && $('#2').text() === 'O')))           {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#0').children().addClass('highlight animated infinite zoomIn');
        $('#1').children().addClass('highlight animated infinite zoomIn');
        $('#2').children().addClass('highlight animated infinite zoomIn');
      }, 100);

    // $('#0').children().addClass('highlight animated pulse');
    // $('#1').children().addClass('highlight animated pulse');
    // $('#2').children().addClass('highlight animated pulse');
  } else if (($('#3').text() === 'X' && $('#4').text() === 'X' && $('#5').text() === 'X') || (($('#3').text() === 'O' && $('#4').text() === 'O' && $('#5').text() === 'O')))
  {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#3').children().addClass('highlight animated infinite zoomIn');
        $('#4').children().addClass('highlight animated infinite zoomIn');
        $('#5').children().addClass('highlight animated infinite zoomIn');
      }, 100);
    // $('#3').children().addClass('highlight pulse');
    // $('#4').children().addClass('highlight pulse');
    // $('#5').children().addClass('highlight pulse');
  } else if (($('#6').text() === 'X' && $('#7').text() === 'X' && $('#8').text() === 'X') || (($('#6').text() === 'O' && $('#7').text() === 'O' && $('#8').text() === 'O')))
  {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#6').children().addClass('highlight animated infinite zoomIn');
        $('#7').children().addClass('highlight animated infinite zoomIn');
        $('#8').children().addClass('highlight animated infinite zoomIn');
      }, 100);
    // $('#6').children().addClass('highlight pulse');
    // $('#7').children().addClass('highlight pulse');
    // $('#8').children().addClass('highlight pulse');
  } else if (($('#0').text() === 'X' && $('#3').text() === 'X' && $('#6').text() === 'X') || (($('#0').text() === 'O' && $('#3').text() === 'O' && $('#6').text() === 'O')))
  {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#0').children().addClass('highlight animated infinite zoomIn');
        $('#3').children().addClass('highlight animated infinite zoomIn');
        $('#6').children().addClass('highlight animated infinite zoomIn');
      }, 100);
    // $('#0').children().addClass('highlight pulse');
    // $('#3').children().addClass('highlight pulse');
    // $('#6').children().addClass('highlight pulse');
  } else if (($('#1').text() === 'X' && $('#4').text() === 'X' && $('#7').text() === 'X') || (($('#1').text() === 'O' && $('#4').text() === 'O' && $('#7').text() === 'O')))
  {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#1').children().addClass('highlight animated infinite zoomIn');
        $('#4').children().addClass('highlight animated infinite zoomIn');
        $('#7').children().addClass('highlight animated infinite zoomIn');
      }, 100);
    // $('#1').children().addClass('highlight pulse');
    // $('#4').children().addClass('highlight pulse');
    // $('#7').children().addClass('highlight pulse');
  } else if (($('#2').text() === 'X' && $('#5').text() === 'X' && $('#8').text() === 'X') || (($('#2').text() === 'O' && $('#5').text() === 'O' && $('#8').text() === 'O')))
  {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#2').children().addClass('highlight animated infinite zoomIn');
        $('#5').children().addClass('highlight animated infinite zoomIn');
        $('#8').children().addClass('highlight animated infinite zoomIn');
      }, 100);
    // $('#2').children().addClass('highlight pulse');
    // $('#5').children().addClass('highlight pulse');
    // $('#8').children().addClass('highlight pulse');
  } else if (($('#0').text() === 'X' && $('#4').text() === 'X' && $('#8').text() === 'X') || (($('#0').text() === 'O' && $('#4').text() === 'O' && $('#8').text() === 'O')))
  {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#0').children().addClass('highlight animated infinite zoomIn');
        $('#4').children().addClass('highlight animated infinite zoomIn');
        $('#8').children().addClass('highlight animated infinite zoomIn');
      }, 100);
    // $('#0').children().addClass('highlight pulse');
    // $('#4').children().addClass('highlight pulse');
    // $('#8').children().addClass('highlight pulse');
  } else if (($('#2').text() === 'X' && $('#4').text() === 'X' && $('#6').text() === 'X') || (($('#2').text() === 'O' && $('#4').text() === 'O' && $('#6').text() === 'O')))
  {
    $('td').children().toggleClass('animated zoomIn');
    setTimeout(function(){
        $('#2').children().addClass('highlight animated infinite zoomIn');
        $('#4').children().addClass('highlight animated infinite zoomIn');
        $('#6').children().addClass('highlight animated infinite zoomIn');
      }, 100);
    // $('#2').children().addClass('highlight pulse');
    // $('#4').children().addClass('highlight pulse');
    // $('#6').children().addClass('highlight pulse');
  }
};

var a,
    b,
    c;
var clicks = 0;



var game = {


  boardClick: function () {

    var cell = $('.cell');
    cell.click(function (event) {
      var target = $(event.target);
      target.children().addClass("animated zoomIn");
      // target.addClass("animated zoomIn");

      if (clicks === 0 || clicks%2 === 0) {
        target.children().text('X');
        // target.text('X');

        clicks += 1;
        $('.current-player').text('Current Player: O');
        $('.instructions').text(' ');
        if (target.is('#0')) {
          board[0] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#1')) {
          board[1] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#2')) {
          board[2] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#3')) {
          board[3] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#4')) {
          board[4] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#5')) {
          board[5] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#6')) {
          board[6] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#7')) {
          board[7] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#8')) {
          board[8] = 'X';
          if (getWinner(board) === 'X') {
            $('.instructions').text('Player X Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        };
      } else {
        // target.text('O');
        target.children().text('O');

        clicks += 1;
        $('.current-player').text('Current Player: X');
        $('.instructions').text(' ');
        if (target.is('#0')) {
          board[0] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#1')) {
          board[1] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#2')) {
          board[2] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#3')) {
          board[3] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#4')) {
          board[4] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#5')) {
          board[5] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#6')) {
          board[6] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#7')) {
          board[7] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        } else if (target.is('#8')) {
          board[8] = 'O';
          if (getWinner(board) === 'O') {
            $('.instructions').text('Player O Wins!');
            cell.off('click');
            $('.current-player').text(' ');
          } else if (clicks === 9 && getWinner(board) !== 'X' && getWinner(board) !== 'O') {
            $('.instructions').text("It's a Tie!");
            cell.off('click');
            $('.current-player').text(' ');
          }
        };
      };
      target.off('click');
      highlightWinner();
    });
  }
};

var getWinner = function(board) {
  for (var i=0; i < wins.length; i++) {
    // var a,
    //     b,
    //     c;
    a = board[(wins[i][0])];
    b = board[(wins[i][1])];
    c = board[(wins[i][2])];

    if (a == b && a == c && a != 0) {
      return a;
      return i;
    }
  }
  return false;
};

var reset = {
  resetClick: function () {
    var reset = $('.reset');
    reset.on('click', function (e) {
      window.location.reload();
    });
  },





};

game.boardClick();
reset.resetClick();
