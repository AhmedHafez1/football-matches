import { WinsAnalyzer } from './Analyzers/WinsAnalyzer';
import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { HtmlReport } from './ReportTargets/HtmlReport';

import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
const matches = reader.loadData();

const summary = new Summary(new WinsAnalyzer('Arsenal'), new ConsoleReport());
summary.buildAndPrint(matches);

const htmlSummary = new Summary(new WinsAnalyzer('Chelsea'), new HtmlReport());
htmlSummary.buildAndPrint(matches);
