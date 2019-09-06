import { Team } from './teams';

export class Game {
    constructor(
        public id: string,
        public number: number,
        public teams: Team[],
        public startTime: Date
    ) {}
}
