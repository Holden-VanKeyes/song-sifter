import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { images } from '../constants/constants'
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
    console.log('E', e)
    await fetch(
      `https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${username}`
    )
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
      // handleLoginErrors(nameError)
      console.log(user.errors)
    }
  }
  return (
    <>
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
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              style={{ border: '1px solid black' }}
            />
          </Col>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password Confirmation"
              onChange={handlePasswordConfirm}
              style={{ border: '1px solid black' }}
            />
          </Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="success" type="submit" style={{ marginTop: '20px' }}>
            Submit
          </Button>
        </div>
      </Form>
    </>
  )
}
