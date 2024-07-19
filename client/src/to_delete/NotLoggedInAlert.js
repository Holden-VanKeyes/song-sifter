import Alert from 'react-bootstrap/Alert'

import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function NotLoggedInAlert() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div id="login-alert">
      <Alert
        variant="danger"
        style={{ textAlignVertical: 'center', textAlign: 'center' }}
      >
        <Alert.Heading>Oh snap! You're not logged in!</Alert.Heading>
        <p>please log in or create an account to view your profile</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleClick} variant="outline-success">
            Log In
          </Button>
        </div>
      </Alert>
    </div>
  )
}

export default NotLoggedInAlert
