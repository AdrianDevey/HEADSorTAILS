function heads(){
  let chances = Math.random();

  let toss = '';
 
  if (chances >= 0 && chances < 1/2){
    toss = 'Heads';
  }
  else{
    toss = 'Tails';
  }
  
  let result = '';

  if (toss === 'Heads'){
    result = 'You win.';
  }
  else{
    result = 'You lose.';
  }

  if (result === 'You win.'){
    score.wins++;
  }
  else{
    score.losses++;
  }

  tossResults(result, toss);
  scoreboard();

}

function tails(){
  let chances = Math.random();

  let toss = '';
 
  if (chances >= 0 && chances < 1/2){
    toss = 'Heads';
  }
  else{
    toss = 'Tails';
  }
  
  let result = '';

  if (toss === 'Tails'){
    result = 'You win.';
  }
  else{
    result = 'You lose.';
  }

  if (result === 'You win.'){
    score.wins++;
  }
  else{
    score.losses++;
  }

  tossResults(result, toss);
  scoreboard();

}

function tossResults(result, toss){
  //Result
  document.querySelector('.js-result').innerHTML = result;

  //Toss Result
   document.querySelector('.js-tossResult').innerHTML = `<pre>Result:
   
   <img src="img/${toss}.png"></pre>`;
}

function scoreboard(){
  //ScoreBoard
  document.querySelector('.js-score').innerHTML = `Scoreboard: Wins: ${score.wins} | Losses: ${score.losses}`;
}

function resetScore(){
  score = {
    wins:0,
    losses:0
  };

  //Result
  document.querySelector('.js-result').innerHTML = 'Select your bet';

  //Toss Result
  document.querySelector('.js-tossResult').innerHTML = 'You reset the scoreboard';

  scoreboard();
}

let score = {
  wins: 0,
  losses: 0
};