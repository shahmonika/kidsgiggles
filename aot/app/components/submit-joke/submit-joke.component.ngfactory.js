/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../app/components/submit-joke/submit-joke.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
export var Wrapper_SubmitJokeComponent = (function () {
    function Wrapper_SubmitJokeComponent() {
        this._changed = false;
        this.context = new import0.SubmitJokeComponent();
    }
    Wrapper_SubmitJokeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SubmitJokeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_SubmitJokeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_SubmitJokeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SubmitJokeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SubmitJokeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SubmitJokeComponent;
}());
var renderType_SubmitJokeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_SubmitJokeComponent_Host0 = (function (_super) {
    __extends(View_SubmitJokeComponent_Host0, _super);
    function View_SubmitJokeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SubmitJokeComponent_Host0, renderType_SubmitJokeComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_SubmitJokeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'submit-joke', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SubmitJokeComponent0(this.viewUtils, this, 0, this._el_0);
        this._SubmitJokeComponent_0_3 = new Wrapper_SubmitJokeComponent();
        this.compView_0.create(this._SubmitJokeComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._SubmitJokeComponent_0_3.context);
    };
    View_SubmitJokeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SubmitJokeComponent) && (0 === requestNodeIndex))) {
            return this._SubmitJokeComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_SubmitJokeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SubmitJokeComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_SubmitJokeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SubmitJokeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SubmitJokeComponent_Host0;
}(import1.AppView));
export var SubmitJokeComponentNgFactory = new import7.ComponentFactory('submit-joke', View_SubmitJokeComponent_Host0, import0.SubmitJokeComponent);
var styles_SubmitJokeComponent = [];
var renderType_SubmitJokeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_SubmitJokeComponent, {});
export var View_SubmitJokeComponent0 = (function (_super) {
    __extends(View_SubmitJokeComponent0, _super);
    function View_SubmitJokeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SubmitJokeComponent0, renderType_SubmitJokeComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_SubmitJokeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'submit jokes', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n\n\n\n    ', null);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_7 = this.renderer.createText(this._el_1, '\n\n\n\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_1, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'type ur New joke  ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_1, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Add joke', null);
        this._text_14 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15
        ]), null);
        return null;
    };
    return View_SubmitJokeComponent0;
}(import1.AppView));
