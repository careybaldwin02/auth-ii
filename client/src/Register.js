import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  state = {
    username: '',
    password: '',
    department: '',
  };

  render() {
    return (
      <form onSubmit={this.register}>
        <div>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            placeholder = "Username"
          />
        </div>
        <div>
          <input
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
            type="text"
            placeholder = "Department"
          />
        </div>
        <div>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder = "Password"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  register = event => {
    event.preventDefault();
  axios 
  .post('http://localhost:9000/api/register', this.state)
  .then(res => {
      console.log(res.data);
      localStorage.setItem('jwt', res.data.token)
      this.props.history.push('/users');
  })
  .catch(err => {
      console.error('Axios Error', err);
    });
    };
}

export default Register;