//include React
var React = require('react');
var axios = require('axios');
//create Textcontainer component and render function to display the component
var Textcontainer = React.createClass({
  getInitialState() {
    return {title: '', password: '', body: '', expire: ''}
  },

  handleChange(event) {
    // debugger;
    // alert("an expiration was submitted" + event.target.value);
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  },
  handleSubmit(event) {
    // axios.post with the form body that you have from this.state
    event.preventDefault();

      //console.log({title: this.state.title, password: this.state.password, body: this.state.body, expire: this.state.expire});
    console.log("uh...")
    axios.post('/api/paste', {
      title: this.state.title,
      password: this.state.password,
      body: this.state.body,
      expire: this.state.expire
    }).then(function(response) {
        window.location = "/paste/" + response.data;
    }).catch(function(error) {
      console.log(error);
    });
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="text-container">
          <div className="options-container">

            <label className="option">Title:
              <input type="text" name="title" className="title" onChange={this.handleChange} placeholder="Untitled"/>
            </label>

            <label className="option">Password:
              <input type="password" name="password" className="password" onChange={this.handleChange} placeholder="(optional)" />
            </label>

            <label className="option">Expiration:
              <select name="expire" value={this.state.expire} onChange={this.handleChange}>
                <option value=""></option>
                <option value="1 Hours">1 Hour</option>
                <option value="6 Hours">6 Hours</option>
                <option value="24 Hours">1 Day</option>
                <option value="7 Days">1 Week</option>
                <option value="30 Days">1 Month</option>

              </select>
            </label>

          </div>

          <pre><code>
            <textarea onChange={this.handleChange} name="body" spellCheck="false" placeholder="Paste code here"
              style={{
              "width": "90%",
              "height": "40vw"
            }}></textarea>
          </code></pre>

          <div>
          <button className="btn btn-primary">submit</button>
          </div>
        </div>
      </form>
    );
  }
});
module.exports = Textcontainer;
