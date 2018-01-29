webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activitydate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitydatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActivitydatePipe = (function () {
    function ActivitydatePipe() {
    }
    ActivitydatePipe.prototype.transform = function (value, args) {
        var newValue = '';
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        //timezone setup
        var d = new Date();
        var localTime = d.getTime();
        var localOffset = d.getTimezoneOffset();
        var utc = localTime + localOffset;
        ;
        var offset = -5;
        var america = utc + (3600000 * offset);
        //given data
        var date = value;
        var tRemoved = date.replace(/T/, ' ');
        var dotPos = tRemoved.indexOf('.');
        var newDate = tRemoved.substr(0, dotPos);
        //current date
        var date2 = new Date(america).getTime();
        var secDiff = (date2 - new Date(newDate).getTime()) / 1000;
        newValue = Math.abs(Math.round(secDiff)) + ' seconds ago';
        if (secDiff >= 59) {
            var minDiff = ((date2 - new Date(newDate).getTime()) / 1000) / 60;
            newValue = Math.abs(Math.round(minDiff)) + ' minutes ago';
            if (minDiff >= 59) {
                var hourDiff = ((date2 - new Date(newDate).getTime()) / 1000) / (60 * 60);
                newValue = Math.abs(Math.round(hourDiff)) + ' hour ago';
                if (hourDiff >= 23) {
                    newValue = 'Yesterday';
                    if (hourDiff >= 35) {
                        var day = new Date(newDate).getDay();
                        newValue = weekday[day];
                        if (hourDiff > 144) {
                            var date_1 = newDate;
                            newValue = date_1;
                        }
                    }
                }
            }
        }
        return newValue;
    };
    ActivitydatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'activitydate'
        })
    ], ActivitydatePipe);
    return ActivitydatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this.results = '';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None,
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_geoautocomplete__ = __webpack_require__("../../../../ng4-geoautocomplete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_agm_direction__ = __webpack_require__("../../../../agm-direction/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__registeration_registeration_component__ = __webpack_require__("../../../../../src/app/registeration/registeration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_registration_edit_registration_component__ = __webpack_require__("../../../../../src/app/edit-registration/edit-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__verify_phone_verify_phone_component__ = __webpack_require__("../../../../../src/app/verify-phone/verify-phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__verify_email_verify_email_component__ = __webpack_require__("../../../../../src/app/verify-email/verify-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__fb_signup_fb_signup_component__ = __webpack_require__("../../../../../src/app/fb-signup/fb-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__fb_sync_fb_sync_component__ = __webpack_require__("../../../../../src/app/fb-sync/fb-sync.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__setting_setting_component__ = __webpack_require__("../../../../../src/app/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__phone_pipe__ = __webpack_require__("../../../../../src/app/phone.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__phone_directive__ = __webpack_require__("../../../../../src/app/phone.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__discover_discover_component__ = __webpack_require__("../../../../../src/app/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__discover_service__ = __webpack_require__("../../../../../src/app/discover.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__fbsync_service__ = __webpack_require__("../../../../../src/app/fbsync.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__activitydate_pipe__ = __webpack_require__("../../../../../src/app/activitydate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__hangout_hangout_component__ = __webpack_require__("../../../../../src/app/hangout/hangout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__distance_pipe__ = __webpack_require__("../../../../../src/app/distance.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__hangout_time_pipe__ = __webpack_require__("../../../../../src/app/hangout-time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__edit_hangout_edit_hangout_component__ = __webpack_require__("../../../../../src/app/edit-hangout/edit-hangout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__mutual_friends_pipe__ = __webpack_require__("../../../../../src/app/mutual-friends.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng2_emoji__ = __webpack_require__("../../../../ng2-emoji/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_20__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_14__registeration_registeration_component__["a" /* RegisterationComponent */] },
    { path: 'fbSignup', component: __WEBPACK_IMPORTED_MODULE_18__fb_signup_fb_signup_component__["a" /* FbSignupComponent */] },
    { path: 'editSignup', component: __WEBPACK_IMPORTED_MODULE_15__edit_registration_edit_registration_component__["a" /* EditRegistrationComponent */] },
    { path: 'verifyPhone', component: __WEBPACK_IMPORTED_MODULE_16__verify_phone_verify_phone_component__["a" /* VerifyPhoneComponent */] },
    { path: 'verifyEmail', component: __WEBPACK_IMPORTED_MODULE_17__verify_email_verify_email_component__["a" /* VerifyEmailComponent */] },
    { path: 'fbSync', component: __WEBPACK_IMPORTED_MODULE_19__fb_sync_fb_sync_component__["a" /* FbSyncComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'discover', component: __WEBPACK_IMPORTED_MODULE_26__discover_discover_component__["a" /* DiscoverComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_36__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'hangout', component: __WEBPACK_IMPORTED_MODULE_31__hangout_hangout_component__["a" /* HangoutComponent */] },
    { path: 'editHangout', component: __WEBPACK_IMPORTED_MODULE_34__edit_hangout_edit_hangout_component__["a" /* EditHangoutComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_23__setting_setting_component__["a" /* SettingComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__registeration_registeration_component__["a" /* RegisterationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__edit_registration_edit_registration_component__["a" /* EditRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__verify_phone_verify_phone_component__["a" /* VerifyPhoneComponent */],
                __WEBPACK_IMPORTED_MODULE_17__verify_email_verify_email_component__["a" /* VerifyEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__fb_signup_fb_signup_component__["a" /* FbSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__fb_sync_fb_sync_component__["a" /* FbSyncComponent */],
                __WEBPACK_IMPORTED_MODULE_20__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_21_ng2_img_cropper__["b" /* ImageCropperComponent */],
                __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_24__phone_pipe__["a" /* PhonePipe */],
                __WEBPACK_IMPORTED_MODULE_25__phone_directive__["a" /* PhoneDirective */],
                __WEBPACK_IMPORTED_MODULE_26__discover_discover_component__["a" /* DiscoverComponent */],
                __WEBPACK_IMPORTED_MODULE_30__activitydate_pipe__["a" /* ActivitydatePipe */],
                __WEBPACK_IMPORTED_MODULE_31__hangout_hangout_component__["a" /* HangoutComponent */],
                __WEBPACK_IMPORTED_MODULE_32__distance_pipe__["a" /* DistancePipe */],
                __WEBPACK_IMPORTED_MODULE_33__hangout_time_pipe__["a" /* HangoutTimePipe */],
                __WEBPACK_IMPORTED_MODULE_34__edit_hangout_edit_hangout_component__["a" /* EditHangoutComponent */],
                __WEBPACK_IMPORTED_MODULE_35__mutual_friends_pipe__["a" /* MutualFriendsPipe */],
                __WEBPACK_IMPORTED_MODULE_36__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyB8UgJ8dYPHFXtkDsfoh_E3kyONeUDYe5w',
                    libraries: ['places']
                }),
                __WEBPACK_IMPORTED_MODULE_10_agm_direction__["a" /* AgmDirectionModule */],
                __WEBPACK_IMPORTED_MODULE_37_ng2_emoji__["a" /* Ng2EmojiModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__agm_core__["c" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_29__fbsync_service__["a" /* FbsyncService */], __WEBPACK_IMPORTED_MODULE_27__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_28__discover_service__["a" /* DiscoverService */], { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatLeft{\r\n    width : 30%;\r\n    border: 1px solid #ccc;\r\n    float : left;\r\n    margin: 2%;\r\n    height: 550px;\r\n    overflow-y: scroll;\r\n}\r\n.chatRight{\r\n    width : 60%;\r\n    border: 1px solid #ccc;\r\n    float: left;\r\n    height: 550px;\r\n    margin: 2%;\r\n}\r\n.chatBottom{\r\n    line-height: 50px;\r\n}\r\n.chatMsg{\r\n    width: 500px;\r\n}\r\n.send-btn{\r\n    vertical-align: 4px;\r\n}\r\n.chatBody{\r\n    overflow-y: auto;\r\n    height: 375px;\r\n    padding: 3%;\r\n}\r\n.last_message{\r\n    float: right;\r\n    width: 70%;\r\n    padding-top: 10px;\r\n    padding-right: 10px;\r\n    margin-bottom: 0px;\r\n}\r\n.last_message span{\r\n    color : #9e9b9b;\r\n}\r\n.friendsList{\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.emoji{\r\n    display:inline-block;\r\n}\r\n:host ::ng-deep .emojioneemoji { \r\n    height: 20px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 chatLeft\">\n        <div *ngIf=\"loader\">\n            <img src=\"assets/images/loader.gif\" width=\"20%\">\n        </div>\n        <div class=\"friendsList\" *ngFor=\"let f of friends\">\n            <img [src]=\"imageBaseUrl + f.profile_image\" *ngIf=\"f.profile_image\" class=\"img-circle\" width=\"60\" height=\"60\" (click)=\"chatWith(f)\">\n            <img src=\"assets/images/noimage.png\" *ngIf=\"!f.profile_image\" class=\"image-circle\" width=\"60\" height=\"60\" (click)=\"chatWith(f)\"> \n            <p class=\"last_message\"> {{f.name}} <br/> <span class=\"lastMsgDiv\" [innerHTML]=\"f.meta.text\"></span></p>\n            <div *ngFor=\"let status of usersStatus\">\n                <p [style.color]=\"'#19cc19'\" *ngIf=\"f.chat_id == status.chat_id\">Online</p>\n            </div>\n            <p [style.color]=\"'pink'\" *ngIf=\"f.meta.favorite == true\">Favorite</p>\n        </div>\n    </div>\n    <div class=\"col-md-8 chatRight\">\n        <div class=\"chatTop\">\n            <h4 class=\"text-center\">{{ username }}</h4>\n            <p class=\"text-center\">{{ status }}</p>\n            <hr/>\n        </div>\n        <div class=\"chatBody\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n            <div *ngFor=\"let chat of chatData\">\n                <div *ngIf=\"chat.sid != chat_id\">\n                    <img [src]=\"imageBaseUrl + friendsImg\" class=\"img-circle\" width=\"50px\" height=\"50px\">\n                    <span *ngIf=\"chat.type == '0'\" [innerHTML]=\"chat.text\"></span>\n                    <img *ngIf=\"chat.type == '1'\" [src]=\"chat.mediaURL\" width=\"100px\" height=\"100px\" style=\"border-radius:5px\">\n                </div>\n                <div class=\"pull-right\" *ngIf=\"chat.sid == chat_id\">\n                    <span *ngIf=\"chat.type == '0'\" [innerHTML]=\"chat.text\"></span>\n                    <img *ngIf=\"chat.type == '1'\" [src]=\"chat.mediaURL\" width=\"100px\" height=\"100px\" style=\"border-radius:5px\">\n                </div>\n                <br>\n            </div>\n            <div *ngIf=\"imgUploadLoader\">\n                <img src=\"assets/images/loader.gif\" width=\"20%\">\n            </div>\n        </div>\n        <div class=\"chatBottom\">\n            <!--input type=\"text\" class=\"chatMsg\" #msg-->\n            <textarea id=\"example1\" class=\"chatMsg\" #msg></textarea>\n            <button class=\"send-btn\" (click)=\"sendMessage(msg.value)\">Send</button>\n            <input type=\"file\" #chatMedia (change)=\"uploadImage()\"/>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    function ChatComponent(profile) {
        var _this = this;
        this.profile = profile;
        this.loader = false;
        this.username = 'Chat Bot';
        this.status = '';
        this.messages = [];
        this.chatData = [];
        this.lastMessage = [];
        this.usersStatus = [];
        this.imgUploadLoader = false;
        this.chat_id = JSON.parse(localStorage.getItem('resData')).chat_id;
        this.token = localStorage.getItem('token');
        this.name = JSON.parse(localStorage.getItem('resData')).name;
        this.image = JSON.parse(localStorage.getItem('resData')).profile_image;
        //this.socket = io();
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"]('https://app.twodegrees.io:4200');
        this.socket.emit('user_online', this.chat_id, this.name);
        this.socket.on('users-status', function (data) {
            _this.usersStatus = [];
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].chat_id != _this.chat_id) {
                        _this.usersStatus.push(data[i]);
                    }
                }
            }
            _this.status = 'online';
        });
        console.log(this.usersStatus);
        this.socket.on('new-message', function (data) {
            _this.chatData.push(data);
            console.log(data);
        });
        this.token = localStorage.getItem('token');
        this.email = JSON.parse(localStorage.getItem('resData')).email;
        this.imageBaseUrl = localStorage.getItem('imgBaseUrl');
        this.loader = true;
        this.profile.chatList(this.token, this.chat_id)
            .subscribe(function (res) {
            console.log(res);
            _this.friends = res.chats;
            _this.loader = false;
        }, function (err) { console.log(err); });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.chatWith = function (user) {
        var _this = this;
        console.log(user);
        this.username = user.name;
        this.to = user.chat_id;
        this.friendsImg = user.profile_image;
        this.status = 'offline';
        this.friendData = user;
        //shows current online user's status
        if (this.usersStatus.length > 0) {
            for (var i = 0; i < this.usersStatus.length; i++) {
                if (this.usersStatus[i].chat_id == user.chat_id) {
                    this.status = 'online';
                    break;
                }
            }
        }
        //get chat history
        this.profile.chatHistory(this.token, this.chat_id, user.chat_id)
            .subscribe(function (res) {
            console.log(JSON.parse(res.chats[0].body));
            console.log(res);
            var data = { chatid: user.chat_id, lastMsg: JSON.parse(res.chats[0].body).text };
            _this.lastMessage.push(data);
            console.log(_this.lastMessage);
            _this.chatData = [];
            for (var i = (res.chats.length - 1); i >= 0; i--) {
                var converted_data = JSON.parse(res.chats[i].body);
                _this.chatData.push(converted_data);
            }
            console.log(_this.chatData);
        }, function (err) { console.log(err); });
    };
    ChatComponent.prototype.sendMessage = function (msg) {
        if (msg.trim().length > 0) {
            var data = {
                message: msg,
                rid: this.friendData.chat_id,
                rname: this.friendData.name,
                sid: this.chat_id,
                sname: this.name,
                image_url: this.mediaFileUrl,
                msgts: Date.parse(Date()),
                type: 0,
                mediaURL: this.friendData.profile_image
            };
            this.socket.emit('send-message', data);
            this.message.nativeElement.value = '';
        }
    };
    ChatComponent.prototype.uploadImage = function () {
        var _this = this;
        this.imgUploadLoader = true;
        var file = this.media.nativeElement.files[0];
        var image = new FormData();
        image.append('file', file);
        this.profile.uploadChatImage(this.token, image)
            .subscribe(function (res) {
            _this.imgUploadLoader = false;
            _this.media.nativeElement.value = '';
            _this.sendImageToXmppServer(res.full_path);
        }, function (err) { console.log(err); _this.imgUploadLoader = false; alert('No image Uploaded![png,jpg allowed only]'); });
    };
    ChatComponent.prototype.sendImageToXmppServer = function (chatImage) {
        var data = {
            message: '',
            rid: this.friendData.chat_id,
            rname: this.friendData.name,
            sid: this.chat_id,
            sname: this.name,
            image_url: this.friendData.profile_image,
            msgts: Date.parse(Date()),
            type: 1,
            mediaURL: chatImage
        };
        this.socket.emit('send-message', data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('chatBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('msg'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('chatMedia'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChatComponent.prototype, "media", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "API_URL", {
        get: function () { return "https://testing.twodegrees.io/"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "APP_ID", {
        get: function () { return "test_Anonymous_786"; },
        enumerable: true,
        configurable: true
    });
    ;
    return Constants;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pac-container {\r\n    z-index: 99999999999999 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"z-index:1000;\">\n    <button class=\"pull-right btn btn-default\"  (click) = \"logout()\">Logout</button>\n    <a class=\"btn btn-default pull-right\" [routerLink] = \"['/account']\">Account</a>\n    <a class=\"btn btn-default pull-right\" [routerLink] = \"['/discover']\">Discover</a>\n    <a class=\"btn btn-default pull-right\" [routerLink] = \"['/chat']\">Chat</a>\n    <button class=\"pull-right\" [hidden]=\"!edit\" (click)=\"fbSync()\">FbSync</button>\n    <a class=\"btn btn-default pull-left\" [routerLink] = \"['/hangout']\">Hangout</a>\n    <button (click) = \"edit = true\" [hidden] = \"edit\">Edit Profile</button>\n    <button (click) = \"editProfile()\" [hidden] = \"!edit\">Save Changes</button>\n    <div style=\"width:50%;height:250px;margin:0px auto;background:#ccc;\">\n        <img [src]=\"fImage\" alt=\"Featured Picture\" class=\"img-square\" (click)=\"enableEdit('fImg')\" width=\"100%\" style=\"height:250px !important;\" *ngIf=\"fImage\">\n        <img src=\"../../assets/images/noimage.png\" class=\"img-square\" (click)=\"enableEdit('fImg')\" width=\"100%\" style=\"height:100px !important;\" alt=\"No Image\" *ngIf=\"!fImage\">    \n    </div>\n    <div style=\"width:50%;margin:0px auto;\">\n        <br>\n        <div class=\"pull-left text-center\">\n            <div style=\"width:150px;height:150px;\">\n                <img [src]=\"image\" alt=\"Profile Picture\" class=\"img-circle\" (click)=\"enableEdit('dp')\" width=\"100%\" height=\"100%\" *ngIf=\"image\">\n                <img src=\"../../assets/images/noimage.png\" class=\"img-circle\" (click)=\"enableEdit('dp')\" width=\"100%\" alt=\"No Image\" *ngIf=\"!image\">    \n            </div>\n        </div>\n        <div class=\"pull-left\">\n            <h2 style=\"text-transform: capitalize;\">{{ name }}</h2>\n            <p><span *ngIf='!edit'>{{ age }}</span>, {{ gender}} </p>\n            <p>{{ city }}, {{ state}}</p>\n        </div>\n    </div>\n    <input type=\"file\" [hidden]=\"true\" [disabled]=\"!edit\" data-width=\"150\" data-height=\"30\" name=\"PROFILE_IMAGE\" (change)=\"fileChangeListener($event)\" #file>\n    <input type=\"file\" [hidden]=\"true\" [disabled]=\"!edit\" data-width=\"683\" data-height=\"248\" name=\"FEATURED_IMAGE\" (change)=\"fileChangeListener($event)\" #file2>\n    <br><br><br><br><br><br>\n    <div style=\"width:50%;margin:0px auto;\">\n        <div class=\"pull-right\" (click)=\"profileScoreModal.show()\">Profile {{score}}% Complete</div>\n        <h4>Info</h4>\n        <h4 *ngIf='edit'>Age</h4>\n        <input type=\"date\" *ngIf='edit' #dob>\n        <hr>\n        <h4>Hometown <a *ngIf='edit' class=\"pull-right\" (click)=\"enableEdit('hometown')\">&#9998;</a></h4>\n        <p>{{ hometown }}</p>\n        <hr>\n        <h4>Current City <a *ngIf='edit' class=\"pull-right\" (click)=\"enableEdit('city')\">&#9998;</a></h4>\n        <p>{{city}}, {{state}}</p>\n        <hr>\n        <h4>Organizations</h4>\n        <div *ngIf=\"serOrgData\">\n            <div *ngFor=\"let sod of serOrgData\">\n                <h5>{{sod.type}} <a *ngIf='edit' (click)=\"delOrg(sod.id)\">&#9587;</a></h5>\n                <p>{{sod.name}}</p>\n            </div>\n        </div>\n        <button (click)=\"enableEdit('org')\">Add Organization</button>\n        <div *ngIf=\"!serOrgData\"><p>Not Set</p></div>\n        <hr>\n        <h4>Education</h4>\n        <div *ngIf=\"serEduData\">\n            <div *ngFor=\"let sed of serEduData\">\n                <h5><span *ngIf=\"sed.type == 'School'\">High School</span><span *ngIf=\"sed.type == 'College'\">College/University</span><a *ngIf='edit' (click)=\"delEdu(sed.id)\">&#9587;</a></h5>\n                <p>{{sed.title}}</p>\n                <hr>\n            </div>\n        </div>\n        <div *ngIf=\"!serEduData\"><p>Not Set</p></div>\n        <button (click)=\"enableEdit('edu')\">Add Education</button>\n        <h4>Activities <a *ngIf='edit' class=\"pull-right\">&#9998;</a></h4>\n        <p></p>\n        <hr><br>\n        <h4>{{ friends?.length }} Friends<span class=\"pull-right\">{{ mutualFrndz }} Mutual Friends</span></h4>\n        <hr>\n        <div *ngFor=\"let friend of friends\">\n            <img [src]=\"imgBaseUrl + friend.profile_image\" alt=\"Profile Picture\" class=\"img-circle\" (click)=\"viewProfile(friend.email)\" width=\"10%\" *ngIf=\"friend.profile_image\">\n            <img src=\"https://testing007.s3-api.us-geo.objectstorage.softlayer.net/B2688594CA2B11E7BFD706E21CB7534C---prof__myImage.jpg\" (click)=\"viewProfile(friend.email)\" class=\"img-circle\" width=\"10%\" alt=\"No Image\" *ngIf=\"!friend.profile_image\">\n            <div class=\"pull-right\">\n                <h4>{{ friend.name }}</h4>\n                <a (click)=\"viewMutualFriends(friend.email)\"><p>{{ friend.common_friends_count }} Mutual Friends</p></a>\n            </div>\n            <hr>    \n        </div>\n        <h4>Recent Activities</h4>\n        <hr>\n        <div *ngIf=\"checkInData\">\n            <div *ngFor=\"let cid of checkInData\">\n                <p>\n                    <span class=\"pull-left\">\n                        <strong>{{ cid.venue.title }}</strong>\n                    </span>\n                    <span class=\"pull-right\">\n                        {{ cid?.start | activitydate }} <span *ngIf='edit' [style.color]=\"'red'\" (click)=\"delActivity(cid.id)\">&#9587;</span>\n                    </span>\n                </p>\n                <br>\n            </div>\n        </div>\n        <div *ngIf=\"!checkInData || loader\"  class=\"text-center\">\n            <img src=\"assets/images/loader.gif\" width=\"20%\">\n        </div>\n        <hr>\n    </div>\n</div>\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\">\n    <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <h3 *ngIf=\"imgUploading\">{{ imgUploading }}</h3>\n            <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n            <br>\n            <span class=\"result rounded\" *ngIf=\"data.image\" >\n                <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n            </span>\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">Close</button>\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"uploadDpImg(data.image)\">Upload</button>\n        </div>\n    </div>\n    </div>\n</div>\n\n<div bsModal #profileScoreModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display:none;\">\n    <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header text-center\">Profile Score</div>\n        <div class=\"modal-body\">\n            <h5>Profile Completion</h5><hr>\n            <p>{{score}}%</p>\n            <div class=\"progress\">\n                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"score\"></div>\n            </div>\n            <hr>\n            <h5>Incomplete</h5><hr>\n            <p *ngIf=\"!sync\">Sync Contacts<span class=\"pull-right\">Not Synced</span></p><hr *ngIf=\"!sync\">\n            <p *ngIf=\"!shareLoc\">Share Location<span class=\"pull-right\">Disabled</span></p><hr *ngIf=\"!shareLoc\">\n            <p *ngIf=\"!pVerify\">Verify Phone<span class=\"pull-right\">Not Verified</span></p><hr *ngIf=\"!pVerify\">\n            <p *ngIf=\"!eVerify\">Verify Email<span class=\"pull-right\">Not Verified</span></p><hr *ngIf=\"!eVerify\">\n            <p *ngIf=\"!image\">Profile Image<span class=\"pull-right\">Not Uploaded</span></p><hr *ngIf=\"!image\">\n            <p *ngIf=\"!fImage\">Feature Photos<span class=\"pull-right\">Not Uploaded</span></p><hr *ngIf=\"!fImage\">\n            <p *ngIf=\"!age1\">Birthday<span class=\"pull-right\">Add</span></p><hr *ngIf=\"!age1\">\n            <p *ngIf=\"!relationship\">Relationship Status<span class=\"pull-right\">Add</span></p><hr *ngIf=\"!relationship\">\n            <p *ngIf=\"!serEduData\">Education<span class=\"pull-right\">Add</span></p><hr *ngIf=\"!serEduData\">\n            <p *ngIf=\"!serOrgData\">Organization<span class=\"pull-right\">Add</span></p><hr *ngIf=\"!serOrgData\">\n            <h5>Complete</h5><hr>\n            <p *ngIf=\"sync\">Sync Contacts<span class=\"pull-right\">Synced</span></p><hr *ngIf=\"sync\">\n            <p *ngIf=\"shareLoc\">Share Location<span class=\"pull-right\">Enabled</span></p><hr *ngIf=\"shareLoc\">\n            <p *ngIf=\"pVerify\">Verify Phone<span class=\"pull-right\">Verified</span></p><hr *ngIf=\"pVerify\">\n            <p *ngIf=\"eVerify\">Verify Email<span class=\"pull-right\">Verified</span></p><hr *ngIf=\"eVerify\">\n            <p *ngIf=\"image\">Profile Image<span class=\"pull-right\">Uploaded</span></p><hr *ngIf=\"image\">\n            <p *ngIf=\"fImage\">Feature Photos<span class=\"pull-right\">Uploaded</span></p><hr *ngIf=\"fImage\">\n            <p *ngIf=\"age1\">Birthday<span class=\"pull-right\">{{ age1 | date }}</span></p><hr *ngIf=\"age1\">\n            <p *ngIf=\"relationship\">Relationship Status<span class=\"pull-right\">{{ relationship }}</span></p><hr *ngIf=\"relationship\">\n            <p *ngIf=\"serEduData\">Education<span class=\"pull-right\">Added</span></p><hr *ngIf=\"serEduData\">\n            <p *ngIf=\"serOrgData\">Organization<span class=\"pull-right\">Added</span></p><hr *ngIf=\"serOrgData\">\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"profileScoreModal.hide()\">Close</button>    \n        </div>\n    </div>\n    </div>\n</div>\n\n<div bsModal #mutualFrndzModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body\">\n            <div *ngIf=\"loader\">\n                <img src=\"assets/images/loader.gif\" width=\"50%\" class=\"text-center\">\n            </div>\n            <div *ngFor=\"let friend of mutualFriends\">\n                <img [src]=\"imgBaseUrl + friend.profile_image\" alt=\"Profile Picture\" class=\"img-circle\" (click)=\"viewProfile(friend.email)\" width=\"10%\" *ngIf=\"friend.profile_image\">\n                <img src=\"https://testing007.s3-api.us-geo.objectstorage.softlayer.net/B2688594CA2B11E7BFD706E21CB7534C---prof__myImage.jpg\" (click)=\"viewProfile(friend.email)\" class=\"img-circle\" width=\"10%\" alt=\"No Image\" *ngIf=\"!friend.profile_image\">\n                <div class=\"pull-right\">\n                    <h4>{{ friend.name }}</h4>\n                    <p *ngIf=\"friend.meta\">{{ friend.meta.count }} Friends</p>\n                </div>\n                <hr>    \n            </div>\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"mutualFrndzModal.hide()\">Close</button>\n        </div>\n    </div>\n    </div>\n</div>\n\n<div bsModal #updateModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <div *ngIf=\"editFImg\">\n                <h4>Featured Images</h4>\n                <div>\n                    <ul class=\"pull-left\" dnd-sortable-container [sortableData]=\"featuredImages\">\n                        <li *ngFor=\"let fimg of featuredImages; let i = index\" dnd-sortable [sortableIndex]=\"i\">\n                            <img [src]=\"imgBaseUrl + fimg\" alt=\"Profile Picture\" class=\"img-square pull-left\"  width=\"100px\" height=\"100px\"  *ngIf=\"featuredImages\">\n                            <span (click)=\"delPic(fimg)\">&#9587;</span>\n                        </li>\n                    </ul>\n                </div>\n                <button (click)=\"uploadTrigger(file2)\">Add</button>\n            </div>\n            <img src=\"../../assets/images/loader.gif\" width=\"10%\" alt=\"loading.....\"  *ngIf=\"loader\">\n            <div *ngIf=\"editDp\">\n                <h4>Profile Picture</h4>\n                <img [src]=\"image\" alt=\"Profile Picture\" class=\"img-circle\"  width=\"50%\"  *ngIf=\"image\">\n                <img src=\"../../assets/images/noimage.png\" class=\"img-circle\"  width=\"50%\" alt=\"No Image\" *ngIf=\"!image\">\n                <button (click)=\"uploadTrigger(file)\">Upload New</button>\n                <button (click)=\"delPic('')\">Delete</button>    \n            </div>\n            <div *ngIf=\"editHomeTown\">\n                <h4>Hometown</h4>\n                <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" (keyup)=\"setHometown($event)\" #search [formControl]=\"searchControl\">\n                <!--ng4geo-autocomplete *ngIf='edit' (componentCallback)=\"setHometown($event)\"></ng4geo-autocomplete-->\n                <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"saveUpdate('hometown')\">Save</button>\n            </div>\n            <div *ngIf=\"editCity\">\n                <h4>City</h4>\n                <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" (keyup)=\"setCity($event)\" #city [formControl]=\"citySearch\">\n                <!--ng4geo-autocomplete *ngIf='edit' (componentCallback)=\"setCity($event)\"></ng4geo-autocomplete-->\n                <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"saveUpdate('city')\">Save</button>\n            </div>\n            <div *ngIf=\"editOrg\">\n                <h4>Add Organization</h4>\n                <select #org>\n                    <option value=\"\">Select</option>\n                    <option value=\"SORORITY\">SORORITY</option>\n                    <option value=\"FRATERNITY\">FRATERNITY</option>\n                </select><br>\n                <input type=\"text\" placeholder=\"Search\" (keyup)=\"searchOrg()\" #searchStr>\n                <div *ngIf=\"orgData\">\n                    <select #orgId>\n                        <option value=\"\">Search Result</option>\n                        <option  *ngFor=\"let od of orgData.gos\" [value]=\"od.id\">{{od.name}}</option>\n                    </select>\n                </div>\n                <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"saveUpdate('org')\">Save</button>\n            </div>\n            <div *ngIf=\"editEdu\">\n                <h4>Add Education</h4>\n                <select #edu>\n                    <option value=\"\">Select</option>\n                    <option value=\"School\">High School</option>\n                    <option value=\"College\">College/University</option>\n                </select><br>\n                <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" (keyup)=\"addEdu($event)\" #school [formControl]=\"schoolSearch\">\n                <!--ng4geo-autocomplete (componentCallback)=\"addEdu($event)\"></ng4geo-autocomplete-->\n                <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"saveUpdate('edu')\">Save</button>\n            </div>\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"hideUpdateModal()\">Close</button>\n        </div>\n    </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent(router, profile, mapsAPILoader, ngZone) {
        var _this = this;
        this.router = router;
        this.profile = profile;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.edit = false;
        this.loader = false;
        this.image = '';
        this.editHomeTown = false;
        this.editCity = false;
        this.editOrg = false;
        this.fImage = '';
        this.editEdu = false;
        this.editDp = false;
        this.editFImg = false;
        this.name = '---';
        this.age = 0;
        this.gender = '---';
        this.city = '---';
        this.state = '---';
        this.imgUploading = '';
        this.score = '';
        this.mutualFrndz = 0;
        this.hometown = 'Not Set';
        this.education = [];
        this.token = localStorage.getItem('token');
        if (!this.token) {
            router.navigate(['login']);
        }
        else {
            var storeImgBaseUrl = localStorage.getItem('imgBaseUrl');
            if (storeImgBaseUrl) {
                this.imgBaseUrl = storeImgBaseUrl;
                this.setImages(this.imgBaseUrl);
            }
            else {
                this.profile.config()
                    .subscribe(function (res) {
                    localStorage.setItem('imgBaseUrl', res.CONFIG.IMAGE_BASE_URL);
                    _this.imgBaseUrl = res.CONFIG.IMAGE_BASE_URL;
                    _this.setImages(_this.imgBaseUrl);
                }, function (err) { console.log(err); });
            }
        }
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.preserveSize = true;
        this.cropperSettings.keepAspect = false;
        this.cropperSettings.canvasWidth = 500;
        this.cropperSettings.canvasHeight = 400;
        this.data = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //return Math.abs(Math.round(diff));
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        this.citySearch = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        this.schoolSearch = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        var userData = JSON.parse(localStorage.getItem('resData'));
        var chatId = userData.chat_id;
        console.log(userData);
        this.setView(userData);
        var degree = 'ZERO_DEGREE', sortBy = 'name__ASC', page = 0;
        var friends = JSON.parse(localStorage.getItem('friends'));
        if (friends != null) {
            this.friends = friends.friends;
            this.mutualFrndz = this.totalMutualFrndz(friends.friends);
        }
        else {
            //get Friend List
            this.profile.friendsList(this.email, this.token, degree, sortBy, page)
                .subscribe(function (res) {
                console.log(res);
                localStorage.setItem('friends', JSON.stringify(res));
                _this.friends = res.friends;
                _this.mutualFrndz = _this.totalMutualFrndz(res.friends);
            }, function (err) { console.log(err); });
        }
        //get all Checkin 
        this.profile.getCheckIn(this.email, this.token)
            .subscribe(function (res) {
            console.log(res.hangouts);
            _this.checkInData = res.hangouts;
        }, function (err) { console.log(err); });
    };
    DashboardComponent.prototype.totalMutualFrndz = function (data) {
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            count += data[i].common_friends_count;
        }
        return count;
    };
    DashboardComponent.prototype.searchOrg = function () {
        var _this = this;
        var cat = this.cat.nativeElement.value, searchStr = this.searchStr.nativeElement.value;
        this.profile.searchOrg(this.token, cat, searchStr)
            .subscribe(function (res) {
            console.log(res);
            _this.orgData = res;
        }, function (err) {
            console.log(err);
            alert('Nothing Found!');
        });
    };
    DashboardComponent.prototype.delOrg = function (id) {
        var _this = this;
        this.profile.delOrg(this.token, this.email, id)
            .subscribe(function (res) {
            console.log(res);
            _this.profile.getProfile(_this.email, _this.token)
                .subscribe(function (res) {
                localStorage.setItem('resData', JSON.stringify(res));
                _this.setView(res);
            }, function (err) { console.log(err); });
        }, function (err) { console.log(err); });
    };
    DashboardComponent.prototype.delActivity = function (id) {
        var _this = this;
        this.loader = true;
        this.profile.delCheckIn(this.email, this.token, id)
            .subscribe(function (res) {
            _this.profile.getCheckIn(_this.email, _this.token)
                .subscribe(function (res) {
                console.log(res.hangouts);
                _this.loader = false;
                _this.checkInData = res.hangouts;
            }, function (err) { console.log(err); });
        }, function (err) {
            _this.loader = false;
            alert(err);
            console.log(err);
        });
    };
    DashboardComponent.prototype.addEdu = function (selectedData) {
        var _this = this;
        //console.log(selectedData)
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.schoolElement.nativeElement, { types: ['establishment'] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    _this.eLat = place.geometry.location.lat();
                    _this.eLng = place.geometry.location.lng();
                    _this.eAddress = place.formatted_address;
                    _this.ePlaceName = place.name;
                    _this.ePlaceId = place.place_id;
                });
            });
        });
    };
    DashboardComponent.prototype.delEdu = function (id) {
        var _this = this;
        this.profile.delEdu(this.token, this.email, id)
            .subscribe(function (res) {
            console.log(res);
            _this.profile.getProfile(_this.email, _this.token)
                .subscribe(function (res) {
                localStorage.setItem('resData', JSON.stringify(res));
                _this.setView(res);
            }, function (err) { console.log(err); });
        }, function (err) { console.log(err); });
    };
    DashboardComponent.prototype.setHometown = function (selectedData) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, { types: ['address'] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    _this.hLat = place.geometry.location.lat();
                    _this.hLng = place.geometry.location.lng();
                });
            });
        });
    };
    DashboardComponent.prototype.setCity = function (selectedData) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.cityElement.nativeElement, { types: ['address'] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    _this.cLat = place.geometry.location.lat();
                    _this.cLng = place.geometry.location.lng();
                });
            });
        });
    };
    DashboardComponent.prototype.viewProfile = function (userEmail) {
        localStorage.setItem('frndEmail', userEmail);
        this.router.navigate(['/profile']);
    };
    DashboardComponent.prototype.viewMutualFriends = function (userEmail) {
        var _this = this;
        this.mutualFriends = [];
        this.mfModal.show();
        this.loader = true;
        this.profile.getMutualFriends(this.email, this.token, userEmail)
            .subscribe(function (res) {
            _this.loader = false;
            console.log(res);
            _this.mutualFriends = res.mutual_friends;
        }, function (err) { _this.loader = false; console.log(err); });
    };
    DashboardComponent.prototype.editProfile = function () {
        var _this = this;
        this.edit = false;
        var birthday;
        birthday = this.dob !== undefined ? this.dob.nativeElement.value : null;
        if (birthday) {
            var data = { dob: birthday + " 00:00:00" };
            this.profile.updateProfile(this.email, this.token, data)
                .subscribe(function (res) {
                localStorage.setItem('resData', JSON.stringify(res));
                _this.age = _this.getAge(res.dob.substr(0, res.dob.indexOf('T')));
            }, function (err) {
                alert('Birthday not Updated');
                console.log(err);
            });
        }
    };
    DashboardComponent.prototype.saveUpdate = function (updateType) {
        var _this = this;
        if (updateType == 'hometown') {
            console.log(this.hLat, this.hLng);
            if (this.hLat && this.hLng) {
                var data = { city_lat: this.hLat, city_lng: this.hLng, city_source: 'GOOGLE_PLACES' };
                this.profile.updateProfile(this.email, this.token, data)
                    .subscribe(function (res) {
                    localStorage.setItem('resData', JSON.stringify(res));
                    _this.hometown = res.city.name + ', ' + res.city.state;
                    _this.hideUpdateModal();
                }, function (err) {
                    alert('Hometown not Updated');
                    console.log(err);
                });
            }
        }
        else if (updateType == 'city') {
            console.log(this.cLat, this.cLng);
            if (this.cLat && this.cLng) {
                var data = { current_city_lat: this.cLat, current_city_lng: this.cLng, current_city_source: 'GOOGLE_PLACES' };
                this.profile.updateProfile(this.email, this.token, data)
                    .subscribe(function (res) {
                    localStorage.setItem('resData', JSON.stringify(res));
                    _this.city = res.current_city.name;
                    _this.state = res.current_city.state;
                    _this.hideUpdateModal();
                }, function (err) {
                    alert('City not Updated');
                    console.log(err);
                });
            }
        }
        else if (updateType == 'org') {
            var organizationId = void 0;
            organizationId = this.orgId !== undefined ? this.orgId.nativeElement.value : null;
            if (organizationId) {
                var data = { go_id: organizationId };
                this.profile.addOrg(this.token, this.email, data)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.profile.getProfile(_this.email, _this.token)
                        .subscribe(function (res) {
                        localStorage.setItem('resData', JSON.stringify(res));
                        _this.setView(res);
                        _this.hideUpdateModal();
                    }, function (err) { console.log(err); });
                }, function (err) { console.log(err); });
            }
        }
        else if (updateType == 'edu') {
            //if(this.education.length > 0){
            var type = this.eduType.nativeElement.value;
            var raw_data = { address: this.eAddress, id: this.ePlaceId, lat: this.eLat, lng: this.eLng, name: this.ePlaceName };
            var data = [{ title: this.ePlaceName, lat: this.eLat, lng: this.eLng, type: type, raw_data: raw_data, id: this.ePlaceId, source: 'GOOLGE_PLACES', year: '2013-02-02 00:00:00' }];
            console.log(data);
            this.profile.addEdu(this.token, this.email, JSON.stringify(data))
                .subscribe(function (res) {
                console.log(res);
                _this.profile.getProfile(_this.email, _this.token)
                    .subscribe(function (res) {
                    localStorage.setItem('resData', JSON.stringify(res));
                    _this.setView(res);
                    _this.education = [];
                    _this.hideUpdateModal();
                }, function (err) { console.log(err); });
            }, function (err) { console.log(err); });
            //}
        }
    };
    DashboardComponent.prototype.fbSync = function () {
    };
    DashboardComponent.prototype.fileChangeListener = function (event) {
        this.editDp = false;
        this.cropperSettings.width = event.target.dataset.width;
        this.cropperSettings.height = event.target.dataset.height;
        this.cropperSettings.compressRatio = this.cropperSettings.width / this.cropperSettings.height;
        this.cropperSettings.minWidth = event.target.dataset.width;
        this.cropperSettings.minHeight = event.target.dataset.height;
        this.imgType = event.target.name;
        var image = new Image();
        var file = event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
        this.editDp = false;
        this.showChildModal();
        this.updateModal.hide();
    };
    DashboardComponent.prototype.uploadTrigger = function (file) {
        file.click();
    };
    DashboardComponent.prototype.uploadDpImg = function (img) {
        var _this = this;
        this.loader = true;
        var fileData;
        if (this.fileInput.nativeElement.files[0]) {
            fileData = this.fileInput.nativeElement.files[0];
        }
        else {
            fileData = this.fileInput2.nativeElement.files[0];
        }
        var fname = fileData.name, mime = fileData.mime;
        var croppedImg = this.dataURLtoFile(img, fname, mime);
        this.imgUploading = 'Uploading Image..............';
        var formData = new FormData();
        formData.append('file', croppedImg);
        this.profile.uploadProfileImage(this.email, formData, this.imgType, this.token)
            .subscribe(function (res) {
            _this.loader = false;
            _this.imgUploading = '';
            localStorage.setItem('resData', JSON.stringify(res));
            _this.image = _this.imgBaseUrl + res.profile_image;
            if (_this.editFImg == true) {
                _this.childModal.hide();
            }
            else {
                _this.hideChildModal();
            }
            if (res.featured_image) {
                _this.fImage = _this.imgBaseUrl + res.featured_image[res.featured_image.length - 1];
                _this.featuredImages = res.featured_image;
                if (_this.imgType == 'FEATURED_IMAGE')
                    _this.updateModal.show();
            }
        }, function (err) {
            _this.loader = false;
            _this.imgUploading = 'No image uploaded!';
            console.log(err);
        });
    };
    DashboardComponent.prototype.dataURLtoFile = function (dataurl, filename, mime) {
        var arr = dataurl.split(','), bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        if (mime === 'image/jpeg') {
            mime = 'image/jpg';
            filename = 'image.jpg';
        }
        return new File([u8arr], filename, { type: mime });
    };
    DashboardComponent.prototype.delPic = function (name) {
        var _this = this;
        this.loader = true;
        if (!name) {
            var img = JSON.parse(localStorage.getItem('resData')).profile_image;
            this.profile.deleteImage(this.email, img, this.token)
                .subscribe(function (res) {
                _this.loader = false;
                _this.profile.getProfile(_this.email, _this.token)
                    .subscribe(function (res) {
                    localStorage.setItem('resData', JSON.stringify(res));
                    _this.setView(res);
                    _this.editDp = false;
                    _this.image = '';
                    _this.score = res.score;
                    _this.hideUpdateModal();
                }, function (err) { console.log(err); _this.loader = false; });
            }, function (err) { console.log(err); _this.loader = false; });
        }
        else {
            this.profile.deleteImage(this.email, name, this.token)
                .subscribe(function (res) {
                _this.loader = false;
                _this.profile.getProfile(_this.email, _this.token)
                    .subscribe(function (res) {
                    localStorage.setItem('resData', JSON.stringify(res));
                    _this.setView(res);
                    _this.setImages(_this.imgBaseUrl);
                    _this.score = res.score;
                }, function (err) { console.log(err); _this.loader = false; });
            }, function (err) { console.log(err); _this.loader = false; });
        }
    };
    DashboardComponent.prototype.setImages = function (baseUrl) {
        this.fImage = '';
        var fimg, len;
        var img = JSON.parse(localStorage.getItem('resData')).profile_image;
        if (JSON.parse(localStorage.getItem('resData')).featured_image) {
            len = JSON.parse(localStorage.getItem('resData')).featured_image.length;
            fimg = JSON.parse(localStorage.getItem('resData')).featured_image[len - 1];
        }
        if (img !== undefined && baseUrl !== null) {
            this.image = baseUrl + img;
        }
        else {
            this.image = '';
        }
        if (fimg) {
            this.fImage = baseUrl + fimg;
        }
    };
    DashboardComponent.prototype.setView = function (data) {
        this.email = data.email;
        this.featuredImages = data.featured_image;
        this.relationship = data.relationship;
        this.age1 = data.dob;
        if (this.age1) {
            var newAge = this.age1.substr(0, this.age1.indexOf('T'));
            this.age = this.getAge(newAge);
        }
        this.age1 = this.age1.substr(0, this.age1.indexOf('T'));
        this.name = data.name;
        this.gender = data.gender;
        this.score = data.score;
        if (Object.keys(data.current_city).length) {
            this.city = data.current_city.name;
            this.state = data.current_city.state;
        }
        if (Object.keys(data.city).length) {
            this.hometown = data.city.name + ', ' + data.city.state;
        }
        if (Object.keys(data.gos).length) {
            this.serOrgData = data.gos;
        }
        else {
            this.nSerOrgData = 'Not Set';
        }
        if (Object.keys(data.education).length) {
            this.serEduData = data.education;
        }
        else {
            this.nSerEduData = 'Not Set';
        }
        this.sync = data.sync_status;
        this.shareLoc = data.location;
        this.eVerify = data.email_verified;
        this.pVerify = data.phone_number_verfied;
    };
    DashboardComponent.prototype.getAge = function (birthday) {
        var dob = new Date(birthday);
        var ageDifMs = Date.now() - dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age;
    };
    DashboardComponent.prototype.enableEdit = function (btn) {
        if (btn == 'dp') {
            if (this.edit) {
                this.editDp = true;
                this.updateModal.show();
            }
        }
        else if (btn == 'fImg') {
            if (this.edit) {
                this.editFImg = true;
                this.updateModal.show();
            }
        }
        else if (btn == 'hometown') {
            this.editHomeTown = true;
            this.updateModal.show();
        }
        else if (btn == 'city') {
            this.editCity = true;
            this.updateModal.show();
        }
        else if (btn == 'org') {
            this.editOrg = true;
            this.updateModal.show();
        }
        else if (btn == 'edu') {
            this.editEdu = true;
            this.updateModal.show();
        }
    };
    DashboardComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    DashboardComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
        if (this.editFImg == true || this.editDp == true)
            this.updateModal.show();
        this.editHomeTown = false;
        this.editCity = false;
        this.editOrg = false;
        this.editEdu = false;
        this.fileInput.nativeElement.value = "";
        this.fileInput2.nativeElement.value = "";
        this.imgUploading = "";
    };
    DashboardComponent.prototype.hideUpdateModal = function () {
        if (this.editFImg) {
            this.sortFeaturedImages(this.featuredImages);
        }
        if (this.cityElement)
            this.cityElement.nativeElement.value = '';
        this.citySearch = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        if (this.searchElementRef)
            this.searchElementRef.nativeElement.value = '';
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        if (this.schoolElement)
            this.schoolElement.nativeElement.value = '';
        this.schoolSearch = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        this.editDp = false;
        this.editFImg = false;
        this.editHomeTown = false;
        this.editCity = false;
        this.editOrg = false;
        this.editEdu = false;
        this.updateModal.hide();
    };
    DashboardComponent.prototype.sortFeaturedImages = function (data) {
        var _this = this;
        this.profile.sortFeatureImages(this.email, this.token, JSON.stringify(data))
            .subscribe(function (res) {
            localStorage.setItem('resData', JSON.stringify(res));
            _this.setView(res);
            _this.setImages(_this.imgBaseUrl);
            alert('Sorted');
        }, function (err) { console.log(err); });
    };
    DashboardComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DashboardComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("city"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DashboardComponent.prototype, "cityElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("school"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DashboardComponent.prototype, "schoolElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('cropper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */])
    ], DashboardComponent.prototype, "cropper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('childModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], DashboardComponent.prototype, "childModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('mutualFrndzModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], DashboardComponent.prototype, "mfModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('profileScoreModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], DashboardComponent.prototype, "psModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('updateModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], DashboardComponent.prototype, "updateModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('file'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('file2'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('dob'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "dob", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('org'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "cat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('searchStr'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "searchStr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('orgId'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "orgId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('edu'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "eduType", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_6__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/discover.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscoverService = (function () {
    function DiscoverService(http) {
        this.http = http;
    }
    DiscoverService.prototype.friendsList = function (email, token, degree, sortBy, page) {
        var newemail = email != 'logics.tester@gmail.com' ? email : 'logics.tester@gmail.com';
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + newemail + "/friends?degree=" + degree + "&sort=" + sortBy + "&page=" + page, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    DiscoverService.prototype.distanceFilter = function (email, token, degree, distance, sortBy, page) {
        var newemail = email != 'logics.tester@gmail.com' ? email : 'logics.tester@gmail.com';
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + 'logics.tester@gmail.com' + "/friends?degree=" + degree + "&distance=" + distance + "&sort=" + sortBy + "&page=" + page, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    DiscoverService.prototype.searchFilter = function (email, token, user_name) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + 'logics.tester@gmail.com' + "/friends?degree=ZERO_DEGREE&sort=distance__ASC&page=0&user_name=" + user_name, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    DiscoverService.prototype.checkIn = function (email, token, data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    DiscoverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DiscoverService);
    return DiscoverService;
}());



/***/ }),

/***/ "../../../../../src/app/discover/discover.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 400px;\r\n}\r\n.gm-style div{color: #fff !important; font-weight: bold;}\r\nagm-map agm-marker{\r\n  border-radius: 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discover/discover.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-default pull-left\" [routerLink] = \"['/dashboard']\">Home</a>\n<button class=\"btn btn-default pull-right\" (click)=\"checkInModal.show()\">CheckIn</button>\n<div class=\"container\">\n    <div class=\"row well\">\n        <br>\n        <div class=\"col-md-2\">\n            <input type=\"search\" placeholder=\"Search\" (change)=\"search($event)\">\n        </div>\n        <div class=\"col-md-3\">\n            Show:\n            <input type=\"radio\" name=\"degree\" [checked]=\"true\" value=\"ONE_DEGREE\" (change)=\"friendType($event)\"/>1°\n            <input type=\"radio\" name=\"degree\" value=\"TWO_DEGREE\" (change)=\"friendType($event)\"/>2°\n            <input type=\"radio\" name=\"degree\" value=\"ZERO_DEGREE\" (change)=\"friendType($event)\"/>0°\n        </div>\n        <div class=\"col-md-3\">\n            SortBy:\n            <select (change)=\"sortByFilter($event)\">\n                <option value=\"\">Select</option>\n                <option value=\"name__ASC\">Name</option>\n                <option value=\"mutual_friends_count__ASC\">Mutual Friends</option>\n                <option value=\"distance__ASC\">Distance</option>\n            </select>\n        </div>\n        <div class=\"col-md-4\">\n            Search Radius: <input type=\"range\" min=\"1\" max=\"100\" [value]=\"miles\" class=\"slider\" step=\"0.1\" (change)=\"milesFilter($event)\"> {{miles}} mi\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div *ngIf=\"loader\">\n                <img src=\"assets/images/loader.gif\" width=\"20%\">\n            </div>\n            <div *ngFor=\"let f of friends\">\n                <img [src]=\"imageBaseUrl + f.profile_image\" *ngIf=\"f.profile_image\" class=\"img-circle\" width=\"60\" height=\"60\">\n                <img src=\"assets/images/noimage.png\" *ngIf=\"!f.profile_image\" class=\"image-circle\" width=\"60\" height=\"60\">\n                {{f.name}} | {{f.common_friends_count}} Mutual Friends | {{ getdistance(lat,lng,f.lat,f.lng) }} | Favorite : {{ f.meta.favorite }}\n            </div>\n        </div>\n        <div class=\"col-md-9\">\n            <agm-map [zoom]=\"zoom\" [latitude]=\"lat\" [longitude]=\"lng\">\n                <div *ngIf=\"dir\">\n                    <agm-direction [origin]=\"dir.origin\" [destination]=\"dir.destination\"></agm-direction>\n                </div>\n                <agm-marker *ngFor=\"let f of friends\" [iconUrl]=\"f.profile_image ? {url: imageBaseUrl + f.profile_image,scaledSize: {height: 40,width: 40},shape:{cords:['40,40,15'],type:'circle',stroke:'black'}} : {url: 'assets/images/noimage.png',scaledSize: {height: 40,width: 40}}\" [latitude]=\"f.lat\" [longitude]=\"f.lng\" (markerClick)=\"echo(f.lat,f.lng)\">\n                    <agm-info-window>\n                        <img [src]=\"imageBaseUrl + f.profile_image\" *ngIf=\"f.profile_image\" class=\"img-circle\" width=\"60\" height=\"60\">\n                        <img src=\"assets/images/noimage.png\" *ngIf=\"!f.profile_image\" class=\"image-circle\" width=\"60\" height=\"60\">\n                        {{f.name}} | {{f.common_friends_count}} Mutual Friends | {{ getdistance(lat,lng,f.lat,f.lng) }}\n                    </agm-info-window>\n                </agm-marker>\n            </agm-map>\n        </div>\n    </div>\n</div>\n<div bsModal #checkInModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\" (onHide)=\"reset()\">\n        <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body text-center\">\n                <h3>Add Check-in</h3>\n                <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" (keyup)=\"setCheckIn($event)\" #checkIn>\n            </div>\n            <div *ngIf=\"loader\" class=\"text-center\">\n                <img src=\"assets/images/loader.gif\" width=\"20%\">\n            </div>\n            <div class=\"model-footer\">\n                <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"checkInModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"saveCheckIn()\">Save</button>\n            </div>\n        </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/discover/discover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_service__ = __webpack_require__("../../../../../src/app/discover.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core_services_google_maps_api_wrapper__ = __webpack_require__("../../../../@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DiscoverComponent = (function () {
    function DiscoverComponent(router, discover, profile, _mapLoader, _mapsWrapper, zone) {
        var _this = this;
        this.router = router;
        this.discover = discover;
        this.profile = profile;
        this._mapLoader = _mapLoader;
        this._mapsWrapper = _mapsWrapper;
        this.zone = zone;
        this.type = "ONE_DEGREE";
        this.query = '';
        this.lat = 0;
        this.lng = 0;
        this.miles = 5;
        this.zoom = 2;
        this.loader = false;
        this.imageBaseUrl = localStorage.getItem('imgBaseUrl');
        this.dir = undefined;
        this.token = localStorage.getItem('token');
        if (!this.token || this.token === '') {
            router.navigate(['login']);
        }
        else {
            var userData = JSON.parse(localStorage.getItem('resData'));
            this.email = userData.email;
            this.sortBy = 'distance__ASC';
            this.lat = userData.lat;
            this.lng = userData.lng;
            this.loader = true;
            this.discover.friendsList('logics.tester@gmail.com', this.token, this.type, this.sortBy, 0)
                .subscribe(function (res) {
                _this.loader = false;
                _this.friends = (res.friends);
                _this.setZoom(_this.friends);
            }, function (err) {
                console.log(err);
                _this.loader = false;
                if (err.error.error === "1500") {
                    localStorage.clear();
                    _this.router.navigate(['login']);
                }
                else if (!(err.ok)) {
                    alert('No connection.Reload page!');
                }
            });
        }
    }
    DiscoverComponent.prototype.ngOnInit = function () { };
    DiscoverComponent.prototype.setCheckIn = function (event) {
        var _this = this;
        this._mapLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.checkIn.nativeElement, { types: ['establishment'] });
            autocomplete.addListener('place_changed', function () {
                _this.zone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    _this.checkInRawData = place;
                    _this.ciLat = place.geometry.location.lat();
                    _this.ciLng = place.geometry.location.lng();
                });
            });
        });
    };
    DiscoverComponent.prototype.saveCheckIn = function () {
        var _this = this;
        this.loader = true;
        console.log(this.ciLat, this.ciLng);
        console.log(this.checkInRawData);
        var title = this.checkInRawData.name;
        var venue_id = this.checkInRawData.id;
        var data = { "user": this.email, "source": 'GOOGLE_PLACES', "title": title, "lat": this.ciLat, "lng": this.ciLng, "venue_id": venue_id, "raw_data": JSON.stringify(this.checkInRawData) };
        this.discover.checkIn(this.email, this.token, data)
            .subscribe(function (res) {
            _this.loader = false;
            alert('CheckIn Saved!');
            _this.checkIn.nativeElement.value = '';
            _this.checkInModal.hide();
            var data = { lat: _this.ciLat, lng: _this.ciLng };
            _this.profile.updateProfile(_this.email, _this.token, data)
                .subscribe(function (res) {
                localStorage.setItem('resData', JSON.stringify(res));
            }, function (err) { console.log('Profile Not Fetched'); });
        }, function (err) { _this.loader = false; alert('CheckIn Fails'); console.log(err); });
    };
    DiscoverComponent.prototype.search = function (event) {
        var _this = this;
        var search = event.target.value;
        this.loader = true;
        if (search.length > 2) {
            this.discover.searchFilter(this.email, this.token, search)
                .subscribe(function (res) {
                _this.loader = false;
                if (res.friends.length > 0) {
                    _this.friends = [];
                    _this.friends = res.friends;
                    _this.setZoom(_this.friends);
                }
                else {
                    alert('No friends Found');
                    event.target.value = '';
                }
            }, function (err) { _this.loader = false; console.log(err); });
        }
        else {
            this.discover.friendsList('logics.tester@gmail.com', this.token, 'ZERO_DEGREE', 'distance_ASC', 0)
                .subscribe(function (res) {
                _this.loader = false;
                _this.friends = (res.friends);
                _this.setZoom(_this.friends);
            }, function (err) { _this.loader = false; console.log(err); });
        }
    };
    DiscoverComponent.prototype.friendType = function (event) {
        var _this = this;
        this.friends = [];
        this.loader = true;
        this.sortBy = 'distance__ASC';
        this.type = event.target.value;
        this.discover.friendsList(this.email, this.token, this.type, 'distance__ASC', 0)
            .subscribe(function (res) {
            _this.loader = false;
            _this.friends = (res.friends);
            _this.setZoom(_this.friends);
        }, function (err) { _this.loader = false; console.log(err); });
    };
    DiscoverComponent.prototype.sortByFilter = function (event) {
        var _this = this;
        if (event.target.value) {
            this.friends = [];
            this.loader = true;
            this.sortBy = event.target.value;
            this.discover.friendsList(this.email, this.token, 'ZERO_DEGREE', this.sortBy, 0)
                .subscribe(function (res) {
                _this.loader = false;
                _this.friends = (res.friends);
                _this.setZoom(_this.friends);
                _this.dir = undefined;
            }, function (err) { _this.loader = false; console.log(err); });
        }
    };
    DiscoverComponent.prototype.getdistance = function (lat1, lon1, lat2, lon2) {
        var unit = "K";
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        var num = dist * 0.621371;
        if (Number(num.toFixed(2)) < 0.18) {
            var distance_with_feet = Number(num.toFixed(2)) * 5280;
            var distance_with_feet = Math.round(distance_with_feet * 10) / 10;
            return distance_with_feet + ' ft';
        }
        else {
            return Number(num.toFixed(2)) + ' mile';
        }
    };
    DiscoverComponent.prototype.milesFilter = function (event) {
        var _this = this;
        this.loader = true;
        this.friends = [];
        this.miles = event.target.value;
        var km = this.miles * 1.60934;
        this.discover.distanceFilter(this.email, this.token, 'ZERO_DEGREE', km, 'distance__ASC', 0)
            .subscribe(function (res) {
            _this.loader = false;
            _this.friends = res.friends;
            _this.setZoom(_this.friends);
            _this.dir = false;
        }, function (err) { _this.loader = false; console.log(err); });
    };
    DiscoverComponent.prototype.setZoom = function (data) {
        var distances = [];
        for (var i = 0; i < data.length; i++) {
            var distance = this.getdistance(this.lat, this.lng, data[i].lat, data[i].lng);
            distances.push(Number(distance.split(" ")[0]));
            var max = Math.max.apply(Math, distances);
            if (max > 100) {
                this.zoom = 2;
            }
            else {
                this.zoom = 12;
            }
        }
    };
    DiscoverComponent.prototype.echo = function (lat, lng) {
        var distance;
        if (lat == 0 && lat == 0) {
            this.zoom = 2;
            this.dir = undefined;
        }
        else {
            distance = this.getdistance(this.lat, this.lng, lat, lng);
            var newDist = Number(distance.split(" ")[0]);
            if (newDist > 100) {
                this.zoom = 2;
                this.dir = {
                    origin: { lat: this.lat, lng: this.lng },
                    destination: { lat: lat, lng: lng }
                };
                console.log(this.dir);
                console.log(this.agmMap);
            }
            else {
                this.zoom = 12;
                this.dir = {
                    origin: { lat: this.lat, lng: this.lng },
                    destination: { lat: lat, lng: lng }
                };
            }
        }
    };
    DiscoverComponent.prototype.reset = function () {
        this.checkIn.nativeElement.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('checkInModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], DiscoverComponent.prototype, "checkInModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('checkIn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DiscoverComponent.prototype, "checkIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* AgmMap */])
    ], DiscoverComponent.prototype, "agmMap", void 0);
    DiscoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-discover',
            template: __webpack_require__("../../../../../src/app/discover/discover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discover/discover.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__discover_service__["a" /* DiscoverService */], __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["d" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_3__agm_core_services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/distance.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistancePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DistancePipe = (function () {
    function DistancePipe() {
    }
    DistancePipe.prototype.transform = function (value, args) {
        var data = JSON.parse(localStorage.getItem('resData'));
        var myLat = data.lat, myLng = data.lng;
        var hoLat = value, hoLng = args;
        var unit = "K";
        var radlat1 = Math.PI * myLat / 180;
        var radlat2 = Math.PI * hoLat / 180;
        var theta = myLng - hoLng;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        var num = dist * 0.621371;
        if (Number(num.toFixed(1)) < 0.18) {
            var distance_with_feet = Number(num.toFixed(1)) * 5280;
            var distance_with_feet = Math.round(distance_with_feet * 10) / 10;
            return distance_with_feet + ' ft'; //distance in feet
        }
        else {
            return Number(num.toFixed(1)) + ' mi'; //distance in mile
        }
    };
    DistancePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'distance'
        })
    ], DistancePipe);
    return DistancePipe;
}());



/***/ }),

/***/ "../../../../../src/app/edit-hangout/edit-hangout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-hangout/edit-hangout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img [src]=\"imgBaseUrl + hangoutsDetail.featured_images[0]\" [style.width.px]=\"'700'\" [style.height.px]=\"'260'\">\n      <hr>\n      <h5>Hangout Name</h5>\n      <input type=\"text\" #hoName (change)=\"print(hoName.value,'name')\">\n      <hr>\n      <h5>Hangout Duration</h5>\n      <input type=\"datetime-local\" #hoStart> - <input type=\"datetime-local\" #hoEnd>\n      <hr>\n      <span *ngIf=\"hangoutPLace\">{{ hangoutPLace }}</span>\n      <button (click) = \"hangoutModal.show()\">Edit</button>\n      <hr>\n      <h5>Description</h5>\n      <textarea class=\"form-control\" placeholder=\"Description\" #hoDescription (change)=\"print(hoDescription.value,'description')\"></textarea>\n      <hr>\n      <input type=\"checkbox\" [(ngModel)]=\"sponsored\" (ngModelChange)=\"getBusinessProfile()\"> Sponsore this hangout\n      <hr>\n      <h5>Visibility</h5>\n      <select #visibility>\n        <option value=\"TWO_DEGREE\">Friends of Friends</option>\n        <option value=\"ONE_DEGREE\">Friends</option>\n        <option value=\"SELF\">Self</option>\n      </select>\n      <h5>Guest List</h5>\n      <select #guestList>\n        <option value=\"OPEN\">Open</option>\n        <option value=\"CLOSED\">Closed</option>\n      </select>\n      <br>\n      <input type=\"checkbox\" [checked]=\"allowAttendee\" [(ngModel)]=\"allowAttendee\" (change)=\"print()\"> Allow attendees to invite people<br>\n      <button (click)=\"updateHangout()\">Update Hangout</button>\n    </div>\n  </div>    \n</div>\n\n<div bsModal #hangoutModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\">\n  <div class=\"modal-dialog modal-lg\">\n  <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h3>Search Hangout</h3>\n          <input class=\"form-control\" placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" (keyup)=\"getPLace($event)\" #search>\n      </div>\n      <div class=\"model-footer\">\n          <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"hangoutModal.hide()\">Close</button>\n      </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-hangout/edit-hangout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditHangoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditHangoutComponent = (function () {
    function EditHangoutComponent(mapsAPILoader, zone, profile, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.zone = zone;
        this.profile = profile;
        this.router = router;
        this.changedData = {};
        this.userData = JSON.parse(localStorage.getItem('resData'));
        this.token = localStorage.getItem('token');
        localStorage.setItem('hangoutImage', undefined);
    }
    EditHangoutComponent.prototype.ngOnInit = function () {
        this.imgBaseUrl = localStorage.getItem('imgBaseUrl');
        this.hangoutsDetail = JSON.parse(localStorage.getItem('clickedHangout'));
        console.log(this.hangoutsDetail);
        this.hangoutName.nativeElement.value = this.hangoutsDetail.name;
        this.hangoutPLace = this.hangoutsDetail.venue.title;
        this.hoDescription.nativeElement.value = this.hangoutsDetail.description;
        this.visibility.nativeElement.value = this.hangoutsDetail.visibility;
        this.guestList.nativeElement.value = this.hangoutsDetail.guest_list_type;
        this.hoStart.nativeElement.value = this.hangoutsDetail.start.substr(0, 12);
        this.allowAttendee = this.hangoutsDetail.invite_category == 'ATTENDEE' ? true : false;
    };
    EditHangoutComponent.prototype.getPLace = function (event) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, { types: ['establishment'] });
            autocomplete.addListener("place_changed", function () {
                _this.zone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    _this.hangoutPLace = place.name;
                    _this.placeData = place;
                });
            });
        });
    };
    EditHangoutComponent.prototype.print = function (value, key) {
        if (value && key)
            if (value.trim() !== this.hangoutsDetail.name.trim().toLowerCase()) {
                this.changedData[key] = value;
            }
            else {
                delete this.changedData[key];
            }
    };
    EditHangoutComponent.prototype.getBusinessProfile = function () {
        var _this = this;
        var chat_id = this.userData.chat_id;
        this.profile.getbusinessProfiles(this.token, chat_id)
            .subscribe(function (res) {
            if (res.business_list.length < 1) {
                alert('No Business Profile is Associated With this Account!');
                _this.sponsored = false;
            }
            else {
            }
        });
    };
    EditHangoutComponent.prototype.updateHangout = function () {
        var _this = this;
        this.changedData['user'] = this.userData.email;
        this.changedData['hangout'] = this.hangoutsDetail.id;
        //this.changedData['start'] = '2018-1-8 18:59:00';
        //this.changedData['end'] = '2018-1-8 23:59:00';
        //this.changedData['invite_category'] = this.allowAttendee ? 'ATTENDEE' : 'CLOSED';
        console.log(this.changedData);
        this.profile.updateHangout(this.userData.email, this.token, this.changedData)
            .subscribe(function (res) {
            alert('Hangout Updated');
            localStorage.removeItem('hangoutImage');
            _this.router.navigate(['/hangout']);
        }, function (err) { console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hoName'),
        __metadata("design:type", Object)
    ], EditHangoutComponent.prototype, "hangoutName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('search'),
        __metadata("design:type", Object)
    ], EditHangoutComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hoDescription'),
        __metadata("design:type", Object)
    ], EditHangoutComponent.prototype, "hoDescription", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('visibility'),
        __metadata("design:type", Object)
    ], EditHangoutComponent.prototype, "visibility", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('guestList'),
        __metadata("design:type", Object)
    ], EditHangoutComponent.prototype, "guestList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hoStart'),
        __metadata("design:type", Object)
    ], EditHangoutComponent.prototype, "hoStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hoModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], EditHangoutComponent.prototype, "hoModal", void 0);
    EditHangoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-hangout',
            template: __webpack_require__("../../../../../src/app/edit-hangout/edit-hangout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-hangout/edit-hangout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core__["d" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], EditHangoutComponent);
    return EditHangoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-registration/edit-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-registration/edit-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"sign-up-page section-start row\">\n    <div class=\"sign-up-wrapper col-md-6\">\n\n      <div class=\"wrapper-inner account-wrapper\">\n        <div class=\"sign-up-header\">\n          <h1>\n            Edit Registeration Details\n          </h1>\n        </div>\n        <div class=\"form-wrapper\">\n          <form [formGroup] = 'editSignupForm'>\n\n            <div class=\"form-group\">\n              <h3>Name</h3>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [formControl]=\"editSignupForm.controls['name']\"/>\n            </div>\n            <div class=\"form-group\">\n              <h3>Email</h3>\n              <input type=\"email\" class=\"form-control\" name=\"email\" [formControl]=\"editSignupForm.controls['email']\"/>\n            </div>\n            <div class=\"form-group\">\n              <h3>Password</h3>\n              <input type=\"password\" class=\"form-control\" name=\"password\" [formControl]=\"editSignupForm.controls['password']\"/>\n            </div>\n            <div class=\"form-group\">\n              <h3>Country</h3>\n              <select name=\"country\" class=\"form-control\" [formControl]=\"editSignupForm.controls['country']\">\n                <option>Select</option>\n                <option *ngFor=\"let country of countries\" [value]=\"country.alpha_code\">{{country.name}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <h3> Phone</h3>\n              <input type=\"text\" class=\"form-control\" name=\"phone\" [formControl]=\"editSignupForm.controls['phone']\"/>\n            </div>\n            <div class=\"form-group\">\n              <h3> Gender</h3>\n              <select name=\"gender\" class=\"form-control\" [formControl]=\"editSignupForm.controls['gender']\">\n                <option value=''>Select</option>\n                <option value=\"MALE\">Male</option>\n                <option value=\"FEMALE\">Female</option>\n              </select>\n            </div>\n            <!--input type=\"text\" name=\"profile_type\" id=\"profile_type\" value=\"EMAIL\" hidden=\"hidden\" >\n\n            <input type=\"text\" name=\"user_id\" id=\"reg_user_id_for_fb\" value=\"\" hidden=\"hidden\" autocomplete=\"off\">\n\n            <input type=\"text\" name=\"accessToken\" id=\"reg_accessToken_for_fb\" value=\"\" hidden=\"hidden\" autocomplete=\"off\"-->\n\n            <div *ngIf=\"updatemsg\" class=\"alert alert-success\">{{ updatemsg }}</div>\n            <div *ngIf=\"_formErr\" class=\"alert alert-danger\">{{ _formErr }}</div>\n            <div class=\"form-group\" ng-hide=\"clicked_signup_btn\">\n            \n            <button *ngIf = \"!editbtn\" class=\"btn btn-success\" (click)=\"edit($event)\">Edit</button>\n            <div *ngIf = \"editbtn\">\n              <button class=\"btn btn-success\" (click)=\"update(editSignupForm.value,$event)\">Update</button>\n              <button class=\"btn btn-success\" (click)=\"close($event)\">Close</button>\n            </div>\n            <br>\n            <button class=\"btn btn-success\" (click)=\"verifyPhone($event)\">Next</button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-registration/edit-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditRegistrationComponent = (function () {
    function EditRegistrationComponent(router, http, fb) {
        this.router = router;
        this.http = http;
        this.editbtn = false;
        this.updatemsg = '';
        this._formErr = '';
        var data = JSON.parse(localStorage.getItem('sufData'));
        this.editSignupForm = fb.group({
            'name': [{ value: data.name, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            'email': [{ value: data.email, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            'password': [{ value: data.password, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            'country': [{ value: data.country_code, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'phone': [{ value: data.phone_number, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            'gender': [{ value: data.gender, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    EditRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surData = JSON.parse(localStorage.getItem('surData'));
        this.sufData = JSON.parse(localStorage.getItem('sufData'));
        //console.log(this.surData.access_token,this.surData.email);
        //fetch countries data
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'config/countries').subscribe(function (res) {
            _this.countries = (res).countries;
        }, function (err) {
            console.log(err);
        });
    };
    EditRegistrationComponent.prototype.update = function (data, event) {
        var _this = this;
        event.preventDefault();
        var dataArray = { "name": data.name, "gender": data.gender, "phone_number": data.phone, "password": data.password, "country_code": data.country };
        var email = JSON.parse(localStorage.getItem('surData')).email;
        var accessToken = JSON.parse(localStorage.getItem('surData')).access_token;
        this.http
            .put(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email, dataArray, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', accessToken),
        })
            .subscribe(function (res) {
            console.log(email, accessToken);
            localStorage.setItem('sufData', JSON.stringify(dataArray));
            localStorage.setItem('newsurData', JSON.stringify(res));
            _this.updatemsg = 'Information update Successfully!';
            _this.close(event);
        }, function (err) {
            console.log(err);
        });
    };
    EditRegistrationComponent.prototype.verifyPhone = function (event) {
        var _this = this;
        event.preventDefault();
        var type = 'PHONE_NUMBER';
        var email = JSON.parse(localStorage.getItem('surData')).email;
        var data = {};
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/' + type + '/send', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
        })
            .subscribe(function (res) {
            localStorage.setItem('steps', 'phoneverify');
            localStorage.setItem('pvMsg', res.message);
            _this.router.navigate(['/verifyPhone']);
        }, function (err) {
            _this._formErr = err.message;
            console.log(err);
        });
    };
    EditRegistrationComponent.prototype.edit = function (event) {
        event.preventDefault();
        this.editbtn = true;
        this.editSignupForm.get('name').enable();
        this.editSignupForm.get('email').enable();
        this.editSignupForm.get('password').enable();
        this.editSignupForm.get('phone').enable();
        this.editSignupForm.get('country').enable();
        this.editSignupForm.get('gender').enable();
    };
    EditRegistrationComponent.prototype.close = function (event) {
        event.preventDefault();
        this.editbtn = false;
        this.editSignupForm.get('name').disable();
        this.editSignupForm.get('email').disable();
        this.editSignupForm.get('password').disable();
        this.editSignupForm.get('phone').disable();
        this.editSignupForm.get('country').disable();
        this.editSignupForm.get('gender').disable();
    };
    EditRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-registration',
            template: __webpack_require__("../../../../../src/app/edit-registration/edit-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-registration/edit-registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], EditRegistrationComponent);
    return EditRegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fb-signup/fb-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fb-signup/fb-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"sign-up-page section-start row\">\n    <div class=\"sign-up-wrapper col-md-6\">\n\n      <div class=\"wrapper-inner account-wrapper\">\n        <div class=\"sign-up-header\">\n          <h1>\n            Sign Up\n          </h1>\n        </div>\n        <div class=\"form-wrapper\">\n          <form [formGroup] = 'fbSignupForm'>\n\n            <div class=\"form-group\">\n              <h3>Name</h3>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [formControl]=\"fbSignupForm.controls['name']\"/>\n            </div>\n            \n            <div class=\"form-group\">\n              <h3> Gender</h3>\n              <select name=\"gender\" class=\"form-control\" [formControl]=\"fbSignupForm.controls['gender']\">\n                <option value=''>Select</option>\n                <option value=\"MALE\">Male</option>\n                <option value=\"FEMALE\">Female</option>\n              </select>\n            </div>\n            <br>\n            <button class=\"btn btn-success\" (click)=\"next($event)\">Next</button>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/fb-signup/fb-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FbSignupComponent = (function () {
    function FbSignupComponent(router, fb) {
        this.router = router;
        var data = JSON.parse(localStorage.getItem('sufData'));
        this.fbSignupForm = fb.group({
            'name': [{ value: data.name, disabled: true }],
            'gender': [{ value: data.gender, disabled: true }]
        });
    }
    FbSignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.router.navigate(['/fbSync']); }, 5000);
    };
    FbSignupComponent.prototype.next = function (event) {
        this.router.navigate(['/fbSync']);
    };
    FbSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fb-signup',
            template: __webpack_require__("../../../../../src/app/fb-signup/fb-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fb-signup/fb-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FbSignupComponent);
    return FbSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fb-sync/fb-sync.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fb-sync/fb-sync.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Sync Facebook</h2>\n<a (click) =\"syncfb($event)\">\n  <img src=\"../../assets/images/facebooc-icon.png\"/>\n  <p>Sync with Facebook</p>\n</a>\n<a (click) =\"nothanks($event)\">No, thanks.</a>"

/***/ }),

/***/ "../../../../../src/app/fb-sync/fb-sync.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbSyncComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FbSyncComponent = (function () {
    function FbSyncComponent(router, http) {
        this.router = router;
        this.http = http;
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            console.log("fbasyncinit");
            FB.init({
                appId: '620810454655743',
                autoLogAppEvents: true,
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.6'
            });
            FB.AppEvents.logPageView();
        };
    }
    FbSyncComponent.prototype.ngOnInit = function () { };
    FbSyncComponent.prototype.syncfb = function (event) {
        var _this = this;
        event.preventDefault();
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                var accessToken = response.authResponse.accessToken, user_id = response.authResponse.userID;
                _this.GetFbData(accessToken, user_id);
            }
            else {
                _this.initFBLogin(event);
            }
        });
    };
    FbSyncComponent.prototype.initFBLogin = function (event) {
        var _this = this;
        FB.login(function (response) {
            _this.syncfb(event);
        }, { scope: 'email,user_friends,public_profile,read_friendlists' });
    };
    FbSyncComponent.prototype.GetFbData = function (accessToken, userid) {
        var _this = this;
        var access_token = localStorage.getItem('token'), objectData = localStorage.getItem('resData');
        if (!objectData || objectData == undefined) {
            objectData = localStorage.getItem('surData');
        }
        var convrtedData = JSON.parse(objectData), chat_id = convrtedData.chat_id, uemail = convrtedData.email;
        //fetch data from twodegree friends from facebook
        FB.api('/me/friends', function (response) {
            console.log(response);
            var multidata = response.data;
            //get sync devices
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].API_URL + 'address_book/user/' + chat_id + '/device/ALL/syncs', {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                    .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].APP_ID)
                    .set('X-TWO_DEGREE-APP_TOKEN', access_token)
            })
                .subscribe(function (res) {
                console.log(res);
                var devices_obj = res.devices, device_id = Object.keys(devices_obj);
                if (device_id[0]) {
                    var get_td_arry_1 = '';
                    //get devices contacts data
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].API_URL + 'address_book/v2/contact_card/' + chat_id + '/device/' + device_id[0] + "/page/0/limit/20", {
                        headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                            .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].APP_ID)
                            .set('X-TWO_DEGREE-APP_TOKEN', access_token)
                    })
                        .subscribe(function (res) {
                        console.log(res);
                        var td_id_arry = [], contacts_obj = res.contacts;
                        for (var temp2 = 0; temp2 < Object.keys(contacts_obj).length; temp2++) {
                            if (contacts_obj[temp2].type == 'FACE_BOOK') {
                                td_id_arry.push(contacts_obj[temp2].td_id);
                            }
                        }
                        var raw_data = JSON.stringify(td_id_arry);
                        if (raw_data) {
                            get_td_arry_1 = JSON.parse(raw_data);
                        }
                        var i = 0, TD, fbUname, fbUid, Namearry, Fname, Lname, dataenc = [];
                        if (multidata.length > 0) {
                            var delete_td_id_array = [], new_fb_td_id_list = [];
                            for (i = 0; i < multidata.length; i++) {
                                fbUid = multidata[i].id;
                                fbUname = multidata[i].name;
                                Namearry = fbUname.split(" ");
                                Fname = Namearry[0];
                                Lname = Namearry[1];
                                TD = fbUid + chat_id + Fname + Lname;
                                TD = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(TD);
                                new_fb_td_id_list.push(TD);
                                if (get_td_arry_1.indexOf(TD) == -1) {
                                    dataenc.push({ "emails": [], "fb_id": fbUid, "phone_numbers": [], "last_name": Lname, "td_id": TD, "type": "FACE_BOOK", "first_name": Fname });
                                }
                            }
                            if (get_td_arry_1) {
                                for (var temp5 = 0; temp5 < get_td_arry_1.length; temp5++) {
                                    if (new_fb_td_id_list.indexOf(get_td_arry_1[temp5]) == -1) {
                                        delete_td_id_array.push(get_td_arry_1[temp5]);
                                    }
                                }
                            }
                            dataenc = JSON.stringify(dataenc);
                            delete_td_id_array = JSON.stringify(delete_td_id_array);
                            var ourIp = '192.168.1.1';
                            var body = { 'user': chat_id, 'added_contacts': dataenc, 'device_id': 'WEB_' + ourIp, 'account_id': userid, 'account_type': 'FACE_BOOK', 'delete_existing': 'FALSE', 'deleted_contacts': delete_td_id_array };
                            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].API_URL + 'address_book/v2/contact_card_update', body, {
                                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                                    .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].APP_ID)
                                    .set('X-TWO_DEGREE-APP_TOKEN', access_token)
                            })
                                .subscribe(function (res) {
                                console.log(res);
                                _this.outFromFb();
                                localStorage.setItem('fbConSynMsg', 'Synced');
                                _this.router.navigate(['/dashboard']);
                            }, function (err) {
                                console.log(err);
                                _this.outFromFb();
                                localStorage.setItem('fbConSynMsg', 'Not Synced');
                                _this.router.navigate(['/dashboard']);
                            });
                        }
                        else {
                            var ourIp = '192.168.1.1';
                            var body_1 = { 'user': chat_id, 'added_contacts': '[{}]', 'device_id': 'WEB_' + ourIp, 'account_id': userid, 'account_type': 'FACE_BOOK', 'delete_existing': 'TRUE', 'deleted_contacts': '[]' };
                            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].API_URL + 'address_book/v2/contact_card_update', body_1, {
                                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                                    .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].APP_ID)
                                    .set('X-TWO_DEGREE-APP_TOKEN', access_token)
                            })
                                .subscribe(function (res) {
                                console.log(res);
                                _this.outFromFb();
                                localStorage.setItem('fbConSynMsg', 'Synced');
                                _this.router.navigate(['/dashboard']);
                            }, function (err) {
                                console.log(err);
                                _this.outFromFb();
                                localStorage.setItem('fbConSynMsg', 'Not Synced');
                                _this.router.navigate(['/dashboard']);
                            });
                        }
                    }, function (err) { console.log(err); });
                }
                else {
                    if (multidata.length > 0) {
                        var i = void 0, TD = void 0, dataenc = [];
                        for (i = 0; i < multidata.length; i++) {
                            var fbUid = multidata[i].id, fbUname = multidata[i].name, Namearry = fbUname.split(" "), Fname = Namearry[0], Lname = Namearry[1];
                            TD = fbUid + chat_id + Fname + Lname,
                                TD = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(TD);
                            dataenc.push({ "emails": [], "fb_id": fbUid, "phone_numbers": [], "last_name": Lname, "td_id": TD, "type": "FACE_BOOK", "first_name": Fname });
                        }
                        dataenc = JSON.stringify(dataenc);
                        var ourIp = '192.168.1.1';
                        var body = { 'user': chat_id, 'added_contacts': dataenc, 'device_id': 'WEB_' + ourIp, 'account_id': userid, 'account_type': 'FACE_BOOK', 'delete_existing': 'FALSE', 'deleted_contacts': '[]' };
                        _this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].API_URL + 'address_book/v2/contact_card', body, {
                            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].APP_ID)
                                .set('X-TWO_DEGREE-APP_TOKEN', access_token)
                        })
                            .subscribe(function (res) {
                            console.log(res);
                            _this.outFromFb();
                            localStorage.setItem('fbConSynMsg', 'Synced');
                            _this.router.navigate(['/dashboard']);
                        }, function (err) {
                            console.log(err);
                            _this.outFromFb();
                            localStorage.setItem('fbConSynMsg', 'Not Synced');
                            _this.router.navigate(['/dashboard']);
                        });
                    }
                    else {
                        _this.router.navigate(['/dashboard']);
                    }
                }
            }, function (err) { console.log(err); });
        });
    };
    FbSyncComponent.prototype.outFromFb = function () {
        FB.getLoginStatus(function (response) {
            if (response && response.status === 'connected') {
                FB.logout(function (response) {
                });
            }
        });
    };
    FbSyncComponent.prototype.nothanks = function (event) {
        event.preventDefault();
        this.router.navigate(['/dashboard']);
    };
    FbSyncComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fb-sync',
            template: __webpack_require__("../../../../../src/app/fb-sync/fb-sync.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fb-sync/fb-sync.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FbSyncComponent);
    return FbSyncComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fbsync.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsyncService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FbsyncService = (function () {
    function FbsyncService(http) {
        this.http = http;
    }
    FbsyncService.prototype.getSyncs = function (token, chat_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'address_book/user/' + chat_id + '/device/ALL/syncs', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    FbsyncService.prototype.getContacts = function (token, chat_id, device) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'address_book/v2/contact_card/' + chat_id + '/device/' + device + "/page/0/limit/20", {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    FbsyncService.prototype.call3 = function (token, body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'address_book/v2/contact_card_update', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    FbsyncService.prototype.call4 = function (token, body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'address_book/v2/contact_card', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    FbsyncService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FbsyncService);
    return FbsyncService;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Login Form</h1>\n      <form [formGroup] = 'resetPassForm' (ngSubmit) = 'reset(resetPassForm.value,$event)'>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':resetPassForm.controls['email'].touched && resetPassForm.controls['email'].invalid}\">\n          <label for=\"email\">Email</label>\n\t\t      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [formControl]=\"resetPassForm.controls['email']\">\n          <div *ngIf=\"resetPassForm.controls['email'].hasError('required') && resetPassForm.controls['email'].touched\" class=\"alert alert-danger\">You must include a email.</div>\n          <div *ngIf=\"resetPassForm.hasError('email','email') && resetPassForm.controls['email'].touched\" class=\"alert alert-danger\">Invalid Email.</div>\n        </div>\n        <div *ngIf=\"logError\" class=\"alert alert-danger\">{{logError}}</div>\n        <div *ngIf=\"message\" class=\"alert alert-success\">{{message}}</div>\n        <a [routerLink] = \"['/login']\">Need to Login?</a><br>\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"resetPassForm.invalid\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(router, http, fb) {
        this.router = router;
        this.http = http;
        this.logError = '';
        this.message = '';
        this.resetPassForm = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])]
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.reset = function (data, event) {
        var _this = this;
        event.preventDefault();
        var body = 'email=' + data.email;
        this.http.
            post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/forget_password', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).subscribe(function (res) {
            _this.message = 'Email sent to ' + data.email;
            setTimeout(function () { _this.message = ''; _this.router.navigate(['/login']); }, 5000);
        }, function (err) {
            if (err.error.error === '2001') {
                _this.logError = err.error.message;
            }
            else {
                _this.logError = err.message;
            }
            setTimeout(function () { _this.logError = ''; }, 5000);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hangout-time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HangoutTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HangoutTimePipe = (function () {
    function HangoutTimePipe() {
    }
    HangoutTimePipe.prototype.transform = function (value, args) {
        var start = value, end = args;
        var sAmPm = 'am', eAmPm = 'am';
        var tindex = start.indexOf('T');
        var startTime = start.substr(tindex + 1, start.length - 1);
        var startTimeIndex = (start.substr(tindex + 1, start.length - 1)).indexOf('.');
        startTime = startTime.substr(0, startTimeIndex - 2);
        var startHr = startTime.substr(0, 2);
        if (startHr.includes(':')) {
            startHr = startTime.substr(0, 1);
        }
        var startMin = startTime.substr(startHr.length + 1, startHr.length + 2);
        tindex = end.indexOf('T');
        var endTime = end.substr(tindex + 1, end.length - 1);
        var endTimeIndex = (end.substr(tindex + 1, end.length - 1)).indexOf('.');
        endTime = endTime.substr(0, endTimeIndex - 2);
        var endHr = endTime.substr(0, 2);
        if (endHr.includes(':')) {
            endHr = endTime.substr(0, 1);
        }
        var endMin = endTime.substr(endHr.length + 1, endHr.length + 2);
        if (startHr > 12) {
            startHr = startHr - 12;
            sAmPm = 'pm';
        }
        if (endHr > 12) {
            endHr = endHr - 12;
            eAmPm = 'pm';
        }
        return startHr + sAmPm + '-' + endHr + eAmPm;
    };
    HangoutTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'hangoutTime'
        })
    ], HangoutTimePipe);
    return HangoutTimePipe;
}());



/***/ }),

/***/ "../../../../../src/app/hangout/hangout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hangoutCard {\r\n    border: solid 1px #ccc;\r\n    padding: 1%;\r\n    margin: 1%;\r\n    width:350px;\r\n}\r\nagm-map{\r\n    height: 350px;\r\n}\r\n\r\n.all-hangouts-map{\r\n    width:600px !important;\r\n    height:350px !important; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hangout/hangout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a class=\"btn btn-default pull-left\" [routerLink] = \"['/dashboard']\">Home</a>\n      <button (click)=\"showHoDetail = false\">Hangouts</button>\n      <input type=\"file\" [hidden]=\"true\" data-width=\"683\" data-height=\"248\" name=\"FEATURED_IMAGE\" (change)=\"fileChangeListener($event)\" #hangoutImg>\n      <img *ngIf=\"loader\" src=\"assets/images/loader.gif\" width=\"50%\">\n      <div *ngIf=\"addMoreDetails\" class=\"pull-left\">\n        <h5>Set Hangout Photo</h5>\n        <img src=\"assets/images/noimage.png\" *ngIf=\"!image\" width=\"100\" height=\"100\" (click) = \"hangoutImg.click()\">\n        <img [src]=\"image\" *ngIf=\"image\" (click) = \"hangoutImg.click()\">\n        <hr>\n        <h5>Hangout Name</h5>\n        <p> {{ hangoutName }} </p>\n        <hr>\n        <h5>Hangout Duration</h5>\n        <input type=\"datetime-local\" placeholder=\"Start\" #hoStart> - <input type=\"datetime-local\" placeholder=\"End\" #hoEnd>\n        <hr>\n        <span *ngIf=\"hangoutPLace\">{{ hangoutPLace }}</span>\n        <button (click) = \"editPlace($event)\">Edit</button>\n        <hr>\n        <h5>Description</h5>\n        <textarea class=\"form-control\" placeholder=\"Description\" #hoDescription></textarea>\n        <hr>\n        <input type=\"checkbox\" [(ngModel)]=\"sponsored\" (ngModelChange)=\"getBusinessProfile()\"> Sponsore this hangout\n        <div [hidden]=\"!sponsored\">\n          <hr>\n          <select #pbid>\n            <option value=\"\">Select Company</option>\n            <option *ngFor=\"let b of businessProfile\" [value]=\"b.pbid\">{{b.name}}</option>\n          </select>\n          <p>Message</p>\n          <textarea #sponsoredMsg></textarea>\n          <p>User Target Radius</p>\n          <input type=\"range\" min=\"0.03\" max=\"100\" [(ngModel)]=\"target\" step=\"0.1\"> {{ target }}\n        </div>\n        <hr>\n        <h5>Visibility</h5>\n        <select #visibility>\n          <option value=\"TWO_DEGREE\" selected>Friends of Friends</option>\n          <option value=\"ONE_DEGREE\">Friends</option>\n          <option value=\"SELF\">Self</option>\n        </select>\n        <h5>Guest List</h5>\n        <select #guestList>\n          <option value=\"OPEN\" selected>Open</option>\n          <option value=\"CLOSED\">Closed</option>\n        </select>\n        <br>\n        <input type=\"checkbox\" [checked]=\"allowAttendee\" [(ngModel)]=\"allowAttendee\"> Allow attendees to invite people<br>\n        <button (click)=\"saveHangout()\">Start Hangout</button> \n      </div>\n      <button *ngIf=\"!addMoreDetails\" (click)=\"hangoutModal.show()\">Start a Hangout</button>\n      <br><br>\n      <div *ngIf=\"!addMoreDetails\" [hidden]=\"showHoDetail\" class=\"pull-left\">\n        <div class=\"row\" *ngIf=\"serHangoutsDetail\">\n          <div class=\"col-md-4\">\n            <div class=\"row\" >\n              <div class=\"col-md-4 hangoutCard\" *ngFor=\"let shd of serHangoutsDetail\">\n                <img *ngIf=\"shd.featured_images.length > 0\" [src]=\"imgBaseUrl + shd.featured_images\" class=\"img-square\" [style.width]=\"'70px'\" [style.height]=\"'70px'\">\n                <img *ngIf=\"shd.featured_images.length == 0\" src=\"assets/images/noimage.png\" class=\"img-square\" width=\"100\" height=\"100\">\n                <h5>{{ shd.name }}</h5>\n                <p>\n                  <span [innerHtml]=\"shd.venue.title\" *ngIf=\"shd.host.name != userData.name\"></span>\n                  <span [innerHtml]=\"shd.venue.title\" *ngIf=\"shd.host.name == userData.name\" (click)=\"showDetails(shd.id)\"></span>\n                  <span class=\"pull-right\" *ngIf=\"shd.venue.raw_data.geometry\">{{ shd.venue.raw_data.geometry.location.lat | distance : shd.venue.raw_data.geometry.location.lng }}</span>\n                  <span class=\"pull-right\" *ngIf=\"shd.venue.raw_data.lat\"> {{ shd.venue.raw_data.lat | distance : shd.venue.raw_data.lng }}</span>\n                </p>\n                <p>{{ shd.meta.total }} Friends going <span class=\"pull-right\">{{ shd.start | hangoutTime : shd.end }}</span></p>\n                <hr>\n                <div>\n                  <img *ngIf=\"shd.host.profile_image\" [src]=\"imgBaseUrl + shd.host.profile_image\" class=\"img-circle\" width=\"30\" height=\"30\">\n                  <img *ngIf=\"!shd.host.profile_image\" src=\"assets/images/noimage.png\" class=\"img-circle\" width=\"30\" height=\"30\">\n                  <span *ngIf=\"userData.name == shd.host.name\">\n                      <span *ngIf=\"!shd.profile_business\">\n                        <span>You're hosting this</span>\n                      </span>\n                      <span *ngIf=\"shd.profile_business\">\n                        <img [src]=\"shd.profile_business.logo\" width=\"200px\"> Sponsored\n                      </span>\n                      <span class=\"pull-right\" [style.color]=\"'green'\" (click)=\"editHangout(shd.id)\">EDIT</span>\n                  </span>\n                  <span *ngIf=\"userData.name != shd.host.name\">\n                      <span>{{ shd.host.name }} ( {{ userData.email | mutualFriends : shd.host.email | async }} Mutual)</span>\n                      <span class=\"pull-right dropdown\">\n                        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">RSVP<span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu\">\n                          <li (click)=\"reaction('IN',shd.id)\">I'm in</li>\n                          <li (click)=\"reaction('OUT',shd.id)\">I'm out</li>\n                          <li (click)=\"reaction('NA',shd.id)\">No response</li>\n                        </ul>\n                      </span>\n                  </span>\n                </div>\n                <button (click)=\"getInvitedList(shd.id)\">Get Invited Persons List</button>\n                <button (click)=\"getAttendeeList(shd.id)\">Get Attendee List</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-8\">\n            <!--agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker class=\"all-hangouts-map img-circle\" *ngFor=\"let hangout of serHangoutsDetail\" [iconUrl]=\"hangout.featured_images[0] ? {url: imgBaseUrl + hangout.featured_images[0],scaledSize: {height: 40,width: 40},shape:{cords:['40,40,15'],type:'circle',stroke:'black'}} : {url: 'assets/images/noimage.png',scaledSize: {height: 40,width: 40}}\" [latitude]=\"hangout.venue.raw_data.geometry.location.lat\" [longitude]=\"hangout.venue.raw_data.geometry.location.lng\">\n                    <agm-info-window>\n                        <img [src]=\"imgBaseUrl + hangout.featured_images[0]\" *ngIf=\"hangout.featured_images[0]\" class=\"img-circle\" width=\"60\" height=\"60\">\n                        <img src=\"assets/images/noimage.png\" *ngIf=\"!hangout.featured_images[0]\" class=\"image-circle\" width=\"60\" height=\"60\">\n                    </agm-info-window>\n                </agm-marker>\n            </agm-map-->\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showHoDetail\" class=\"row\">\n        <div class=\"col-md-12\">\n          <button (click)=\"showFriendsList()\">Invite Friends</button>\n          <img [src]=\"imgBaseUrl + hangoutsDetail.featured_images[0]\" [style.width.px]=\"'700'\" [style.height.px]=\"'260'\">\n          <h3>{{ hangoutsDetail.name }}</h3>\n          <p>{{ hangoutsDetail.venue.raw_data.formatted_address }} <span class=\"pull-right\" [style.color]=\"'#ccc'\" (click)=\"viewHangoutOnMap(hangoutsDetail.venue.raw_data.geometry.location.lat,hangoutsDetail.venue.raw_data.geometry.location.lng)\">View on Map</span></p>\n          <p>{{ hangoutsDetail.description }}</p>\n        </div>\n      </div>      \n    </div>\n  </div>\n</div>\n\n<div bsModal #hangoutModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\">\n    <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          <h3>Create Hangout</h3>\n          <div *ngIf=\"!hideHangoutBtn\">\n            <input class=\"form-control\" placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" (keyup)=\"setHangoutLatLng($event)\" #search>\n          </div>\n          <div *ngIf=\"hideHangoutBtn\" class=\"pull-left\">\n            <h5>Set Hangout Photo</h5>\n            <img src=\"assets/images/noimage.png\" *ngIf=\"!image\" width=\"100\" height=\"100\" (click) = \"hangoutImg.click()\">\n            <img [src]=\"image\" *ngIf=\"image\" (click) = \"hangoutImg.click()\">\n            <h5>Hangout Name</h5>\n            <input placeholder='\"Birthday Bash\",\"Music Jam Session\"' autocomplete=\"off\" #hangoutName>\n            <h5>Hangout Duration</h5>\n            <input type=\"datetime-local\" placeholder=\"Start\" #hoStart> - <input type=\"datetime-local\" placeholder=\"End\" #hoEnd>\n            <hr>\n            <span *ngIf=\"hangoutPLace\">{{ hangoutPLace }}</span>\n            <button (click) = \"hideHangoutBtn = false\">Edit</button>\n            <hr>\n            <button class=\"btn btn-default\" (click)=\"addMoreDetailsToHangout($event)\">Add More Details</button>\n          </div>\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"hangoutModal.hide()\">Close</button>\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" *ngIf=\"hideHangoutBtn\" (click)=\"uploadDpImg(data.image)\">Start Hangout</button>\n        </div>\n    </div>\n    </div>\n</div>\n\n<div bsModal #cropperModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\">\n    <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <h3 *ngIf=\"imgUploading\">{{ imgUploading }}</h3>\n            <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n            <br>\n            <span class=\"result rounded\" *ngIf=\"data.image\" >\n                <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n            </span>\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"hideCropperModal()\">Close</button>\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"uploadFImg(data.image)\">Upload</button>\n        </div>\n    </div>\n    </div>\n</div>\n<div bsModal #mapModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\">\n  <div class=\"modal-dialog modal-lg\">\n  <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h3>Hangout Location</h3>\n        <agm-map [zoom]=\"16\" [latitude]=\"modalMapHoLat\" [longitude]=\"modalMapHoLng\">\n          <agm-marker [latitude]=\"modalMapHoLat\" [longitude]=\"modalMapHoLng\">\n          </agm-marker>\n        </agm-map>\n      </div>\n      <div class=\"model-footer\">\n          <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"mapModal.hide()\">Close</button>\n      </div>\n  </div>\n  </div>\n</div>\n<div bsModal #friendsListModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\">\n    <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          <h3>Invite Friends</h3>\n          <div *ngIf=\"loader\">\n              <img src=\"assets/images/loader.gif\" width=\"50%\" class=\"text-center\">\n          </div>\n          <div *ngFor=\"let friend of friends\">\n              <img [src]=\"imgBaseUrl + friend.profile_image\" alt=\"Profile Picture\" class=\"img-circle\" (click)=\"viewProfile(friend.email)\" width=\"10%\" *ngIf=\"friend.profile_image\">\n              <img src=\"https://testing007.s3-api.us-geo.objectstorage.softlayer.net/B2688594CA2B11E7BFD706E21CB7534C---prof__myImage.jpg\" (click)=\"viewProfile(friend.email)\" class=\"img-circle\" width=\"10%\" alt=\"No Image\" *ngIf=\"!friend.profile_image\">\n              {{ friend.name }}\n              <div class=\"pull-right\">\n                  <span (click)=\"inviteForHangout(friend.chat_id)\">Invite</span>\n              </div>\n              <hr>    \n          </div>\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"friendsListModal.hide()\">Close</button>\n        </div>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/hangout/hangout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HangoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HangoutComponent = (function () {
    function HangoutComponent(mapsAPILoader, zone, profile, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.zone = zone;
        this.profile = profile;
        this.router = router;
        this.hideHangoutBtn = false;
        this.addMoreDetails = false;
        this.userHangout = false;
        this.loader = false;
        this.showHoDetail = false;
        this.imgUploading = '';
        this.imgBaseUrl = '';
        this.token = localStorage.getItem('token');
        if (!this.token) {
            router.navigate(['login']);
        }
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.preserveSize = true;
        this.cropperSettings.keepAspect = false;
        this.cropperSettings.canvasWidth = 500;
        this.cropperSettings.canvasHeight = 400;
        this.data = {};
    }
    HangoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        var userData = JSON.parse(localStorage.getItem('resData'));
        this.imgBaseUrl = localStorage.getItem('imgBaseUrl');
        this.userData = userData;
        this.lat = userData.lat;
        this.lng = userData.lng;
        this.email = userData.email;
        this.image = localStorage.getItem('hangoutImage') != null ? localStorage.getItem('hangoutImage') : '';
        this.addMoreDetails = this.image ? true : false;
        //hangouts list
        this.profile.getHangouts(this.email, this.token, 'ALL')
            .subscribe(function (res) {
            console.log(res);
            _this.loader = false;
            _this.serHangoutsDetail = res.hangouts;
        }, function (err) { _this.loader = false; console.log(err); });
    };
    HangoutComponent.prototype.setHangoutLatLng = function (event) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, { types: ['establishment'] });
            autocomplete.addListener("place_changed", function () {
                _this.zone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    _this.hideHangoutBtn = true;
                    _this.hangoutPLace = place.name;
                    _this.hoLat = place.geometry.location.lat();
                    _this.hoLng = place.geometry.location.lng();
                    _this.hoRawData = JSON.stringify(place);
                    _this.hoTitle = place.name;
                    _this.hoVenueId = place.id;
                });
            });
        });
    };
    HangoutComponent.prototype.getInvitedList = function (hangoutId) {
        //Invited Persons list
        this.profile.getHangoutInvitedList(this.token, this.userData.chat_id, hangoutId)
            .subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
    };
    HangoutComponent.prototype.getAttendeeList = function (hangoutId) {
        //Persons attending the hangout
        this.profile.getAttendeeList(this.token, this.userData.chat_id, hangoutId)
            .subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
    };
    HangoutComponent.prototype.showDetails = function (id) {
        this.showHoDetail = true;
        for (var i = 0; i < Object.keys(this.serHangoutsDetail).length; i++) {
            if (this.serHangoutsDetail[i].id == id) {
                this.hangoutsDetail = this.serHangoutsDetail[i];
            }
        }
    };
    HangoutComponent.prototype.getBusinessProfile = function () {
        var _this = this;
        var chat_id = this.userData.chat_id;
        if (this.sponsored == true) {
            this.profile.getbusinessProfiles(this.token, chat_id)
                .subscribe(function (res) {
                if (res.business_list.length < 1) {
                    alert('No Business Profile is Associated With this Account!');
                    _this.sponsored = false;
                }
                else {
                    _this.businessProfile = res.business_list;
                }
            });
        }
    };
    HangoutComponent.prototype.viewHangoutOnMap = function (lat, lng) {
        this.modalMapHoLat = lat;
        this.modalMapHoLng = lng;
        this.mapModal.show();
    };
    HangoutComponent.prototype.inviteForHangout = function (friendsId) {
        var body = { user_chat_id: this.userData.chat_id, hangout: this.hangoutsDetail.id, friend_chat_id: friendsId };
        this.profile.hangoutInvitation(this.token, body)
            .subscribe(function (res) {
            alert('Invitation Sent to ' + friendsId);
        }, function (err) { console.log(err); });
    };
    HangoutComponent.prototype.showFriendsList = function () {
        this.friends = JSON.parse(localStorage.getItem('friends')).friends;
        console.log(this.friends);
        this.friendsListModal.show();
    };
    HangoutComponent.prototype.saveHangout = function () {
        var _this = this;
        var temp = this.hangoutStart.nativeElement.value.replace(/T/, ' ');
        var start = temp + ':00';
        temp = this.hangoutEnd.nativeElement.value.replace(/T/, ' ');
        var end = temp + ':00';
        var temp2 = this.image.substr(this.image.lastIndexOf('/'), this.image.length - 1);
        var imageData = temp2.replace(/\//, '');
        var image = [];
        image.push(imageData);
        var visibility = (this.visibility) ? this.visibility.nativeElement.value : '';
        var guest_list_type = (this.guestList) ? this.guestList.nativeElement.value : '';
        var description = (this.hangoutDes) ? this.hangoutDes.nativeElement.value : '';
        var inviteCat = this.allowAttendee ? 'ATTENDEE' : 'CLOSED';
        var body = { "user": this.email, "source": 'GOOGLE_PLACES', "title": this.hoTitle, "lat": this.hoLat, "lng": this.hoLng, "venue_id": this.hoVenueId, "raw_data": this.hoRawData, "name": this.hangoutName, "start": start, "end": end, "visibility": visibility, "featured_images": JSON.stringify(image), "invite_category": inviteCat, "guest_list_type": guest_list_type, "description": description };
        if (this.sponsored == true) {
            body['profile_business'] = this.pbid.nativeElement.value;
            body['radius'] = this.target;
            body['message_users'] = this.sponsoredMsg.nativeElement.value;
        }
        this.profile.addHangout(this.email, this.token, body)
            .subscribe(function (res) {
            _this.addMoreDetails = false;
            localStorage.removeItem('hangoutImage');
            alert('Hangout Created');
            _this.profile.getHangouts(_this.email, _this.token, 'ALL')
                .subscribe(function (res) {
                console.log(res);
                _this.loader = false;
                _this.serHangoutsDetail = res.hangouts;
            }, function (err) { _this.loader = false; console.log(err); });
        }, function (err) { alert('Error!'); console.log(err); });
    };
    HangoutComponent.prototype.fileChangeListener = function (event) {
        this.cropperSettings.width = event.target.dataset.width;
        this.cropperSettings.height = event.target.dataset.height;
        this.cropperSettings.compressRatio = this.cropperSettings.width / this.cropperSettings.height;
        this.cropperSettings.minWidth = event.target.dataset.width;
        this.cropperSettings.minHeight = event.target.dataset.height;
        this.imgType = event.target.name;
        var image = new Image();
        var file = event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
        this.cropperModal.show();
    };
    HangoutComponent.prototype.uploadFImg = function (img) {
        var _this = this;
        var fileData = this.hangoutImg.nativeElement.files[0];
        var fname = fileData.name, mime = fileData.type;
        console.log(fileData);
        var croppedImg = this.dataURLtoFile(img, fname, mime);
        console.log(croppedImg);
        this.imgUploading = 'Uploading Image..............';
        var formData = new FormData();
        formData.append('file', croppedImg);
        this.profile.uploadHangoutImage(this.email, formData, this.imgType, this.token)
            .subscribe(function (res) {
            _this.imgUploading = '';
            localStorage.setItem('hangoutImage', res.full_path);
            _this.image = res.full_path;
            _this.cropperModal.hide();
        }, function (err) {
            _this.imgUploading = 'No image uploaded!';
            console.log(err);
        });
    };
    HangoutComponent.prototype.dataURLtoFile = function (dataurl, filename, mime) {
        var arr = dataurl.split(','), bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        if (mime === 'image/jpeg') {
            mime = 'image/jpg';
            filename = 'image.jpg';
        }
        return new File([u8arr], filename, { type: mime });
    };
    HangoutComponent.prototype.editPlace = function (event) {
        this.hoModal.show();
        this.hideHangoutBtn = false;
        this.addMoreDetails = false;
    };
    HangoutComponent.prototype.editHangout = function (id) {
        for (var i = 0; i < Object.keys(this.serHangoutsDetail).length; i++) {
            if (this.serHangoutsDetail[i].id == id) {
                localStorage.setItem('clickedHangout', JSON.stringify(this.serHangoutsDetail[i]));
            }
        }
        this.router.navigate(['/editHangout']);
    };
    HangoutComponent.prototype.addMoreDetailsToHangout = function (event) {
        this.hangoutName = (this.hoName) ? this.hoName.nativeElement.value : 'Not Set';
        this.addMoreDetails = true;
        this.hoModal.hide();
    };
    HangoutComponent.prototype.reaction = function (res, id) {
        var _this = this;
        var body = { user: this.email, hangout: id, action: res };
        this.profile.updateHangout(this.email, this.token, body)
            .subscribe(function (res) {
            _this.profile.getHangouts(_this.email, _this.token, 'ALL')
                .subscribe(function (res) {
                console.log(res);
                _this.loader = false;
                _this.serHangoutsDetail = res.hangouts;
            }, function (err) { _this.loader = false; console.log(err); });
        }, function (err) {
            alert('Failed!');
        });
    };
    HangoutComponent.prototype.hideCropperModal = function () {
        this.cropperModal.hide();
        this.hangoutImg.nativeElement.value = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HangoutComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("hangoutModal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], HangoutComponent.prototype, "hoModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("cropperModal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], HangoutComponent.prototype, "cropperModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("mapModal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], HangoutComponent.prototype, "mapModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("friendsListModal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], HangoutComponent.prototype, "friendsListModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("hangoutName"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HangoutComponent.prototype, "hoName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('cropper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */])
    ], HangoutComponent.prototype, "cropper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hangoutImg'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "hangoutImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hoStart'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "hangoutStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hoEnd'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "hangoutEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('hoDescription'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "hangoutDes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('visibility'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "visibility", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('guestList'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "guestList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('pbid'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "pbid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('sponsoredMsg'),
        __metadata("design:type", Object)
    ], HangoutComponent.prototype, "sponsoredMsg", void 0);
    HangoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hangout',
            template: __webpack_require__("../../../../../src/app/hangout/hangout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hangout/hangout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], HangoutComponent);
    return HangoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Login Form</h1>\n      <form [formGroup] = 'loginForm' (ngSubmit) = \"onClickSubmit(loginForm.value)\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error':loginForm.controls['email'].touched && loginForm.controls['email'].invalid}\">\n          <label for=\"email\">Email</label>\n\t\t      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [formControl]=\"loginForm.controls['email']\">\n          <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">You must include a email.</div>\n          <div *ngIf=\"loginForm.hasError('email','email') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">Invalid Email.</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':loginForm.controls['password'].touched && loginForm.controls['password'].invalid}\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [formControl]=\"loginForm.controls['password']\">\n          <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">You must include a password.</div>\n        </div>\n        <div *ngIf=\"loader\">\n            <img src=\"assets/images/loader.gif\" width=\"100px\" height=\"100px\" class=\"text-center\">\n        </div>\n        <div *ngIf=\"logError\" class=\"alert alert-danger\">{{logError}}</div>\n        <a [routerLink] = \"['/forgot']\">Forgot Password</a>\n        <p>Don't have an account, <a [routerLink] = \"['/signup']\">Register</a></p>\n        <div class=\"form-group\">\n          <a (click) =\"checkFacebookLogin($event)\" class=\"login-facebook\">\n              <img src=\"https://appon.io/wp-content/uploads/2016/12/fb_login_default.png\" width=\"35%\"/>\n          </a> \n        </div>\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, http, fb, zone) {
        this.router = router;
        this.http = http;
        this.zone = zone;
        this.logError = '';
        this.loader = false;
        this.loginForm = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            console.log("fbasyncinit");
            FB.init({
                appId: '620810454655743',
                autoLogAppEvents: true,
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.6'
            });
            FB.AppEvents.logPageView();
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        var body = { account_id: data.email, password: data.password, login_type: 'EMAIL' };
        this.loader = true;
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/login', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID),
        })
            .subscribe(function (res) {
            _this.loader = false;
            localStorage.setItem('token', res.access_token);
            localStorage.setItem('chat_id', res.chat_id);
            localStorage.setItem('resData', JSON.stringify(res));
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.loader = false;
            console.log(err);
            _this.logError = (err.error.message);
            if (err.error.error === "2003") {
                localStorage.setItem('email', JSON.stringify(data.email));
                setTimeout(function () { _this.logError = ''; _this.router.navigate(['/verifyPhone']); }, 2000);
            }
        });
    };
    LoginComponent.prototype.checkFacebookLogin = function (event) {
        var _this = this;
        event.preventDefault();
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                var accessToken = response.authResponse.accessToken;
                _this.FbLoginAPI(accessToken);
            }
            else {
                _this.initFBLogin(event);
            }
        });
    };
    LoginComponent.prototype.initFBLogin = function (event) {
        var _this = this;
        FB.login(function (response) {
            _this.checkFacebookLogin(event);
        }, { scope: 'email,public_profile' });
    };
    LoginComponent.prototype.FbLoginAPI = function (token) {
        var _this = this;
        this.loader = true;
        var url = '/me?fields=name,email,about,gender';
        FB.api(url, function (response) {
            var gender = response.gender, email = response.email, user_id = response.id;
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/check_social_login/FACE_BOOK/' + user_id, {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
            })
                .subscribe(function (res) {
                var body = { account_id: user_id, password: token, login_type: 'FACE_BOOK' };
                _this.http
                    .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/login', body, {
                    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID),
                })
                    .subscribe(function (res) {
                    _this.loader = false;
                    _this.outFromFb();
                    console.log(res);
                    localStorage.setItem("resData", JSON.stringify(res));
                    localStorage.setItem("token", res.access_token);
                    localStorage.setItem('chat_id', res.chat_id);
                    _this.zone.run(function () { return _this.router.navigate(['/dashboard']); });
                }, function (err) {
                    _this.loader = false;
                    _this.outFromFb();
                    console.log(err);
                    _this.logError = err.error.message;
                });
            }, function (err) {
                _this.loader = false;
                _this.outFromFb();
                console.log(err);
                if (err.error.error === '2001') {
                    _this.logError = err.error.message;
                }
            });
        });
    };
    LoginComponent.prototype.outFromFb = function () {
        FB.getLoginStatus(function (response) {
            if (response && response.status === 'connected') {
                FB.logout(function (response) {
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mutual-friends.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MutualFriendsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MutualFriendsPipe = (function () {
    function MutualFriendsPipe(profileService) {
        this.profileService = profileService;
        this.token = localStorage.getItem('token');
    }
    MutualFriendsPipe.prototype.transform = function (value, args) {
        return this.profileService.getMutualFriends(value, this.token, args)
            .map(function (res) {
            return res.mutual_friends.length;
        });
    };
    MutualFriendsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'mutualFriends'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]])
    ], MutualFriendsPipe);
    return MutualFriendsPipe;
}());



/***/ }),

/***/ "../../../../../src/app/phone.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_pipe__ = __webpack_require__("../../../../../src/app/phone.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneDirective = (function () {
    function PhoneDirective(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
    }
    PhoneDirective.prototype.ngOnInit = function () {
        this.el.value = new __WEBPACK_IMPORTED_MODULE_1__phone_pipe__["a" /* PhonePipe */]().transform(this.el.value);
    };
    PhoneDirective.prototype.onKeyUp = function (value, event) {
        var key = event.keyCode;
        if (key > 8 || key < 8) {
            value = value.replace(/\s/g, '');
            value = value.replace(/[()]/g, '');
            this.el.value = new __WEBPACK_IMPORTED_MODULE_1__phone_pipe__["a" /* PhonePipe */]().transform(value);
        }
        else { }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("keyup", ["$event.target.value", "$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PhoneDirective.prototype, "onKeyUp", null);
    PhoneDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appPhone]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PhoneDirective);
    return PhoneDirective;
}());



/***/ }),

/***/ "../../../../../src/app/phone.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhonePipe = (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (val, args) {
        var val1 = val.substr(0, 3);
        var val2 = val.substr(3, 3);
        var val3 = val.substr(6, 6);
        var newStr = '(' + val1 + ') ' + val2 + ' ' + val3;
        return newStr;
    };
    PhonePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "../../../../../src/app/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.config = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'config/fly')
            .map(function (res) { return res; });
    };
    ProfileService.prototype.uploadProfileImage = function (email, image, type, token) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/images/' + type, image, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.uploadHangoutImage = function (email, image, type, token) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'storage/files/' + type, image, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.uploadChatImage = function (token, image) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'storage/files/CHAT_IMAGE', image, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.hangoutInvitation = function (token, body) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in/invite', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getHangoutInvitedList = function (token, chatId, hangoutId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in/' + chatId + '/' + hangoutId + '/invited/page/0', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getAttendeeList = function (token, chatId, hangoutId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in/' + chatId + '/' + hangoutId + '/people/page/0', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.addHangout = function (email, token, body) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.updateHangout = function (email, token, body) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getHangouts = function (email, token, type) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in/' + email + '/page/0?hangout_type=' + type, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.deleteImage = function (email, image, token) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/images/' + image, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.shareLocation = function (email, token, data, action) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/fire_wall/LOCATION/' + action + '/ALL', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.chatHistory = function (token, myId, friendsId) {
        var time = Date.now();
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'chat/history/' + myId + '/' + friendsId + '/' + time, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.friendsList = function (email, token, degree, sortBy, page) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + "/friends?degree=" + degree + "&sort=" + sortBy + "&page=" + page, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.chatList = function (token, chat_id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'chat/chat_list/' + chat_id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.favorite = function (token, email, friendsEmail) {
        var data = {};
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + "/fire_wall/TWO_DEGREES/FAVORITE/" + friendsEmail, data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getProfile = function (email, token) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getbusinessProfiles = function (token, chat_id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile_business/user/' + chat_id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getMutualFriends = function (email, token, userEmail) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/mutual_friends/' + userEmail + '/page/0', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.updateProfile = function (email, token, data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email, data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.searchOrg = function (token, cat, searchStr) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'go/search/' + cat + '/' + searchStr, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.addOrg = function (token, email, orgId) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/go', orgId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.addEdu = function (token, email, data) {
        var body = { education: data };
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email, body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.delOrg = function (token, email, orgId) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/go/' + orgId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.delEdu = function (token, email, eduId) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/education/' + eduId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.sortFeatureImages = function (email, token, order) {
        var body = { order: order };
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/images/FEATURED_IMAGE', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.sendCode = function (email, type) {
        var data = {};
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/' + type + '/send', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.verify = function (email, type, pin) {
        var formData = new FormData();
        formData.append('pin', pin);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/' + type + '/verify', formData, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.blockedUsers = function (email, token) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + "/fire_wall/TWO_DEGREES/BLOCK", {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.getCheckIn = function (email, token) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in/' + email + '/page/0?hangout_type=CHECK_IN', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.delCheckIn = function (email, token, id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'profile/place/check_in/' + email + '/' + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
                .set('X-TWO_DEGREE-APP_TOKEN', token)
        })
            .map(function (res) { return res; });
    };
    ProfileService.prototype.countries = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_URL + 'config/countries', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].APP_ID)
        })
            .map(function (res) { return res; });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-default\" [routerLink] = \"['/dashboard']\">Home</a>\n<div style=\"width:50%;margin:0px auto;\">\n    <br>\n    <div class=\"pull-left text-center\">\n        <div style=\"width:150px;height:150px;\">\n            <img [src]=\"image\" alt=\"Profile Picture\" class=\"img-circle\" width=\"100%\" *ngIf=\"image\">\n            <img src=\"../../assets/images/noimage.png\" class=\"img-circle\" width=\"100%\" alt=\"No Image\" *ngIf=\"!image\">    \n        </div>\n    </div>\n    <div class=\"pull-left\">\n        <h2 class=\"text-capitalize\">{{ name | uppercase }}</h2>\n        <p><span *ngIf='!edit'>{{ age }}</span>, {{ gender}} </p>\n        <p>{{ city }}, {{ state}}</p>\n        <button style=\"border: none;border-radius: 15px;color: black;\" (click)=\"favorite()\">Mark as Favorite</button>\n    </div>\n</div>\n<br><br><br><br><br><br>\n<div style=\"width:50%;margin:0px auto;\">\n    <h4>Info</h4>\n    <h4 *ngIf='edit'>Age</h4>\n    <input type=\"date\" *ngIf='edit' #dob>\n    <hr>\n    <h4>Hometown <a *ngIf='edit' class=\"pull-right\">&#9998;</a></h4>\n    <p>{{ hometown }}</p>\n    <hr>\n    <h4>Current City <a *ngIf='edit' class=\"pull-right\">&#9998;</a></h4>\n    <p>{{city}}, {{state}}</p>\n    <hr>\n    <h4>Organizations <a *ngIf='edit' class=\"pull-right\">&#9998;</a></h4>\n    <div *ngIf=\"serOrgData\">\n        <div *ngFor=\"let sod of serOrgData\">\n            <h5>{{sod.type}} <a *ngIf='edit' (click)=\"delOrg(sod.id)\">&#9998;</a></h5>\n            <p>{{sod.name}}</p>\n        </div>\n    </div>\n    <div *ngIf=\"!serOrgData\"><p>Not Set</p></div>\n    <div *ngIf=\"edit\">\n        <select #org>\n            <option value=\"\">Select</option>\n            <option value=\"SORORITY\">SORORITY</option>\n            <option value=\"FRATERNITY\">FRATERNITY</option>\n        </select>\n        <input type=\"text\" #searchStr>\n        <button (click)='searchOrg()'>Search</button>\n        <div *ngIf=\"orgData\">\n            <select #orgId>\n                <option value=\"\">Search Result</option>\n                <option  *ngFor=\"let od of orgData.gos\" [value]=\"od.id\">{{od.name}}</option>\n            </select>\n        </div>\n    </div>\n    <hr>\n    <h4>Education <a *ngIf='edit' class=\"pull-right\">&#9998;</a></h4>\n    <select *ngIf='edit' #edu>\n        <option value=\"\">Select</option>\n        <option value=\"school\">High School</option>\n        <option value=\"college\">College/University</option>\n    </select>\n    <div *ngIf=\"serEduData\">\n        <div *ngFor=\"let sed of serEduData\">\n            <h5><span *ngIf=\"sed.type == 'school'\">High School</span><span *ngIf=\"sed.type == 'college' || sed.type == 'university' || sed.type == 'doctor'\">College/University</span><a *ngIf='edit' (click)=\"delEdu(sed.id)\">&#9998;</a></h5>\n            <p>{{sed.title}}</p>\n            <hr>\n        </div>\n    </div>\n    <div *ngIf=\"!serEduData\"><p>Not Set</p></div>\n    <h4>Activities <a *ngIf='edit' class=\"pull-right\">&#9998;</a></h4>\n    <p></p>\n    <hr><br>\n    <h4>{{ friends?.length }} Friends<span class=\"pull-right\">{{ mutualFrndz }} Mutual Friends</span></h4>\n    <hr>\n    <div *ngFor=\"let friend of friends\">\n        <img [src]=\"imgBaseUrl + friend.profile_image\" alt=\"Profile Picture\" class=\"img-circle\" (click)=\"viewProfile(friend.email)\" width=\"10%\" *ngIf=\"friend.profile_image\">\n        <img src=\"https://testing007.s3-api.us-geo.objectstorage.softlayer.net/B2688594CA2B11E7BFD706E21CB7534C---prof__myImage.jpg\" (click)=\"viewProfile(friend.email)\" class=\"img-circle\" width=\"10%\" alt=\"No Image\" *ngIf=\"!friend.profile_image\">\n        <div class=\"pull-right\">\n            <h4>{{ friend.name }}</h4>\n            <a (click)=\"viewMutualFriends(friend.email)\"><p>{{ friend.common_friends_count }} Mutual Friends</p></a>\n        </div>\n        <hr>    \n    </div>\n</div>\n\n<div bsModal #mutualFrndzModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body\">\n            <div *ngIf=\"loader\">\n                    <img src=\"assets/images/loader.gif\" width=\"50%\" class=\"text-center\">\n            </div>\n            <div *ngFor=\"let friend of mutualFriends\">\n                <img [src]=\"imgBaseUrl + friend.profile_image\" alt=\"Profile Picture\" class=\"img-circle\" (click)=\"viewProfile(friend.email)\" width=\"10%\" *ngIf=\"friend.profile_image\">\n                <img src=\"https://testing007.s3-api.us-geo.objectstorage.softlayer.net/B2688594CA2B11E7BFD706E21CB7534C---prof__myImage.jpg\" (click)=\"viewProfile(friend.email)\" class=\"img-circle\" width=\"10%\" alt=\"No Image\" *ngIf=\"!friend.profile_image\">\n                <div class=\"pull-right\">\n                    <h4>{{ friend.name }}</h4>\n                    <p *ngIf=\"friend.meta\">{{ friend.meta.count }} Friends</p>\n                </div>\n                <hr>    \n            </div>\n        </div>\n        <div class=\"model-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"hideMfModal()\">Close</button>\n        </div>\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(router, profile) {
        this.router = router;
        this.profile = profile;
        this.loader = false;
        this.image = '';
        this.name = '---';
        this.age = 0;
        this.gender = '---';
        this.city = '---';
        this.state = '---';
        this.mutualFrndz = 0;
        this.hometown = 'Not Set';
        this.education = [];
        this.token = localStorage.getItem('token');
        if (!this.token) {
            router.navigate(['login']);
        }
        else {
            var storedFrndzData = JSON.parse(localStorage.getItem('friends'));
            var userEmail = localStorage.getItem('frndEmail');
            for (var i = 0; i < storedFrndzData.friends.length; i++) {
                if (storedFrndzData.friends[i].email === userEmail) {
                    this.userData = storedFrndzData.friends[i];
                }
            }
            var storeImgBaseUrl = localStorage.getItem('imgBaseUrl');
            if (storeImgBaseUrl !== null) {
                this.imgBaseUrl = storeImgBaseUrl;
                this.setImageFromStoredData(this.imgBaseUrl, this.userData);
            }
            this.viewProfile(localStorage.getItem('frndEmail'));
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setView(this.userData);
        var degree = 'ZERO_DEGREE', sortBy = 'name__ASC', page = 0;
        this.profile.friendsList(this.email, this.token, degree, sortBy, page)
            .subscribe(function (res) {
            _this.friends = res.friends;
            _this.mutualFrndz = _this.totalMutualFrndz(res.friends);
        }, function (err) { console.log(err); });
    };
    ProfileComponent.prototype.totalMutualFrndz = function (data) {
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            count += data[i].common_friends_count;
        }
        return count;
    };
    ProfileComponent.prototype.favorite = function () {
        var myemail = JSON.parse(localStorage.getItem('resData')).email;
        this.profile.favorite(this.token, myemail, this.email)
            .subscribe(function (res) {
            alert('Updated');
        }, function (err) { console.log(err); });
    };
    ProfileComponent.prototype.viewProfile = function (userEmail) {
        var _this = this;
        var degree = 'ZERO_DEGREE', sortBy = 'name__ASC', page = 0;
        this.profile.getProfile(userEmail, this.token)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('profile', JSON.stringify(res));
            _this.setView(res);
            _this.setImage(localStorage.getItem('imgBaseUrl'));
            _this.profile.friendsList(res.email, _this.token, degree, sortBy, page)
                .subscribe(function (res) {
                _this.friends = res.friends;
                _this.mutualFrndz = _this.totalMutualFrndz(res.friends);
            }, function (err) { console.log(err); });
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.viewMutualFriends = function (userEmail) {
        var _this = this;
        this.mutualFriends = [];
        this.mfModal.show();
        this.loader = true;
        this.profile.getMutualFriends(this.email, this.token, userEmail)
            .subscribe(function (res) {
            _this.loader = false;
            console.log(res);
            _this.mutualFriends = res.mutual_friends;
        }, function (err) { _this.loader = false; console.log(err); });
    };
    ProfileComponent.prototype.setImage = function (baseUrl) {
        var img = JSON.parse(localStorage.getItem('profile')).profile_image;
        if (img !== undefined && baseUrl !== null) {
            this.image = baseUrl + img;
        }
        else {
            this.image = '';
        }
    };
    ProfileComponent.prototype.setImageFromStoredData = function (baseUrl, data) {
        var img = data.profile_image;
        if (img !== undefined && baseUrl !== null) {
            this.image = baseUrl + img;
        }
        else {
            this.image = '';
        }
    };
    ProfileComponent.prototype.setView = function (data) {
        this.email = data.email;
        if (data.dob) {
            var age1 = data.dob;
            if (age1) {
                var newAge = age1.substr(0, age1.indexOf('T'));
                this.age = this.getAge(newAge);
            }
        }
        this.name = data.name;
        this.gender = data.gender;
        if (data.city) {
            if (Object.keys(data.current_city).length) {
                this.city = data.current_city.name;
                this.state = data.current_city.state;
            }
        }
        if (data.current_city) {
            if (Object.keys(data.city).length) {
                this.hometown = data.city.name + ', ' + data.city.state;
            }
        }
        if (data.gos) {
            if (Object.keys(data.gos).length) {
                this.serOrgData = data.gos;
            }
            else {
                this.nSerOrgData = 'Not Set';
            }
        }
        if (data.education) {
            if (Object.keys(data.education).length) {
                this.serEduData = data.education;
            }
            else {
                this.nSerEduData = 'Not Set';
            }
        }
    };
    ProfileComponent.prototype.getAge = function (birthday) {
        var dob = new Date(birthday);
        var ageDifMs = Date.now() - dob.getTime();
        var ageDate = new Date(ageDifMs);
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age;
    };
    ProfileComponent.prototype.hideMfModal = function () {
        this.mfModal.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('mutualFrndzModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], ProfileComponent.prototype, "mfModal", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registeration/registeration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registeration/registeration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"sign-up-page section-start row\">\n    <div class=\"sign-up-wrapper col-md-6\">\n\n      <div class=\"wrapper-inner account-wrapper\">\n        <div class=\"sign-up-header\">\n          <h1>\n            Creat an Account\n          </h1>\n        </div>\n        <div class=\"form-wrapper\">\n          <form [formGroup] = 'signupForm' (ngSubmit) = \"submit(signupForm.value)\">\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error':signupForm.controls['name'].touched && signupForm.controls['name'].invalid}\">\n              <h3>Name</h3>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [formControl]=\"signupForm.controls['name']\"/>\n            </div>\n            <div *ngIf=\"signupForm.controls['name'].hasError('required') && signupForm.controls['name'].touched\" class=\"alert alert-danger\">Name field is Required!</div>\n            <div *ngIf=\"signupForm.controls['name'].errors?.minlength && signupForm.controls['name'].touched\" class=\"alert alert-danger\">Name field Cannot be less than 2 Characters!</div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error':signupForm.controls['email'].touched && signupForm.controls['email'].invalid}\">\n              <h3>Email</h3>\n              <input type=\"email\" class=\"form-control\" name=\"email\" [formControl]=\"signupForm.controls['email']\"/>\n            </div>\n            <div *ngIf=\"emailErr\" class=\"alert alert-danger\">{{ emailErr }}</div>\n            <div *ngIf=\"signupForm.controls['email'].hasError('required') && signupForm.controls['email'].touched\" class=\"alert alert-danger\">Email field is Required!</div>\n            <div *ngIf=\"signupForm.hasError('email','email') && signupForm.controls['email'].touched\" class=\"alert alert-danger\">Invalid Email!</div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error':signupForm.controls['password'].touched && signupForm.controls['password'].invalid}\">\n              <h3>Password</h3>\n              <input type=\"password\" class=\"form-control\" name=\"password\" [formControl]=\"signupForm.controls['password']\"/>\n            </div>\n            <div *ngIf=\"signupForm.controls['password'].hasError('required') && signupForm.controls['password'].touched\" class=\"alert alert-danger\">Password field is Required!</div>\n            <div *ngIf=\"signupForm.controls['password'].errors?.minlength && signupForm.controls['password'].touched\" class=\"alert alert-danger\">Password Length should be greater than or equal to 6!</div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error':signupForm.controls['rpassword'].touched && signupForm.controls['rpassword'].invalid}\">\n              <h3>Re-enter Password</h3>\n              <input type=\"password\" class=\"form-control\" name=\"rpassword\" [formControl]=\"signupForm.controls['rpassword']\"/>\n            </div>\n            <div *ngIf=\"rPassErr\" class=\"alert alert-danger\">{{ rPassErr }}</div>\n            <div *ngIf=\"signupForm.controls['rpassword'].hasError('required') && signupForm.controls['rpassword'].touched\" class=\"alert alert-danger\">Re-enter Password field is Required!</div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error':signupForm.controls['country'].touched && signupForm.controls['country'].invalid}\">\n              <h3>Country</h3>\n              <select name=\"country\" class=\"form-control\" [formControl]=\"signupForm.controls['country']\">\n                <option>Select</option>\n                <option *ngFor=\"let country of countries\" [value]=\"country.alpha_code\">{{country.name}}</option>\n              </select>\n            </div>\n            <div *ngIf=\"signupForm.controls['country'].hasError('required') && signupForm.controls['country'].touched\" class=\"alert alert-danger\">Country field is Required!</div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error':signupForm.controls['phone'].touched && signupForm.controls['phone'].invalid}\">\n              <h3> Phone</h3>\n              <input type=\"text\" class=\"form-control\" name=\"phone\" [formControl]=\"signupForm.controls['phone']\"/>\n            </div>\n            <div *ngIf=\"phoneErr\" class=\"alert alert-danger\">{{ phoneErr }}</div>\n            <div *ngIf=\"signupForm.controls['phone'].hasError('required') && signupForm.controls['phone'].touched\" class=\"alert alert-danger\">Phone field is Required!</div>\n            <div *ngIf=\"signupForm.controls['phone'].errors?.minlength && signupForm.controls['phone'].touched\" class=\"alert alert-danger\">Phone Length should be greater than or equal to 10!</div>\n            <div *ngIf=\"signupForm.controls['phone'].errors?.maxlength && signupForm.controls['phone'].touched\" class=\"alert alert-danger\">Phone Length should not be greater than 12!</div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error':signupForm.controls['gender'].touched && signupForm.controls['gender'].invalid}\">\n              <h3> Gender</h3>\n              <select name=\"gender\" class=\"form-control\" [formControl]=\"signupForm.controls['gender']\">\n                <option value=''>Select</option>\n                <option value=\"MALE\">Male</option>\n                <option value=\"FEMALE\">Female</option>\n              </select>\n            </div>\n            <div *ngIf=\"signupForm.controls['gender'].hasError('required') && signupForm.controls['gender'].touched\" class=\"alert alert-danger\">Gender field is Required!</div>\n            <!--input type=\"text\" name=\"profile_type\" id=\"profile_type\" value=\"EMAIL\" hidden=\"hidden\" >\n\n            <input type=\"text\" name=\"user_id\" id=\"reg_user_id_for_fb\" value=\"\" hidden=\"hidden\" autocomplete=\"off\">\n\n            <input type=\"text\" name=\"accessToken\" id=\"reg_accessToken_for_fb\" value=\"\" hidden=\"hidden\" autocomplete=\"off\"-->\n\n            <div class=\"form-group term-condition\" [ngClass]=\"{'has-error':signupForm.controls['agree'].touched && signupForm.controls['agree'].invalid}\">\n              <div class=\"remember-me\">\n                <input type=\"checkbox\" class=\"form-control\" name=\"agree\" [formControl]=\"signupForm.controls['agree']\">\n                <label> I read and agree to the\n                  <a href=\"https://www.twodegrees.io/terms/\" target=\"_blank\">terms and conditions*</a>\n                </label>\n              </div>\n            </div>\n            <div *ngIf=\"signupForm.controls['agree'].hasError('required') && signupForm.controls['agree'].touched\" class=\"alert alert-danger\">You must check agree to Continue!</div>\n            <div *ngIf=\"agreeErr\" class=\"alert alert-danger\">{{ agreeErr }}</div>\n            <div *ngIf=\"_formErr\" class=\"alert alert-danger\">{{ _formErr }}</div>\n            <div class=\"form-group\" ng-hide=\"clicked_signup_btn\">\n              <div class=\"form-group\">\n                <a (click) =\"regWithFb($event)\" class=\"login-facebook\">\n                    <img src=\"http://hbrysiewicz.com/ember-fbcomp/img/sign-up-button.png\" width=\"35%\"/>\n                </a> \n              </div>\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"signupForm.invalid\">Sign Up</button>\n              \n              <div class=\"form-group\">\n                <a [routerLink] = \"['/login']\">Already a member? Log In</a>\n              </div>\n\n            </div>\n\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registeration/registeration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterationComponent = (function () {
    function RegisterationComponent(_sanitizer, router, http, fb) {
        var _this = this;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.http = http;
        this.formInvalid = false;
        this.emailErr = '';
        this.phoneErr = '';
        this.rPassErr = '';
        this.agreeErr = '';
        this._formErr = '';
        this.signupForm = fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            'rpassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            'country': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(12)])],
            'gender': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'agree': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.signupForm.valueChanges.subscribe(function (data) {
            if (data.password && data.rpassword)
                _this.rPassErr = data.password === data.rpassword ? '' : 'Password Mismatch!';
            _this.phoneErr = '';
            _this.emailErr = '';
            _this._formErr = '';
            _this.agreeErr = '';
        });
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            console.log("fbasyncinit");
            FB.init({
                appId: '620810454655743',
                autoLogAppEvents: true,
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.6'
            });
            FB.AppEvents.logPageView();
        };
    }
    RegisterationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fetch countries data
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'config/countries').subscribe(function (res) {
            _this.countries = (res).countries;
            //console.log(data)
        }, function (err) {
            console.log(err);
        });
    };
    RegisterationComponent.prototype.submit = function (data) {
        var _this = this;
        var dataArray = { "name": data.name, "gender": data.gender, "phone_number": data.phone, "email": data.email, "password": data.password, "country_code": data.country, "device_token": '192.169.1.1', 'device_type': 'WEB', "profile_type": 'EMAIL', "profile_id": Math.random() };
        if (data.agree) {
            this.formInvalid = true;
        }
        else {
            this.agreeErr = 'Select agree checkbox to Continue!';
        }
        if (this.formInvalid) {
            this.http
                .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user', dataArray, {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID),
            })
                .subscribe(function (res) {
                localStorage.setItem('sufData', JSON.stringify(dataArray));
                localStorage.setItem('surData', JSON.stringify(res));
                _this.router.navigate(['/editSignup']);
            }, function (err) {
                _this.formInvalid = false;
                _this._formErr = err.error.message;
                if (err.error.detail_description.email) {
                    _this.emailErr = err.error.detail_description.email[0];
                }
                if (err.error.detail_description.phone_number[0] === 'This phone number is already in use') {
                    _this.phoneErr = err.error.detail_description.phone_number[0];
                }
                else if (err.error.detail_description.phone_number) {
                    _this.phoneErr = err.error.detail_description.phone_number[1];
                }
            });
        }
    };
    RegisterationComponent.prototype.regWithFb = function (event) {
        var _this = this;
        event.preventDefault();
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                var accessToken = response.authResponse.accessToken;
                _this.signupAPI(accessToken);
            }
            else {
                _this.initFBLogin(event);
            }
        });
    };
    RegisterationComponent.prototype.initFBLogin = function (event) {
        var _this = this;
        FB.login(function (response) {
            _this.regWithFb(event);
        }, { scope: 'email,public_profile' });
    };
    RegisterationComponent.prototype.signupAPI = function (token) {
        var _this = this;
        var url = '/me?fields=name,email,about,gender';
        FB.api(url, function (response) {
            console.log(response);
            var email = response.email, user_id = response.id, user_name = response.name;
            var gender = response.gender.toUpperCase();
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/check_social_login/FACE_BOOK/' + user_id, {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
            })
                .subscribe(function (res) {
                var body = { account_id: user_id, password: token, login_type: 'FACE_BOOK' };
                _this.http
                    .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/login', body, {
                    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID),
                })
                    .subscribe(function (res) {
                    _this.outFromFb();
                    localStorage.setItem("actoken", res.access_token);
                    localStorage.setItem("object", JSON.stringify(res));
                    localStorage.setItem("token", res.access_token);
                    _this.router.navigate(['/dashboard']);
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err.error.error);
                _this.outFromFb();
                if (err.error.error === '2001') {
                    var body = { "name": user_name, "gender": gender, "email": email, "country_code": 'US', "device_token": '192.168.1.1', 'device_type': 'WEB', 'profile_id': user_id, 'profile_token': token, "profile_type": 'FACE_BOOK' };
                    _this.http
                        .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user', body, {
                        headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID),
                    })
                        .subscribe(function (res) {
                        localStorage.setItem('token', res.access_token);
                        localStorage.setItem('object', JSON.stringify(res));
                        localStorage.setItem('sufData', JSON.stringify(body));
                        _this.outFromFb();
                        _this.router.navigate(['/fbSignup']);
                    }, function (err) {
                        _this._formErr = err.message;
                        if (err.detail_description.email[0]) {
                            _this._formErr = err.detail_description.email[0];
                        }
                        else if (err.error.error === '1202') {
                            _this._formErr = err.message;
                            _this.outFromFb();
                        }
                        else {
                            _this._formErr = err.message;
                            _this.outFromFb();
                        }
                    });
                }
            });
        });
    };
    RegisterationComponent.prototype.outFromFb = function () {
        FB.getLoginStatus(function (response) {
            if (response && response.status === 'connected') {
                FB.logout(function (response) {
                });
            }
        });
    };
    RegisterationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registeration',
            template: __webpack_require__("../../../../../src/app/registeration/registeration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registeration/registeration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], RegisterationComponent);
    return RegisterationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n  \r\n  /* Hide default HTML checkbox */\r\n  .switch input {display:none;}\r\n  \r\n  /* The slider */\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <a class=\"btn btn-default\" [routerLink] = \"['/dashboard']\">Home</a>\n  <div style=\"width:50%;margin:0px auto;\">\n    <h4>Account Details</h4>\n    <form [formGroup] = 'settingForm'>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':settingForm.controls['fname'].touched && settingForm.controls['fname'].invalid}\">\n        <label for=\"fname\">First Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\" [formControl]=\"settingForm.controls['fname']\">\n        <div *ngIf=\"settingForm.controls['fname'].hasError('required') && settingForm.controls['fname'].touched\" class=\"alert alert-danger\">You must include a First Name.</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':settingForm.controls['lname'].touched && settingForm.controls['lname'].invalid}\">\n        <label for=\"lname\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\" [formControl]=\"settingForm.controls['lname']\">\n        <div *ngIf=\"settingForm.controls['lname'].hasError('required') && settingForm.controls['lname'].touched\" class=\"alert alert-danger\">You must include a Last Name.</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':settingForm.controls['email'].touched && settingForm.controls['email'].invalid}\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [formControl]=\"settingForm.controls['email']\">\n        <span *ngIf=\"emailVerified\"> Verified</span><span *ngIf=\"!emailVerified\" style=\"color:red\" (click)=\"setVerifyModal('email')\"> Verify Email</span>\n        <div *ngIf=\"settingForm.controls['email'].hasError('required') && settingForm.controls['email'].touched\" class=\"alert alert-danger\">You must include a email.</div>\n        <div *ngIf=\"settingForm.hasError('email','email') && settingForm.controls['email'].touched\" class=\"alert alert-danger\">Invalid Email.</div>\n        <br><span style=\"color:red;\">{{emailError}}</span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':settingForm.controls['password'].touched && settingForm.controls['password'].invalid}\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [formControl]=\"settingForm.controls['password']\" autocomplete=\"false\">\n        <div *ngIf=\"settingForm.controls['password'].hasError('required') && settingForm.controls['password'].touched\" class=\"alert alert-danger\">You must include a password.</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':settingForm.controls['phone'].touched && settingForm.controls['phone'].invalid}\">\n        <label for=\"phone\">Phone Number</label>\n        <select [formControl]=\"settingForm.controls['ccode']\">\n          <option *ngFor=\"let c of countries\" [value]=\"c.alpha_code\">{{c.name}}</option>\n        </select>\n        <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" [formControl]=\"settingForm.controls['phone']\" appPhone>\n        <span *ngIf=\"phoneVerified\"> Verified</span><span *ngIf=\"!phoneVerified\" style=\"color:red\" (click)=\"setVerifyModal('phone')\"> Verify Phone</span>\n        <div *ngIf=\"settingForm.controls['phone'].hasError('required') && settingForm.controls['phone'].touched\" class=\"alert alert-danger\">You must include a contact.</div>\n        <br><span style=\"color:red\">{{ phoneError }}</span>\n      </div>  \n      <div class=\"form-group\" [ngClass]=\"{'has-error':settingForm.controls['gender'].touched && settingForm.controls['gender'].invalid}\">\n        <label for=\"gender\">Gender</label>\n        <select name=\"gender\" class=\"form-control\" [formControl]=\"settingForm.controls['gender']\">\n          <option value=''>Select</option>\n          <option value=\"MALE\">Male</option>\n          <option value=\"FEMALE\">Female</option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"settingForm.invalid\" (click)=\"update(settingForm.value)\">Update</button>\n    </form>\n    <div>\n      <h3>Share Location</h3>\n      <label class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"location\" [(ngModel)]=\"location\" (ngModelChange)=\"updateLocation()\">\n        <span class=\"slider round\"></span>\n      </label>\n    </div>\n  </div>\n  <div bsModal #verification=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"  style=\"display:none;\">\n      <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n          <div class=\"modal-body text-center\">\n            <div *ngIf=\"verifyEmail\">\n              <h4>Verify Email</h4>\n              <input type=\"text\" #pin>\n              <button class=\"btn btn-default\" (click)=\"resendCode('EMAIL')\">Resend Code</button>\n            </div>\n            <div *ngIf=\"verifyPhone\">\n              <h4>Verify Phone</h4>\n              <input type=\"text\" #pin2>\n              <button class=\"btn btn-default\" (click)=\"resendCode('PHONE_NUMBER')\">Resend Code</button>\n            </div>\n            {{verifyError}}\n            <div *ngIf=\"loader\">\n                <img src=\"assets/images/loader.gif\" width=\"50%\" class=\"text-center\">\n            </div>\n          </div>\n          <div class=\"model-footer\">\n              <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"verification.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-default pull-right\" aria-label=\"Close\" (click)=\"verify()\">Verify</button>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingComponent = (function () {
    function SettingComponent(fb, profile, router) {
        var _this = this;
        this.profile = profile;
        this.router = router;
        this.emailError = '';
        this.verifyError = '';
        this.phoneError = '';
        this.ccode = '';
        this.loader = false;
        this.emailVerified = false;
        this.verifyEmail = false;
        this.phoneVerified = false;
        this.verifyPhone = false;
        this.newData = {};
        var data = JSON.parse(localStorage.getItem('resData'));
        var firstName, lastName, password;
        this.token = localStorage.getItem('token');
        if (this.token) {
            var new_email = data.email;
            firstName = data.name.split(' ').slice(0, -1).join(' ');
            lastName = data.name.split(' ').slice(-1).join(' ');
            password = "123456";
            this.emailVerified = data.email_verified;
            this.phoneVerified = data.phone_number_verfied;
            this.email = data.email;
            this.location = data.location;
            if (data.new_email)
                new_email = data.new_email;
            if (data.new_phone_number) {
                this.phone = this.getPhoneNumber(data.new_phone_number);
            }
            else {
                this.phone = this.getPhoneNumber(data.phone_number);
            }
            this.settingForm = fb.group({
                'fname': [firstName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                'lname': [lastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                'email': [new_email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
                'password': [password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
                'ccode': [this.ccode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                'phone': [this.phone, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                'gender': [data.gender, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            });
        }
        else {
            this.router.navigate(['/login']);
        }
        this.settingForm.valueChanges.subscribe(function (res) {
            var name, phone, resPhone;
            phone = res.phone;
            phone = phone.replace(/\s/g, '');
            phone = phone.replace(/[()]/g, '');
            resPhone = res.phone;
            resPhone = resPhone.replace(/\s/g, '');
            resPhone = resPhone.replace(/[()]/g, '');
            if (res.fname !== firstName || res.lname !== lastName) {
                name = res.fname + ' ' + res.lname;
                _this.newData.name = name;
            }
            else {
                delete _this.newData.name;
            }
            if (res.gender !== data.gender) {
                _this.newData.gender = res.gender;
            }
            else {
                delete _this.newData.gender;
            }
            if (res.email !== data.email) {
                _this.newData.email = res.email;
            }
            else {
                delete _this.newData.email;
            }
            if (res.password !== password) {
                _this.newData.password = res.password;
            }
            else {
                delete _this.newData.password;
            }
            if (resPhone !== _this.phone) {
                _this.newData.phone_number = phone;
                _this.newData.country_code = res.ccode;
            }
            else {
                delete _this.newData.phone_number;
                delete _this.newData.country_code;
            }
            console.log(_this.newData);
        });
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('resData'));
        var countries = JSON.parse(localStorage.getItem('countries'));
        if (countries !== null) {
            this.countries = countries;
            this.ccode = this.getCountryCode(data.phone_number, this.countries);
            this.settingForm.patchValue({ ccode: this.ccode });
        }
        else {
            this.profile.countries().subscribe(function (res) {
                localStorage.setItem('countries', JSON.stringify(res.countries));
                _this.countries = res.countries;
                _this.ccode = _this.getCountryCode(data.phone_number, _this.countries);
                _this.settingForm.patchValue({ ccode: _this.ccode });
            });
        }
    };
    SettingComponent.prototype.updateLocation = function () {
        var _this = this;
        var body = this.location == true ? { unblock_time: '1' } : { unblock_time: '86400' };
        var loc = this.location == true ? 'UN_BLOCK' : 'BLOCK';
        this.profile.shareLocation(this.email, this.token, body, loc)
            .subscribe(function (res) {
            console.log(res);
            var data = JSON.parse(localStorage.getItem('resData'));
            data.location = _this.location;
            data.score = _this.location ? data.score + 15 : data.score - 15;
            localStorage.setItem('resData', JSON.stringify(data));
            alert('Location Updated');
        }, function (err) {
            console.log(err);
            alert('Location Update Fails');
        });
    };
    SettingComponent.prototype.getPhoneNumber = function (data) {
        var pn = data;
        var pnc = pn.substr(pn.length - 10);
        return pnc;
    };
    SettingComponent.prototype.getCountryCode = function (data, countries) {
        var pn = data;
        var pnc = pn.substr(pn.length - 10);
        var cc = pn.substr(0, pn.length - pnc.length);
        for (var i = 0; i < countries.length; i++) {
            if (cc === countries[i].calling_code) {
                cc = countries[i].alpha_code;
            }
        }
        return cc;
    };
    SettingComponent.prototype.update = function (data) {
        var _this = this;
        var type;
        if (this.newData.email) {
            this.profile.updateProfile(this.email, this.token, this.newData)
                .subscribe(function (res) {
                console.log(res);
                localStorage.setItem('resData', JSON.stringify(res));
                type = 'EMAIL';
                _this.profile.sendCode(_this.email, type)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.emailError = 'Verification Code Sent';
                    setTimeout(function () { _this.emailError = ''; }, 3000);
                    _this.emailVerified = false;
                    _this.verifyEmail = false;
                }, function (err) { console.log(err); });
            }, function (err) {
                console.log(err);
                if (err.error.detail_description.email[0])
                    _this.emailError = 'Email Already Exist';
                setTimeout(function () { _this.emailError = ''; }, 3000);
                _this.settingForm.patchValue({ email: _this.email });
            });
        }
        else if (this.newData.phone_number) {
            this.profile.updateProfile(this.email, this.token, this.newData)
                .subscribe(function (res) {
                console.log(res);
                localStorage.setItem('resData', JSON.stringify(res));
                type = 'PHONE_NUMBER';
                _this.profile.sendCode(_this.email, type)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.phoneError = 'Verification Code Sent';
                    setTimeout(function () { _this.phoneError = ''; }, 3000);
                    _this.phoneVerified = false;
                    _this.verifyPhone = false;
                }, function (err) { console.log(err); });
            }, function (err) {
                console.log(err);
                if (err.error.detail_description.phone_number)
                    _this.phoneError = err.error.detail_description.phone_number[0];
                setTimeout(function () { _this.phoneError = ''; }, 3000);
            });
        }
        else {
            if (Object.keys(this.newData).length) {
                this.profile.updateProfile(this.email, this.token, this.newData)
                    .subscribe(function (res) {
                    console.log(res);
                    localStorage.setItem('resData', JSON.stringify(res));
                    alert('Data updated');
                }, function (err) { console.log(err); });
            }
            else {
                console.log('Nothing is updated!');
            }
        }
        /*console.log(data);let name = data.fname + ' ' +data.lname;delete data.fname;delete data.lname;data.name = name;*/
    };
    SettingComponent.prototype.setVerifyModal = function (type) {
        if (type == 'email') {
            this.verifyEmail = true;
            this.verifyModal.show();
        }
        else {
            this.verifyPhone = true;
            this.verifyModal.show();
        }
    };
    SettingComponent.prototype.resendCode = function (type) {
        this.profile.sendCode(this.email, type)
            .subscribe(function (res) {
            console.log(res);
            alert('Code Sent');
        }, function (err) { console.log(err); });
    };
    SettingComponent.prototype.verify = function () {
        var _this = this;
        var type;
        if (this.pin) {
            this.loader = true;
            type = 'EMAIL';
            this.profile.verify(this.email, type, this.pin.nativeElement.value)
                .subscribe(function (res) {
                console.log(res);
                _this.loader = true;
                _this.emailVerified = true;
                _this.verifyModal.hide();
                localStorage.setItem('resData', JSON.stringify(res.user));
            }, function (err) {
                console.log(err);
                _this.loader = false;
                if (err.error.message)
                    _this.verifyError = 'Invalid Pin';
                setTimeout(function () { _this.verifyError = ''; }, 3000);
            });
        }
        else {
            this.loader = true;
            type = "PHONE_NUMBER";
            this.profile.verify(this.email, type, this.pin2.nativeElement.value)
                .subscribe(function (res) {
                console.log(res);
                _this.loader = true;
                _this.phoneVerified = true;
                _this.verifyModal.hide();
                localStorage.setItem('resData', JSON.stringify(res.user));
            }, function (err) {
                console.log(err);
                _this.loader = false;
                if (err.error.message)
                    _this.verifyError = 'Invalid Pin';
                setTimeout(function () { _this.verifyError = ''; }, 3000);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('verification'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], SettingComponent.prototype, "verifyModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('pin'),
        __metadata("design:type", Object)
    ], SettingComponent.prototype, "pin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('pin2'),
        __metadata("design:type", Object)
    ], SettingComponent.prototype, "pin2", void 0);
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setting',
            template: __webpack_require__("../../../../../src/app/setting/setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setting/setting.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/verify-email/verify-email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verify-email/verify-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"sign-up-page section-start row\">\n    <div class=\"sign-up-wrapper col-md-6\">\n\n      <div class=\"wrapper-inner account-wrapper\">\n        <div class=\"sign-up-header\">\n          <h1>\n            Verify Email\n          </h1>\n        </div>\n        <div class=\"form-wrapper\">\n          <form [formGroup] = 'emailVerifyForm'>\n            <div class=\"form-group\" *ngIf=\"show\">\n              <p>A verification code has been sent to:</p>\n              <h1>{{ email }}</h1>\n              <a (click) = \"changeEmail($event)\">Change Email Address</a>\n            </div>\n            <div class=\"form-group\" *ngIf=\"!show\">\n              <h3>Email</h3>\n              <input type=\"text\" class=\"form-control\" name=\"email\" [formControl]=\"emailVerifyForm.controls['email']\"/>\n              <div class=\"alert alert-danger\" *ngIf=\"changeEmailErr\">{{ changeEmailErr }}</div>\n              <a (click)=\"cancel($event)\">Cancel</a> | <a (click)=\"updateEmail(emailVerifyForm.value,$event)\">Update</a>\n            </div>\n            <label>Enter it here to activate your account</label>\n            <input type=\"text\" class=\"form-control\" name=\"pin\" [formControl]=\"emailVerifyForm.controls['pin']\">\n            <a (click)=\"resendECode($event)\">Resend Verification Code</a><br>\n            <div class=\"alert alert-danger\" *ngIf=\"resendMsg\">{{ resendMsg }}</div>\n            <div class=\"alert alert-danger\" *ngIf=\"verifyErr\">{{ verifyErr }}</div>\n            <button (click) = \"verifyEmail(emailVerifyForm.value,$event)\">Next</button>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/verify-email/verify-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(http, fb, router) {
        this.http = http;
        this.router = router;
        this.show = true;
        this.changeEmailErr = '';
        this.resendMsg = '';
        this.verifyErr = '';
        this.emailVerifyForm = fb.group({
            'pin': [''],
            'email': ['']
        });
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        this.email = JSON.parse(localStorage.getItem('newsurData')).new_email;
        if (this.email == '' || this.email == null || this.email === undefined)
            this.email = JSON.parse(localStorage.getItem('resData')).email;
    };
    VerifyEmailComponent.prototype.verifyEmail = function (data, event) {
        var _this = this;
        event.preventDefault();
        console.log(data.pin);
        var email = JSON.parse(localStorage.getItem('surData')).email;
        var formData = new FormData();
        formData.append('pin', data.pin);
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/' + 'EMAIL/verify', formData, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
        })
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('resData', JSON.stringify(res));
            _this.router.navigate(['/fbSync']);
        }, function (err) {
            _this.verifyErr = err.error.message;
            setTimeout(function () { _this.verifyErr = ''; }, 2000);
            console.log(err);
        });
    };
    VerifyEmailComponent.prototype.updateEmail = function (data, event) {
        var _this = this;
        event.preventDefault();
        var email = JSON.parse(localStorage.getItem('surData')).email;
        var senddata = { 'email': data.email };
        this.http
            .put(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/edit', senddata, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
        })
            .subscribe(function (res) {
            localStorage.setItem('newsurData', JSON.stringify(res));
            _this.email = res.new_email;
            _this.show = true;
            //Send verification code
            _this.resendECode(event);
            console.log(res);
        }, function (err) {
            console.log(err);
            if (err.error.detail_description.email)
                _this.changeEmailErr = err.error.detail_description.email[0];
            setTimeout(function () { _this.changeEmailErr = ''; }, 2000);
        });
    };
    VerifyEmailComponent.prototype.resendECode = function (event) {
        var _this = this;
        event.preventDefault();
        var email = JSON.parse(localStorage.getItem('surData')).email;
        var data = {};
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/Email/send', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
        })
            .subscribe(function (res) {
            _this.resendMsg = res.message;
            setTimeout(function () { _this.resendMsg = ''; }, 2000);
            console.log(res);
        }, function (err) {
            alert(err.error.message);
            console.log(err);
        });
    };
    VerifyEmailComponent.prototype.changeEmail = function (event) {
        event.preventDefault();
        this.show = false;
        this.emailVerifyForm.get('email').reset();
    };
    VerifyEmailComponent.prototype.cancel = function ($event) {
        event.preventDefault();
        this.show = true;
        this.changeEmailErr = '';
    };
    VerifyEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verify-email',
            template: __webpack_require__("../../../../../src/app/verify-email/verify-email.component.html"),
            styles: [__webpack_require__("../../../../../src/app/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/verify-phone/verify-phone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verify-phone/verify-phone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"sign-up-page section-start row\">\n    <div class=\"sign-up-wrapper col-md-6\">\n\n      <div class=\"wrapper-inner account-wrapper\">\n        <div class=\"sign-up-header\">\n          <h1>\n            Verify phone\n          </h1>\n        </div>\n        <div class=\"form-wrapper\">\n          <form [formGroup] = 'phoneVerifyForm'>\n            <div *ngIf=\"phone\">\n              <div class=\"form-group\" *ngIf=\"show\">\n                <p>A verification code has been sent to:</p>\n                <h1>+{{phone}}</h1>\n                <a (click) = \"changePhone($event)\">Change Phone Number</a>\n              </div>\n              <div class=\"form-group\" *ngIf=\"!show\">\n                <h3>Country</h3>\n                <select name=\"country\" class=\"form-control\" [formControl]=\"phoneVerifyForm.controls['country']\">\n                  <option>Select</option>\n                  <option *ngFor=\"let country of countries\" [value]=\"country.alpha_code\">{{country.name}}</option>\n                </select>\n                <br>\n                <h3> Phone</h3>\n                <input type=\"text\" class=\"form-control\" name=\"phone\" [formControl]=\"phoneVerifyForm.controls['phone']\"/>\n                <div class=\"alert alert-danger\" *ngIf=\"changePhoneErr\">{{ changePhoneErr }}</div>\n                <a (click)=\"cancel($event)\">Cancel</a> | <a (click)=\"updateNumber(phoneVerifyForm.value,$event)\">Update</a>\n              </div>\n            </div>\n            <label>Enter it here to activate your account</label>\n            <input type=\"text\" class=\"form-control\" name=\"code\" [formControl]=\"phoneVerifyForm.controls['code']\">\n            <a (click)=\"resendPCode($event)\">Resend Verification Code</a><br>\n            <div class=\"alert alert-danger\" *ngIf=\"resendMsg\">{{ resendMsg }}</div>\n            <div class=\"alert alert-danger\" *ngIf=\"verifyErr\">{{ verifyErr }}</div>\n            <button (click) = \"verifyPhone(phoneVerifyForm.value,$event)\">Next</button>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/verify-phone/verify-phone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPhoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerifyPhoneComponent = (function () {
    function VerifyPhoneComponent(http, fb, router) {
        this.http = http;
        this.router = router;
        this.show = true;
        this.verifyErr = '';
        this.changePhoneErr = '';
        this.resendMsg = '';
        var country = '';
        if (localStorage.getItem('sufData')) {
            country = JSON.parse(localStorage.getItem('sufData')).country_code;
        }
        else {
            country = '';
        }
        this.phoneVerifyForm = fb.group({
            'code': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'country': [country, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    VerifyPhoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('surData')) {
            this.phone = JSON.parse(localStorage.getItem('surData')).phone_number;
        }
        else if (localStorage.getItem('newsurData')) {
            this.phone = JSON.parse(localStorage.getItem('newsurData')).phone_number;
        }
        else {
            this.phone = '';
        }
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'config/countries').subscribe(function (res) {
            _this.countries = (res).countries;
        }, function (err) {
            console.log(err);
        });
    };
    VerifyPhoneComponent.prototype.verifyPhone = function (data, event) {
        var _this = this;
        event.preventDefault();
        var type = 'PHONE_NUMBER';
        var formData = new FormData();
        formData.append('pin', data.code);
        var email = JSON.parse(localStorage.getItem('surData')).email;
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/' + type + '/verify', formData, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
        })
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('resData', JSON.stringify(res));
            var data = {};
            //Sends Email Verification when phone verified
            _this.http
                .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/Email/send', data, {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                    .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
            })
                .subscribe(function (res) { console.log(res); });
            _this.router.navigate(['/verifyEmail']);
        }, function (err) {
            _this.verifyErr = err.error.message;
            setTimeout(function () { _this.verifyErr = ''; }, 2000);
            console.log(err);
        });
    };
    VerifyPhoneComponent.prototype.updateNumber = function (data, event) {
        var _this = this;
        event.preventDefault();
        var email = JSON.parse(localStorage.getItem('surData')).email;
        var senddata = { 'phone_number': data.phone, 'country_code': data.country };
        this.http
            .put(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/edit', senddata, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
        })
            .subscribe(function (res) {
            localStorage.setItem('newsurData', JSON.stringify(res));
            _this.phone = res.phone_number;
            _this.show = true;
            //Send verification code
            _this.resendPCode(event);
            console.log(res);
        }, function (err) {
            console.log(err);
            if (err.error.detail_description.phone_number)
                _this.changePhoneErr = err.error.detail_description.phone_number[0];
            setTimeout(function () { _this.changePhoneErr = ''; }, 2000);
        });
    };
    VerifyPhoneComponent.prototype.resendPCode = function (event) {
        var _this = this;
        event.preventDefault();
        var email = '';
        var type = 'PHONE_NUMBER';
        if (localStorage.getItem('surData')) {
            email = JSON.parse(localStorage.getItem('surData')).email;
        }
        else if (localStorage.getItem('email')) {
            email = JSON.parse(localStorage.getItem('email'));
        }
        var data = {};
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_URL + 'profile/user/' + email + '/' + type + '/send', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-TWO_DEGREE-APP_ID', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].APP_ID)
        })
            .subscribe(function (res) {
            _this.resendMsg = res.message;
            setTimeout(function () { _this.resendMsg = ''; }, 2000);
            console.log(res);
        }, function (err) {
            alert(err.error.message);
            console.log(err);
        });
    };
    VerifyPhoneComponent.prototype.changePhone = function (event) {
        event.preventDefault();
        this.show = false;
        this.phoneVerifyForm.get('phone').reset();
    };
    VerifyPhoneComponent.prototype.cancel = function ($event) {
        event.preventDefault();
        this.show = true;
        this.changePhoneErr = '';
    };
    VerifyPhoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verify-phone',
            template: __webpack_require__("../../../../../src/app/verify-phone/verify-phone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/verify-phone/verify-phone.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], VerifyPhoneComponent);
    return VerifyPhoneComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map