/* main.js */

'use strict';

var React = require('react');
import OwlCarousel from 'react-owl-carousel';

var Main = React.createClass({

	getInitialState: function() {
		return {
			items: [
				<div key={1} className="item"><img src="imgs/fullimage1.jpg" alt="The Last of us"/></div>,
				<div key={2} className="item"><img src="imgs/fullimage2.jpg" alt="GTA V"/></div>,
				<div key={3} className="item"><img src="imgs/fullimage3.jpg" alt="Mirror Edge"/></div>,
			],

			options : {
				navigation : true, // Show next and prev buttons
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem : true,
				autoPlay : true,
			},

		};
	},

	_addItem : function() {
		var items = this.state.items;
		items.push(<div key={this.state.items.length+1} className="item"><img src="imgs/fullimage2.jpg" alt="GTA V"/></div>);
		this.setState({items: items});
	},

	_newOptions : function() {
		this.setState({options: {
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : true,
			autoPlay : true,
		}});
		// ERROR: autoPlay not working
	},

	render() {


		return (
			<div>
				<OwlCarousel ref="car" options={this.state.options}>
					{this.state.items}
				</OwlCarousel>

				<button onClick={function(e){this.refs.car.prev();}.bind(this)}>
					prev
				</button>

				<button onClick={function(e){this.refs.car.next();}.bind(this)}>
					next
				</button>

				<button onClick={function(e){this.refs.car.goTo(0);}.bind(this)}>
					goTo
				</button>

				<button onClick={function(e){this.refs.car.jumpTo(0);}.bind(this)}>
					jumpTo
				</button>

				<button onClick={function(e){this.refs.car.play();}.bind(this)}>
					play
				</button>

				<button onClick={function(e){this.refs.car.stop();}.bind(this)}>
					stop
				</button>

				<button onClick={this._addItem}>
					Add New
				</button>

				<button onClick={this._newOptions}>
					New Options
				</button>
			</div>
		);
	},


});

React.render(<Main />, document.body);
