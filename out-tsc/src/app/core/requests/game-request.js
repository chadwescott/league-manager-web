export class GameRequest {
    constructor(game) {
        this.startTime = game.startTime;
        this.teamIds = game.teamScores ? game.teamScores.map(x => x.team.id) : [];
    }
}
//# sourceMappingURL=game-request.js.map