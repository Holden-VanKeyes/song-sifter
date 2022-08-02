import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

export default function Login({ loginSignup, handleLoginErrors }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    const user = await response.json()
    if (response.ok) {
      //set currentUser state in App to response object
      loginSignup(user)
      // navigate('/UserProfile')
    } else {
      //set Errors state
      handleLoginErrors()
      console.log('errors:', user.error)
    }
  }

  return (
    <div>
      <Form id="log-in" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Enter Username"
            onChange={handleUsername}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  )
}
