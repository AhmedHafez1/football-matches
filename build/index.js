"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
const matches = reader.readFile();
let liverboolWins = 0;
matches.forEach((match) => {
    if (match[1] === "Liverpool" && match[5] === MatchResult_1.MatchResult.HomeWin)
        liverboolWins++;
    if (match[2] === "Liverpool" && match[6] === MatchResult_1.MatchResult.AwayWin)
        liverboolWins++;
});
console.log("Liverbool Wins", liverboolWins);
