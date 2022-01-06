import {React, Component} from 'react';
import { Navbar, Form, FormControl, Button, Nav, Container, NavDropdown, Col, Row, InputGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Property extends Component {
    render () {
      return (
        <div style={{marginTop: "5%"}}>
        <Container className='col-md-6 col-sm-12 col-lg-6'>
          <h1>Post Your Property</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formPropertyName'>
              <Form.Label>Property Name</Form.Label>
              <Form.Control type="text" placeholder='Enter property name'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formOwnerName">
              <Form.Label>Owner</Form.Label>
              <Form.Control type='text' placeholder="Enter owner name"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPropertyPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ammenities</Form.Label>
            <Row>
              <Col>
                <Form.Check type="switch"id="custom-switch"label="AC"/>
              </Col>
              <Col>
                <Form.Check type="switch"id="custom-switch"label="Wifi"/>
              </Col>
              <Col>
                <Form.Check type="switch"id="custom-switch"label="CCTV"/>
              </Col>
              <Col>
                <Form.Check type="switch"id="custom-switch"label="Cooler"/>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formPropertyImages'>
            <Form.Label>Images</Form.Label>
            <Form.Control type='file' multiple />
          </Form.Group>

          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
        </Container>
        </div>
      )
    }
}