import fs from "fs";

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
const matches = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => row.split(","));

let liverboolWins = 0;

matches.forEach((match) => {
  if (match[1] === "Liverpool" && match[5] === MatchResult.HomeWin)
    liverboolWins++;
  if (match[2] === "Liverpool" && match[6] === MatchResult.AwayWin)
    liverboolWins++;
});

console.log("Liverbool Wins", liverboolWins);
