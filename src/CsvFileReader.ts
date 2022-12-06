import fs from 'fs';

export class CsvFileReader {
  constructor(public fileName: string) {}

  readFile(): string[][] {
    return fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
