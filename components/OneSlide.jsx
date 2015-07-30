'use strict';

import React from 'react';
require('./owl.carousel');

/**
 * http://owlgraphic.com/owlcarousel/demos/one.html
 *
 * Props
 *	itemsScaleUp: boolean. Option to not stretch items when it is less than the supplied items.
 *	slideSpeed: number. Slide speed in milliseconds.
 *	paginationSpeed: number. Pagination speed in milliseconds.
 *	rewindNav: boolean. Slide to first item. Use rewindSpeed to change animation speed.
 *	rewindSpeed: number. Rewind speed in milliseconds.
 *	autoPlay: boolean. Change to any integrer for example autoPlay : 5000 to play every 5 seconds.
 *	          If you set autoPlay: true default speed will be 5 seconds.
 *	stopOnHover: boolean. Stop autoplay on mouse hover.
 *	navigation: boolean. Display "next" and "prev" buttons.
 *	navigationText: array of element | boolean. You can customize your own navigation.
 *	                To get empty buttons use navigationText : false. Also HTML can be used here.
 *	scrollPerPage: boolean. Scroll per page not per item. This affect next/prev buttons and mouse/touch dragging.
 *	pagination: boolean. Show pagination.
 *	paginationNumbers: boolean. Show numbers inside pagination buttons
 *	responsive: boolean. Change that to "false" to disable resposive capabilities
 *	responsiveRefreshRate: number. Check window width changes every 200ms for responsive actions
 *	responsiveBaseWidth: ???jQuery selector???. Owl Carousel check window for browser width changes.
 *	baseClass: string. Automaticly added class for base CSS styles.
 *	theme: string. Default Owl CSS styles for navigation and buttons. Change it to match your own theme.
 *	lazyLoad: boolean. Delays loading of images. Images outside of viewport won't be loaded before user scrolls to them.
 *	          Great for mobile devices to speed up page loadings. IMG need special markup class="lazyOwl" and data-src="your img path".
 *	lazyFollow: boolean. When pagination used, it skips loading the images from pages that got skipped.
 *	            It only loads the images that get displayed in viewport.
 *	            If set to false, all images get loaded when pagination used. It is a sub setting of the lazy load function.
 *	lazyEffect: boolean / one of "fade", , Default is fadeIn on 400ms speed. Use false to remove that effect.
 *	autoHeight: boolean. Add height to owl-wrapper-outer so you can use diffrent heights on slides. Use it only for one item per page setting.
 *	jsonPath: string. Allows you to load directly from a jSon file.
 *	          The JSON structure you use needs to match the owl JSON structure used here. To use custom JSON structure see jsonSuccess option.
 *	jsonSuccess: function. Success callback for $.getJSON build in into carousel.
 *	dragBeforeAnimFinish: boolean. Ignore whether a transition is done or not (only dragging).
 *	mouseDrag: boolean. Turn off/on mouse events.
 *	touchDrag: boolean. Turn off/on touch events.
 *	addClassActive: boolean. Add "active" classes on visible items. Works with any numbers of items on screen.
 *	transitionStyle: string. Add CSS3 transition style. Works only with one item on screen.
 *
 * Method
 *	next()
 *	prev()
 *	goTo(x)
 *	jumpTo(x)
 *	play()
 *	stop()
 */

const OneSlide = React.createClass({

	getDefaultProps() {
		return {
			navigation : false,
			singleItem : true,
		};
	},

	// componentWillMount() {
	// 	this.id += id++;
	// },

	componentDidMount() {
		$(React.findDOMNode(this)).owlCarousel({
			singleItem: true,
		});
	},

	propTypes: {
		children : React.PropTypes.oneOfType([
			React.PropTypes.element,
			React.PropTypes.arrayOf(React.PropTypes.element),
		]).isRequired,
		navigation : React.PropTypes.bool,
		slideSpeed : React.PropTypes.number,
		paginationSpeed : React.PropTypes.number,
		itemsScaleUp : React.PropTypes.bool,
	},

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	},


	next() {

	},

	prev() {

	},

	goTo(x) {

	},

	jumpTo(x) {

	},

	play() {

	},

	stop() {

	},

});

module.exports = OneSlide;
