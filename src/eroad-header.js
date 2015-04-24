var hidden = {
	display: 'none'
};

var Logo = React.createClass({
	render: function() {
		return (
			<div>EROAD</div>
		);
	}
});

var Settings = React.createClass({
	render: function() {
		return (
			<i className="fa fa-cog"></i>
		);
	}
});

var Help = React.createClass({
	render: function() {
		return (
			<i className="fa fa-question"></i>
		);
	}
});

var SearchBar = React.createClass({

	getInitialState: function() {
        return {
            show: this.props.show || false
        }
    },

	componentDidMount: function() {
		// debugger;
	},

    render: function() {
		return (
			<form>
				<input type="text" placeholder="Search..." />
			</form>
		);
    }
});

var View = React.createClass({

	propTypes: {
		orgsearch: React.PropTypes.bool
	},

	componentWillMount: function() {
		console.log('mounting:: ', this);
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
	},

	_onClick: function() {
		debugger;
	},

    render: function() {
        return (
            <nav>
            	<ul>
                	<li onClick={this._onClick}><Logo /></li>
                	<li></li>
                </ul>
                <ul className="tools">
                	<li><Settings /></li>
                	<li><Help /></li>
                </ul>
            </nav>
        );
    }
});

React.render(
	<View
		orgsearch={false}
	/>,
	document.getElementById('header')
);