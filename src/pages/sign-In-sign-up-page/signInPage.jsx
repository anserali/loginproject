import React from "react";
import "./signInPage_css.scss"
import SignIn from "../../components/signIn/signIn_components"
import SignOut from "../../components/signout/signout_components"
import { Container, Row, Col } from 'react-bootstrap';

const SingInsignOut = () =>
{
    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <div style={{ paddingRight: "50px" }}>
                        <div className="mb-4" >
                            <h3>I already have an account</h3>
                            <small >Sign in with your email and password</small>
                        </div>
                        <SignIn />
                    </div>

                </Col>
                <Col md={6}>
                    <div style={{ paddingLeft: "50px" }}>
                        <div className="mb-4" >
                            <h3>I do not have a account</h3>
                            <small >Sign Up with your email and password</small>
                        </div>
                        <SignOut />
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
export default SingInsignOut