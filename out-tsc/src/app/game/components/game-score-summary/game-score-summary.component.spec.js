import { async, TestBed } from '@angular/core/testing';
import { GameScoreSummaryComponent } from './game-score-summary.component';
describe('GameScoreSummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GameScoreSummaryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GameScoreSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=game-score-summary.component.spec.js.map