/* main.js */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import './style.css';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			items: [
				<div key={1} className="item"><img src="/img/fullimage1.jpg" alt="The Last of us"/></div>,
				<div key={2} className="item"><img src="/img/fullimage2.jpg" alt="GTA V"/></div>,
				<div key={3} className="item"><img src="/img/fullimage3.jpg" alt="Mirror Edge"/></div>,
			],

			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : true,
			autoPlay : true,
		};
	}

	addItem() {
		let items = this.state.items;
		items.push(<div key={this.state.items.length+1} className="item"><img src="/img/fullimage2.jpg" alt="GTA V"/></div>);
		this.setState({items});
	}

	newOptions() {
		this.setState({
			navigation : false, // Show next and prev buttons
		});
	}

	render() {
		return (
			<div>
				<OwlCarousel
					ref="car"
					navigation={this.state.navigation}
					slideSpeed={this.state.slideSpeed}
					paginationSpeed={this.state.paginationSpeed}
					singleItem={this.state.singleItem}
					autoPlay={this.state.autoPlay}
				>
					{this.state.items}
				</OwlCarousel>

				<button onClick={() => this.this.refs.car.prev()}>
					prev
				</button>

				<button onClick={() => this.this.refs.car.next()}>
					next
				</button>

				<button onClick={() => this.this.refs.car.goTo(0)}>
					goTo
				</button>

				<button onClick={() => this.this.refs.car.jumpTo(0)}>
					jumpTo
				</button>

				<button onClick={() => this.this.refs.car.play()}>
					play
				</button>

				<button onClick={() => this.this.refs.car.stop()}>
					stop
				</button>

				<button onClick={this.addItem.bind(this)}>
					Add New
				</button>

				<button onClick={this.newOptions.bind(this)}>
					New Options
				</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
