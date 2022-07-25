import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp({ loginSignup }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handlePasswordConfirm(e) {
    setPasswordConfirm(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('YO')
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
      }),
    })
    const user = await response.json()
    if (response.ok) {
      loginSignup(user)
      // navigate("/home");
    } else {
      //set Errors state
      console.log(user.errors)
    }
  }
  return (
    <div>
      {/*  */}
      <Form id="signup" onSubmit={handleSubmit}>
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
        <Form.Group className="mb-3">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordConfirm}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}
