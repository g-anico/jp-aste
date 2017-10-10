//include react
var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (

      <div className="nav" style={
        {
          backgroundColor: "navy",
          color: "white",
          margin:0,
          width: "100vw",
          position: "fixed"
        }

      }>
        <nav className="navbar navbar-default">
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
        <hr>
      <code><textarea spellcheck="false" style="" placeholder="share code here"></textarea><code>
      <hr>
      <button type="button" class="btn btn-primary">submit</button>
    </div>
    );
  }
});

module.exports = Navbar;
