import { TeamScore } from './team-score';
import { GameSettings } from './game-settings';

export class Game {
    constructor(
        public id: string,
        public number: number,
        public teamScores: TeamScore[],
        public startTime: Date,
        public gameSettings: GameSettings
    ) { }
}
