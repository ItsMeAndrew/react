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


var Header = React.createClass({displayName: "Header",
	render: function() {
		return (
			React.createElement("div", null, "EROAD")
		);
	}
});

React.render(React.createElement(Header, null), document.getElementById('container'));