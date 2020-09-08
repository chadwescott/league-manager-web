import { async, TestBed } from '@angular/core/testing';
import { GameAdHocDetailsComponent } from './game-ad-hoc-details.component';
describe('GameAdHocDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GameAdHocDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GameAdHocDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=game-ad-hoc-details.component.spec.js.map