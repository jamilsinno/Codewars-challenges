function uefaEuro2016(teams, scores){
  // your code...
  return `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? `${teams[0]} won!` : 
  scores[0] === scores[1] ? 'teams played draw.' : `${teams[1]} won!`}`
}