var lookup = {
    '1': 'purple',
    '-1': 'lime',
    'null': 'white'
  };
  
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  var board, turn, winner
  

  var squares = document.querySelectorAll('td div');
  var message = document.querySelector('h1');
  

  document.querySelector('table').addEventListener('click', handleMove);
  document.querySelector('button').addEventListener('click', initialize);
  
  function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
  }

  
  initialize();
  
  function handleMove(evt) {
    var idx = parseInt(evt.target.id.replace('sq', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
  }
  
  function getWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
   
    if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
    if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
  
  }}
  
  function render() {
    board.forEach(function(sq, idx) {
      squares[idx].style.background = lookup[sq];
    });
    if (winner === 'T') {
      message.innerHTML = 'Rats, another tie!';
    } else if (winner) {
      message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}!`;
    } else {
      message.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
    }
  }
  