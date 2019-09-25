import { Team } from './teams';
import { GameResult } from '../enums/game-result';

export class GameTeamScore {
    constructor(
        public id: string,
        public gameId: string,
        public teamId: string,
        public team: Team,
        public score: number = 0,
        public result: GameResult = GameResult.Unknown
    ) { }
}
