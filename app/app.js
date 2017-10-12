//include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
//include all the components we are using
var Navbar = require('./components/Navbar');
var Optionscontainer = require('./components/Optionscontainer');
var Textcontainer = require('./components/Textcontainer');

ReactDOM.render(
  //here we deploy all components into a single main-container
  <div className="main-container">
    <Navbar />
    <Optionscontainer />
    <Textcontainer />
  </div>, document.getElementById("app")
);
