"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = exports.MatchDetails = void 0;
var MatchDetails;
(function (MatchDetails) {
    MatchDetails[MatchDetails["MatchDate"] = 0] = "MatchDate";
    MatchDetails[MatchDetails["HomeTeam"] = 1] = "HomeTeam";
    MatchDetails[MatchDetails["AwayTeam"] = 2] = "AwayTeam";
    MatchDetails[MatchDetails["HomeTeamScore"] = 3] = "HomeTeamScore";
    MatchDetails[MatchDetails["AwayTeamScore"] = 4] = "AwayTeamScore";
    MatchDetails[MatchDetails["Winner"] = 5] = "Winner";
    MatchDetails[MatchDetails["Refree"] = 6] = "Refree";
})(MatchDetails = exports.MatchDetails || (exports.MatchDetails = {}));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
