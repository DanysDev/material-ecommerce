import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterSimpleComponent} from './footer-simple.component';

describe('FooterSimpleComponent', () => {
    let component: FooterSimpleComponent;
    let fixture: ComponentFixture<FooterSimpleComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FooterSimpleComponent]
        });
        fixture = TestBed.createComponent(FooterSimpleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
