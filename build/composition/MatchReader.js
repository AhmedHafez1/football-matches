"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("../utils");
const MatchModels_1 = require("../MatchModels");
class MatchReader {
    constructor(dataReader) {
        this.dataReader = dataReader;
    }
    loadData() {
        return this.dataReader.read().map(this.mapRow);
    }
    mapRow(row) {
        return [
            (0, utils_1.parseDate)(row[MatchModels_1.MatchDetails.MatchDate]),
            row[MatchModels_1.MatchDetails.HomeTeam],
            row[MatchModels_1.MatchDetails.AwayTeam],
            parseInt(row[MatchModels_1.MatchDetails.HomeTeamScore]),
            parseInt(row[MatchModels_1.MatchDetails.AwayTeamScore]),
            row[MatchModels_1.MatchDetails.Winner],
            row[MatchModels_1.MatchDetails.Refree],
        ];
    }
}
exports.MatchReader = MatchReader;
