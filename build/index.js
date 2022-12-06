"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
const matches = reader.readFile();
let liverboolWins = 0;
matches.forEach((match) => {
    if (match[CsvFileReader_1.MatchDetails.HomeTeam] === 'Liverpool' &&
        match[CsvFileReader_1.MatchDetails.Winner] === MatchResult_1.MatchResult.HomeWin)
        liverboolWins++;
    if (match[CsvFileReader_1.MatchDetails.AwayTeam] === 'Liverpool' &&
        match[CsvFileReader_1.MatchDetails.Winner] === MatchResult_1.MatchResult.AwayWin)
        liverboolWins++;
});
console.log('Liverbool Wins', liverboolWins);
