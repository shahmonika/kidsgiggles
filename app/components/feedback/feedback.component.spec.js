"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var testing_2 = require('@angular/core/testing');
var feedback_component_1 = require('./feedback.component');
describe('FeedbackComponent(templateUrl)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [feedback_component_1.FeedbackComponent], providers: [
                { provide: testing_2.ComponentFixtureAutoDetect, useValue: true }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [feedback_component_1.FeedbackComponent],
            providers: [
                { provide: testing_2.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = testing_1.TestBed.createComponent(feedback_component_1.FeedbackComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () {
        return expect(comp).toBeDefined();
    });
    it('should have expected headline text', function () {
        // fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/feedback/i, '<h1> should say something about "important"');
    });
    it('should display a different test title-your feedback is important to us', function () {
        // fixture.detectChanges();
        el = de.nativeElement;
        expect(el.textContent).toContain('your feedback is important to us');
    });
    it('should support clicking a submit-button', function () {
        var fixture = testing_1.TestBed.createComponent(feedback_component_1.FeedbackComponent);
        var btn = fixture.debugElement.query(platform_browser_1.By.css('button'));
        var span = fixture.debugElement.query(platform_browser_1.By.css('h4')).nativeElement;
        btn.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(span.innerText).toMatch('Thank you for submitting');
    });
});
//# sourceMappingURL=feedback.component.spec.js.map