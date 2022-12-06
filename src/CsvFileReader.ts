import fs from 'fs';
import { MatchResult } from './MatchResult';
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

export class CsvFileReader {
  constructor(public fileName: string) {}

  readFile(): MatchData[] {
    return fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }

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
