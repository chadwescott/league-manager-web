import { GameTeamScore } from './game-team-score';

export class Game {
    constructor(
        public id: string,
        public number: number,
        public teamScores: GameTeamScore[],
        public startTime: Date
    ) {}
}
