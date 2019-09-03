import { Team } from './teams';

export class Game {
    constructor(
        public id: string,
        public teams: Team[],
        public startTime: Date
    ) {}
}