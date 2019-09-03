export class TeamScore {
    constructor(
        public id: string,
        public gameRoundId: string,
        public teamId: string,
        public score: number
    ) { }
}
