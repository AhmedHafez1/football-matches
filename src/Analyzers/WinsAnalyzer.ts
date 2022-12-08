import { MatchData, MatchDetails, MatchResult } from '../MatchModels';
import { Analyzer } from '../Summary';

export class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let teamWins = 0;

    matches.forEach((match) => {
      if (
        match[MatchDetails.HomeTeam] === this.team &&
        match[MatchDetails.Winner] === MatchResult.HomeWin
      )
        teamWins++;
      if (
        match[MatchDetails.AwayTeam] === this.team &&
        match[MatchDetails.Winner] === MatchResult.AwayWin
      )
        teamWins++;
    });

    return `Team ${this.team} won ${teamWins} matches`;
  }
}
