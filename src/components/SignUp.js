import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp } from '../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = props => {
    const { setUser } = props
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const handleChange = event => {
        event.persist()

        setCredentials(prevState => {
            const updatedField = { [event.target.name]: event.target.value }
            const editCredentials = Object.assign({}, prevState, updatedField)
            return editCredentials
        })        
    }

    const handleSubmit = event => {
        event.preventDefault()

        signUp(credentials)
            .then(console.log('signed up!'))
    }
}