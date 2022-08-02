import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function EditProfileForm({ showUserEditForm, handleCloseEditForm }) {
  return (
    <div>
      <Modal show={showUserEditForm} onHide={handleCloseEditForm}>
        {/* <Image src='' roundedCircle /> */}
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="link"
                placeholder="Username"
                autoFocus
                // onChange={handleSongTitle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Country</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProfileForm
