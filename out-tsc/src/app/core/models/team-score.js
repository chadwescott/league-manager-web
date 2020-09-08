import { GameResult } from '../enums/game-result';
export class TeamScore {
    constructor(id, gameId, team, score = 0, result = GameResult.Unknown) {
        this.id = id;
        this.gameId = gameId;
        this.team = team;
        this.score = score;
        this.result = result;
    }
}
//# sourceMappingURL=team-score.js.map