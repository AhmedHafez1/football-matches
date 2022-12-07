import fs from 'fs';

export abstract class CsvFileReader<T> {
  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  readFile(): T[] {
    return fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
