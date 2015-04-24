


var Logo = React.createClass({displayName: "Logo",
	render: function() {
		return (
			React.createElement("div", null, "EROAD")
		);
	}
});

var SearchBar = React.createClass({displayName: "SearchBar",
    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search..."})
            )
        );
    }
});

var View = React.createClass({displayName: "View",
	componentDidMount: function() {
		console.log('mounted:: ', this);
	},
    render: function() {
        return (
            React.createElement("nav", null, 
            	React.createElement("ul", null, 
                	React.createElement("li", null, React.createElement(Logo, null)), 
                	React.createElement("li", null, React.createElement(SearchBar, null))
                )
            )
        );
    }
});

React.render(React.createElement(View, null), document.getElementById('header'));