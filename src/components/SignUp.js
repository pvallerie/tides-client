import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api/auth'
import { createLocation } from '../api/tides'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: '',
            location: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        const { setUser, history } = this.props
        // const { email, password, passwordConfirmation, location } = this.state

        signUp(this.state)
            .then(() => signIn(this.state))
            .then(res => {
              setUser(res.data.user)
              this.state.token = res.data.user.token
            })
            .then(() => createLocation(this.state))
            .then(() => history.push('/home'))
            .catch(error => console.error('ERROR: ', error.message))
    }

    render () {
        const { email, password, passwordConfirmation, location } = this.state

        return (
            <div className="row">
              <div className="col-sm-10 col-md-8 mx-auto mt-5">
                <h3>Sign Up</h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      name="password"
                      type="password"
                      value={password}
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="passwordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      required
                      name="passwordConfirmation"
                      type="password"
                      value={passwordConfirmation}
                      placeholder="Confirm Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      required
                      name="location"
                      type="text"
                      value={location}
                      placeholder="Enter your location"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          )
    }
}

export default withRouter(SignUp)