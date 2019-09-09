import { Player } from './player';

export class Team {
    public players: Player[];

    constructor(
        public id: string,
        public name: string,
        public teamNumber: number
    ) { }
}
