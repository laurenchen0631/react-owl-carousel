"use strict";

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";


const Owl_Carousel_Options = {

    // options
    items: PropTypes.number,
    margin: PropTypes.number,
    loop: PropTypes.bool,
    center: PropTypes.bool,
    mouseDrag: PropTypes.bool,
    touchDrag: PropTypes.bool,
    pullDrag: PropTypes.bool,
    freeDrag: PropTypes.bool,
    stagePadding: PropTypes.number,
    merge: PropTypes.bool,
    mergeFit: PropTypes.bool,
    autoWidth: PropTypes.bool,
    startPosition: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    URLhashListener: PropTypes.bool,
    nav: PropTypes.bool,
    rewind: PropTypes.bool,
    navText: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.element)]),
    navElement: PropTypes.string,
    slideBy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dots: PropTypes.bool,
    dotsEach: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    dotData: PropTypes.bool,
    lazyLoad: PropTypes.bool,
    lazyContent: PropTypes.bool,
    autoplay: PropTypes.bool,
    autoplayTimeout: PropTypes.number,
    autoplayHoverPause: PropTypes.bool,
    smartSpeed: PropTypes.number,
    fluidSpeed: PropTypes.bool,
    autoplaySpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    navSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    dotsSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    dragEndSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    callbacks: PropTypes.bool,
    responsive: PropTypes.object,
    responsiveRefreshRate: PropTypes.number,
    responsiveBaseElement: PropTypes.element,
    video: PropTypes.bool,
    videoHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    videoWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    animateOut: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    animateIn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    fallbackEasing: PropTypes.string,
    info: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    nestedItemSelector: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    itemElement: PropTypes.string,
    stageElement: PropTypes.string,
    navContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    dotsContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    // dom class
    refreshClass: PropTypes.string,
    loadingClass: PropTypes.string,
    loadedClass: PropTypes.string,
    rtlClass: PropTypes.string,
    dragClass: PropTypes.string,
    grabClass: PropTypes.string,
    stageClass: PropTypes.string,
    stageOuterClass: PropTypes.string,
    navContainerClass: PropTypes.string,
    navClass: PropTypes.string,
    controlsClass: PropTypes.string,
    dotClass: PropTypes.string,
    dotsClass: PropTypes.string,
    autoHeightClass: PropTypes.string,
    responsiveClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    // event
    onInitialize: PropTypes.func,
    onInitialized: PropTypes.func,
    onResize: PropTypes.func,
    onResized: PropTypes.func,
    onRefresh: PropTypes.func,
    onRefreshed: PropTypes.func,
    onDrag: PropTypes.func,
    onDragged: PropTypes.func,
    onTranslate: PropTypes.func,
    onTranslated: PropTypes.func,
    onChange: PropTypes.func,
    onChanged: PropTypes.func,
    onLoadLazy: PropTypes.func,
    onLoadedLazy: PropTypes.func,
    onStopVideo: PropTypes.func,
    onPlayVideo: PropTypes.func,
}

class OwlCarousel extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.to = this.to.bind(this);
        this.create = this.create.bind(this);
        this.destory = this.destory.bind(this);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentWillMount() {
        this._filterProps(this.props);
    }

    componentDidMount() {
        this.owlCarousel = $(this.inst);
        this.owlCarousel.owlCarousel(this.options);
    }

    componentWillReceiveProps(nextProps) {
        this._filterProps(nextProps);
        this.destory();
	}

    componentDidUpdate() {
        console.log(this.options);
        this.owlCarousel = $(this.inst);
        this.owlCarousel.owlCarousel(this.options);
    }

    componentWillUnmount() {
        this.destory();
    }

    next(speed) {
        if (typeof(speed) == 'number') {
            this.owlCarousel.trigger('next.owl.carousel', [speed]);
        }
        else {
            this.owlCarousel.trigger('next.owl.carousel');
        }
    }

    prev(speed) {
        if (typeof(speed) == 'number') {
            this.owlCarousel.trigger('prev.owl.carousel', [speed]);
        }
        else {
            this.owlCarousel.trigger('prev.owl.carousel');
        }
    }

    // refresh(event, speed) {
    // }

    to(position, speed) {
        if (typeof(position) == 'number' && typeof(speed) == 'number') {
            this.owlCarousel.trigger('to.owl.carousel', [position, speed]);
        }
        else {
            this.owlCarousel.trigger('to.owl.carousel');
        }
    }

    create() {
        this.owlCarousel.owlCarousel(this.options);
    }

    destory() {
        this.owlCarousel.trigger('destroy.owl.carousel');
    }

    // replace(data) {

    // }

    // add(data, position) {

    // }

    // remove(position) {

    // }

    play(timeout, speed) {
        if (typeof(timeout) == 'number' && typeof(speed) == 'number') {
            this.owlCarousel.trigger('play.owl.autoplay', [timeout, speed]);
        }
        else {
            this.owlCarousel.trigger('play.owl.autoplay');
        }
    }

    stop() {
        this.owlCarousel.trigger('stop.owl.autoplay');
    }

    _filterProps(props) {
        this.options = {};
        this.propsWithoutOptions = {};
        Object.keys(props).forEach(key => {
            if (Owl_Carousel_Options.hasOwnProperty(key)) {
                this.options[key] = props[key];
            }
            else {
                this.propsWithoutOptions[key] = props[key];
            }
        });
    }

    render() {
        const {
            className,
            children,
            ...props
        } = this.propsWithoutOptions;

        return (
            <div 
                className={`owl-carousel ${className}`}
                ref={inst => this.inst = inst}
                {...props}
            >
                {children}
            </div>
        );
    }
}


OwlCarousel.propTypes = Owl_Carousel_Options;

OwlCarousel.defaultProps = {
    className: '',
}

export default OwlCarousel;