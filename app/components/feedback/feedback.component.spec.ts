


import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import{ FeedbackComponent } from './feedback.component';

describe('FeedbackComponent(templateUrl)',()=>{

    let comp:    FeedbackComponent;
    let fixture: ComponentFixture<FeedbackComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;




    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FeedbackComponent ],providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
            .compileComponents();
    }));

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [FeedbackComponent],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture=  TestBed.createComponent(FeedbackComponent);
        comp= fixture.componentInstance;

        de=fixture.debugElement.query(By.css('h1'));

    });
    it('should create component', () =>
        expect(comp).toBeDefined() );

    it('should have expected headline text', () => {
        // fixture.detectChanges();
        const h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/feedback/i,
            '<h1> should say something about "important"');
    });


    it('should display a different test title-your feedback is important to us', () => {

        // fixture.detectChanges();
        el=de.nativeElement;
        expect(el.textContent).toContain('your feedback is important to us');
    });

    it('should support clicking a submit-button', () => {
         const fixture = TestBed.createComponent(FeedbackComponent);
        const btn  = fixture.debugElement.query(By.css('button'));
        const span = fixture.debugElement.query(By.css('h4')).nativeElement;

        btn.triggerEventHandler('click',null);
        fixture.detectChanges();
        expect(span.innerText).toMatch('Thank you for submitting');


    });

});

