"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./composition/CsvFileReader");
const MatchReader_1 = require("./composition/MatchReader");
const MatchModels_1 = require("./MatchModels");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const reader = new MatchReader_1.MatchReader(csvFileReader);
const matches = reader.loadData();
let liverboolWins = 0;
matches.forEach((match) => {
    if (match[MatchModels_1.MatchDetails.HomeTeam] === 'Liverpool' &&
        match[MatchModels_1.MatchDetails.Winner] === MatchModels_1.MatchResult.HomeWin)
        liverboolWins++;
    if (match[MatchModels_1.MatchDetails.AwayTeam] === 'Liverpool' &&
        match[MatchModels_1.MatchDetails.Winner] === MatchModels_1.MatchResult.AwayWin)
        liverboolWins++;
});
console.log('Liverbool Wins', liverboolWins);
