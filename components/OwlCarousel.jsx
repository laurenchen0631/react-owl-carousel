'use strict';

import React from 'react';
import '../src/owl.carousel.css';
import '../src/owl.carousel.js';

const Owl_Carousel_Options = [
	'items',
	'itemsDesktop',
	'itemsDesktopSmall',
	'itemsTablet',
	'itemsTabletSmall',
	'itemsMobile',
	'itemsCustom',
	'singleItem',
	'itemsScaleUp',
	'slideSpeed',
	'paginationSpeed',
	'rewindNav',
	'rewindSpeed',
	'autoPlay',
	'stopOnHover',
	'navigation',
	'navigationText',
	'scrollPerPage',
	'pagination',
	'paginationNumbers',
	'responsive',
	'responsiveRefreshRate',
	'responsiveBaseWidth',
	'baseClass',
	'theme',
	'lazyLoad',
	'lazyFollow',
	'lazyEffect',
	'autoHeight',
	'jsonPath',
	'jsonSuccess',
	'dragBeforeAnimFinish',
	'mouseDrag',
	'touchDrag',
	'addClassActive',
	'transitionStyle'
];

/**
* http://owlgraphic.com/owlcarousel/demos/one.html
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
	},

	componentDidMount() {
		$(React.findDOMNode(this)).owlCarousel(this.getOptions());
	},

	componentWillReceiveProps(nextProps) {
		$(React.findDOMNode(this)).data('owlCarousel').destroy();
	},

	componentDidUpdate(prevProps, prevState) {
		$(React.findDOMNode(this)).owlCarousel(this.getOptions());
	},

	componentWillUnmount() {
		$(React.findDOMNode(this)).data('owlCarousel').destroy();
	},

	getOptions() {
		const options = {};

		Owl_Carousel_Options.forEach(val => {
			if (this.props[val]) {
				options[val] = this.props[val];
			}
		});

		return options;
	},

	render() {

		const {
			items,
			itemsDesktop,
			itemsDesktopSmall,
			itemsTablet,
			itemsTabletSmall,
			itemsMobile,
			itemsCustom,
			singleItem,
			itemsScaleUp,
			slideSpeed,
			paginationSpeed,
			rewindNav,
			rewindSpeed,
			autoPlay,
			stopOnHover,
			navigation,
			navigationText,
			scrollPerPage,
			pagination,
			paginationNumbers,
			responsive,
			responsiveRefreshRate,
			responsiveBaseWidth,
			baseClass,
			theme,
			lazyLoad,
			lazyFollow,
			lazyEffect,
			autoHeight,
			jsonPath,
			jsonSuccess,
			dragBeforeAnimFinish,
			mouseDrag,
			touchDrag,
			addClassActive,
			transitionStyle,
			children,
			className,
			...props,
		} = this.props;

		touchDrag !== false
			?	React.initializeTouchEvents(true)
			: React.initializeTouchEvents(false);

		return (
			<div {...props}>
				{children}
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
