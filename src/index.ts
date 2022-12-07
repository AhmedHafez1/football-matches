import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
import { MatchDetails, MatchResult } from './MatchModels';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
const matches = reader.loadData();

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
