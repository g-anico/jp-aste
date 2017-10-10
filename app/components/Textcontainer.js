//include React
var React = require('react');
//create Textcontainer component and render function to display the component

var Textcontainer = React.createClass({
  render: function() {
    <div className="text-container" style ={
      {
        "width": "90vw",
        "backgroundColor": "lightsteelgray",
        
      }
    }>
      <textarea className="jpaste" name="text" placeholder=" Paste Text Here" spellcheck="false"></textarea>
    </div>
  }
