import { GameSettings } from './game-settings';

export class Game {
    constructor(
        public id: string,
        public number: number,
        public startTime: Date,
        public gameSettings: GameSettings
    ) { }
}
