import React from 'react'
import Layout from '../../components/Layout'
import {Form,Button, Container} from 'react-bootstrap'

function Sign_in() {
    return (
        <Layout>
        <Container style={{width:"700px",height:"100px",paddingTop:'50px'}} >
             
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
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

       </Container>
        </Layout>
    )
}

export default Sign_in
