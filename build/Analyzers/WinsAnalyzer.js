"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const MatchModels_1 = require("../MatchModels");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let teamWins = 0;
        matches.forEach((match) => {
            if (match[MatchModels_1.MatchDetails.HomeTeam] === this.team &&
                match[MatchModels_1.MatchDetails.Winner] === MatchModels_1.MatchResult.HomeWin)
                teamWins++;
            if (match[MatchModels_1.MatchDetails.AwayTeam] === this.team &&
                match[MatchModels_1.MatchDetails.Winner] === MatchModels_1.MatchResult.AwayWin)
                teamWins++;
        });
        return `Team ${this.team} won ${teamWins} matches`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
