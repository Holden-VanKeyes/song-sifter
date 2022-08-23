import React from 'react'
import Toast from 'react-bootstrap/Toast'
import { ToastContainer } from 'react-bootstrap'

function LoginErrorMsg({ showErrorMsg, closeError, errorSelector }) {
  if (!errorSelector) {
    return (
      <div>
        <ToastContainer position="middle-center">
          <Toast
            bg="danger"
            onClose={() => closeError()}
            show={showErrorMsg}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img src="" className="rounded me-2" alt="" />
              <strong className="me-auto">ERROR</strong>
            </Toast.Header>
            <Toast.Body>Incorrect username or password</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    )
  } else
    return (
      <div>
        <ToastContainer position="middle-center">
          <Toast
            bg="danger"
            onClose={() => closeError()}
            show={showErrorMsg}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img src="" className="rounded me-2" alt="" />
              <strong className="me-auto">ERROR</strong>
            </Toast.Header>
            <Toast.Body>
              Username Not Available - Please Choose Another
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    )
}

export default LoginErrorMsg
