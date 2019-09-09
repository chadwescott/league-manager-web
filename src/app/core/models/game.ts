import { GameTeamScore } from './game-team-score';
import { GameSettings } from './game-settings';

export class Game {
    constructor(
        public id: string,
        public number: number,
        public teamScores: GameTeamScore[],
        public startTime: Date,
        public gameSettings: GameSettings
    ) { }
}
