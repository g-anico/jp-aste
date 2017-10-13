//include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
//include all the components we are using
var Navbar = require('./components/Navbar');
var Optionscontainer = require('./components/Optionscontainer');
var Textcontainer = require('./components/Textcontainer');

ReactDOM.render(
  //here we deploy all components into a single main-container
//<Navbar />
//<Optionscontainer />
//<Textcontainer />, d
<Navbar />, document.getElementById("app")

);
ReactDOM.render(
  <Optionscontainer />, document.getElementById("options")

);

ReactDOM.render(
  <Textcontainer />, document.getElementById("textContainer")

);
