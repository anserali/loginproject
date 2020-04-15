import React from "react"
import "./signout_components_css.scss"
import { Button, Form } from 'react-bootstrap';
import { auth } from "../../database/configDb"

class SignOut extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }

    handleSubmit = event =>
    {
        event.preventDefault()
        if (event.target.currentPassword.value !== event.target.password.value)
        {
            alert("Password Mismatch")
        } else
        {
            const email = event.target.email.value
            const password = event.target.password.value

            auth.createUserWithEmailAndPassword(email, password).catch(function (error)
            {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

            this.setState({
                email: email,
                password: password
            })
        }
    }

    render()
    {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="currentPassword" type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Sign UP
            </Button>
            </Form>
        )
    }
}

export default SignOut;