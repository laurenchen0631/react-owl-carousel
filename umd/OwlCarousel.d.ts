/// <reference types="react" />
/// <reference types="jquery" />
/// <reference types="owl.carousel" />
import { Component, AllHTMLAttributes, ReactNode } from 'react';
import { Options } from './options';
import 'owl.carousel';
export declare type ComponentProps = Readonly<AllHTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
}>;
export declare type OwlCarouselProps = Options & ComponentProps;
export default class ReactOwlCarousel extends Component<OwlCarouselProps> {
    $ele?: JQuery<HTMLElement>;
    private container;
    private propsWithoutOptions;
    private options;
    private children;
    constructor(props: OwlCarouselProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    next(speed: number | number[]): void;
    prev(speed: number | number[]): void;
    to(position: number, speed: number): void;
    create(options?: Options): void;
    destory(): void;
    play(timeout: number, speed: number): void;
    stop(): void;
    render(): JSX.Element;
}
export * from './options';
