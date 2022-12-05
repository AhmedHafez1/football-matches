"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
const matches = fs_1.default
    .readFileSync("football.csv", { encoding: "utf-8" })
    .split("\n")
    .map((row) => row.split(","));
let liverboolWins = 0;
matches.forEach((match) => {
    if (match[1] === "Liverpool" && match[5] === MatchResult.HomeWin)
        liverboolWins++;
    if (match[2] === "Liverpool" && match[6] === MatchResult.AwayWin)
        liverboolWins++;
});
console.log("Liverbool Wins", liverboolWins);
