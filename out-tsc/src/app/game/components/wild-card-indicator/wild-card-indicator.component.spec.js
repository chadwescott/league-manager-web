import { async, TestBed } from '@angular/core/testing';
import { WildCardIndicatorComponent } from './wild-card-indicator.component';
describe('WildCardIndicatorComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WildCardIndicatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WildCardIndicatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wild-card-indicator.component.spec.js.map