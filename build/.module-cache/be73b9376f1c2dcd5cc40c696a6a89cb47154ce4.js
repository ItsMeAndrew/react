var InheritsDomAttributes = {
  componentDidMount: function() {
    var rootNode = document.getElementById('header');
    var hasNextProps = false;
    var nextProps = {};
    var parentNode = rootNode.parentNode;

    Object.keys(rootNode.attributes).forEach(function(key) {
      var namedNode;

      if (key !== "length") {
        hasNextProps = true;
        namedNode = rootNode.attributes[key];
        nextProps[namedNode.name] = namedNode.value;
      }
    });

    if (hasNextProps) this.props(nextProps);
  }
};


var Logo = React.createClass({displayName: "Logo",
	render: function() {
		return (
			React.createElement("div", null, "EROAD")
		);
	}
});

var SearchBar = React.createClass({displayName: "SearchBar",

	componentDidMount: function() {
		debugger;
	},

    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search..."})
            )
        );
    }
});

var View = React.createClass({displayName: "View",

	propTypes: {
		orgsearch: React.PropTypes.bool
	},

	// getDefaultProps: function() {
	// 	return {
	// 		'e-org-search': false
	// 	};
	// },

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
		// debugger;
	},

    render: function() {
        return (
            React.createElement("nav", null, 
            	React.createElement("ul", null, 
                	React.createElement("li", {onClick: this._onClick}, React.createElement(Logo, null)), 
                	React.createElement("li", null, React.createElement(SearchBar, null))
                )
            )
        );
    }
});

React.render(
	React.createElement(View, {
		orgsearch: false}
	), document.getElementById('header'));