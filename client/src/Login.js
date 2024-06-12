import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { images } from './constants'
import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

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
    <>
      <div
      // style={{
      //   backgroundImage: `url(${images.Banner})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: '100vw 100vh',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   height: '100vh',
      //   width: '100vw',
      // }}
      >
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Enter Username"
                onChange={handleUsername}
                style={{ border: '1px solid black' }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Col>

            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                style={{ border: '1px solid black' }}
              />
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="success"
              type="submit"
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}
