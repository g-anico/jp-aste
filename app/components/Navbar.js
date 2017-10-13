//include react
var React = require('react');
// console.log(React.createClass);
var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">jp-aste</a>
            </div>

            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </nav>
      );
}
});

module.exports = Navbar;
