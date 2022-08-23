import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { images } from './constants'
import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

export default function SignUp({ loginSignup, handleLoginErrors }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [nameError, setNameError] = useState('')

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

    await fetch(`https://avatars.dicebear.com/api/personas/${username}.svg`)
      .then((response) => response.url)
      .then((data) => handleSetUser(data))
  }

  async function handleSetUser(data) {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
        profile_pic: data,
      }),
    })
    const user = await response.json()
    if (response.ok) {
      loginSignup(user)
      console.log(user)
    } else {
      //set Errors state
      setNameError('not unique')
      handleLoginErrors(nameError)
      console.log(user.errors)
    }
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${images.Banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw 100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Form onSubmit={handleSubmit} style={{ paddingBottom: '400px' }}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Enter Username"
                onChange={handleUsername}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Col>

            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePassword}
              />
            </Col>

            <Col>
              <Form.Control
                type="password"
                placeholder="Password Confirmation"
                onChange={handlePasswordConfirm}
              />
            </Col>
          </Row>
          <Button variant="primary" type="submit" style={{ margin: '10px' }}>
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  )
}
