import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import changeLocation from '../api/tides'

const ChangeLocation = props => {
    const { changeLocation, location } = props
    const [newLocation, setNewLocation] = useState(location)

    const handleChange = event => {
        event.persist()

        setNewLocation(prevState => {
            const updatedField = { [event.target.name]: event.target.value }
            const editNewLocation = Object.assign({}, prevState, updatedField)
            return editNewLocation
        })
    }

    const handleSubmit = () => {
        console.log(newLocation)
        changeLocation(newLocation)
            .then(res => console.log(res))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newLocation">
                <Form.Label>Change Location</Form.Label>
                <Form.Control type="text" placeholder="Enter new location" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ChangeLocation