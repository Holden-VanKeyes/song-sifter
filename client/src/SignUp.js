import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function SignUp() {
  return (
    <div>
      <Form id="signup">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}
