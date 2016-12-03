/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '@angular/router/src/router_module';
import * as import9 from '../../app/app-routing.module';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/http/src/backends/browser_jsonp';
import * as import28 from '@angular/http/src/backends/jsonp_backend';
import * as import29 from '@angular/common/src/location/location';
import * as import30 from '@angular/router/src/url_tree';
import * as import31 from '@angular/router/src/router_outlet_map';
import * as import32 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import33 from '@angular/router/src/router_preloader';
import * as import34 from '../../app/joke.service';
import * as import35 from '@angular/core/src/di/injector';
import * as import36 from './components/contact-us/contact-us.component.ngfactory';
import * as import37 from './components/joke-detail/joke-detail.component.ngfactory';
import * as import38 from './components/submit-joke/submit-joke.component.ngfactory';
import * as import39 from './components/feedback/feedback.component.ngfactory';
import * as import40 from './app.component.ngfactory';
import * as import41 from '@angular/core/src/application_tokens';
import * as import42 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import43 from '@angular/platform-browser/src/dom/events/key_events';
import * as import44 from '@angular/core/src/zone/ng_zone';
import * as import45 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import46 from '@angular/common/src/location/platform_location';
import * as import47 from '@angular/common/src/location/location_strategy';
import * as import48 from '../../app/components/contact-us/contact-us.component';
import * as import49 from '../../app/components/joke-detail/joke-detail.component';
import * as import50 from '../../app/components/submit-joke/submit-joke.component';
import * as import51 from '../../app/components/feedback/feedback.component';
import * as import52 from '@angular/router/src/url_handling_strategy';
import * as import53 from '@angular/router/src/router';
import * as import54 from '@angular/core/src/console';
import * as import55 from '@angular/core/src/i18n/tokens';
import * as import56 from '@angular/core/src/error_handler';
import * as import57 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import58 from '@angular/platform-browser/src/dom/animation_driver';
import * as import59 from '@angular/core/src/render/api';
import * as import60 from '@angular/core/src/security';
import * as import61 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import62 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import63 from '@angular/http/src/interfaces';
import * as import64 from '@angular/http/src/http';
import * as import65 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import66 from '@angular/router/src/router_config_loader';
import * as import67 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _HttpModule_5:import7.HttpModule;
  _JsonpModule_6:import7.JsonpModule;
  _ROUTER_FORROOT_GUARD_7:any;
  _RouterModule_8:import8.RouterModule;
  _AppRoutingModule_9:import9.AppRoutingModule;
  _AppModule_10:import1.AppModule;
  __LOCALE_ID_11:any;
  __NgLocalization_12:import10.NgLocaleLocalization;
  _ErrorHandler_13:any;
  _ApplicationInitStatus_14:import11.ApplicationInitStatus;
  _Testability_15:import12.Testability;
  _ApplicationRef__16:import13.ApplicationRef_;
  __ApplicationRef_17:any;
  __Compiler_18:import14.Compiler;
  __APP_ID_19:any;
  __DOCUMENT_20:any;
  __HAMMER_GESTURE_CONFIG_21:import15.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_22:any[];
  __EventManager_23:import16.EventManager;
  __DomSharedStylesHost_24:import17.DomSharedStylesHost;
  __AnimationDriver_25:any;
  __DomRootRenderer_26:import18.DomRootRenderer_;
  __RootRenderer_27:any;
  __DomSanitizer_28:import19.DomSanitizerImpl;
  __Sanitizer_29:any;
  __ViewUtils_30:import20.ViewUtils;
  __IterableDiffers_31:any;
  __KeyValueDiffers_32:any;
  __SharedStylesHost_33:any;
  __Title_34:import21.Title;
  __RadioControlRegistry_35:import22.RadioControlRegistry;
  __BrowserXhr_36:import23.BrowserXhr;
  __ResponseOptions_37:import24.BaseResponseOptions;
  __XSRFStrategy_38:any;
  __XHRBackend_39:import25.XHRBackend;
  __RequestOptions_40:import26.BaseRequestOptions;
  __Http_41:any;
  __BrowserJsonp_42:import27.BrowserJsonp;
  __JSONPBackend_43:import28.JSONPBackend_;
  __Jsonp_44:any;
  __ROUTER_CONFIGURATION_45:any;
  __LocationStrategy_46:any;
  __Location_47:import29.Location;
  __UrlSerializer_48:import30.DefaultUrlSerializer;
  __RouterOutletMap_49:import31.RouterOutletMap;
  __NgModuleFactoryLoader_50:import32.SystemJsNgModuleLoader;
  __ROUTES_51:any[];
  __Router_52:any;
  __ActivatedRoute_53:any;
  _NoPreloading_54:import33.NoPreloading;
  _PreloadingStrategy_55:any;
  _RouterPreloader_56:import33.RouterPreloader;
  __PreloadAllModules_57:import33.PreloadAllModules;
  __ROUTER_INITIALIZER_58:any;
  __APP_BOOTSTRAP_LISTENER_59:any[];
  __JokeService_60:import34.JokeService;
  constructor(parent:import35.Injector) {
    super(parent,[
      import36.ContactUsComponentNgFactory,
      import37.JokeDetailComponentNgFactory,
      import38.SubmitJokeComponentNgFactory,
      import39.FeedbackComponentNgFactory,
      import40.AppComponentNgFactory
    ]
    ,[import40.AppComponentNgFactory]);
  }
  get _LOCALE_ID_11():any {
    if ((this.__LOCALE_ID_11 == null)) { (this.__LOCALE_ID_11 = 'en-US'); }
    return this.__LOCALE_ID_11;
  }
  get _NgLocalization_12():import10.NgLocaleLocalization {
    if ((this.__NgLocalization_12 == null)) { (this.__NgLocalization_12 = new import10.NgLocaleLocalization(this._LOCALE_ID_11)); }
    return this.__NgLocalization_12;
  }
  get _ApplicationRef_17():any {
    if ((this.__ApplicationRef_17 == null)) { (this.__ApplicationRef_17 = this._ApplicationRef__16); }
    return this.__ApplicationRef_17;
  }
  get _Compiler_18():import14.Compiler {
    if ((this.__Compiler_18 == null)) { (this.__Compiler_18 = new import14.Compiler()); }
    return this.__Compiler_18;
  }
  get _APP_ID_19():any {
    if ((this.__APP_ID_19 == null)) { (this.__APP_ID_19 = import41._appIdRandomProviderFactory()); }
    return this.__APP_ID_19;
  }
  get _DOCUMENT_20():any {
    if ((this.__DOCUMENT_20 == null)) { (this.__DOCUMENT_20 = import4._document()); }
    return this.__DOCUMENT_20;
  }
  get _HAMMER_GESTURE_CONFIG_21():import15.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) { (this.__HAMMER_GESTURE_CONFIG_21 = new import15.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_21;
  }
  get _EVENT_MANAGER_PLUGINS_22():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) { (this.__EVENT_MANAGER_PLUGINS_22 = [
      new import42.DomEventsPlugin(),
      new import43.KeyEventsPlugin(),
      new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_21)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_22;
  }
  get _EventManager_23():import16.EventManager {
    if ((this.__EventManager_23 == null)) { (this.__EventManager_23 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(import44.NgZone))); }
    return this.__EventManager_23;
  }
  get _DomSharedStylesHost_24():import17.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_24 == null)) { (this.__DomSharedStylesHost_24 = new import17.DomSharedStylesHost(this._DOCUMENT_20)); }
    return this.__DomSharedStylesHost_24;
  }
  get _AnimationDriver_25():any {
    if ((this.__AnimationDriver_25 == null)) { (this.__AnimationDriver_25 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_25;
  }
  get _DomRootRenderer_26():import18.DomRootRenderer_ {
    if ((this.__DomRootRenderer_26 == null)) { (this.__DomRootRenderer_26 = new import18.DomRootRenderer_(this._DOCUMENT_20,this._EventManager_23,this._DomSharedStylesHost_24,this._AnimationDriver_25,this._APP_ID_19)); }
    return this.__DomRootRenderer_26;
  }
  get _RootRenderer_27():any {
    if ((this.__RootRenderer_27 == null)) { (this.__RootRenderer_27 = import45._createConditionalRootRenderer(this._DomRootRenderer_26,this.parent.get(import45.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_27;
  }
  get _DomSanitizer_28():import19.DomSanitizerImpl {
    if ((this.__DomSanitizer_28 == null)) { (this.__DomSanitizer_28 = new import19.DomSanitizerImpl()); }
    return this.__DomSanitizer_28;
  }
  get _Sanitizer_29():any {
    if ((this.__Sanitizer_29 == null)) { (this.__Sanitizer_29 = this._DomSanitizer_28); }
    return this.__Sanitizer_29;
  }
  get _ViewUtils_30():import20.ViewUtils {
    if ((this.__ViewUtils_30 == null)) { (this.__ViewUtils_30 = new import20.ViewUtils(this._RootRenderer_27,this._Sanitizer_29)); }
    return this.__ViewUtils_30;
  }
  get _IterableDiffers_31():any {
    if ((this.__IterableDiffers_31 == null)) { (this.__IterableDiffers_31 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_31;
  }
  get _KeyValueDiffers_32():any {
    if ((this.__KeyValueDiffers_32 == null)) { (this.__KeyValueDiffers_32 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_32;
  }
  get _SharedStylesHost_33():any {
    if ((this.__SharedStylesHost_33 == null)) { (this.__SharedStylesHost_33 = this._DomSharedStylesHost_24); }
    return this.__SharedStylesHost_33;
  }
  get _Title_34():import21.Title {
    if ((this.__Title_34 == null)) { (this.__Title_34 = new import21.Title()); }
    return this.__Title_34;
  }
  get _RadioControlRegistry_35():import22.RadioControlRegistry {
    if ((this.__RadioControlRegistry_35 == null)) { (this.__RadioControlRegistry_35 = new import22.RadioControlRegistry()); }
    return this.__RadioControlRegistry_35;
  }
  get _BrowserXhr_36():import23.BrowserXhr {
    if ((this.__BrowserXhr_36 == null)) { (this.__BrowserXhr_36 = new import23.BrowserXhr()); }
    return this.__BrowserXhr_36;
  }
  get _ResponseOptions_37():import24.BaseResponseOptions {
    if ((this.__ResponseOptions_37 == null)) { (this.__ResponseOptions_37 = new import24.BaseResponseOptions()); }
    return this.__ResponseOptions_37;
  }
  get _XSRFStrategy_38():any {
    if ((this.__XSRFStrategy_38 == null)) { (this.__XSRFStrategy_38 = import7._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_38;
  }
  get _XHRBackend_39():import25.XHRBackend {
    if ((this.__XHRBackend_39 == null)) { (this.__XHRBackend_39 = new import25.XHRBackend(this._BrowserXhr_36,this._ResponseOptions_37,this._XSRFStrategy_38)); }
    return this.__XHRBackend_39;
  }
  get _RequestOptions_40():import26.BaseRequestOptions {
    if ((this.__RequestOptions_40 == null)) { (this.__RequestOptions_40 = new import26.BaseRequestOptions()); }
    return this.__RequestOptions_40;
  }
  get _Http_41():any {
    if ((this.__Http_41 == null)) { (this.__Http_41 = import7.httpFactory(this._XHRBackend_39,this._RequestOptions_40)); }
    return this.__Http_41;
  }
  get _BrowserJsonp_42():import27.BrowserJsonp {
    if ((this.__BrowserJsonp_42 == null)) { (this.__BrowserJsonp_42 = new import27.BrowserJsonp()); }
    return this.__BrowserJsonp_42;
  }
  get _JSONPBackend_43():import28.JSONPBackend_ {
    if ((this.__JSONPBackend_43 == null)) { (this.__JSONPBackend_43 = new import28.JSONPBackend_(this._BrowserJsonp_42,this._ResponseOptions_37)); }
    return this.__JSONPBackend_43;
  }
  get _Jsonp_44():any {
    if ((this.__Jsonp_44 == null)) { (this.__Jsonp_44 = import7.jsonpFactory(this._JSONPBackend_43,this._RequestOptions_40)); }
    return this.__Jsonp_44;
  }
  get _ROUTER_CONFIGURATION_45():any {
    if ((this.__ROUTER_CONFIGURATION_45 == null)) { (this.__ROUTER_CONFIGURATION_45 = {}); }
    return this.__ROUTER_CONFIGURATION_45;
  }
  get _LocationStrategy_46():any {
    if ((this.__LocationStrategy_46 == null)) { (this.__LocationStrategy_46 = import8.provideLocationStrategy(this.parent.get(import46.PlatformLocation),this.parent.get(import47.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_45)); }
    return this.__LocationStrategy_46;
  }
  get _Location_47():import29.Location {
    if ((this.__Location_47 == null)) { (this.__Location_47 = new import29.Location(this._LocationStrategy_46)); }
    return this.__Location_47;
  }
  get _UrlSerializer_48():import30.DefaultUrlSerializer {
    if ((this.__UrlSerializer_48 == null)) { (this.__UrlSerializer_48 = new import30.DefaultUrlSerializer()); }
    return this.__UrlSerializer_48;
  }
  get _RouterOutletMap_49():import31.RouterOutletMap {
    if ((this.__RouterOutletMap_49 == null)) { (this.__RouterOutletMap_49 = new import31.RouterOutletMap()); }
    return this.__RouterOutletMap_49;
  }
  get _NgModuleFactoryLoader_50():import32.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_50 == null)) { (this.__NgModuleFactoryLoader_50 = new import32.SystemJsNgModuleLoader(this._Compiler_18,this.parent.get(import32.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_50;
  }
  get _ROUTES_51():any[] {
      if ((this.__ROUTES_51 == null)) { (this.__ROUTES_51 = [[
        {
          path: '',
          redirectTo: 'joke-detail',
          pathMatch: 'full'
        }
        ,
        {
          path: 'contact-us',
          component: import48.ContactUsComponent
        }
        ,
        {
          path: 'joke-detail',
          component: import49.JokeDetailComponent
        }
        ,
        {
          path: 'submit-joke',
          component: import50.SubmitJokeComponent
        }
        ,
        {
          path: 'feedback',
          component: import51.FeedbackComponent
        }

      ]
    ]); }
    return this.__ROUTES_51;
  }
  get _Router_52():any {
    if ((this.__Router_52 == null)) { (this.__Router_52 = import8.setupRouter(this._ApplicationRef_17,this._UrlSerializer_48,this._RouterOutletMap_49,this._Location_47,this,this._NgModuleFactoryLoader_50,this._Compiler_18,this._ROUTES_51,this._ROUTER_CONFIGURATION_45,this.parent.get(import52.UrlHandlingStrategy,(null as any)))); }
    return this.__Router_52;
  }
  get _ActivatedRoute_53():any {
    if ((this.__ActivatedRoute_53 == null)) { (this.__ActivatedRoute_53 = import8.rootRoute(this._Router_52)); }
    return this.__ActivatedRoute_53;
  }
  get _PreloadAllModules_57():import33.PreloadAllModules {
    if ((this.__PreloadAllModules_57 == null)) { (this.__PreloadAllModules_57 = new import33.PreloadAllModules()); }
    return this.__PreloadAllModules_57;
  }
  get _ROUTER_INITIALIZER_58():any {
    if ((this.__ROUTER_INITIALIZER_58 == null)) { (this.__ROUTER_INITIALIZER_58 = import8.initialRouterNavigation(this._Router_52,this._ApplicationRef_17,this._RouterPreloader_56,this._ROUTER_CONFIGURATION_45)); }
    return this.__ROUTER_INITIALIZER_58;
  }
  get _APP_BOOTSTRAP_LISTENER_59():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_59 == null)) { (this.__APP_BOOTSTRAP_LISTENER_59 = [this._ROUTER_INITIALIZER_58]); }
    return this.__APP_BOOTSTRAP_LISTENER_59;
  }
  get _JokeService_60():import34.JokeService {
    if ((this.__JokeService_60 == null)) { (this.__JokeService_60 = new import34.JokeService(this._Http_41)); }
    return this.__JokeService_60;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._HttpModule_5 = new import7.HttpModule();
    this._JsonpModule_6 = new import7.JsonpModule();
    this._ROUTER_FORROOT_GUARD_7 = import8.provideForRootGuard(this.parent.get(import53.Router,(null as any)));
    this._RouterModule_8 = new import8.RouterModule(this._ROUTER_FORROOT_GUARD_7);
    this._AppRoutingModule_9 = new import9.AppRoutingModule();
    this._AppModule_10 = new import1.AppModule();
    this._ErrorHandler_13 = import4.errorHandler();
    this._ApplicationInitStatus_14 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER,(null as any)));
    this._Testability_15 = new import12.Testability(this.parent.get(import44.NgZone));
    this._ApplicationRef__16 = new import13.ApplicationRef_(this.parent.get(import44.NgZone),this.parent.get(import54.Console),this,this._ErrorHandler_13,this,this._ApplicationInitStatus_14,this.parent.get(import12.TestabilityRegistry,(null as any)),this._Testability_15);
    this._NoPreloading_54 = new import33.NoPreloading();
    this._PreloadingStrategy_55 = this._NoPreloading_54;
    this._RouterPreloader_56 = new import33.RouterPreloader(this._Router_52,this._NgModuleFactoryLoader_50,this._Compiler_18,this,this._PreloadingStrategy_55);
    return this._AppModule_10;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import7.HttpModule)) { return this._HttpModule_5; }
    if ((token === import7.JsonpModule)) { return this._JsonpModule_6; }
    if ((token === import8.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_7; }
    if ((token === import8.RouterModule)) { return this._RouterModule_8; }
    if ((token === import9.AppRoutingModule)) { return this._AppRoutingModule_9; }
    if ((token === import1.AppModule)) { return this._AppModule_10; }
    if ((token === import55.LOCALE_ID)) { return this._LOCALE_ID_11; }
    if ((token === import10.NgLocalization)) { return this._NgLocalization_12; }
    if ((token === import56.ErrorHandler)) { return this._ErrorHandler_13; }
    if ((token === import11.ApplicationInitStatus)) { return this._ApplicationInitStatus_14; }
    if ((token === import12.Testability)) { return this._Testability_15; }
    if ((token === import13.ApplicationRef_)) { return this._ApplicationRef__16; }
    if ((token === import13.ApplicationRef)) { return this._ApplicationRef_17; }
    if ((token === import14.Compiler)) { return this._Compiler_18; }
    if ((token === import41.APP_ID)) { return this._APP_ID_19; }
    if ((token === import57.DOCUMENT)) { return this._DOCUMENT_20; }
    if ((token === import15.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_21; }
    if ((token === import16.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_22; }
    if ((token === import16.EventManager)) { return this._EventManager_23; }
    if ((token === import17.DomSharedStylesHost)) { return this._DomSharedStylesHost_24; }
    if ((token === import58.AnimationDriver)) { return this._AnimationDriver_25; }
    if ((token === import18.DomRootRenderer)) { return this._DomRootRenderer_26; }
    if ((token === import59.RootRenderer)) { return this._RootRenderer_27; }
    if ((token === import19.DomSanitizer)) { return this._DomSanitizer_28; }
    if ((token === import60.Sanitizer)) { return this._Sanitizer_29; }
    if ((token === import20.ViewUtils)) { return this._ViewUtils_30; }
    if ((token === import61.IterableDiffers)) { return this._IterableDiffers_31; }
    if ((token === import62.KeyValueDiffers)) { return this._KeyValueDiffers_32; }
    if ((token === import17.SharedStylesHost)) { return this._SharedStylesHost_33; }
    if ((token === import21.Title)) { return this._Title_34; }
    if ((token === import22.RadioControlRegistry)) { return this._RadioControlRegistry_35; }
    if ((token === import23.BrowserXhr)) { return this._BrowserXhr_36; }
    if ((token === import24.ResponseOptions)) { return this._ResponseOptions_37; }
    if ((token === import63.XSRFStrategy)) { return this._XSRFStrategy_38; }
    if ((token === import25.XHRBackend)) { return this._XHRBackend_39; }
    if ((token === import26.RequestOptions)) { return this._RequestOptions_40; }
    if ((token === import64.Http)) { return this._Http_41; }
    if ((token === import27.BrowserJsonp)) { return this._BrowserJsonp_42; }
    if ((token === import28.JSONPBackend)) { return this._JSONPBackend_43; }
    if ((token === import64.Jsonp)) { return this._Jsonp_44; }
    if ((token === import8.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_45; }
    if ((token === import47.LocationStrategy)) { return this._LocationStrategy_46; }
    if ((token === import29.Location)) { return this._Location_47; }
    if ((token === import30.UrlSerializer)) { return this._UrlSerializer_48; }
    if ((token === import31.RouterOutletMap)) { return this._RouterOutletMap_49; }
    if ((token === import65.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_50; }
    if ((token === import66.ROUTES)) { return this._ROUTES_51; }
    if ((token === import53.Router)) { return this._Router_52; }
    if ((token === import67.ActivatedRoute)) { return this._ActivatedRoute_53; }
    if ((token === import33.NoPreloading)) { return this._NoPreloading_54; }
    if ((token === import33.PreloadingStrategy)) { return this._PreloadingStrategy_55; }
    if ((token === import33.RouterPreloader)) { return this._RouterPreloader_56; }
    if ((token === import33.PreloadAllModules)) { return this._PreloadAllModules_57; }
    if ((token === import8.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_58; }
    if ((token === import41.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_59; }
    if ((token === import34.JokeService)) { return this._JokeService_60; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__16.ngOnDestroy();
    this._RouterPreloader_56.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);