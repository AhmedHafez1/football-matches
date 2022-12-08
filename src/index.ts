import { WinsAnalyzer } from './Analyzers/WinsAnalyzer';
import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { HtmlReport } from './ReportTargets/HtmlReport';

import { Summary } from './Summary';

const reader = MatchReader.fromCsv('football.csv');
const matches = reader.loadData();

const summary = Summary.winMatchesHtml('Man City');
summary.buildAndPrint(matches);

const htmlSummary = Summary.winMatchesConsole('Chelsea');
htmlSummary.buildAndPrint(matches);
