import React from 'react';
import PropTypes from 'prop-types';
import UsernameForm from './UsernameForm';

// Profile picture alt text
/* eslint jsx-a11y/img-redundant-alt: "off" */

const userSchema = PropTypes.shape({
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  bio: PropTypes.string,
  html_url: PropTypes.string,
});

const Card = ({ user }) => (
  <div className="card">
    <img src={user.avatar_url} alt={`${user.name}'s profile picture`} />
    <div className="info">
      <div className="name">{user.name}</div>
      <div className="company">{user.company}</div>
      <div className="description">{user.bio}</div>
      <a href={user.html_url}>GitHub profile</a>
    </div>
  </div>
);

Card.propTypes = {
  user: userSchema.isRequired,
};

const CardList = ({ users }) => (
  <div>
    {users.map((user) => <Card key={user.id} user={user} />)}
  </div>
);

CardList.propTypes = {
  users: PropTypes.arrayOf(userSchema).isRequired,
};

class GitHubCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  addUser = (user) => {
    // Add to user list if not already included
    const { users } = this.state;
    if (users.every((e) => e.id !== user.id)) {
      this.setState((state) => ({
        users: [...state.users, user],
      }));
    }
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <UsernameForm onSubmit={this.addUser} />
        <CardList users={users} />
      </>
    );
  }
}

export default GitHubCards;
