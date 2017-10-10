//include React
var React = require('react');
//create Optionscontainer component and render function to display the component

var Optionscontainer = React.createClass({
  render: function() {
    return (
      <div className="options-container">
        <div className="option">
          <span className="label">Title:</span>
          <input type="text" className="title" valuePlaceholder="Untitled">
        </div>


        <div className="option">
          <span className="label">Title:</span>
          <input type="text" className="name" valuePlaceholder="Name (Optional)">
        </div>
// can change these expiration times
        <div className="option">
          <span className="label">Expiration:</span>
          <select name="expiration">
            <option value="30 Minutes">30 Minutes</option>
            <option value="1 Hour">1 Hour</option>
            <option value="6 Hours">6 Hours</option>
            <option value="24 Hours">24 Hours</option>
            <option value="1 Week">1 Week</option>
            <option value="1 Month">1 Month</option>
          </select>
        </div>

      </div>
    )
  }
})
