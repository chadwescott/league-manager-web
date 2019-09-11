import { Team } from './teams';

export class TeamRoundScore {
    constructor(
        public id: string,
        public team: Team,
        public score: number = 0
    ) { }
}
