import { Team } from './teams';

export class TeamScoreEvent {
    constructor(
        public team: Team,
        public score: number,
        public timestamp: Date
    ) { }
}
