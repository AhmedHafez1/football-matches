export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export enum MatchDetails {
  MatchDate,
  HomeTeam,
  AwayTeam,
  HomeTeamScore,
  AwayTeamScore,
  Winner,
  Refree,
}

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
