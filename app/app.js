//include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
//inlude all the components we are using
//include Navbar, Optionscontainer, Textcontainer components
var Navbar = require('./components/Navbar');
var Optionscontainer = require('./components/Optionscontainer');
var Textcontainer = require('./components/Textcontainer');

ReactDOM.render(
  //deploy the navbar component
  <div className="main-container"
    <Navbar />
    <Optionscontainer />
    <Textcontainer />
  </div>,
  document.getElementById("app")
);
