import React from  'react';

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
      this.props.onSubmit(data);
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

export default UsernameForm;
