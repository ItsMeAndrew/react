
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
    // getInitialState: function() {
      // debugger;
    // },

    componentDidMount: function() {
    	debugger;
    },

    clearAndFocusInput: function() {
      // Clear the input
      this.setState({userInput: ''}, function() {
        // This code executes after the component is re-rendered
        React.findDOMNode(this.refs.nav).focus();
      });
    },

    render: function() {
        return (
            React.createElement("nav", {ref: "nav", onClick: this.clearAndFocusInput}, 
            	React.createElement("ul", null, 
                	React.createElement("li", null, React.createElement(Logo, null)), 
                	React.createElement("li", null, React.createElement(SearchBar, null))
                )
            )
        );
    }
});

React.render(React.createElement(View, null), document.getElementById('header'));