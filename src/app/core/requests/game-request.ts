import { Game } from '../models/game';

export class GameRequest {
    startTime: Date;
    teamIds: string[];

    constructor(game: Game) {
        this.startTime = game.startTime;
        this.teamIds = game.teamScores ? game.teamScores.map(x => x.team.id) : [];
    }
}
