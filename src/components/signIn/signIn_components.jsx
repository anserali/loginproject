import React from "react"
import "./signin_components_css.scss"
import { Button, Form } from 'react-bootstrap';
import signInWithGoogle from "../../database/configDb"
import { auth } from "../../database/configDb"
import { connect } from 'react-redux'
import userAction from '../../redux/action'

class SignIn extends React.Component
{
    constructor(props)
    {

        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value

        auth.signInWithEmailAndPassword(email, password).catch(function (error)
        {
            console.log(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        this.props.dispatch({ name: "", email: "" })
        // this.setState({
        //     email: "",
        //     name: ""
        // })
    }
    handleChange = (e) =>
    {
        const { name, value } = e.target

        // this.props.dispatch({ name: name, email: value })

        // this.setState({
        //     name: name,
        //     email: value
        // })
    }


    render()
    {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button className="mr-3" variant="secondary" type="submit">
                    Sign In
                </Button>
                <Button onClick={signInWithGoogle} variant="secondary" type="button">
                    Sign In With Google
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) =>
{
    return { payload: state.user };
};

const mapDispatchToProps = dispatch =>
{
    return {
        dispatch: (data) => dispatch(userAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn) 