/* main.js */

'use strict';

var React = require('react');
import ROC from 'react-owl-carousel';

var Main = React.createClass({
	getInitialState: function() {
		return {
			switch: true
		};
	},

	render() {
		return (
			<div>
				<ROC.OneSlide>
					<div class="item"><img src="imgs/fullimage1.jpg" alt="The Last of us"/></div>
				  <div class="item"><img src="imgs/fullimage2.jpg" alt="GTA V"/></div>
				  <div class="item"><img src="imgs/fullimage3.jpg" alt="Mirror Edge"/></div>
				</ROC.OneSlide>
			</div>
		);
	},
});

React.render(<Main />, document.body);
