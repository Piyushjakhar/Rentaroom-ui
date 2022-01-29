import React from 'react';
import { Form, Button, Container, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {

  const [formValue, setformValue] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  
  const handleSubmit = (e) => {
    // store the states in the form data
    e.preventDefault()
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('https://rentroomsikar.herokuapp.com/api/user/register/',
    {
      "name": formValue.name,
      "email": formValue.email,
      "phone": formValue.phone,
      "password": formValue.password
    }
    , {headers: headers})
      .then( (response) => {
        console.log("response", response);
      })
      .catch( (error) => {
        console.log(error);
      });  

    }
  
  
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

      return (
        <div style={{marginTop: "12%"}}>
        <Container className='col-md-6 col-sm-12 col-lg-6'>
          <h1>Signup</h1>
        <Form >
          <Form.Group className='mb-3' controlId='formBasicName'>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder='Enter Name' value={formValue.name} onChange={handleChange}/>
            </Col>
            <Col>
              <Form.Label>Phone</Form.Label>
              <Form.Control type='text' name="phone" placeholder="Enter Phone" value={formValue.phone} onChange={handleChange}/>
            </Col>
          </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={formValue.email} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={formValue.password} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link to="/login">Already had an account!</Link>            
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        </Container>
        </div>
      )
    
}

export default Signup;