//include React
var React = require('react');
//create Textcontainer component and render function to display the component

var Textcontainer = React.createClass({
  render: function() {
    <div className="text-container">
      <code><textarea spellcheck="false" style="" placeholder="Paste code here"></textarea><code>
      <hr>
      <button type="button" class="btn btn-primary">submit</button>
    </div>
  }
});
module.exports = Textcontainer;
