import { Team } from './teams';
import { GameRound } from './game-round';

export class TeamRoundScore {
    constructor(
        public id: string,
        public gameRound: GameRound,
        public team: Team,
        public score: number
    ) { }
}
