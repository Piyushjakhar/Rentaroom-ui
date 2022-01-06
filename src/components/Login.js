import {React, Component} from 'react';
import { Navbar, Form, FormControl, Button, Nav, Container, NavDropdown, Col, Row, InputGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default class Login extends Component {
    render() {
      return (
        <div style={{marginTop: "12%"}}>
        <Container className='col-md-6 col-sm-12 col-lg-6'>
          <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Link to="/signup">Create New Account</Link>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>
        </div>
      )
    }
}