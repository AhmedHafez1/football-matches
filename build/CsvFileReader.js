"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = exports.MatchDetails = void 0;
const fs_1 = __importDefault(require("fs"));
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
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
    }
    readFile() {
        return fs_1.default
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
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
exports.CsvFileReader = CsvFileReader;
