import fs from "fs";
import { MatchResult } from "./MatchResult";
import { parseDate } from "./utils";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class CsvFileReader {
  constructor(public fileName: string) {}

  readFile(): MatchData[] {
    return fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(
        (row: string[]): MatchData => [
          parseDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ]
      );
  }
}
