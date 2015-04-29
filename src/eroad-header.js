'use strict';

import * as math from './components/math';

var Logo = React.createClass({
	render: () => {
		return (
			<img src="http://careers.eroad.co.nz/themes/eroad/images/logo.svg"/>
		);
	}
});

var Settings = React.createClass({
	render: () => {
		return (
			<i className="fa fa-cog"></i>
		);
	}
});

var User = React.createClass({
	render: () => {
		return (
			<i className="fa fa-user"></i>
		);
	}
});

var Help = React.createClass({
	render: () => {
		return (
			<i className="fa fa-question"></i>
		);
	}
});

var Search = React.createClass({
	propTypes: {
		shown: React.PropTypes.string
	},

	componentDidMount: () => {
		// debugger;
	},

	render: function() {
		return (
			<li className={this.props.shown == 'true' ? '' : 'hidden'}>
				<i className="fa fa-search"></i>
			</li>
		);
	}
});

var View = React.createClass({

	propTypes: {
		orgsearch: React.PropTypes.string
	},

	componentWillMount: function() {
		console.log('mounting:: ', this);
		var el = document.querySelector('eroad-menu');
		this.el = el;
	},

	componentDidMount: function() {
		console.log('mounted:: ', this);
		var rootNode = this.getDOMNode();
    	var hasNextProps = false;
    	var nextProps = {};
    	var parentNode = rootNode.parentNode;

		Object.keys(parentNode.attributes).forEach(function(key) {
			var namedNode;

			if (key !== 'length') {
				hasNextProps = true;
				namedNode = parentNode.attributes[key];
				nextProps[namedNode.name] = namedNode.value;
			}
		});

		if (hasNextProps) {
			this.setProps(nextProps);
		}

		var items = this.el.querySelector('ul'),
			clone = items.cloneNode(true).children,
			menu = document.querySelector('.menu-items');

		menu.appendChild(items);
	},

	_onClick: () => {
		debugger;
	},

    render: function() {
        return (
            <nav>
            	<ul className="menu-items">
                	<li className="logo" onClick={this._onClick}><Logo /></li>
                </ul>

                <ul className="tools">
                	<Search shown={this.props.orgsearch} />
                	<li><Settings /></li>
                	<li><User /></li>
                	<li><Help /></li>
                </ul>
            </nav>
        );
    }
});

React.render(
	<View
		orgsearch={'true'}
	/>,
	document.getElementsByTagName('eroad-header')[0]
);