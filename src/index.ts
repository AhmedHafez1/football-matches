import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader("football.csv");
const matches = reader.readFile();

let liverboolWins = 0;

matches.forEach((match) => {
  if (match[1] === "Liverpool" && match[5] === MatchResult.HomeWin)
    liverboolWins++;
  if (match[2] === "Liverpool" && match[6] === MatchResult.AwayWin)
    liverboolWins++;
});

console.log("Liverbool Wins", liverboolWins);
