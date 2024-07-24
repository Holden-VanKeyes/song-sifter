import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import SplashPage from '../SplashPage'
import LoginErrorMsg from './LoginErrorMsg'

export default function Home({
  loginSignup,
  isLoggedIn,
  handleUserImage,
  getStarted,
  showOffset,
}) {
  const [showForm, setShowForm] = useState(false)
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [errorSelector, setErrorSelector] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  console.log('SHow', show)
  function handleShowLogIn() {
    setShowForm(true)
  }
  function handleShowSignUp() {
    setShowForm(false)
  }
  function handleLoginErrors(nameError) {
    if (nameError === 'not unique') {
      setErrorSelector(true)
      setShowErrorMsg(true)
    } else {
      setErrorSelector(false)
      setShowErrorMsg(true)
    }
  }

  function closeError() {
    setShowErrorMsg(false)
  }
  console.log('Sould change', showOffset)
  if (getStarted) {
    return (
      <>
        <div id="log-sign-btn">
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button variant="secondary" onClick={handleShowLogIn}>
                Log In
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button variant="secondary" onClick={handleShowSignUp}>
                Sign Up
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
              {/* <Button variant="primary" onClick={() => setShow(!show)}>
                About
              </Button> */}
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div>
          {showForm ? (
            <Login
              loginSignup={loginSignup}
              handleLoginErrors={handleLoginErrors}
            />
          ) : (
            <SignUp
              loginSignup={loginSignup}
              handleUserImage={handleUserImage}
              handleLoginErrors={handleLoginErrors}
            />
          )}
        </div>
        <LoginErrorMsg
          showErrorMsg={showErrorMsg}
          closeError={closeError}
          errorSelector={errorSelector}
        />
        {/* <div>
          <Offcanvas show={showOffset} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Song Sifter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Song Sifter was created for musicians, producers, songwriters in
              need of a little creative spark! Hit up the create section to
              generate the following song-starters based on mood/style: A
              4-chord progression, a lyric snippet, and an enigmatic expression.
              Insead of cycling through to find the perfect fit, we suggest you
              spend some time with the first recommendation as it may help you
              escape your songwriting crutches. You can also send us your own
              lyrics/chords/enigmas to add to our library of inspirations, and
              if you create something musical from your customized inspiration,
              we encourage you to share with the community via the Share page.
              Log in or Sign up to explore more!
            </Offcanvas.Body>
          </Offcanvas>
        </div> */}
      </>
    )
  } else {
    return (
      <>
        {/* <TestColumn /> */}
        <SplashPage className="splash-page" />
      </>
    )
  }
}
