import { CsvFileReader } from './CsvFileReader';
import { parseDate } from './utils';

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export enum MatchDetails {
  MatchDate,
  HomeTeam,
  AwayTeam,
  HomeTeamScore,
  AwayTeamScore,
  Winner,
  Refree,
}

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      parseDate(row[MatchDetails.MatchDate]),
      row[MatchDetails.HomeTeam],
      row[MatchDetails.AwayTeam],
      parseInt(row[MatchDetails.HomeTeamScore]),
      parseInt(row[MatchDetails.AwayTeamScore]),
      row[MatchDetails.Winner] as MatchResult,
      row[MatchDetails.Refree],
    ];
  }
}
