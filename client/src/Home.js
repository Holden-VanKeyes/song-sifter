import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  function handleClick() {
    setShowForm(!showForm)
  }
  return (
    <>
      <div id="log-sign-btn">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={handleClick}>
            Sign Up
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Login
          </Button>
        </ButtonGroup>
      </div>
      <div id="access">{showForm ? <SignUp /> : <Login />}</div>
    </>
  )
}
