import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
describe('GameService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(GameService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=game.service.spec.js.map