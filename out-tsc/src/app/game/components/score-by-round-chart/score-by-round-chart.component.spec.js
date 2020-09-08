import { async, TestBed } from '@angular/core/testing';
import { ScoreByRoundChartComponent } from './score-by-round-chart.component';
describe('ScoreByRoundChartComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScoreByRoundChartComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ScoreByRoundChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=score-by-round-chart.component.spec.js.map