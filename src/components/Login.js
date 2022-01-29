import React from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";



const Login = () => {

  const [formValue, setformValue] = React.useState({
    phone: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('https://rentroomsikar.herokuapp.com/api/user/login/',
    {
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
          <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type='text' name="phone" placeholder="Enter Phone" value={formValue.phone} onChange={handleChange}/>
            <Form.Text className="text-muted">
              We'll never share your phone with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" value={formValue.password} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Link to="/signup">Create New Account</Link>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        </Container>
        </div>
      )
}

export default Login;