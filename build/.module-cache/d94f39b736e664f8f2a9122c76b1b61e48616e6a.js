var Logo = React.createClass({displayName: "Logo",
	render: function() {
		return (
			React.createElement("div", null, "EROAD")
		);
	}
});

var SearchBar = React.createClass({displayName: "SearchBar",
    render: function() {

    	var hasSearch = document.getElementById('header');
    	debugger;
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search..."})
            )
        );
    }
});

var View = React.createClass({displayName: "View",
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