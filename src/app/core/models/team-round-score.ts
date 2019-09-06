import { Team } from './teams';

export class TeamRoundScore {
    constructor(
        public id: string,
        public gameRoundId: string,
        public team: Team,
        public score: number
    ) { }
}
