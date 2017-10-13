//include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
//include all the components we are using
var Navbar = require('./components/Navbar');
var Optionscontainer = require('./components/Optionscontainer');
var Textcontainer = require('./components/Textcontainer');

//here we deploy all components into a single main-container
ReactDOM.render(<Navbar />, document.getElementById("app"));

ReactDOM.render(<Textcontainer />, document.getElementById("textContainer"));
