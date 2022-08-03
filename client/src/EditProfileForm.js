import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function EditProfileForm({
  showUserEditForm,
  handleCloseEditForm,
  userId,
  updatedUserRefresh,
  clicked,
}) {
  const [newUserName, setNewUserName] = useState('')
  const [newBio, setNewBio] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')

  function handleNameChange(e) {
    setNewUserName(e.target.value)
  }
  function handleBioChange(e) {
    setNewBio(e.target.value)
  }
  function handleCity(e) {
    setCity(e.target.value)
  }
  function handleState(e) {
    setState(e.target.value)
  }
  function handleCountry(e) {
    setCountry(e.target.value)
  }

  async function handleEditSubmit(e) {
    e.preventDefault()

    const userEdits = {
      username: newUserName,
      bio: newBio,
      city: city,
      state: state,
      country: country,
    }

    await fetch(`/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userEdits),
    })
      .then((response) => response.json())
      .then((data) => {
        updatedUserRefresh(data)
      })
  }

  return (
    <div>
      <Modal show={showUserEditForm} onHide={handleCloseEditForm}>
        {/* <Image src='' roundedCircle /> */}
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="link"
                placeholder="Username"
                autoFocus
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleBioChange} />
            </Form.Group>
            <Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control onChange={handleCity} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control onChange={handleState} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Country</Form.Label>
                  <Form.Control onChange={handleCountry} />
                </Form.Group>
              </Row>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleCloseEditForm}
            >
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default EditProfileForm
