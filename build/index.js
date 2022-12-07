"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('football.csv');
const matches = reader.readFile();
let liverboolWins = 0;
matches.forEach((match) => {
    if (match[MatchReader_1.MatchDetails.HomeTeam] === 'Liverpool' &&
        match[MatchReader_1.MatchDetails.Winner] === MatchReader_1.MatchResult.HomeWin)
        liverboolWins++;
    if (match[MatchReader_1.MatchDetails.AwayTeam] === 'Liverpool' &&
        match[MatchReader_1.MatchDetails.Winner] === MatchReader_1.MatchResult.AwayWin)
        liverboolWins++;
});
console.log('Liverbool Wins', liverboolWins);
