// React.render(
// 	<h1>EROAD</h1>,
// 	document.getElementById('example')
// 	);

// var ExampleApplication = React.createClass({
// 	render: function() {
// 		var elapsed = Math.round(this.props.elapsed  / 100);
// 		var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
// 		var message =
// 		'React has been successfully running for ' + seconds + ' seconds.';

// 		return <p>{message}</p>;
// 	}
// });
// var start = new Date().getTime();
// setInterval(function() {
// 	React.render(
// 		<ExampleApplication elapsed={new Date().getTime() - start} />,
// 		document.getElementById('container')
// 		);
// }, 50);

var divStyle = {
  backgroundColor: '#e20a16',
  height: '64px'
};



var Header = React.createClass({displayName: "Header",
	render: function() {
		return (
			React.createElement("div", {class: "flex"}, "EROAD")
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
    render: function() {
        return (
            React.createElement("nav", {style: divStyle}, 
                React.createElement(Header, null), 
                React.createElement(SearchBar, null)
            )
        );
    }
});

React.render(React.createElement(View, null), document.getElementById('header'));