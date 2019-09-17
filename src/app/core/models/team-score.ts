import { Team } from './teams';
import { GameResult } from '../enums/game-result';

export class TeamScore {
    constructor(
        public id: string,
        public gameId: string,
        public team: Team,
        public score: number = 0,
        public result: GameResult = GameResult.Unknown
    ) { }
}
