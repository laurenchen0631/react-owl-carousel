/* main.js */

'use strict';

var React = require('react');
import TestOne from 'react-owl-carousel/TestOne';
import TestTwo from 'react-owl-carousel/TestTwo';

var Main = React.createClass({
	getInitialState: function() {
		return {
			switch: true
		};
	},
	_toggle() {
		this.setState({
			switch: !this.state.switch
		});
	},
	render() {
		return (
			<div>
				<input type="button" onClick={this._toggle} value="Press!"/>
				{this.state.switch ? <TestOne /> : <TestTwo />}
			</div>
		);
	},
});

React.render(<Main />, document.body);
