import { WinsAnalyzer } from './Analyzers/WinsAnalyzer';
import { MatchData } from './MatchModels';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { HtmlReport } from './ReportTargets/HtmlReport';

export interface Analyzer {
  team: string;
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winMatchesHtml(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new HtmlReport());
  }

  static winMatchesConsole(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new ConsoleReport());
  }

  buildAndPrint(matches: MatchData[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
