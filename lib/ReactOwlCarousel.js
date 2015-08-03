(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactOwlCarousel"] = factory(require("react"));
	else
		root["ReactOwlCarousel"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(7);
	__webpack_require__(3);

	module.exports = __webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	/**
	* http://owlgraphic.com/owlcarousel/demos/one.html
	*
	* Props
	*		items: number. This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
	*		itemsDesktop: array. This allows you to preset the number of slides visible with a particular browser width.
	*	              The format is [x,y] whereby x=browser width and y=number of slides displayed.
	*	              For example [1199,4] means that if(window<=1199){ show 4 slides per page}
	*	              Alternatively use itemsDesktop: false to override these settings.
	*		itemsDesktopSmall: array. As above.
	*		itemsTablet: array. As above.
	*		itemsTabletSmall: array. As above. Default value is disabled.
	*		itemsMobile: array. As above.
	*		itemsCustom: array.	This allow you to add custom variations of items depending from the width
	*	             If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
	*	             For better preview, order the arrays by screen size, but it's not mandatory
	*	             Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
	*	             Example: [[0, 2], [400, 4], [700, 6], [1000, 8], [1200, 10], [1600, 16]]
	*		singleItem : ,
	*		itemsScaleUp: boolean. Option to not stretch items when it is less than the supplied items.
	*		slideSpeed: number. Slide speed in milliseconds.
	*		paginationSpeed: number. Pagination speed in milliseconds.
	*		rewindNav: boolean. Slide to first item. Use rewindSpeed to change animation speed.
	*		rewindSpeed: number. Rewind speed in milliseconds.
	*		autoPlay: boolean. Change to any integrer for example autoPlay : 5000 to play every 5 seconds.
	*	          If you set autoPlay: true default speed will be 5 seconds.
	*		stopOnHover: boolean. Stop autoplay on mouse hover.
	*		navigation: boolean. Display "next" and "prev" buttons.
	*		navigationText: array of element | boolean. You can customize your own navigation.
	*	                To get empty buttons use navigationText : false. Also HTML can be used here.
	*		scrollPerPage: boolean. Scroll per page not per item. This affect next/prev buttons and mouse/touch dragging.
	*		pagination: boolean. Show pagination.
	*		paginationNumbers: boolean. Show numbers inside pagination buttons
	*		responsive: boolean. Change that to "false" to disable resposive capabilities
	*		responsiveRefreshRate: number. Check window width changes every 200ms for responsive actions
	*		responsiveBaseWidth: jQuery selector. Owl Carousel check window for browser width changes.
	*		baseClass: string. Automaticly added class for base CSS styles.
	*		theme: string. Default Owl CSS styles for navigation and buttons. Change it to match your own theme.
	*		lazyLoad: boolean. Delays loading of images. Images outside of viewport won't be loaded before user scrolls to them.
	*	          Great for mobile devices to speed up page loadings. IMG need special markup class="lazyOwl" and data-src="your img path".
	*		lazyFollow: boolean. When pagination used, it skips loading the images from pages that got skipped.
	*	            It only loads the images that get displayed in viewport.
	*	            If set to false, all images get loaded when pagination used. It is a sub setting of the lazy load function.
	*		lazyEffect: boolean / one of "fade", , Default is fadeIn on 400ms speed. Use false to remove that effect.
	*		autoHeight: boolean. Add height to owl-wrapper-outer so you can use diffrent heights on slides. Use it only for one item per page setting.
	*		jsonPath: string. Allows you to load directly from a jSon file.
	*	          The JSON structure you use needs to match the owl JSON structure used here. To use custom JSON structure see jsonSuccess option.
	*		jsonSuccess: function. Success callback for $.getJSON build in into carousel.
	*		dragBeforeAnimFinish: boolean. Ignore whether a transition is done or not (only dragging).
	*		mouseDrag: boolean. Turn off/on mouse events.
	*		touchDrag: boolean. Turn off/on touch events.
	*		addClassActive: boolean. Add "active" classes on visible items. Works with any numbers of items on screen.
	*		transitionStyle: string. Add CSS3 transition style. Works only with one item on screen.
	*
	* Method
	*		next()
	*		prev()
	*		goTo(x)
	*		jumpTo(x)
	*		play()
	*		stop()
	*/

	var _react2 = _interopRequireDefault(_react);

	var OwlCarousel = _react2['default'].createClass({
		displayName: 'OwlCarousel',

		getDefaultProps: function getDefaultProps() {
			return {
				options: {},
				style: {}
			};
		},

		propTypes: {
			children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element.isRequired)]).isRequired,

			style: _react2['default'].PropTypes.object,
			id: _react2['default'].PropTypes.string,
			options: _react2['default'].PropTypes.shape({

				items: _react2['default'].PropTypes.number,
				itemsCustom: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number).isRequired),
				itemsDesktop: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number.isRequired),
				itemsDesktopSmall: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number.isRequired),
				itemsTablet: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number.isRequired),
				itemsTabletSmall: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number.isRequired),
				itemsMobile: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number.isRequired),
				singleItem: _react2['default'].PropTypes.bool,
				itemsScaleUp: _react2['default'].PropTypes.bool,

				slideSpeed: _react2['default'].PropTypes.number,
				paginationSpeed: _react2['default'].PropTypes.number,
				rewindSpeed: _react2['default'].PropTypes.number,

				autoPlay: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.number]),
				stopOnHover: _react2['default'].PropTypes.bool,

				navigation: _react2['default'].PropTypes.bool,
				navigationText: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
				rewindNav: _react2['default'].PropTypes.bool,
				scrollPerPage: _react2['default'].PropTypes.bool,

				pagination: _react2['default'].PropTypes.bool,
				paginationNumbers: _react2['default'].PropTypes.bool,

				responsive: _react2['default'].PropTypes.bool,
				responsiveRefreshRate: _react2['default'].PropTypes.number,
				responsiveBaseWidth: function responsiveBaseWidth(props, propName, componentName) {
					if (props[propName] && !$(props[propName]).length) {
						return new Error('React-owl-carousel: the props `responsiveBaseWidth` needs jQuery selector.');
					}
				},

				baseClass: _react2['default'].PropTypes.string,
				theme: _react2['default'].PropTypes.string,

				lazyLoad: _react2['default'].PropTypes.bool,
				lazyFollow: _react2['default'].PropTypes.bool,
				lazyEffect: _react2['default'].PropTypes.bool,

				autoHeight: _react2['default'].PropTypes.bool,

				jsonPath: _react2['default'].PropTypes.string,
				jsonSuccess: _react2['default'].PropTypes.func,

				dragBeforeAnimFinish: _react2['default'].PropTypes.bool,
				mouseDrag: _react2['default'].PropTypes.bool,
				touchDrag: _react2['default'].PropTypes.bool,

				addClassActive: _react2['default'].PropTypes.bool,

				//build-in transitionStyle: 'fade', 'backSlide', 'goDown', 'scaleUp'
				transitionStyle: _react2['default'].PropTypes.string,

				beforeUpdate: _react2['default'].PropTypes.func,
				afterUpdate: _react2['default'].PropTypes.func,
				beforeInit: _react2['default'].PropTypes.func,
				afterInit: _react2['default'].PropTypes.func,
				beforeMove: _react2['default'].PropTypes.func,
				afterMove: _react2['default'].PropTypes.func,
				afterAction: _react2['default'].PropTypes.func,
				startDragging: _react2['default'].PropTypes.func,
				afterLazyLoad: _react2['default'].PropTypes.func
			})
		},

		componentDidMount: function componentDidMount() {
			$(_react2['default'].findDOMNode(this)).owlCarousel(this.props.options);
		},

		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').destroy();
		},

		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			$(_react2['default'].findDOMNode(this)).owlCarousel(this.props.options);
		},

		componentWillUnmount: function componentWillUnmount() {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').destroy();
		},

		render: function render() {

			this.props.options.touchDrag !== false ? _react2['default'].initializeTouchEvents(true) : _react2['default'].initializeTouchEvents(false);

			return _react2['default'].createElement(
				'div',
				{ id: this.props.id, style: this.props.style },
				this.props.children
			);
		},

		next: function next() {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').next();
		},

		prev: function prev() {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').prev();
		},

		// Go to x slide
		goTo: function goTo(x) {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').goTo(x);
		},

		// Go to x slide without slide animation
		jumpTo: function jumpTo(x) {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').jumpTo(x);
		},

		play: function play() {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').play();
		},

		stop: function stop() {
			$(_react2['default'].findDOMNode(this)).data('owlCarousel').stop();
		}

	});

	module.exports = OwlCarousel;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	 *  jQuery OwlCarousel v1.3.2
	 *
	 *  Copyright (c) 2013 Bartosz Wojciechowski
	 *  http://www.owlgraphic.com/owlcarousel/
	 *
	 *  Licensed under MIT
	 *
	 */

	/*JS Lint helpers: */
	/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
	/*jslint nomen: true, continue:true */

	'use strict';
	if (typeof Object.create !== "function") {
	    Object.create = function (obj) {
	        function F() {}
	        F.prototype = obj;
	        return new F();
	    };
	}
	(function ($, window, document) {

	    var Carousel = {
	        init: function init(options, el) {
	            var base = this;

	            base.$elem = $(el);
	            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

	            base.userOptions = options;
	            base.loadContent();
	        },

	        loadContent: function loadContent() {
	            var base = this,
	                url;

	            function getData(data) {
	                var i,
	                    content = "";
	                if (typeof base.options.jsonSuccess === "function") {
	                    base.options.jsonSuccess.apply(this, [data]);
	                } else {
	                    for (i in data.owl) {
	                        if (data.owl.hasOwnProperty(i)) {
	                            content += data.owl[i].item;
	                        }
	                    }
	                    base.$elem.html(content);
	                }
	                base.logIn();
	            }

	            if (typeof base.options.beforeInit === "function") {
	                base.options.beforeInit.apply(this, [base.$elem]);
	            }

	            if (typeof base.options.jsonPath === "string") {
	                url = base.options.jsonPath;
	                $.getJSON(url, getData);
	            } else {
	                base.logIn();
	            }
	        },

	        logIn: function logIn() {
	            var base = this;

	            base.$elem.data("owl-originalStyles", base.$elem.attr("style")).data("owl-originalClasses", base.$elem.attr("class"));

	            base.$elem.css({ opacity: 0 });
	            base.orignalItems = base.options.items;
	            base.checkBrowser();
	            base.wrapperWidth = 0;
	            base.checkVisible = null;
	            base.setVars();
	        },

	        setVars: function setVars() {
	            var base = this;
	            if (base.$elem.children().length === 0) {
	                return false;
	            }
	            base.baseClass();
	            base.eventTypes();
	            base.$userItems = base.$elem.children();
	            base.itemsAmount = base.$userItems.length;
	            base.wrapItems();
	            base.$owlItems = base.$elem.find(".owl-item");
	            base.$owlWrapper = base.$elem.find(".owl-wrapper");
	            base.playDirection = "next";
	            base.prevItem = 0;
	            base.prevArr = [0];
	            base.currentItem = 0;
	            base.customEvents();
	            base.onStartup();
	        },

	        onStartup: function onStartup() {
	            var base = this;
	            base.updateItems();
	            base.calculateAll();
	            base.buildControls();
	            base.updateControls();
	            base.response();
	            base.moveEvents();
	            base.stopOnHover();
	            base.owlStatus();

	            if (base.options.transitionStyle !== false) {
	                base.transitionTypes(base.options.transitionStyle);
	            }
	            if (base.options.autoPlay === true) {
	                base.options.autoPlay = 5000;
	            }
	            base.play();

	            base.$elem.find(".owl-wrapper").css("display", "block");

	            if (!base.$elem.is(":visible")) {
	                base.watchVisibility();
	            } else {
	                base.$elem.css("opacity", 1);
	            }
	            base.onstartup = false;
	            base.eachMoveUpdate();
	            if (typeof base.options.afterInit === "function") {
	                base.options.afterInit.apply(this, [base.$elem]);
	            }
	        },

	        eachMoveUpdate: function eachMoveUpdate() {
	            var base = this;

	            if (base.options.lazyLoad === true) {
	                base.lazyLoad();
	            }
	            if (base.options.autoHeight === true) {
	                base.autoHeight();
	            }
	            base.onVisibleItems();

	            if (typeof base.options.afterAction === "function") {
	                base.options.afterAction.apply(this, [base.$elem]);
	            }
	        },

	        updateVars: function updateVars() {
	            var base = this;
	            if (typeof base.options.beforeUpdate === "function") {
	                base.options.beforeUpdate.apply(this, [base.$elem]);
	            }
	            base.watchVisibility();
	            base.updateItems();
	            base.calculateAll();
	            base.updatePosition();
	            base.updateControls();
	            base.eachMoveUpdate();
	            if (typeof base.options.afterUpdate === "function") {
	                base.options.afterUpdate.apply(this, [base.$elem]);
	            }
	        },

	        reload: function reload() {
	            var base = this;
	            window.setTimeout(function () {
	                base.updateVars();
	            }, 0);
	        },

	        watchVisibility: function watchVisibility() {
	            var base = this;

	            if (base.$elem.is(":visible") === false) {
	                base.$elem.css({ opacity: 0 });
	                window.clearInterval(base.autoPlayInterval);
	                window.clearInterval(base.checkVisible);
	            } else {
	                return false;
	            }
	            base.checkVisible = window.setInterval(function () {
	                if (base.$elem.is(":visible")) {
	                    base.reload();
	                    base.$elem.animate({ opacity: 1 }, 200);
	                    window.clearInterval(base.checkVisible);
	                }
	            }, 500);
	        },

	        wrapItems: function wrapItems() {
	            var base = this;
	            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
	            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
	            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
	            base.$elem.css("display", "block");
	        },

	        baseClass: function baseClass() {
	            var base = this,
	                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
	                hasThemeClass = base.$elem.hasClass(base.options.theme);

	            if (!hasBaseClass) {
	                base.$elem.addClass(base.options.baseClass);
	            }

	            if (!hasThemeClass) {
	                base.$elem.addClass(base.options.theme);
	            }
	        },

	        updateItems: function updateItems() {
	            var base = this,
	                width,
	                i;

	            if (base.options.responsive === false) {
	                return false;
	            }
	            if (base.options.singleItem === true) {
	                base.options.items = base.orignalItems = 1;
	                base.options.itemsCustom = false;
	                base.options.itemsDesktop = false;
	                base.options.itemsDesktopSmall = false;
	                base.options.itemsTablet = false;
	                base.options.itemsTabletSmall = false;
	                base.options.itemsMobile = false;
	                return false;
	            }

	            width = $(base.options.responsiveBaseWidth).width();

	            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
	                base.options.items = base.orignalItems;
	            }
	            if (base.options.itemsCustom !== false) {
	                //Reorder array by screen size
	                base.options.itemsCustom.sort(function (a, b) {
	                    return a[0] - b[0];
	                });

	                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
	                    if (base.options.itemsCustom[i][0] <= width) {
	                        base.options.items = base.options.itemsCustom[i][1];
	                    }
	                }
	            } else {

	                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
	                    base.options.items = base.options.itemsDesktop[1];
	                }

	                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
	                    base.options.items = base.options.itemsDesktopSmall[1];
	                }

	                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
	                    base.options.items = base.options.itemsTablet[1];
	                }

	                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
	                    base.options.items = base.options.itemsTabletSmall[1];
	                }

	                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
	                    base.options.items = base.options.itemsMobile[1];
	                }
	            }

	            //if number of items is less than declared
	            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
	                base.options.items = base.itemsAmount;
	            }
	        },

	        response: function response() {
	            var base = this,
	                smallDelay,
	                lastWindowWidth;

	            if (base.options.responsive !== true) {
	                return false;
	            }
	            lastWindowWidth = $(window).width();

	            base.resizer = function () {
	                if ($(window).width() !== lastWindowWidth) {
	                    if (base.options.autoPlay !== false) {
	                        window.clearInterval(base.autoPlayInterval);
	                    }
	                    window.clearTimeout(smallDelay);
	                    smallDelay = window.setTimeout(function () {
	                        lastWindowWidth = $(window).width();
	                        base.updateVars();
	                    }, base.options.responsiveRefreshRate);
	                }
	            };
	            $(window).resize(base.resizer);
	        },

	        updatePosition: function updatePosition() {
	            var base = this;
	            base.jumpTo(base.currentItem);
	            if (base.options.autoPlay !== false) {
	                base.checkAp();
	            }
	        },

	        appendItemsSizes: function appendItemsSizes() {
	            var base = this,
	                roundPages = 0,
	                lastItem = base.itemsAmount - base.options.items;

	            base.$owlItems.each(function (index) {
	                var $this = $(this);
	                $this.css({ "width": base.itemWidth }).data("owl-item", Number(index));

	                if (index % base.options.items === 0 || index === lastItem) {
	                    if (!(index > lastItem)) {
	                        roundPages += 1;
	                    }
	                }
	                $this.data("owl-roundPages", roundPages);
	            });
	        },

	        appendWrapperSizes: function appendWrapperSizes() {
	            var base = this,
	                width = base.$owlItems.length * base.itemWidth;

	            base.$owlWrapper.css({
	                "width": width * 2,
	                "left": 0
	            });
	            base.appendItemsSizes();
	        },

	        calculateAll: function calculateAll() {
	            var base = this;
	            base.calculateWidth();
	            base.appendWrapperSizes();
	            base.loops();
	            base.max();
	        },

	        calculateWidth: function calculateWidth() {
	            var base = this;
	            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
	        },

	        max: function max() {
	            var base = this,
	                maximum = (base.itemsAmount * base.itemWidth - base.options.items * base.itemWidth) * -1;
	            if (base.options.items > base.itemsAmount) {
	                base.maximumItem = 0;
	                maximum = 0;
	                base.maximumPixels = 0;
	            } else {
	                base.maximumItem = base.itemsAmount - base.options.items;
	                base.maximumPixels = maximum;
	            }
	            return maximum;
	        },

	        min: function min() {
	            return 0;
	        },

	        loops: function loops() {
	            var base = this,
	                prev = 0,
	                elWidth = 0,
	                i,
	                item,
	                roundPageNum;

	            base.positionsInArray = [0];
	            base.pagesInArray = [];

	            for (i = 0; i < base.itemsAmount; i += 1) {
	                elWidth += base.itemWidth;
	                base.positionsInArray.push(-elWidth);

	                if (base.options.scrollPerPage === true) {
	                    item = $(base.$owlItems[i]);
	                    roundPageNum = item.data("owl-roundPages");
	                    if (roundPageNum !== prev) {
	                        base.pagesInArray[prev] = base.positionsInArray[i];
	                        prev = roundPageNum;
	                    }
	                }
	            }
	        },

	        buildControls: function buildControls() {
	            var base = this;
	            if (base.options.navigation === true || base.options.pagination === true) {
	                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
	            }
	            if (base.options.pagination === true) {
	                base.buildPagination();
	            }
	            if (base.options.navigation === true) {
	                base.buildButtons();
	            }
	        },

	        buildButtons: function buildButtons() {
	            var base = this,
	                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
	            base.owlControls.append(buttonsWrapper);

	            base.buttonPrev = $("<div/>", {
	                "class": "owl-prev",
	                "html": base.options.navigationText[0] || ""
	            });

	            base.buttonNext = $("<div/>", {
	                "class": "owl-next",
	                "html": base.options.navigationText[1] || ""
	            });

	            buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);

	            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
	                event.preventDefault();
	            });

	            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
	                event.preventDefault();
	                if ($(this).hasClass("owl-next")) {
	                    base.next();
	                } else {
	                    base.prev();
	                }
	            });
	        },

	        buildPagination: function buildPagination() {
	            var base = this;

	            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
	            base.owlControls.append(base.paginationWrapper);

	            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
	                event.preventDefault();
	                if (Number($(this).data("owl-page")) !== base.currentItem) {
	                    base.goTo(Number($(this).data("owl-page")), true);
	                }
	            });
	        },

	        updatePagination: function updatePagination() {
	            var base = this,
	                counter,
	                lastPage,
	                lastItem,
	                i,
	                paginationButton,
	                paginationButtonInner;

	            if (base.options.pagination === false) {
	                return false;
	            }

	            base.paginationWrapper.html("");

	            counter = 0;
	            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

	            for (i = 0; i < base.itemsAmount; i += 1) {
	                if (i % base.options.items === 0) {
	                    counter += 1;
	                    if (lastPage === i) {
	                        lastItem = base.itemsAmount - base.options.items;
	                    }
	                    paginationButton = $("<div/>", {
	                        "class": "owl-page"
	                    });
	                    paginationButtonInner = $("<span></span>", {
	                        "text": base.options.paginationNumbers === true ? counter : "",
	                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
	                    });
	                    paginationButton.append(paginationButtonInner);

	                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
	                    paginationButton.data("owl-roundPages", counter);

	                    base.paginationWrapper.append(paginationButton);
	                }
	            }
	            base.checkPagination();
	        },
	        checkPagination: function checkPagination() {
	            var base = this;
	            if (base.options.pagination === false) {
	                return false;
	            }
	            base.paginationWrapper.find(".owl-page").each(function () {
	                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
	                    base.paginationWrapper.find(".owl-page").removeClass("active");
	                    $(this).addClass("active");
	                }
	            });
	        },

	        checkNavigation: function checkNavigation() {
	            var base = this;

	            if (base.options.navigation === false) {
	                return false;
	            }
	            if (base.options.rewindNav === false) {
	                if (base.currentItem === 0 && base.maximumItem === 0) {
	                    base.buttonPrev.addClass("disabled");
	                    base.buttonNext.addClass("disabled");
	                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
	                    base.buttonPrev.addClass("disabled");
	                    base.buttonNext.removeClass("disabled");
	                } else if (base.currentItem === base.maximumItem) {
	                    base.buttonPrev.removeClass("disabled");
	                    base.buttonNext.addClass("disabled");
	                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
	                    base.buttonPrev.removeClass("disabled");
	                    base.buttonNext.removeClass("disabled");
	                }
	            }
	        },

	        updateControls: function updateControls() {
	            var base = this;
	            base.updatePagination();
	            base.checkNavigation();
	            if (base.owlControls) {
	                if (base.options.items >= base.itemsAmount) {
	                    base.owlControls.hide();
	                } else {
	                    base.owlControls.show();
	                }
	            }
	        },

	        destroyControls: function destroyControls() {
	            var base = this;
	            if (base.owlControls) {
	                base.owlControls.remove();
	            }
	        },

	        next: function next(speed) {
	            var base = this;

	            if (base.isTransition) {
	                return false;
	            }

	            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
	            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? base.options.items - 1 : 0)) {
	                if (base.options.rewindNav === true) {
	                    base.currentItem = 0;
	                    speed = "rewind";
	                } else {
	                    base.currentItem = base.maximumItem;
	                    return false;
	                }
	            }
	            base.goTo(base.currentItem, speed);
	        },

	        prev: function prev(speed) {
	            var base = this;

	            if (base.isTransition) {
	                return false;
	            }

	            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
	                base.currentItem = 0;
	            } else {
	                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
	            }
	            if (base.currentItem < 0) {
	                if (base.options.rewindNav === true) {
	                    base.currentItem = base.maximumItem;
	                    speed = "rewind";
	                } else {
	                    base.currentItem = 0;
	                    return false;
	                }
	            }
	            base.goTo(base.currentItem, speed);
	        },

	        goTo: function goTo(position, speed, drag) {
	            var base = this,
	                goToPixel;

	            if (base.isTransition) {
	                return false;
	            }
	            if (typeof base.options.beforeMove === "function") {
	                base.options.beforeMove.apply(this, [base.$elem]);
	            }
	            if (position >= base.maximumItem) {
	                position = base.maximumItem;
	            } else if (position <= 0) {
	                position = 0;
	            }

	            base.currentItem = base.owl.currentItem = position;
	            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
	                base.swapSpeed(0);
	                if (base.browser.support3d === true) {
	                    base.transition3d(base.positionsInArray[position]);
	                } else {
	                    base.css2slide(base.positionsInArray[position], 1);
	                }
	                base.afterGo();
	                base.singleItemTransition();
	                return false;
	            }
	            goToPixel = base.positionsInArray[position];

	            if (base.browser.support3d === true) {
	                base.isCss3Finish = false;

	                if (speed === true) {
	                    base.swapSpeed("paginationSpeed");
	                    window.setTimeout(function () {
	                        base.isCss3Finish = true;
	                    }, base.options.paginationSpeed);
	                } else if (speed === "rewind") {
	                    base.swapSpeed(base.options.rewindSpeed);
	                    window.setTimeout(function () {
	                        base.isCss3Finish = true;
	                    }, base.options.rewindSpeed);
	                } else {
	                    base.swapSpeed("slideSpeed");
	                    window.setTimeout(function () {
	                        base.isCss3Finish = true;
	                    }, base.options.slideSpeed);
	                }
	                base.transition3d(goToPixel);
	            } else {
	                if (speed === true) {
	                    base.css2slide(goToPixel, base.options.paginationSpeed);
	                } else if (speed === "rewind") {
	                    base.css2slide(goToPixel, base.options.rewindSpeed);
	                } else {
	                    base.css2slide(goToPixel, base.options.slideSpeed);
	                }
	            }
	            base.afterGo();
	        },

	        jumpTo: function jumpTo(position) {
	            var base = this;
	            if (typeof base.options.beforeMove === "function") {
	                base.options.beforeMove.apply(this, [base.$elem]);
	            }
	            if (position >= base.maximumItem || position === -1) {
	                position = base.maximumItem;
	            } else if (position <= 0) {
	                position = 0;
	            }
	            base.swapSpeed(0);
	            if (base.browser.support3d === true) {
	                base.transition3d(base.positionsInArray[position]);
	            } else {
	                base.css2slide(base.positionsInArray[position], 1);
	            }
	            base.currentItem = base.owl.currentItem = position;
	            base.afterGo();
	        },

	        afterGo: function afterGo() {
	            var base = this;

	            base.prevArr.push(base.currentItem);
	            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
	            base.prevArr.shift(0);

	            if (base.prevItem !== base.currentItem) {
	                base.checkPagination();
	                base.checkNavigation();
	                base.eachMoveUpdate();

	                if (base.options.autoPlay !== false) {
	                    base.checkAp();
	                }
	            }
	            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
	                base.options.afterMove.apply(this, [base.$elem]);
	            }
	        },

	        stop: function stop() {
	            var base = this;
	            base.apStatus = "stop";
	            window.clearInterval(base.autoPlayInterval);
	        },

	        checkAp: function checkAp() {
	            var base = this;
	            if (base.apStatus !== "stop") {
	                base.play();
	            }
	        },

	        play: function play() {
	            var base = this;
	            base.apStatus = "play";
	            if (base.options.autoPlay === false) {
	                return false;
	            }
	            window.clearInterval(base.autoPlayInterval);
	            base.autoPlayInterval = window.setInterval(function () {
	                base.next(true);
	            }, base.options.autoPlay);
	        },

	        swapSpeed: function swapSpeed(action) {
	            var base = this;
	            if (action === "slideSpeed") {
	                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
	            } else if (action === "paginationSpeed") {
	                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
	            } else if (typeof action !== "string") {
	                base.$owlWrapper.css(base.addCssSpeed(action));
	            }
	        },

	        addCssSpeed: function addCssSpeed(speed) {
	            return {
	                "-webkit-transition": "all " + speed + "ms ease",
	                "-moz-transition": "all " + speed + "ms ease",
	                "-o-transition": "all " + speed + "ms ease",
	                "transition": "all " + speed + "ms ease"
	            };
	        },

	        removeTransition: function removeTransition() {
	            return {
	                "-webkit-transition": "",
	                "-moz-transition": "",
	                "-o-transition": "",
	                "transition": ""
	            };
	        },

	        doTranslate: function doTranslate(pixels) {
	            return {
	                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
	                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
	                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
	                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
	                "transform": "translate3d(" + pixels + "px, 0px,0px)"
	            };
	        },

	        transition3d: function transition3d(value) {
	            var base = this;
	            base.$owlWrapper.css(base.doTranslate(value));
	        },

	        css2move: function css2move(value) {
	            var base = this;
	            base.$owlWrapper.css({ "left": value });
	        },

	        css2slide: function css2slide(value, speed) {
	            var base = this;

	            base.isCssFinish = false;
	            base.$owlWrapper.stop(true, true).animate({
	                "left": value
	            }, {
	                duration: speed || base.options.slideSpeed,
	                complete: function complete() {
	                    base.isCssFinish = true;
	                }
	            });
	        },

	        checkBrowser: function checkBrowser() {
	            var base = this,
	                translate3D = "translate3d(0px, 0px, 0px)",
	                tempElem = document.createElement("div"),
	                regex,
	                asSupport,
	                support3d,
	                isTouch;

	            tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -ms-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
	            regex = /translate3d\(0px, 0px, 0px\)/g;
	            asSupport = tempElem.style.cssText.match(regex);
	            support3d = asSupport !== null && asSupport.length === 1;

	            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

	            base.browser = {
	                "support3d": support3d,
	                "isTouch": isTouch
	            };
	        },

	        moveEvents: function moveEvents() {
	            var base = this;
	            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
	                base.gestures();
	                base.disabledEvents();
	            }
	        },

	        eventTypes: function eventTypes() {
	            var base = this,
	                types = ["s", "e", "x"];

	            base.ev_types = {};

	            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
	                types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"];
	            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
	                types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
	            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
	                types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
	            }

	            base.ev_types.start = types[0];
	            base.ev_types.move = types[1];
	            base.ev_types.end = types[2];
	        },

	        disabledEvents: function disabledEvents() {
	            var base = this;
	            base.$elem.on("dragstart.owl", function (event) {
	                event.preventDefault();
	            });
	            base.$elem.on("mousedown.disableTextSelect", function (e) {
	                return $(e.target).is('input, textarea, select, option');
	            });
	        },

	        gestures: function gestures() {
	            /*jslint unparam: true*/
	            var base = this,
	                locals = {
	                offsetX: 0,
	                offsetY: 0,
	                baseElWidth: 0,
	                relativePos: 0,
	                position: null,
	                minSwipe: null,
	                maxSwipe: null,
	                sliding: null,
	                dargging: null,
	                targetElement: null
	            };

	            base.isCssFinish = true;

	            function getTouches(event) {
	                if (event.touches !== undefined) {
	                    return {
	                        x: event.touches[0].pageX,
	                        y: event.touches[0].pageY
	                    };
	                }

	                if (event.touches === undefined) {
	                    if (event.pageX !== undefined) {
	                        return {
	                            x: event.pageX,
	                            y: event.pageY
	                        };
	                    }
	                    if (event.pageX === undefined) {
	                        return {
	                            x: event.clientX,
	                            y: event.clientY
	                        };
	                    }
	                }
	            }

	            function swapEvents(type) {
	                if (type === "on") {
	                    $(document).on(base.ev_types.move, dragMove);
	                    $(document).on(base.ev_types.end, dragEnd);
	                } else if (type === "off") {
	                    $(document).off(base.ev_types.move);
	                    $(document).off(base.ev_types.end);
	                }
	            }

	            function dragStart(event) {
	                var ev = event.originalEvent || event || window.event,
	                    position;

	                if (ev.which === 3) {
	                    return false;
	                }
	                if (base.itemsAmount <= base.options.items) {
	                    return;
	                }
	                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
	                    return false;
	                }
	                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
	                    return false;
	                }

	                if (base.options.autoPlay !== false) {
	                    window.clearInterval(base.autoPlayInterval);
	                }

	                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
	                    base.$owlWrapper.addClass("grabbing");
	                }

	                base.newPosX = 0;
	                base.newRelativeX = 0;

	                $(this).css(base.removeTransition());

	                position = $(this).position();
	                locals.relativePos = position.left;

	                locals.offsetX = getTouches(ev).x - position.left;
	                locals.offsetY = getTouches(ev).y - position.top;

	                swapEvents("on");

	                locals.sliding = false;
	                locals.targetElement = ev.target || ev.srcElement;
	            }

	            function dragMove(event) {
	                var ev = event.originalEvent || event || window.event,
	                    minSwipe,
	                    maxSwipe;

	                base.newPosX = getTouches(ev).x - locals.offsetX;
	                base.newPosY = getTouches(ev).y - locals.offsetY;
	                base.newRelativeX = base.newPosX - locals.relativePos;

	                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
	                    locals.dragging = true;
	                    base.options.startDragging.apply(base, [base.$elem]);
	                }

	                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && base.browser.isTouch === true) {
	                    if (ev.preventDefault !== undefined) {
	                        ev.preventDefault();
	                    } else {
	                        ev.returnValue = false;
	                    }
	                    locals.sliding = true;
	                }

	                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
	                    $(document).off("touchmove.owl");
	                }

	                minSwipe = function () {
	                    return base.newRelativeX / 5;
	                };

	                maxSwipe = function () {
	                    return base.maximumPixels + base.newRelativeX / 5;
	                };

	                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
	                if (base.browser.support3d === true) {
	                    base.transition3d(base.newPosX);
	                } else {
	                    base.css2move(base.newPosX);
	                }
	            }

	            function dragEnd(event) {
	                var ev = event.originalEvent || event || window.event,
	                    newPosition,
	                    handlers,
	                    owlStopEvent;

	                // Cannot set property target of #<Event> which has only a getter
	                // ev.target = ev.target || ev.srcElement;

	                locals.dragging = false;

	                if (base.browser.isTouch !== true) {
	                    base.$owlWrapper.removeClass("grabbing");
	                }

	                if (base.newRelativeX < 0) {
	                    base.dragDirection = base.owl.dragDirection = "left";
	                } else {
	                    base.dragDirection = base.owl.dragDirection = "right";
	                }

	                if (base.newRelativeX !== 0) {
	                    newPosition = base.getNewPosition();
	                    base.goTo(newPosition, false, "drag");
	                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
	                        $(ev.target).on("click.disable", function (ev) {
	                            ev.stopImmediatePropagation();
	                            ev.stopPropagation();
	                            ev.preventDefault();
	                            $(ev.target).off("click.disable");
	                        });
	                        handlers = $._data(ev.target, "events").click;
	                        owlStopEvent = handlers.pop();
	                        handlers.splice(0, 0, owlStopEvent);
	                    }
	                }
	                swapEvents("off");
	            }
	            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
	        },

	        getNewPosition: function getNewPosition() {
	            var base = this,
	                newPosition = base.closestItem();

	            if (newPosition > base.maximumItem) {
	                base.currentItem = base.maximumItem;
	                newPosition = base.maximumItem;
	            } else if (base.newPosX >= 0) {
	                newPosition = 0;
	                base.currentItem = 0;
	            }
	            return newPosition;
	        },
	        closestItem: function closestItem() {
	            var base = this,
	                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
	                goal = base.newPosX,
	                closest = null;

	            $.each(array, function (i, v) {
	                if (goal - base.itemWidth / 20 > array[i + 1] && goal - base.itemWidth / 20 < v && base.moveDirection() === "left") {
	                    closest = v;
	                    if (base.options.scrollPerPage === true) {
	                        base.currentItem = $.inArray(closest, base.positionsInArray);
	                    } else {
	                        base.currentItem = i;
	                    }
	                } else if (goal + base.itemWidth / 20 < v && goal + base.itemWidth / 20 > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
	                    if (base.options.scrollPerPage === true) {
	                        closest = array[i + 1] || array[array.length - 1];
	                        base.currentItem = $.inArray(closest, base.positionsInArray);
	                    } else {
	                        closest = array[i + 1];
	                        base.currentItem = i + 1;
	                    }
	                }
	            });
	            return base.currentItem;
	        },

	        moveDirection: function moveDirection() {
	            var base = this,
	                direction;
	            if (base.newRelativeX < 0) {
	                direction = "right";
	                base.playDirection = "next";
	            } else {
	                direction = "left";
	                base.playDirection = "prev";
	            }
	            return direction;
	        },

	        customEvents: function customEvents() {
	            /*jslint unparam: true*/
	            var base = this;
	            base.$elem.on("owl.next", function () {
	                base.next();
	            });
	            base.$elem.on("owl.prev", function () {
	                base.prev();
	            });
	            base.$elem.on("owl.play", function (event, speed) {
	                base.options.autoPlay = speed;
	                base.play();
	                base.hoverStatus = "play";
	            });
	            base.$elem.on("owl.stop", function () {
	                base.stop();
	                base.hoverStatus = "stop";
	            });
	            base.$elem.on("owl.goTo", function (event, item) {
	                base.goTo(item);
	            });
	            base.$elem.on("owl.jumpTo", function (event, item) {
	                base.jumpTo(item);
	            });
	        },

	        stopOnHover: function stopOnHover() {
	            var base = this;
	            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
	                base.$elem.on("mouseover", function () {
	                    base.stop();
	                });
	                base.$elem.on("mouseout", function () {
	                    if (base.hoverStatus !== "stop") {
	                        base.play();
	                    }
	                });
	            }
	        },

	        lazyLoad: function lazyLoad() {
	            var base = this,
	                i,
	                $item,
	                itemNumber,
	                $lazyImg,
	                follow;

	            if (base.options.lazyLoad === false) {
	                return false;
	            }
	            for (i = 0; i < base.itemsAmount; i += 1) {
	                $item = $(base.$owlItems[i]);

	                if ($item.data("owl-loaded") === "loaded") {
	                    continue;
	                }

	                itemNumber = $item.data("owl-item");
	                $lazyImg = $item.find(".lazyOwl");

	                if (typeof $lazyImg.data("src") !== "string") {
	                    $item.data("owl-loaded", "loaded");
	                    continue;
	                }
	                if ($item.data("owl-loaded") === undefined) {
	                    $lazyImg.hide();
	                    $item.addClass("loading").data("owl-loaded", "checked");
	                }
	                if (base.options.lazyFollow === true) {
	                    follow = itemNumber >= base.currentItem;
	                } else {
	                    follow = true;
	                }
	                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
	                    base.lazyPreload($item, $lazyImg);
	                }
	            }
	        },

	        lazyPreload: function lazyPreload($item, $lazyImg) {
	            var base = this,
	                iterations = 0,
	                isBackgroundImg;

	            if ($lazyImg.prop("tagName") === "DIV") {
	                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
	                isBackgroundImg = true;
	            } else {
	                $lazyImg[0].src = $lazyImg.data("src");
	            }

	            function showImage() {
	                $item.data("owl-loaded", "loaded").removeClass("loading");
	                $lazyImg.removeAttr("data-src");
	                if (base.options.lazyEffect) {
	                    $lazyImg.fadeIn(400);
	                } else {
	                    $lazyImg.show();
	                }
	                if (typeof base.options.afterLazyLoad === "function") {
	                    base.options.afterLazyLoad.apply(this, [base.$elem]);
	                }
	            }

	            function checkLazyImage() {
	                iterations += 1;
	                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
	                    showImage();
	                } else if (iterations <= 100) {
	                    //if image loads in less than 10 seconds
	                    window.setTimeout(checkLazyImage, 100);
	                } else {
	                    showImage();
	                }
	            }

	            checkLazyImage();
	        },

	        autoHeight: function autoHeight() {
	            var base = this,
	                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
	                iterations;

	            function addHeight() {
	                var $currentItem = $(base.$owlItems[base.currentItem]).height();
	                base.wrapperOuter.css("height", $currentItem + "px");
	                if (!base.wrapperOuter.hasClass("autoHeight")) {
	                    window.setTimeout(function () {
	                        base.wrapperOuter.addClass("autoHeight");
	                    }, 0);
	                }
	            }

	            function checkImage() {
	                iterations += 1;
	                if (base.completeImg($currentimg.get(0))) {
	                    addHeight();
	                } else if (iterations <= 100) {
	                    //if image loads in less than 10 seconds
	                    window.setTimeout(checkImage, 100);
	                } else {
	                    base.wrapperOuter.css("height", ""); //Else remove height attribute
	                }
	            }

	            if ($currentimg.get(0) !== undefined) {
	                iterations = 0;
	                checkImage();
	            } else {
	                addHeight();
	            }
	        },

	        completeImg: function completeImg(img) {
	            var naturalWidthType;

	            if (!img.complete) {
	                return false;
	            }
	            naturalWidthType = typeof img.naturalWidth;
	            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
	                return false;
	            }
	            return true;
	        },

	        onVisibleItems: function onVisibleItems() {
	            var base = this,
	                i;

	            if (base.options.addClassActive === true) {
	                base.$owlItems.removeClass("active");
	            }
	            base.visibleItems = [];
	            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
	                base.visibleItems.push(i);

	                if (base.options.addClassActive === true) {
	                    $(base.$owlItems[i]).addClass("active");
	                }
	            }
	            base.owl.visibleItems = base.visibleItems;
	        },

	        transitionTypes: function transitionTypes(className) {
	            var base = this;
	            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
	            base.outClass = "owl-" + className + "-out";
	            base.inClass = "owl-" + className + "-in";
	        },

	        singleItemTransition: function singleItemTransition() {
	            var base = this,
	                outClass = base.outClass,
	                inClass = base.inClass,
	                $currentItem = base.$owlItems.eq(base.currentItem),
	                $prevItem = base.$owlItems.eq(base.prevItem),
	                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
	                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
	                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

	            base.isTransition = true;

	            base.$owlWrapper.addClass('owl-origin').css({
	                "-webkit-transform-origin": origin + "px",
	                "-moz-perspective-origin": origin + "px",
	                "perspective-origin": origin + "px"
	            });
	            function transStyles(prevPos) {
	                return {
	                    "position": "relative",
	                    "left": prevPos + "px"
	                };
	            }

	            $prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function () {
	                base.endPrev = true;
	                $prevItem.off(animEnd);
	                base.clearTransStyle($prevItem, outClass);
	            });

	            $currentItem.addClass(inClass).on(animEnd, function () {
	                base.endCurrent = true;
	                $currentItem.off(animEnd);
	                base.clearTransStyle($currentItem, inClass);
	            });
	        },

	        clearTransStyle: function clearTransStyle(item, classToRemove) {
	            var base = this;
	            item.css({
	                "position": "",
	                "left": ""
	            }).removeClass(classToRemove);

	            if (base.endPrev && base.endCurrent) {
	                base.$owlWrapper.removeClass('owl-origin');
	                base.endPrev = false;
	                base.endCurrent = false;
	                base.isTransition = false;
	            }
	        },

	        owlStatus: function owlStatus() {
	            var base = this;
	            base.owl = {
	                "userOptions": base.userOptions,
	                "baseElement": base.$elem,
	                "userItems": base.$userItems,
	                "owlItems": base.$owlItems,
	                "currentItem": base.currentItem,
	                "prevItem": base.prevItem,
	                "visibleItems": base.visibleItems,
	                "isTouch": base.browser.isTouch,
	                "browser": base.browser,
	                "dragDirection": base.dragDirection
	            };
	        },

	        clearEvents: function clearEvents() {
	            var base = this;
	            base.$elem.off(".owl owl mousedown.disableTextSelect");
	            $(document).off(".owl owl");
	            $(window).off("resize", base.resizer);
	        },

	        unWrap: function unWrap() {
	            var base = this;
	            if (base.$elem.children().length !== 0) {
	                base.$owlWrapper.unwrap();
	                base.$userItems.unwrap().unwrap();
	                if (base.owlControls) {
	                    base.owlControls.remove();
	                }
	            }
	            base.clearEvents();
	            base.$elem.attr("style", base.$elem.data("owl-originalStyles") || "").attr("class", base.$elem.data("owl-originalClasses"));
	        },

	        destroy: function destroy() {
	            var base = this;
	            base.stop();
	            window.clearInterval(base.checkVisible);
	            base.unWrap();
	            base.$elem.removeData();
	        },

	        reinit: function reinit(newOptions) {
	            var base = this,
	                options = $.extend({}, base.userOptions, newOptions);
	            base.unWrap();
	            base.init(options, base.$elem);
	        },

	        addItem: function addItem(htmlString, targetPosition) {
	            var base = this,
	                position;

	            if (!htmlString) {
	                return false;
	            }

	            if (base.$elem.children().length === 0) {
	                base.$elem.append(htmlString);
	                base.setVars();
	                return false;
	            }
	            base.unWrap();
	            if (targetPosition === undefined || targetPosition === -1) {
	                position = -1;
	            } else {
	                position = targetPosition;
	            }
	            if (position >= base.$userItems.length || position === -1) {
	                base.$userItems.eq(-1).after(htmlString);
	            } else {
	                base.$userItems.eq(position).before(htmlString);
	            }

	            base.setVars();
	        },

	        removeItem: function removeItem(targetPosition) {
	            var base = this,
	                position;

	            if (base.$elem.children().length === 0) {
	                return false;
	            }
	            if (targetPosition === undefined || targetPosition === -1) {
	                position = -1;
	            } else {
	                position = targetPosition;
	            }

	            base.unWrap();
	            base.$userItems.eq(position).remove();
	            base.setVars();
	        }

	    };

	    $.fn.owlCarousel = function (options) {
	        return this.each(function () {
	            if ($(this).data("owl-init") === true) {
	                return false;
	            }
	            $(this).data("owl-init", true);
	            var carousel = Object.create(Carousel);
	            carousel.init(options, this);
	            $.data(this, "owlCarousel", carousel);
	        });
	    };

	    $.fn.owlCarousel.options = {

	        items: 5,
	        itemsCustom: false,
	        itemsDesktop: [1199, 4],
	        itemsDesktopSmall: [979, 3],
	        itemsTablet: [768, 2],
	        itemsTabletSmall: false,
	        itemsMobile: [479, 1],
	        singleItem: false,
	        itemsScaleUp: false,

	        slideSpeed: 200,
	        paginationSpeed: 800,
	        rewindSpeed: 1000,

	        autoPlay: false,
	        stopOnHover: false,

	        navigation: false,
	        navigationText: ["prev", "next"],
	        rewindNav: true,
	        scrollPerPage: false,

	        pagination: true,
	        paginationNumbers: false,

	        responsive: true,
	        responsiveRefreshRate: 200,
	        responsiveBaseWidth: window,

	        baseClass: "owl-carousel",
	        theme: "owl-theme",

	        lazyLoad: false,
	        lazyFollow: true,
	        lazyEffect: "fade",

	        autoHeight: false,

	        jsonPath: false,
	        jsonSuccess: false,

	        dragBeforeAnimFinish: true,
	        mouseDrag: true,
	        touchDrag: true,

	        addClassActive: false,
	        transitionStyle: false,

	        beforeUpdate: false,
	        afterUpdate: false,
	        beforeInit: false,
	        afterInit: false,
	        beforeMove: false,
	        afterMove: false,
	        afterAction: false,
	        startDragging: false,
	        afterLazyLoad: false
	    };
	})(jQuery, window, document);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\r\n * \tCore Owl Carousel CSS File\r\n *\tv1.3.2\r\n */\r\n\r\n/* clearfix */\r\n.owl-carousel .owl-wrapper:after {\r\n\tcontent: \".\";\r\n\tdisplay: block;\r\n\tclear: both;\r\n\tvisibility: hidden;\r\n\tline-height: 0;\r\n\theight: 0;\r\n}\r\n/* display none until init */\r\n.owl-carousel{\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\t-ms-touch-action: pan-y;\r\n}\r\n.owl-carousel .owl-wrapper{\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\t-webkit-transform: translate3d(0px, 0px, 0px);\r\n}\r\n.owl-carousel .owl-wrapper-outer{\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n}\r\n.owl-carousel .owl-wrapper-outer.autoHeight{\r\n\t-webkit-transition: height 500ms ease-in-out;\r\n\t-moz-transition: height 500ms ease-in-out;\r\n\t-ms-transition: height 500ms ease-in-out;\r\n\t-o-transition: height 500ms ease-in-out;\r\n\ttransition: height 500ms ease-in-out;\r\n}\r\n\r\n.owl-carousel .owl-item{\r\n\tfloat: left;\r\n}\r\n.owl-controls .owl-page,\r\n.owl-controls .owl-buttons div{\r\n\tcursor: pointer;\r\n}\r\n.owl-controls {\r\n\t-webkit-user-select: none;\r\n\t-khtml-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n/* mouse grab icon */\r\n.grabbing {\r\n    /*cursor:url(grabbing.png) 8 8, move;*/\r\n}\r\n\r\n/* fix */\r\n.owl-carousel  .owl-wrapper,\r\n.owl-carousel  .owl-item{\r\n\t-webkit-backface-visibility: hidden;\r\n\t-moz-backface-visibility:    hidden;\r\n\t-ms-backface-visibility:     hidden;\r\n  -webkit-transform: translate3d(0,0,0);\r\n  -moz-transform: translate3d(0,0,0);\r\n  -ms-transform: translate3d(0,0,0);\r\n}\r\n\r\n/*\r\n *  Owl Carousel CSS3 Transitions\r\n *  v1.3.2\r\n */\r\n\r\n.owl-origin {\r\n\t-webkit-perspective: 1200px;\r\n\t-webkit-perspective-origin-x : 50%;\r\n\t-webkit-perspective-origin-y : 50%;\r\n\t-moz-perspective : 1200px;\r\n\t-moz-perspective-origin-x : 50%;\r\n\t-moz-perspective-origin-y : 50%;\r\n\tperspective : 1200px;\r\n}\r\n/* fade */\r\n.owl-fade-out {\r\n  z-index: 10;\r\n  -webkit-animation: fadeOut .7s both ease;\r\n  -moz-animation: fadeOut .7s both ease;\r\n  animation: fadeOut .7s both ease;\r\n}\r\n.owl-fade-in {\r\n  -webkit-animation: fadeIn .7s both ease;\r\n  -moz-animation: fadeIn .7s both ease;\r\n  animation: fadeIn .7s both ease;\r\n}\r\n/* backSlide */\r\n.owl-backSlide-out {\r\n  -webkit-animation: backSlideOut 1s both ease;\r\n  -moz-animation: backSlideOut 1s both ease;\r\n  animation: backSlideOut 1s both ease;\r\n}\r\n.owl-backSlide-in {\r\n  -webkit-animation: backSlideIn 1s both ease;\r\n  -moz-animation: backSlideIn 1s both ease;\r\n  animation: backSlideIn 1s both ease;\r\n}\r\n/* goDown */\r\n.owl-goDown-out {\r\n  -webkit-animation: scaleToFade .7s ease both;\r\n  -moz-animation: scaleToFade .7s ease both;\r\n  animation: scaleToFade .7s ease both;\r\n}\r\n.owl-goDown-in {\r\n  -webkit-animation: goDown .6s ease both;\r\n  -moz-animation: goDown .6s ease both;\r\n  animation: goDown .6s ease both;\r\n}\r\n/* scaleUp */\r\n.owl-fadeUp-in {\r\n  -webkit-animation: scaleUpFrom .5s ease both;\r\n  -moz-animation: scaleUpFrom .5s ease both;\r\n  animation: scaleUpFrom .5s ease both;\r\n}\r\n\r\n.owl-fadeUp-out {\r\n  -webkit-animation: scaleUpTo .5s ease both;\r\n  -moz-animation: scaleUpTo .5s ease both;\r\n  animation: scaleUpTo .5s ease both;\r\n}\r\n/* Keyframes */\r\n/*empty*/\r\n@-webkit-keyframes empty {\r\n  0% {opacity: 1}\r\n}\r\n@-moz-keyframes empty {\r\n  0% {opacity: 1}\r\n}\r\n@keyframes empty {\r\n  0% {opacity: 1}\r\n}\r\n@-webkit-keyframes fadeIn {\r\n  0% { opacity:0; }\r\n  100% { opacity:1; }\r\n}\r\n@-moz-keyframes fadeIn {\r\n  0% { opacity:0; }\r\n  100% { opacity:1; }\r\n}\r\n@keyframes fadeIn {\r\n  0% { opacity:0; }\r\n  100% { opacity:1; }\r\n}\r\n@-webkit-keyframes fadeOut {\r\n  0% { opacity:1; }\r\n  100% { opacity:0; }\r\n}\r\n@-moz-keyframes fadeOut {\r\n  0% { opacity:1; }\r\n  100% { opacity:0; }\r\n}\r\n@keyframes fadeOut {\r\n  0% { opacity:1; }\r\n  100% { opacity:0; }\r\n}\r\n@-webkit-keyframes backSlideOut {\r\n  25% { opacity: .5; -webkit-transform: translateZ(-500px); }\r\n  75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }\r\n  100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }\r\n}\r\n@-moz-keyframes backSlideOut {\r\n  25% { opacity: .5; -moz-transform: translateZ(-500px); }\r\n  75% { opacity: .5; -moz-transform: translateZ(-500px) translateX(-200%); }\r\n  100% { opacity: .5; -moz-transform: translateZ(-500px) translateX(-200%); }\r\n}\r\n@keyframes backSlideOut {\r\n  25% { opacity: .5; transform: translateZ(-500px); }\r\n  75% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }\r\n  100% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }\r\n}\r\n@-webkit-keyframes backSlideIn {\r\n  0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); }\r\n  75% { opacity: .5; -webkit-transform: translateZ(-500px); }\r\n  100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); }\r\n}\r\n@-moz-keyframes backSlideIn {\r\n  0%, 25% { opacity: .5; -moz-transform: translateZ(-500px) translateX(200%); }\r\n  75% { opacity: .5; -moz-transform: translateZ(-500px); }\r\n  100% { opacity: 1; -moz-transform: translateZ(0) translateX(0); }\r\n}\r\n@keyframes backSlideIn {\r\n  0%, 25% { opacity: .5; transform: translateZ(-500px) translateX(200%); }\r\n  75% { opacity: .5; transform: translateZ(-500px); }\r\n  100% { opacity: 1; transform: translateZ(0) translateX(0); }\r\n}\r\n@-webkit-keyframes scaleToFade {\r\n  to { opacity: 0; -webkit-transform: scale(.8); }\r\n}\r\n@-moz-keyframes scaleToFade {\r\n  to { opacity: 0; -moz-transform: scale(.8); }\r\n}\r\n@keyframes scaleToFade {\r\n  to { opacity: 0; transform: scale(.8); }\r\n}\r\n@-webkit-keyframes goDown {\r\n  from { -webkit-transform: translateY(-100%); }\r\n}\r\n@-moz-keyframes goDown {\r\n  from { -moz-transform: translateY(-100%); }\r\n}\r\n@keyframes goDown {\r\n  from { transform: translateY(-100%); }\r\n}\r\n\r\n@-webkit-keyframes scaleUpFrom {\r\n  from { opacity: 0; -webkit-transform: scale(1.5); }\r\n}\r\n@-moz-keyframes scaleUpFrom {\r\n  from { opacity: 0; -moz-transform: scale(1.5); }\r\n}\r\n@keyframes scaleUpFrom {\r\n  from { opacity: 0; transform: scale(1.5); }\r\n}\r\n\r\n@-webkit-keyframes scaleUpTo {\r\n  to { opacity: 0; -webkit-transform: scale(1.5); }\r\n}\r\n@-moz-keyframes scaleUpTo {\r\n  to { opacity: 0; -moz-transform: scale(1.5); }\r\n}\r\n@keyframes scaleUpTo {\r\n  to { opacity: 0; transform: scale(1.5); }\r\n}\r\n", ""]);

	// exports


/***/ },
/* 5 */
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
/* 6 */
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
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

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

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	// if(false) {
	// 	// When the styles change, update the <style> tags
	// 	if(!content.locals) {
	// 		module.hot.accept("!!./../node_modules/css-loader/index.js!./owl.carousel.css", function() {
	// 			var newContent = require("!!./../node_modules/css-loader/index.js!./owl.carousel.css");
	// 			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	// 			update(newContent);
	// 		});
	// 	}
	// 	// When the module is disposed, remove the <style> tags
	// 	module.hot.dispose(function() { update(); });
	// }

/***/ }
/******/ ])
});
;
