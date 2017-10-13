//include React
var React = require('react');
//create Textcontainer component and render function to display the component

var Textcontainer = React.createClass({
  render: function() {
    return (
    <div className="text-container">
      <code><textarea spellcheck="false" placeholder="Paste code here" style={
        {"width":"800px",
          "height": "400px"
        }
      }></textarea></code>
      <hr/>
      <button type="button" class="btn btn-primary">submit</button>
    </div>
  );
  }
});
module.exports = Textcontainer;
