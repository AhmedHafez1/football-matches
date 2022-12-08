import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
import { MatchDetails, MatchResult } from './MatchModels';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
const matches = reader.loadData();
