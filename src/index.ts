import { MatchDetails, MatchReader, MatchResult } from './MatchReader';

const reader = new MatchReader('football.csv');
const matches = reader.readFile();

let liverboolWins = 0;

matches.forEach((match) => {
  if (
    match[MatchDetails.HomeTeam] === 'Liverpool' &&
    match[MatchDetails.Winner] === MatchResult.HomeWin
  )
    liverboolWins++;
  if (
    match[MatchDetails.AwayTeam] === 'Liverpool' &&
    match[MatchDetails.Winner] === MatchResult.AwayWin
  )
    liverboolWins++;
});

console.log('Liverbool Wins', liverboolWins);
