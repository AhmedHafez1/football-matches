import { CsvFileReader } from './CsvFileReader';
import { parseDate } from '../utils';
import { MatchData, MatchDetails, MatchResult } from '../MatchModels';

export interface DataReader {
  read(): string[][];
}

export class MatchReader {
  constructor(public dataReader: DataReader) {}

  loadData(): MatchData[] {
    return this.dataReader.read().map(this.mapRow);
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
