import React from 'react';
import './App.css';

const Card = (props) => (
  <div className='card'>
    <img src={props.user.avatar_url} alt={props.user.name + "'s profile picture"} />
    <div className='info'>
      <div className='name'>{props.user.name}</div>
      <div className='company'>{props.user.company}</div>
      <div className='description'>{props.user.bio}</div>
      <a href={props.user.html_url}>GitHub profile</a>
    </div>
  </div>
);

const CardList = (props) => (
  <div>
    {props.users.map((user) => <Card key={user.id} user={user} />)}
  </div>
);

class UsernameForm extends React.Component {
  state = { username: '', errorText: '' };

  errorText = React.createRef();

  handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(`https://api.github.com/users/${this.state.username}`);
    const data = await resp.json();

    if (data.message === 'Not Found') {
      this.setState({ errorText: `User '${this.state.username}' doesn't exist!` });
    } else {
      this.setState({ errorText: '' });
      this.props.onClick(data);
    }
    this.setState({ username: '' });
  };

  render() {
    return (
      <form id='github-user-form' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Add a GitHub user card!</label><br />
        <input type='text'
               value={this.state.username}
               onChange={event => this.setState({ username: event.target.value })}
               id='username'
               placeholder='Username'
               required /><br />
        <input type='submit' value='Add user' />
        <span id="github-user-form-error" aria-live="polite">
          {this.state.errorText}
        </span>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.addUser.bind(this);
  }

  addUser = (user) => {
    // Add to user list if not already included
    if (this.state.users.every(e => e.id != user.id)) {
      this.setState((state, props) => ({
        users: [...state.users, user]
      }));
    }
  };

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <UsernameForm onClick={this.addUser} />
        <CardList users={this.state.users} />
      </>
    );
  }
}

export default App;
