import { Team } from './teams';

export class GameTeamScore {
    constructor(
        public id: string,
        public gameId: string,
        public team: Team,
        public score: number = 0
    ) { }
}
