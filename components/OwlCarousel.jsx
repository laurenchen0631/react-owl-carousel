'use strict';

import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
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

class OwlCarousel extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.next = () => $(findDOMNode(this)).data('owlCarousel').next();
		this.prev = () => $(findDOMNode(this)).data('owlCarousel').prev();
		this.goTo = (x) => $(findDOMNode(this)).data('owlCarousel').goTo(x);
		this.jumpTo = (x) => $(findDOMNode(this)).data('owlCarousel').jumpTo(x);
		this.play = () => $(findDOMNode(this)).data('owlCarousel').play();
		this.stop = () => $(findDOMNode(this)).data('owlCarousel').stop();
	}

	componentDidMount() {
		$(findDOMNode(this)).owlCarousel(this.getOptions());
	}

	componentWillReceiveProps(nextProps) {
		$(findDOMNode(this)).data('owlCarousel').destroy();
	}

	componentDidUpdate(prevProps, prevState) {
		$(findDOMNode(this)).owlCarousel(this.getOptions());
	}

	componentWillUnmount() {
		$(findDOMNode(this)).data('owlCarousel').destroy();
	}

	getOptions() {
		const options = {};

		Owl_Carousel_Options.forEach(val => {
			if (this.props[val]) {
				options[val] = this.props[val];
			}
		});

		return options;
	}

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

		return (
			<div {...props}>
				{children}
			</div>
		);
	}
}

OwlCarousel.propTypes = {
	children : PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element.isRequired),
	]).isRequired,

	style : PropTypes.object,
	id : PropTypes.string,

	items : PropTypes.number,
	itemsCustom : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired),
	itemsDesktop : PropTypes.arrayOf(PropTypes.number.isRequired),
	itemsDesktopSmall : PropTypes.arrayOf(PropTypes.number.isRequired),
	itemsTablet : PropTypes.arrayOf(PropTypes.number.isRequired),
	itemsTabletSmall : PropTypes.arrayOf(PropTypes.number.isRequired),
	itemsMobile : PropTypes.arrayOf(PropTypes.number.isRequired),
	singleItem : PropTypes.bool,
	itemsScaleUp : PropTypes.bool,

	slideSpeed : PropTypes.number,
	paginationSpeed : PropTypes.number,
	rewindSpeed : PropTypes.number,

	autoPlay : PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
	]),
	stopOnHover : PropTypes.bool,

	navigation : PropTypes.bool,
	navigationText : PropTypes.arrayOf(PropTypes.string),
	rewindNav : PropTypes.bool,
	scrollPerPage : PropTypes.bool,

	pagination : PropTypes.bool,
	paginationNumbers : PropTypes.bool,

	responsive : PropTypes.bool,
	responsiveRefreshRate : PropTypes.number,
	responsiveBaseWidth : function(props, propName, componentName) {
		if (
			props[propName] &&
			!$(props[propName]).length
		) {
			return new Error('React-owl-carousel: the props `responsiveBaseWidth` needs jQuery selector.');
		}
	},

	baseClass : PropTypes.string,
	theme : PropTypes.string,

	lazyLoad : PropTypes.bool,
	lazyFollow : PropTypes.bool,
	lazyEffect : PropTypes.bool,

	autoHeight : PropTypes.bool,

	jsonPath : PropTypes.string,
	jsonSuccess : PropTypes.func,

	dragBeforeAnimFinish : PropTypes.bool,
	mouseDrag : PropTypes.bool,
	touchDrag : PropTypes.bool,

	addClassActive : PropTypes.bool,

	//build-in transitionStyle: 'fade', 'backSlide', 'goDown', 'scaleUp'
	transitionStyle : PropTypes.string,

	beforeUpdate : PropTypes.func,
	afterUpdate : PropTypes.func,
	beforeInit : PropTypes.func,
	afterInit : PropTypes.func,
	beforeMove : PropTypes.func,
	afterMove : PropTypes.func,
	afterAction : PropTypes.func,
	startDragging : PropTypes.func,
	afterLazyLoad: PropTypes.func,
};

export default OwlCarousel;
