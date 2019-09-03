import { TeamScore } from './team-score';

export class GameRound {
    constructor(
        public id: string,
        public number: number,
        public teameScore: TeamScore
    ) { }
}
