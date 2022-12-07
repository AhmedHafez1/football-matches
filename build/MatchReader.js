"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = exports.MatchResult = exports.MatchDetails = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
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
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.parseDate)(row[MatchDetails.MatchDate]),
            row[MatchDetails.HomeTeam],
            row[MatchDetails.AwayTeam],
            parseInt(row[MatchDetails.HomeTeamScore]),
            parseInt(row[MatchDetails.AwayTeamScore]),
            row[MatchDetails.Winner],
            row[MatchDetails.Refree],
        ];
    }
}
exports.MatchReader = MatchReader;
