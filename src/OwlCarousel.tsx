import React, { Component, AllHTMLAttributes, ReactNode, Ref } from 'react';
import jquery from 'jquery';
import { Options } from './options';

import 'owl.carousel';

const $: typeof jquery = (window as any).jQuery;

export type ComponentProps = Readonly<AllHTMLAttributes<HTMLDivElement> & { children: ReactNode }>;
export type OwlCarouselProps = Options & ComponentProps;

export default class ReactOwlCarousel extends Component<OwlCarouselProps> {
    public $ele?: JQuery<HTMLElement>;
    private container?: HTMLDivElement | null;
    private propsWithoutOptions: ComponentProps;
    private options: Options;

    constructor(props: OwlCarouselProps) {
        super(props);
        const [options, propsWithoutOptions] = filterOptions(this.props);
        this.options = options;
        this.propsWithoutOptions = propsWithoutOptions;
    }

    public componentDidMount() {
        this.$ele = $(this.container!);
        this.create();
    }

    public componentWillReceiveProps() {
        this.destory();
    }

    public componentDidUpdate() {
        const [options, propsWithoutOptions] = filterOptions(this.props);
        this.options = options;
        this.propsWithoutOptions = propsWithoutOptions;

        this.create();
    }

    public next(speed: number | number[]) {
        if (!this.$ele) throw new Error('OwlCarousel is not created');

        if (typeof speed === 'number') {
            this.$ele.trigger('next.owl.carousel', [speed]);
        }
        else {
            this.$ele.trigger('next.owl.carousel', speed);
        }
    }

    public prev(speed: number | number[]) {
        if (!this.$ele) throw new Error('OwlCarousel is not created');

        if (typeof speed === 'number') {
            this.$ele.trigger('prev.owl.carousel', [speed]);
        }
        else {
            this.$ele.trigger('prev.owl.carousel', speed);
        }
    }

    public to(position: number, speed: number) {
        if (!this.$ele) throw new Error('OwlCarousel is not created');

        if (typeof position === 'number' && typeof speed === 'number') {
            this.$ele.trigger('to.owl.carousel', [position, speed]);
        }
        else {
            this.$ele.trigger('to.owl.carousel');
        }
    }

    public create(options?: Options) {
        if (!this.$ele) throw new Error('OwlCarousel is not created');

        this.$ele.owlCarousel(options || this.options);
    }

    public destory() {
        if (!this.$ele) throw new Error('OwlCarousel is not created');

        this.$ele.trigger('destroy.owl.carousel');
    }

    public play(timeout: number, speed: number) {
        if (!this.$ele) throw new Error('OwlCarousel is not created');

        if (typeof timeout === 'number' && typeof speed === 'number') {
            this.$ele.trigger('play.owl.autoplay', [timeout, speed]);
        }
        else {
            this.$ele.trigger('play.owl.autoplay');
        }
    }

    public stop() {
        if (!this.$ele) throw new Error('OwlCarousel is not created');

        this.$ele.trigger('stop.owl.autoplay');
    }

    public render() {
        const {
            className,
            ...props,
        } = this.propsWithoutOptions;

        return (
            <div
                className={`owl-carousel ${className}`}
                ref={this.containerRef}
                {...props}
            />
        );
    }

    private containerRef: Ref<HTMLDivElement> = (inst) => {
        this.container = inst;
    }
}

const OPTIONS = new Set([
    'items',
    'margin',
    'loop',
    'center',
    'mouseDrag',
    'touchDrag',
    'pullDrag',
    'freeDrag',
    'stagePadding',
    'merge',
    'mergeFit',
    'autoWidth',
    'startPosition',
    'URLhashListener',
    'nav',
    'rewind',
    'navText',
    'navElement',
    'slideBy',
    'dots',
    'dotsEach',
    'dotData',
    'lazyLoad',
    'lazyContent',
    'autoplay',
    'autoplayTimeout',
    'autoplayHoverPause',
    'smartSpeed',
    'fluidSpeed',
    'autoplaySpeed',
    'navSpeed',
    'dotsSpeed',
    'dragEndSpeed',
    'callbacks',
    'responsive',
    'responsiveRefreshRate',
    'responsiveBaseElement',
    'video',
    'videoHeight',
    'videoWidth',
    'animateOut',
    'animateIn',
    'fallbackEasing',
    'info',
    'nestedItemSelector',
    'itemElement',
    'stageElement',
    'navContainer',
    'dotsContainer',

    // 'CLASSES'
    'refreshClass',
    'loadingClass',
    'loadedClass',
    'rtlClass',
    'dragClass',
    'grabClass',
    'stageClass',
    'stageOuterClass',
    'navContainerClass',
    'navClass',
    'controlsClass',
    'dotClass',
    'dotsClass',
    'autoHeightClass',
    'responsiveClass',

    // 'EVENTS'
    'onInitialize',
    'onInitialized',
    'onResize',
    'onResized',
    'onRefresh',
    'onRefreshed',
    'onDrag',
    'onDragged',
    'onTranslate',
    'onTranslated',
    'onChange',
    'onChanged',
    'onLoadLazy',
    'onLoadedLazy',
    'onStopVideo',
    'onPlayVideo',
]);

interface Params { [key: string]: any; }
function filterOptions(item: Params): [Options, ComponentProps] {
    const options: Params = {};
    const propsWithoutOptions: Params = {};
    Object.keys(item).forEach((key) => {
        if (OPTIONS.has(key)) {
            options[key] = item[key];
        }
        else {
            propsWithoutOptions[key] = item[key];
        }
    });

    return [options as Options, propsWithoutOptions as ComponentProps];
}

export * from './options';
