import * as React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="mt-3">
        <div className="card">
          <div className="d-flex justify-content-center">
            <img
              className="img-responsive img-rounded"
              style={{ maxHeight: 250, maxWidth: 250 }}
              src={profile.avatar_url}
            />
          </div>
          <div className="card-body text-center">
              <div className="card-title">{profile.name}</div>
              <div className="card-text">{profile.company}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Card;
