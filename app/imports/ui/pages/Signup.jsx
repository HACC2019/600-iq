import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment, Select } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/User';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
const options = [
  { key: 'c', text: 'Community', value: 'Community' },
  { key: 'i', text: 'Individual', value: 'Individual' },
];

class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', error: '', affiliation: '', firstName: '',
      lastName: '', redirectToReferer: false
    };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { firstName, lastName, affiliation, email, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        const owner = Meteor.user().username;
        Users.insert({ firstName, lastName, affiliation, owner }, (error) => {
          if (error) {
            this.setState({ error: 'Affiliation is Required' });
          } else {
            this.setState({ error: '', redirectToReferer: true });
          }
        });
      }
    });
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
        <div className="beauty">
          <Container>
            <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
              <Grid.Column>
                <Header as="h2" textAlign="center" className="white">
                  Register your account
                </Header>
                <Form onSubmit={this.submit}>
                  <Segment stacked>
                    <Form.Input
                        label="First Name"
                        name="firstName"
                        type="firstName"
                        required
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Last Name"
                        name="lastName"
                        type="lastName"
                        required
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Select}
                        label='Affiliation'
                        name="affiliation"
                        type="affiliation"
                        options={options}
                        required
                        placeholder='Affiliation'
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Email"
                        icon="user"
                        iconPosition="left"
                        name="email"
                        type="email"
                        placeholder="E-mail address"
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Password"
                        icon="lock"
                        iconPosition="left"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={this.handleChange}
                    />
                    <Form.Button content="Submit"/>
                  </Segment>
                </Form>
                <Message>
                  Already have an account? Login <Link to="/signin">here</Link>
                </Message>
                {this.state.error === '' ? (
                    ''
                ) : (
                    <Message
                        error
                        header="Registration was not successful"
                        content={this.state.error}
                    />
                )}
                <br/>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
