import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel, { Options } from 'react-owl-carousel';
// import OwlCarousel, { Options } from './umd/OwlCarousel';

interface State {
    options: Options;
    items: ReactNode[];
}

class Example extends Component<{}, State> {
    public state: State = {
        options: {
            loop: true,
            margin: 10,
            nav:true,
            responsive:{
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        },

        items: [
            <div className="item" key={1}><h4>1</h4></div>,
            <div className="item" key={2}><h4>2</h4></div>,
            <div className="item" key={3}><h4>3</h4></div>,
            <div className="item" key={4}><h4>4</h4></div>,
            <div className="item" key={5}><h4>5</h4></div>,
            <div className="item" key={6}><h4>6</h4></div>,
            <div className="item" key={7}><h4>7</h4></div>,
            <div className="item" key={8}><h4>8</h4></div>,
            <div className="item" key={9}><h4>9</h4></div>,
            <div className="item" key={10}><h4>10</h4></div>,
            <div className="item" key={11}><h4>11</h4></div>,
            <div className="item" key={12}><h4>12</h4></div>,
        ],
    };

    public render() {
        return (
            <div>
                <OwlCarousel
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>

                <button onClick={this.addItem}>
                    Add New Item
                </button>

                <button onClick={this.deleteItem}>
                    Delete last Item
                </button>
            </div>
        );
    }

    private addItem = () => {
        const { items } = this.state;
        items.push(
            <div className="item" key={items.length + 1}><h4>{items.length + 1}</h4></div>,
        );

        this.setState({ items });
    }

    private deleteItem = () => {
        const { items, options } = this.state;
        items.pop();

        options.loop = items.length >= 5;
        this.setState({ items, options });
    }

}

ReactDOM.render(<Example />, document.getElementById('root'));
