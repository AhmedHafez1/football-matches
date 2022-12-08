import { MatchData } from './MatchModels';

export interface Analyzer {
  team: string;
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrint(matches: MatchData[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
