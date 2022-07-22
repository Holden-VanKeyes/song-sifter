import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  function handleLogIn(e) {
    e.preventDefault()
  }

  function handleUserName(e) {
    setUserName(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }
  return (
    <div>
      <Form id="log-in" onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Username"
            onChange={handleUserName}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}
