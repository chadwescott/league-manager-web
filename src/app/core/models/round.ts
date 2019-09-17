import { TeamRoundScore } from './team-round-score';

export class Round {
    constructor(
        public id: string,
        public gameId: string,
        public number: number,
        public teamScores: TeamRoundScore[] = []
    ) { }
}
