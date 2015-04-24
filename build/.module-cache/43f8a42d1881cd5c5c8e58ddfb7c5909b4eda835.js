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
  color: '#e20a16',
  display: 'block',
  height: '64px',
  width: '100%'
};


var Header = React.createClass({displayName: "Header",
	render: function() {
		return (
			React.createElement("div", {style: divStyle}, "EROAD")
		);
	}
});

React.render(React.createElement(Header, null), document.getElementById('container'));