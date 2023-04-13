import Card from "./Card";
import * as React from "react";
import axios from "axios";
import Form from "./Form";
import CardList from "./CardList";

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
