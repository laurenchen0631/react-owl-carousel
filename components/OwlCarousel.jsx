'use strict';

import React from 'react';
import '../src/owl.carousel.css';
import '../src/owl.carousel.js';

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

const OwlCarousel = React.createClass({

	getDefaultProps() {
		return {
			options : {},
			style : {},
		};
	},

	propTypes: {
		children : React.PropTypes.oneOfType([
			React.PropTypes.element,
			React.PropTypes.arrayOf(React.PropTypes.element.isRequired),
		]).isRequired,

		style : React.PropTypes.object,
		id : React.PropTypes.string,
		options : React.PropTypes.shape({

			items : React.PropTypes.number,
			itemsCustom : React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number).isRequired),
			itemsDesktop : React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
			itemsDesktopSmall : React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
			itemsTablet : React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
			itemsTabletSmall : React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
			itemsMobile : React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
			singleItem : React.PropTypes.bool,
			itemsScaleUp : React.PropTypes.bool,

			slideSpeed : React.PropTypes.number,
			paginationSpeed : React.PropTypes.number,
			rewindSpeed : React.PropTypes.number,

			autoPlay : React.PropTypes.oneOfType([
				React.PropTypes.bool,
				React.PropTypes.number,
			]),
			stopOnHover : React.PropTypes.bool,

			navigation : React.PropTypes.bool,
			navigationText : React.PropTypes.arrayOf(React.PropTypes.string),
			rewindNav : React.PropTypes.bool,
			scrollPerPage : React.PropTypes.bool,

			pagination : React.PropTypes.bool,
			paginationNumbers : React.PropTypes.bool,

			responsive : React.PropTypes.bool,
			responsiveRefreshRate : React.PropTypes.number,
			responsiveBaseWidth : function(props, propName, componentName) {
				if (
					props[propName] &&
					!$(props[propName]).length
				) {
					return new Error('React-owl-carousel: the props `responsiveBaseWidth` needs jQuery selector.');
				}
			},

			baseClass : React.PropTypes.string,
			theme : React.PropTypes.string,

			lazyLoad : React.PropTypes.bool,
			lazyFollow : React.PropTypes.bool,
			lazyEffect : React.PropTypes.bool,

			autoHeight : React.PropTypes.bool,

			jsonPath : React.PropTypes.string,
			jsonSuccess : React.PropTypes.func,

			dragBeforeAnimFinish : React.PropTypes.bool,
			mouseDrag : React.PropTypes.bool,
			touchDrag : React.PropTypes.bool,

			addClassActive : React.PropTypes.bool,

			//build-in transitionStyle: 'fade', 'backSlide', 'goDown', 'scaleUp'
			transitionStyle : React.PropTypes.string,

			beforeUpdate : React.PropTypes.func,
			afterUpdate : React.PropTypes.func,
			beforeInit : React.PropTypes.func,
			afterInit : React.PropTypes.func,
			beforeMove : React.PropTypes.func,
			afterMove : React.PropTypes.func,
			afterAction : React.PropTypes.func,
			startDragging : React.PropTypes.func,
			afterLazyLoad: React.PropTypes.func,
		}),
	},

	componentDidMount() {
		$(React.findDOMNode(this)).owlCarousel(this.props.options);
	},

	componentWillReceiveProps(nextProps) {
		$(React.findDOMNode(this)).data('owlCarousel').destroy();
	},

	componentDidUpdate(prevProps, prevState) {
		$(React.findDOMNode(this)).owlCarousel(this.props.options);
	},

	componentWillUnmount() {
		$(React.findDOMNode(this)).data('owlCarousel').destroy();
	},

	render() {

		this.props.options.touchDrag !== false
			?	React.initializeTouchEvents(true)
			: React.initializeTouchEvents(false);

		return (
			<div id={this.props.id} style={this.props.style}>
				{this.props.children}
			</div>
		);
	},

	next() {
		$(React.findDOMNode(this)).data('owlCarousel').next();
	},

	prev() {
		$(React.findDOMNode(this)).data('owlCarousel').prev();
	},

	// Go to x slide
	goTo(x) {
		$(React.findDOMNode(this)).data('owlCarousel').goTo(x);
	},

	// Go to x slide without slide animation
	jumpTo(x) {
		$(React.findDOMNode(this)).data('owlCarousel').jumpTo(x);
	},

	play() {
		$(React.findDOMNode(this)).data('owlCarousel').play();
	},

	stop() {
		$(React.findDOMNode(this)).data('owlCarousel').stop();
	},

});

export default OwlCarousel;
