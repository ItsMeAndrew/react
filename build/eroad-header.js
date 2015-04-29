(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.square = square;

function square(x) {
	return x * x;
}

},{}],2:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (typeof obj === 'object' && obj !== null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } };

var _import = require('./components/math');

var math = _interopRequireWildcard(_import);

var Logo = React.createClass({
	displayName: 'Logo',

	render: function render() {
		return React.createElement('img', { src: 'http://careers.eroad.co.nz/themes/eroad/images/logo.svg' });
	}
});

var Settings = React.createClass({
	displayName: 'Settings',

	render: function render() {
		return React.createElement('i', { className: 'fa fa-cog' });
	}
});

var User = React.createClass({
	displayName: 'User',

	render: function render() {
		return React.createElement('i', { className: 'fa fa-user' });
	}
});

var Help = React.createClass({
	displayName: 'Help',

	render: function render() {
		return React.createElement('i', { className: 'fa fa-question' });
	}
});

var Search = React.createClass({
	displayName: 'Search',

	propTypes: {
		shown: React.PropTypes.string
	},

	componentDidMount: function componentDidMount() {},

	render: function render() {
		return React.createElement(
			'li',
			{ className: this.props.shown == 'true' ? '' : 'hidden' },
			React.createElement('i', { className: 'fa fa-search' })
		);
	}
});

var View = React.createClass({
	displayName: 'View',

	propTypes: {
		orgsearch: React.PropTypes.string
	},

	componentWillMount: function componentWillMount() {
		console.log('mounting:: ', this);
		var el = document.querySelector('eroad-menu');
		this.el = el;
	},

	componentDidMount: function componentDidMount() {
		console.log('mounted:: ', this);
		var rootNode = this.getDOMNode();
		var hasNextProps = false;
		var nextProps = {};
		var parentNode = rootNode.parentNode;

		Object.keys(parentNode.attributes).forEach(function (key) {
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

	_onClick: function _onClick() {
		debugger;
	},

	render: function render() {
		return React.createElement(
			'nav',
			null,
			React.createElement(
				'ul',
				{ className: 'menu-items' },
				React.createElement(
					'li',
					{ className: 'logo', onClick: this._onClick },
					React.createElement(Logo, null)
				)
			),
			React.createElement(
				'ul',
				{ className: 'tools' },
				React.createElement(Search, { shown: this.props.orgsearch }),
				React.createElement(
					'li',
					null,
					React.createElement(Settings, null)
				),
				React.createElement(
					'li',
					null,
					React.createElement(User, null)
				),
				React.createElement(
					'li',
					null,
					React.createElement(Help, null)
				)
			)
		);
	}
});

React.render(React.createElement(View, {
	orgsearch: 'true'
}), document.getElementsByTagName('eroad-header')[0]);

// debugger;

},{"./components/math":1}]},{},[2])