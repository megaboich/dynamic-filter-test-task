webpackJsonp([0],{

/***/ 0:
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(/*! es6-shim */ 1);
	__webpack_require__(/*! reflect-metadata */ 3);
	__webpack_require__(/*! zone.js */ 5);
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6);
	var http_1 = __webpack_require__(/*! @angular/http */ 333);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 354);
	var common_1 = __webpack_require__(/*! @angular/common */ 7);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 391);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 455);
	var confirmation_service_1 = __webpack_require__(/*! ./shared/interaction/confirmation.service */ 571);
	//enableProdMode();
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    forms_1.disableDeprecatedForms(),
	    forms_1.provideForms(),
	    confirmation_service_1.ConfirmationService,
	    app_routes_1.APP_ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	]);


/***/ },

/***/ 391:
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var router_1 = __webpack_require__(/*! @angular/router */ 392);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 264);
	var spinner_service_1 = __webpack_require__(/*! ./shared/interaction/spinner.service */ 444);
	var spinner_component_1 = __webpack_require__(/*! ./shared/interaction/spinner.component */ 449);
	var AppComponent = (function () {
	    function AppComponent(router) {
	        this.router = router;
	    }
	    AppComponent.prototype.ngOnInit = function () { };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app-component',
	            template: __webpack_require__(/*! ./app.component.html */ 454),
	            directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent],
	            providers: [spinner_service_1.SpinnerService, platform_browser_1.Title]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 444:
/*!***************************************************!*\
  !*** ./app/shared/interaction/spinner.service.ts ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var Subject_1 = __webpack_require__(/*! rxjs/Subject */ 42);
	__webpack_require__(/*! rxjs/add/operator/share */ 445);
	var SpinnerService = (function () {
	    function SpinnerService() {
	        this.status = new Subject_1.Subject();
	        this._active = false;
	    }
	    Object.defineProperty(SpinnerService.prototype, "active", {
	        get: function () {
	            return this._active;
	        },
	        set: function (v) {
	            this._active = v;
	            this.status.next(v);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SpinnerService.prototype.start = function () {
	        this.active = true;
	    };
	    SpinnerService.prototype.stop = function () {
	        this.active = false;
	    };
	    SpinnerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], SpinnerService);
	    return SpinnerService;
	}());
	exports.SpinnerService = SpinnerService;


/***/ },

/***/ 445:
/*!**************************************!*\
  !*** ./~/rxjs/add/operator/share.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(/*! ../../Observable */ 43);
	var share_1 = __webpack_require__(/*! ../../operator/share */ 446);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 446:
/*!**********************************!*\
  !*** ./~/rxjs/operator/share.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(/*! ./multicast */ 447);
	var Subject_1 = __webpack_require__(/*! ../Subject */ 42);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 447:
/*!**************************************!*\
  !*** ./~/rxjs/operator/multicast.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(/*! ../observable/ConnectableObservable */ 448);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },

/***/ 448:
/*!****************************************************!*\
  !*** ./~/rxjs/observable/ConnectableObservable.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(/*! ../Observable */ 43);
	var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 48);
	var Subscription_1 = __webpack_require__(/*! ../Subscription */ 50);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },

/***/ 449:
/*!*****************************************************!*\
  !*** ./app/shared/interaction/spinner.component.ts ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var spinner_service_1 = __webpack_require__(/*! ./spinner.service */ 444);
	__webpack_require__(/*! ./spinner.component.css */ 450);
	var SpinnerComponent = (function () {
	    function SpinnerComponent(spinner) {
	        var _this = this;
	        spinner.status.subscribe(function (status) {
	            _this.active = status;
	        });
	    }
	    SpinnerComponent = __decorate([
	        core_1.Component({
	            selector: 'spinner',
	            'template': "<div *ngIf=\"active\" class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [spinner_service_1.SpinnerService])
	    ], SpinnerComponent);
	    return SpinnerComponent;
	}());
	exports.SpinnerComponent = SpinnerComponent;


/***/ },

/***/ 450:
/*!******************************************************!*\
  !*** ./app/shared/interaction/spinner.component.css ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./spinner.component.css */ 451);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 453)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./spinner.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./spinner.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 451:
/*!*********************************************************************!*\
  !*** ./~/css-loader!./app/shared/interaction/spinner.component.css ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 452)();
	// imports
	
	
	// module
	exports.push([module.id, ".spinner {\r\n    position: absolute;\r\n    cursor: wait;\r\n    z-index: 10001;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    opacity: 0.6;\r\n    background-color: #fff\r\n}\r\n\r\n.double-bounce1, .double-bounce2 {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    top: 35%;\r\n    left: 50%;\r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n    0%, 100% {\r\n        -webkit-transform: scale(0.0)\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(1.0)\r\n    }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n    0%, 100% {\r\n        transform: scale(0.0);\r\n        -webkit-transform: scale(0.0);\r\n    }\r\n    50% {\r\n        transform: scale(1.0);\r\n        -webkit-transform: scale(1.0);\r\n    }\r\n}", ""]);
	
	// exports


/***/ },

/***/ 452:
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 453:
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 454:
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = "<spinner></spinner>\r\n\r\n<div class=\"zy-page-container zy-shadow-light\">\r\n    <router-outlet></router-outlet>\r\n</div>";

/***/ },

/***/ 455:
/*!***************************!*\
  !*** ./app/app.routes.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 392);
	var index_component_1 = __webpack_require__(/*! ./index.component */ 456);
	var tasks_list_component_1 = __webpack_require__(/*! ./tasks-list/tasks-list.component */ 457);
	exports.routes = [
	    { path: '', component: index_component_1.IndexComponent },
	    { path: 'tasks', component: tasks_list_component_1.TasksListComponent },
	];
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes),
	];


/***/ },

/***/ 456:
/*!********************************!*\
  !*** ./app/index.component.ts ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var router_1 = __webpack_require__(/*! @angular/router */ 392);
	var IndexComponent = (function () {
	    function IndexComponent(router) {
	        this.router = router;
	    }
	    IndexComponent.prototype.navigate = function (route) {
	        this.router.navigate([route]);
	    };
	    IndexComponent = __decorate([
	        core_1.Component({
	            selector: 'Index',
	            directives: [],
	            template: "\n    <ul>\n        <li>\n            <a href=\"javascript:void(0)\" (click)=\"navigate('/tasks')\">Tasks</a>            \n        </li>\n    </ul>\n    <hr/>\n    <ul>\n        <li>\n             <a href=\"tests.html\">Unit tests</a>     \n        </li>\n    </ul>\n    ",
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], IndexComponent);
	    return IndexComponent;
	}());
	exports.IndexComponent = IndexComponent;


/***/ },

/***/ 457:
/*!************************************************!*\
  !*** ./app/tasks-list/tasks-list.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var router_1 = __webpack_require__(/*! @angular/router */ 392);
	var filter_box_component_1 = __webpack_require__(/*! ./filter-box.component */ 574);
	var tasks_service_1 = __webpack_require__(/*! ../api/tasks/tasks.service */ 458);
	var filters_config_service_1 = __webpack_require__(/*! ../api/tasks/filters-config.service */ 459);
	var task_model_converter_1 = __webpack_require__(/*! ./task.model.converter */ 460);
	var filter_config_model_1 = __webpack_require__(/*! ./filter-config.model */ 566);
	var filter_config_model_converter_1 = __webpack_require__(/*! ./filter-config.model.converter */ 567);
	var filter_box_model_1 = __webpack_require__(/*! ./filter-box.model */ 569);
	var utils_1 = __webpack_require__(/*! ../shared/utils */ 568);
	var TasksListModel = (function () {
	    function TasksListModel() {
	        this.tasks = [];
	        this.filtersMeta = [];
	    }
	    return TasksListModel;
	}());
	exports.TasksListModel = TasksListModel;
	var TasksListComponent = (function () {
	    function TasksListComponent(router, tasksService, configService) {
	        this.router = router;
	        this.tasksService = tasksService;
	        this.configService = configService;
	        this.Model = new TasksListModel();
	        this.Model.filtersMeta.push(new filter_config_model_1.EnumListFilterMetaInfo("Status", "status", task_model_converter_1.TaskConverter.taskStatusEnumConverter));
	        this.Model.filtersMeta.push(new filter_config_model_1.EnumListFilterMetaInfo("Type", "type", task_model_converter_1.TaskConverter.taskTypeEnumConverter));
	        this.Model.filtersMeta.push(new filter_config_model_1.EnumListFilterMetaInfo("Color", "color", task_model_converter_1.TaskConverter.taskColorEnumConverter));
	    }
	    Object.defineProperty(TasksListComponent.prototype, "diagnostic", {
	        get: function () { return JSON.stringify(this.Model, null, 2); },
	        enumerable: true,
	        configurable: true
	    });
	    TasksListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.tasksService.getTasks().then(function (taskDTOs) {
	            var tasks = taskDTOs.map(function (x) { return task_model_converter_1.TaskConverter.BuildFromDTO(x); });
	            _this.Model.tasks = tasks;
	        });
	        this.configService.getFilters().then(function (filtersDto) {
	            _this.Model.filterBoxes = filtersDto.map(function (x) {
	                var filterNode = filter_config_model_converter_1.FilterConfigModelConverter.BuildFilterNode(x.filter);
	                var filterBox = new filter_box_model_1.FilterBox(x.name, filterNode, _this.Model.filtersMeta);
	                return filterBox;
	            });
	        });
	    };
	    TasksListComponent.prototype.onCancelClick = function () {
	        this.router.navigate(['/']);
	    };
	    Object.defineProperty(TasksListComponent.prototype, "tasksToDisplay", {
	        get: function () {
	            var _this = this;
	            var filterFunction = function (task) {
	                if (utils_1.isNotEmptyArray(_this.Model.filterBoxes)) {
	                    var filterFunctions = _this.Model.filterBoxes.map(function (box) { return box.filterFunction; }).filter(function (f) { return f != null; });
	                    if (filterFunctions.length > 0) {
	                        return filterFunctions.every(function (f) { return f(task); });
	                    }
	                    return true;
	                }
	                else {
	                    return true;
	                }
	            };
	            return this.Model.tasks.filter(filterFunction);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TasksListComponent.prototype.filterBoxChanged = function (filterBox) {
	        console.log('filterBoxChanged', filterBox.name);
	    };
	    TasksListComponent = __decorate([
	        core_1.Component({
	            selector: 'tasks-list',
	            template: __webpack_require__(/*! ./tasks-list.component.html */ 570),
	            directives: [filter_box_component_1.FilterBoxComponent],
	            providers: [tasks_service_1.TasksService, filters_config_service_1.FiltersConfigService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, tasks_service_1.TasksService, filters_config_service_1.FiltersConfigService])
	    ], TasksListComponent);
	    return TasksListComponent;
	}());
	exports.TasksListComponent = TasksListComponent;


/***/ },

/***/ 458:
/*!****************************************!*\
  !*** ./app/api/tasks/tasks.service.ts ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var http_1 = __webpack_require__(/*! @angular/http */ 333);
	__webpack_require__(/*! rxjs/add/operator/toPromise */ 437);
	var TaskDefinitionDTO = (function () {
	    function TaskDefinitionDTO() {
	    }
	    return TaskDefinitionDTO;
	}());
	exports.TaskDefinitionDTO = TaskDefinitionDTO;
	var TasksService = (function () {
	    function TasksService(http) {
	        this.http = http;
	        this.serviceUrl = 'data/tasks.json'; // URL to web api
	    }
	    TasksService.prototype.getTasks = function () {
	        return this.http.get(this.serviceUrl + '?t=' + new Date().getTime())
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        })
	            .catch(this.handleError);
	    };
	    TasksService.prototype.handleError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    TasksService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], TasksService);
	    return TasksService;
	}());
	exports.TasksService = TasksService;


/***/ },

/***/ 459:
/*!*************************************************!*\
  !*** ./app/api/tasks/filters-config.service.ts ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var http_1 = __webpack_require__(/*! @angular/http */ 333);
	__webpack_require__(/*! rxjs/add/operator/toPromise */ 437);
	var FilterDefinitionDTO = (function () {
	    function FilterDefinitionDTO() {
	    }
	    return FilterDefinitionDTO;
	}());
	exports.FilterDefinitionDTO = FilterDefinitionDTO;
	var FilterExpressionDTO = (function () {
	    function FilterExpressionDTO() {
	    }
	    return FilterExpressionDTO;
	}());
	exports.FilterExpressionDTO = FilterExpressionDTO;
	var FiltersConfigService = (function () {
	    function FiltersConfigService(http) {
	        this.http = http;
	        this.serviceUrl = 'data/filters-config.json'; // URL to web api
	    }
	    FiltersConfigService.prototype.getFilters = function () {
	        return this.http.get(this.serviceUrl + '?t=' + new Date().getTime())
	            .toPromise()
	            .then(function (response) {
	            var data = response.json().filters;
	            return data;
	        })
	            .catch(this.handleError);
	    };
	    FiltersConfigService.prototype.handleError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    FiltersConfigService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], FiltersConfigService);
	    return FiltersConfigService;
	}());
	exports.FiltersConfigService = FiltersConfigService;


/***/ },

/***/ 460:
/*!************************************************!*\
  !*** ./app/tasks-list/task.model.converter.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var task_model_1 = __webpack_require__(/*! ./task.model */ 461);
	var moment = __webpack_require__(/*! moment */ 462);
	var enum_converter_1 = __webpack_require__(/*! ../shared/enum.converter */ 565);
	var TaskConverter = (function () {
	    function TaskConverter() {
	    }
	    TaskConverter.BuildFromDTO = function (taskDTO) {
	        var task = new task_model_1.Task();
	        task.id = taskDTO.Id;
	        task.name = taskDTO.Name;
	        task.description = taskDTO.Description;
	        task.startDate = moment(taskDTO.StartDate, 'YYYY-MM-DD HH:mm:ss').toDate();
	        task.endDate = moment(taskDTO.EndDate, 'YYYY-MM-DD HH:mm:ss').toDate();
	        task.color = this.taskColorEnumConverter.convertStringToEnum(taskDTO.Color);
	        task.status = this.taskStatusEnumConverter.convertStringToEnum(taskDTO.Status);
	        task.type = this.taskTypeEnumConverter.convertStringToEnum(taskDTO.Type);
	        task.colorText = this.taskColorEnumConverter.convertToDisplayValue(task.color);
	        task.statusText = this.taskStatusEnumConverter.convertToDisplayValue(task.status);
	        task.typeText = this.taskTypeEnumConverter.convertToDisplayValue(task.type);
	        return task;
	    };
	    TaskConverter.taskColorEnumConverter = new enum_converter_1.EnumConverter({
	        "Blue": task_model_1.TaskColor.blue,
	        "Purple": task_model_1.TaskColor.purple,
	        "Black": task_model_1.TaskColor.black,
	    }, [{ enumValue: task_model_1.TaskColor.blue, displayName: "Blue" },
	        { enumValue: task_model_1.TaskColor.purple, displayName: "Purple" },
	        { enumValue: task_model_1.TaskColor.black, displayName: "Black" }]);
	    TaskConverter.taskStatusEnumConverter = new enum_converter_1.EnumConverter({
	        "Open": task_model_1.TaskStatus.open,
	        "In Progress": task_model_1.TaskStatus.inProgress,
	        "Closed": task_model_1.TaskStatus.closed,
	    }, [{ enumValue: task_model_1.TaskStatus.open, displayName: "Open" },
	        { enumValue: task_model_1.TaskStatus.inProgress, displayName: "In Progress" },
	        { enumValue: task_model_1.TaskStatus.closed, displayName: "Closed" }]);
	    TaskConverter.taskTypeEnumConverter = new enum_converter_1.EnumConverter({
	        "Maintenance": task_model_1.TaskType.maintenance,
	        "Installation": task_model_1.TaskType.installation,
	        "Failure": task_model_1.TaskType.failure,
	    }, [{ enumValue: task_model_1.TaskType.installation, displayName: "Installation" },
	        { enumValue: task_model_1.TaskType.maintenance, displayName: "Maintenance" },
	        { enumValue: task_model_1.TaskType.failure, displayName: "Failure" }]);
	    return TaskConverter;
	}());
	exports.TaskConverter = TaskConverter;


/***/ },

/***/ 461:
/*!**************************************!*\
  !*** ./app/tasks-list/task.model.ts ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	(function (TaskStatus) {
	    TaskStatus[TaskStatus["open"] = 0] = "open";
	    TaskStatus[TaskStatus["inProgress"] = 1] = "inProgress";
	    TaskStatus[TaskStatus["closed"] = 2] = "closed";
	})(exports.TaskStatus || (exports.TaskStatus = {}));
	var TaskStatus = exports.TaskStatus;
	(function (TaskType) {
	    TaskType[TaskType["installation"] = 0] = "installation";
	    TaskType[TaskType["maintenance"] = 1] = "maintenance";
	    TaskType[TaskType["failure"] = 2] = "failure";
	})(exports.TaskType || (exports.TaskType = {}));
	var TaskType = exports.TaskType;
	(function (TaskColor) {
	    TaskColor[TaskColor["blue"] = 0] = "blue";
	    TaskColor[TaskColor["purple"] = 1] = "purple";
	    TaskColor[TaskColor["black"] = 2] = "black";
	})(exports.TaskColor || (exports.TaskColor = {}));
	var TaskColor = exports.TaskColor;
	var Task = (function () {
	    function Task() {
	    }
	    return Task;
	}());
	exports.Task = Task;


/***/ },

/***/ 565:
/*!**************************************!*\
  !*** ./app/shared/enum.converter.ts ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	var EnumDisplayMapping = (function () {
	    function EnumDisplayMapping() {
	    }
	    return EnumDisplayMapping;
	}());
	exports.EnumDisplayMapping = EnumDisplayMapping;
	var EnumConverter = (function () {
	    function EnumConverter(mappingValueToEnum, mappingEnumToDisplay) {
	        this.mappingValueToEnum = mappingValueToEnum;
	        this.mappingEnumToDisplay = mappingEnumToDisplay;
	    }
	    EnumConverter.prototype.convertStringToEnum = function (value) {
	        var converted = this.mappingValueToEnum[value];
	        if (converted == undefined) {
	            throw "Wrong configuration: can't map value " + value;
	        }
	        return converted;
	    };
	    EnumConverter.prototype.convertToDisplayValue = function (value) {
	        var match = this.mappingEnumToDisplay.find(function (x) { return x.enumValue === value; });
	        if (match) {
	            return match.displayName;
	        }
	        return "UNDEFINED";
	    };
	    return EnumConverter;
	}());
	exports.EnumConverter = EnumConverter;


/***/ },

/***/ 566:
/*!***********************************************!*\
  !*** ./app/tasks-list/filter-config.model.ts ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	(function (FilterNodeType) {
	    FilterNodeType[FilterNodeType["and"] = 0] = "and";
	    FilterNodeType[FilterNodeType["or"] = 1] = "or";
	    FilterNodeType[FilterNodeType["equals"] = 2] = "equals";
	    FilterNodeType[FilterNodeType["ask"] = 3] = "ask";
	    FilterNodeType[FilterNodeType["value"] = 4] = "value";
	})(exports.FilterNodeType || (exports.FilterNodeType = {}));
	var FilterNodeType = exports.FilterNodeType;
	var FilterNode = (function () {
	    function FilterNode() {
	    }
	    return FilterNode;
	}());
	exports.FilterNode = FilterNode;
	(function (FilterUserInputType) {
	    FilterUserInputType[FilterUserInputType["enumlist"] = 0] = "enumlist";
	    FilterUserInputType[FilterUserInputType["datetime"] = 1] = "datetime";
	})(exports.FilterUserInputType || (exports.FilterUserInputType = {}));
	var FilterUserInputType = exports.FilterUserInputType;
	var FilterMetaInfo = (function () {
	    function FilterMetaInfo(configFieldName, modelFieldName, userInputType) {
	        this.configFieldName = configFieldName;
	        this.modelFieldName = modelFieldName;
	        this.userInputType = userInputType;
	    }
	    return FilterMetaInfo;
	}());
	exports.FilterMetaInfo = FilterMetaInfo;
	var EnumListFilterMetaInfo = (function (_super) {
	    __extends(EnumListFilterMetaInfo, _super);
	    function EnumListFilterMetaInfo(configFieldName, modelFieldName, enumConverter) {
	        _super.call(this, configFieldName, modelFieldName, FilterUserInputType.enumlist);
	        this.enumConverter = enumConverter;
	    }
	    return EnumListFilterMetaInfo;
	}(FilterMetaInfo));
	exports.EnumListFilterMetaInfo = EnumListFilterMetaInfo;
	var FilterConfigModel = (function () {
	    function FilterConfigModel() {
	    }
	    return FilterConfigModel;
	}());
	exports.FilterConfigModel = FilterConfigModel;


/***/ },

/***/ 567:
/*!*********************************************************!*\
  !*** ./app/tasks-list/filter-config.model.converter.ts ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var filter_config_model_1 = __webpack_require__(/*! ./filter-config.model */ 566);
	var utils_1 = __webpack_require__(/*! ../shared/utils */ 568);
	var FilterConfigModelConverter = (function () {
	    function FilterConfigModelConverter() {
	    }
	    FilterConfigModelConverter.BuildFilterNode = function (filterDto) {
	        var _this = this;
	        var node = new filter_config_model_1.FilterNode();
	        switch (filterDto.expression) {
	            case "AND":
	                node.type = filter_config_model_1.FilterNodeType.and;
	                break;
	            case "OR":
	                node.type = filter_config_model_1.FilterNodeType.or;
	                break;
	            case "EQUALS":
	                node.type = filter_config_model_1.FilterNodeType.equals;
	                break;
	            case "AskUser":
	                node.type = filter_config_model_1.FilterNodeType.ask;
	                break;
	            default:
	                node.type = filter_config_model_1.FilterNodeType.value;
	                break;
	        }
	        switch (node.type) {
	            case filter_config_model_1.FilterNodeType.and:
	            case filter_config_model_1.FilterNodeType.or:
	            case filter_config_model_1.FilterNodeType.equals:
	                //expect parameters here - go recursive
	                if (!filterDto.parameters || filterDto.parameters.length < 2) {
	                    throw "Wrong filters configuration: expected more than one parameter for node " + filterDto.expression;
	                }
	                node.parameters = filterDto.parameters.map(function (p) { return _this.BuildFilterNode(p); });
	                break;
	            default:
	                // do not expect parameters here
	                if (utils_1.isNotEmptyArray(filterDto.parameters)) {
	                    throw "Wrong filters configuration: not expected parameters for node " + filterDto.expression;
	                }
	                node.value = filterDto.expression;
	                break;
	        }
	        return node;
	    };
	    return FilterConfigModelConverter;
	}());
	exports.FilterConfigModelConverter = FilterConfigModelConverter;


/***/ },

/***/ 568:
/*!*****************************!*\
  !*** ./app/shared/utils.ts ***!
  \*****************************/
/***/ function(module, exports) {

	"use strict";
	function isNullOrEmptyString(value) {
	    return !!(!value || value === '');
	}
	exports.isNullOrEmptyString = isNullOrEmptyString;
	function isNotEmptyString(value) {
	    return !!(value && value !== '');
	}
	exports.isNotEmptyString = isNotEmptyString;
	function isNotEmptyArray(value) {
	    return (value && value.length > 0);
	}
	exports.isNotEmptyArray = isNotEmptyArray;
	function isNullOrEmptyArray(value) {
	    return (!value || value.length == 0);
	}
	exports.isNullOrEmptyArray = isNullOrEmptyArray;
	function assertNoUndefined(value) {
	    if (!value)
	        return;
	    value.forEach(function (x) {
	        if (x === undefined) {
	            throw "Value is undefined";
	        }
	    });
	}
	exports.assertNoUndefined = assertNoUndefined;
	function isNullOrEmptyObject(map) {
	    if (!map) {
	        return true;
	    }
	    for (var key in map) {
	        if (map.hasOwnProperty(key)) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.isNullOrEmptyObject = isNullOrEmptyObject;


/***/ },

/***/ 569:
/*!********************************************!*\
  !*** ./app/tasks-list/filter-box.model.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var filter_config_model_1 = __webpack_require__(/*! ./filter-config.model */ 566);
	var utils_1 = __webpack_require__(/*! ../shared/utils */ 568);
	var FilterBox = (function () {
	    function FilterBox(name, filterNode, meta) {
	        this.interactions = [];
	        this.filterApplied = false;
	        this.userInputActivated = false;
	        this.hasEmptyInteractions = false;
	        this.name = name;
	        this.filterNode = filterNode;
	        this.meta = meta;
	        this.buildInteractions(this.filterNode);
	    }
	    FilterBox.prototype.buildInteractions = function (node) {
	        var _this = this;
	        if (node.type == filter_config_model_1.FilterNodeType.equals
	            && node.parameters
	            && node.parameters.length == 2
	            && node.parameters[0].type == filter_config_model_1.FilterNodeType.value
	            && node.parameters[1].type == filter_config_model_1.FilterNodeType.ask) {
	            var fieldName_1 = node.parameters[0].value;
	            // find corresponding meta
	            var filterInfo = this.meta.find(function (m) { return m.configFieldName == fieldName_1; });
	            if (!filterInfo) {
	                throw "Wrong configuration: cant find meta info for " + fieldName_1;
	            }
	            // create interaction object
	            switch (filterInfo.userInputType) {
	                case filter_config_model_1.FilterUserInputType.enumlist:
	                    var interaction = new FilterEnumListInteraction();
	                    interaction.modelFieldName = filterInfo.modelFieldName;
	                    interaction.selectedValue = null;
	                    interaction.filterInfo = filterInfo;
	                    this.interactions.push(interaction);
	                    break;
	                default:
	                    throw "Filter input type " + filterInfo.userInputType + " is not supported";
	            }
	        }
	        else {
	            if (utils_1.isNotEmptyArray(node.parameters)) {
	                node.parameters.forEach(function (x) { return _this.buildInteractions(x); });
	            }
	        }
	    };
	    FilterBox.prototype.resetFilterFuntion = function () {
	        this.filterFunction = null;
	        this.interactions.forEach(function (i) {
	            i.selectedValue = null;
	        });
	    };
	    FilterBox.prototype.initFilterFunction = function () {
	        this.hasEmptyInteractions = false;
	        if (this.interactions.find(function (i) { return i.selectedValue === null; })) {
	            this.hasEmptyInteractions = true;
	            return;
	        }
	        var functionBody = this.getFunctionBody(this.filterNode);
	        functionBody = "return (" + functionBody + ")";
	        console.log('func', functionBody);
	        var func = new Function('x', functionBody);
	        this.filterFunction = func;
	    };
	    FilterBox.prototype.getFunctionBody = function (node) {
	        switch (node.type) {
	            case filter_config_model_1.FilterNodeType.equals:
	                var configFieldName_1 = node.parameters[0].value;
	                var meta_1 = this.meta.find(function (m) { return m.configFieldName == configFieldName_1; });
	                var fieldName = meta_1.modelFieldName;
	                var value = node.parameters[1].value;
	                var contractvalue = null;
	                if (node.parameters[1].type == filter_config_model_1.FilterNodeType.ask) {
	                    //update value using the interaction contracts
	                    var contract = this.interactions.find(function (i) { return i.modelFieldName == meta_1.modelFieldName; });
	                    if (!contract) {
	                        throw "Error: can't resolve interaction: " + meta_1.modelFieldName;
	                    }
	                    contractvalue = contract.selectedValue;
	                }
	                if (meta_1.userInputType == filter_config_model_1.FilterUserInputType.enumlist) {
	                    var enummeta = meta_1;
	                    var valnumeric = contractvalue == null
	                        ? enummeta.enumConverter.convertStringToEnum(value)
	                        : contractvalue;
	                    return "x." + fieldName + " === " + valnumeric;
	                }
	                throw 'Not supported user input type';
	            case filter_config_model_1.FilterNodeType.and:
	                {
	                    if (node.parameters.length != 2) {
	                        throw 'Config error: expect 2 parameters for AND node';
	                    }
	                    var left = this.getFunctionBody(node.parameters[0]);
	                    var right = this.getFunctionBody(node.parameters[1]);
	                    return "(" + left + ") && (" + right + ")";
	                }
	            case filter_config_model_1.FilterNodeType.or:
	                {
	                    if (node.parameters.length != 2) {
	                        throw 'Config error: expect 2 parameters for OR node';
	                    }
	                    var left = this.getFunctionBody(node.parameters[0]);
	                    var right = this.getFunctionBody(node.parameters[1]);
	                    return "(" + left + ") || (" + right + ")";
	                }
	        }
	    };
	    return FilterBox;
	}());
	exports.FilterBox = FilterBox;
	var FilterInteraction = (function () {
	    function FilterInteraction() {
	    }
	    return FilterInteraction;
	}());
	exports.FilterInteraction = FilterInteraction;
	var FilterEnumListInteraction = (function (_super) {
	    __extends(FilterEnumListInteraction, _super);
	    function FilterEnumListInteraction() {
	        _super.apply(this, arguments);
	    }
	    return FilterEnumListInteraction;
	}(FilterInteraction));
	exports.FilterEnumListInteraction = FilterEnumListInteraction;


/***/ },

/***/ 570:
/*!**************************************************!*\
  !*** ./app/tasks-list/tasks-list.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div *ngFor=\"let filterBox of Model.filterBoxes\">\r\n        <filter-box [filterBox]=\"filterBox\" (filterChanged)=\"filterBoxChanged(filterBox)\"></filter-box>\r\n    </div>\r\n\r\n    <ul>\r\n        <li *ngFor=\"let task of tasksToDisplay\">\r\n            <div> Name:{{task.name}} </div>\r\n            <div> Description:{{task.description}} </div>\r\n            <div> Status:{{task.statusText}} </div>\r\n            <div> Color:{{task.colorText}} </div>\r\n            <div> Type:{{task.typeText}} </div>\r\n\r\n        </li>\r\n    </ul>\r\n\r\n    <div>\r\n        <button name=\"btn-cancel\" (click)=\"onCancelClick()\">Cancel</button>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!--\r\n    <hr/>\r\n        <pre>\r\n            {{diagnostic}}\r\n        </pre>\r\n\r\n        -->";

/***/ },

/***/ 571:
/*!********************************************************!*\
  !*** ./app/shared/interaction/confirmation.service.ts ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	__webpack_require__(/*! rxjs/add/operator/share */ 445);
	var ConfirmationService = (function () {
	    function ConfirmationService() {
	    }
	    ConfirmationService.prototype.confirm = function (text) {
	        var promise = new Promise(function (resolve, reject) {
	            var result = window.confirm(text);
	            if (result) {
	                resolve(true);
	            }
	            else {
	                reject();
	            }
	        });
	        return promise;
	    };
	    ConfirmationService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ConfirmationService);
	    return ConfirmationService;
	}());
	exports.ConfirmationService = ConfirmationService;


/***/ },

/***/ 574:
/*!************************************************!*\
  !*** ./app/tasks-list/filter-box.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 10);
	var filter_box_model_1 = __webpack_require__(/*! ./filter-box.model */ 569);
	var utils_1 = __webpack_require__(/*! ../shared/utils */ 568);
	var FilterBoxComponent = (function () {
	    function FilterBoxComponent() {
	        this.filterChanged = new core_1.EventEmitter();
	    }
	    FilterBoxComponent.prototype.toggleFilterBox = function () {
	        console.log('toggleFilterBox', this.filterBox.name);
	        if (utils_1.isNullOrEmptyArray(this.filterBox.interactions)) {
	            if (!this.filterBox.filterApplied) {
	                this.applyFilterBox();
	            }
	            else {
	                this.resetFilterBox();
	            }
	            return;
	        }
	        else {
	            this.filterBox.userInputActivated = !this.filterBox.userInputActivated;
	        }
	    };
	    FilterBoxComponent.prototype.applyFilterBox = function () {
	        this.filterBox.initFilterFunction();
	        if (this.filterBox.hasEmptyInteractions) {
	            return;
	        }
	        this.filterBox.filterApplied = true;
	        this.filterBox.userInputActivated = false;
	        this.filterChanged.emit(this.filterBox);
	    };
	    FilterBoxComponent.prototype.resetFilterBox = function () {
	        this.filterBox.resetFilterFuntion();
	        this.filterBox.filterApplied = false;
	        this.filterBox.userInputActivated = false;
	        this.filterChanged.emit(this.filterBox);
	    };
	    FilterBoxComponent.prototype.closeFilterBox = function () {
	        this.filterBox.userInputActivated = false;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', filter_box_model_1.FilterBox)
	    ], FilterBoxComponent.prototype, "filterBox", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], FilterBoxComponent.prototype, "filterChanged", void 0);
	    FilterBoxComponent = __decorate([
	        core_1.Component({
	            selector: 'filter-box',
	            template: __webpack_require__(/*! ./filter-box.component.html */ 575),
	            directives: [],
	            providers: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FilterBoxComponent);
	    return FilterBoxComponent;
	}());
	exports.FilterBoxComponent = FilterBoxComponent;


/***/ },

/***/ 575:
/*!**************************************************!*\
  !*** ./app/tasks-list/filter-box.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<button *ngIf=\"!filterBox.filterApplied\" (click)=\"toggleFilterBox(filterBox)\">{{filterBox.name}}</button>\r\n<button *ngIf=\"filterBox.filterApplied\" (click)=\"toggleFilterBox(filterBox)\" style=\"background-color:yellow;\">{{filterBox.name}}</button>\r\n\r\n<div *ngIf=\"filterBox.userInputActivated\" style=\"border:solid 1px #aaa; padding: 10px;\">\r\n    <div *ngFor=\"let interaction of filterBox.interactions\">\r\n\r\n        {{interaction.filterInfo.configFieldName}}\r\n        <select [(ngModel)]=\"interaction.selectedValue\">\r\n            <option *ngFor=\"let item of interaction.filterInfo.enumConverter.mappingEnumToDisplay\" [ngValue] = \"item.enumValue\">{{item.displayName}}</option>\r\n        </select>\r\n\r\n    </div>\r\n    <button (click)=\"applyFilterBox(filterBox)\">Apply</button>\r\n    <button (click)=\"resetFilterBox(filterBox)\">Reset</button>\r\n    <button (click)=\"closeFilterBox(filterBox)\">Close</button>\r\n</div>";

/***/ }

});
//# sourceMappingURL=app.js.map