import * as React from "react";
import axios from "axios";

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <label htmlFor="userName">User name</label>
        <input className="form-control"
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <div className="d-flex justify-content-end">
            <button className="btn btn-primary mt-3">Add card</button>
        </div>
      </form>
    );
  }
}
export default Form;
