import { ScoreSystem } from '../enums/score-system';
import { WinCondition } from '../enums/win-condition';

export class GameSettings {
    constructor(
        public minTeams: number,
        public maxTeams: number,
        public scoreSystem: ScoreSystem,
        public winCondition: WinCondition
    ) { }
}
