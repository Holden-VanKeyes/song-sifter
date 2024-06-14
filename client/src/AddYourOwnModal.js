import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ToastContainer } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { images } from './constants/constants'

function AddYourOwnModal({
  showModal,
  handleCloseModal,
  userAddSelection,
  chords,
  lyrics,
  enigmas,
  currentUser,
}) {
  const [categories, setCategories] = useState([])
  const [addition, setAddition] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [imageDisplay, setImageDisplay] = useState('')

  const modalTitle =
    userAddSelection.charAt(0).toUpperCase() + userAddSelection.slice(1)

  useEffect(() => {
    if (showModal) {
      handleUserSelection()
    }
  })

  function handleUserSelection() {
    if (userAddSelection === 'enigma') {
      setCategories(enigmas)
      setImageDisplay(images.Enigma)
    } else if (userAddSelection === 'lyrics') {
      setCategories(lyrics)
      setImageDisplay(images.Lyric)
    } else if (userAddSelection === 'chords') {
      setCategories(chords)
      setImageDisplay(images.Chord)
    } else return null
  }

  function handleUserAddition(e) {
    setAddition(e.target.value)
  }
  function handleOptionSelection(e) {
    setSelectedCategory(e.target.value)
  }
  async function handleAdd() {
    handleCloseModal()
    setShowToast(true)
    const key = userAddSelection

    const newLyricChordEnigma = {
      category: selectedCategory,
      author: currentUser.username,
      [key]: addition,
    }
    if (userAddSelection === 'enigma') {
      await fetch('/enigmas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLyricChordEnigma),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    } else if (userAddSelection === 'lyrics') {
      await fetch('/lyric_snippets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLyricChordEnigma),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    } else if (userAddSelection === 'chords') {
      await fetch('/chord_progressions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLyricChordEnigma),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    } else return null

    // navigate('/UserProfile')
    // setShow(false)
  }

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Image src={imageDisplay} />
        <Modal.Header closeButton>
          {userAddSelection === 'enigma' ? (
            <Modal.Title>Add To Our Library Of {modalTitle}s</Modal.Title>
          ) : (
            <Modal.Title>Add To Our Library Of {modalTitle}</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select {} Category</Form.Label>
              <Form.Select
                variant="primary"
                onChange={handleOptionSelection}
                value={selectedCategory}
                title="Placeholder"
              >
                <option disabled={true} value="">
                  select category
                </option>
                <option value={categories.cat1}>{categories.cat1}</option>
                <option value={categories.cat2}>{categories.cat2}</option>
                <option value={categories.cat3}>{categories.cat3}</option>
                {categories.cat4 === null ? null : (
                  <option value={categories.cat4}>{categories.cat4}</option>
                )}
              </Form.Select>
              <br></br>
              {userAddSelection === 'chords' ? (
                <Form.Label>
                  please separate chords with '-' and use verbose naming
                  <br></br>
                  <br></br>(min for minor, dim for diminished etc) ex; Amin -
                  Bdim - Amin(b13)
                </Form.Label>
              ) : null}
              <Form.Control
                type="name"
                placeholder={`Share your ${userAddSelection}`}
                autoFocus
                onChange={handleUserAddition}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col xs={6}>
          <ToastContainer position="middle-center">
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <img src="" className="rounded me-2" alt="" />
                <strong className="me-auto">Thanks!</strong>
                {/* <small>11 mins ago</small> */}
              </Toast.Header>
              <Toast.Body>We appreciateyour creative additions!</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </>
  )
}
export default AddYourOwnModal
