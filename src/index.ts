import { WinsAnalyzer } from "./Analyzers/WinsAnalyzer";
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { MatchDetails, MatchResult } from "./MatchModels";
import { ConsoleReport } from "./OutputTargets/ConsoleReport";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");
const reader = new MatchReader(csvFileReader);
const matches = reader.loadData();

const summary = new Summary(new WinsAnalyzer("Arsenal"), new ConsoleReport());
summary.buildAndPrint(matches);
