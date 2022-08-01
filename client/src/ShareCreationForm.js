import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

export default function ShareCreationForm({
  showModal,
  handleClose,
  handleShare,
  handleMusicLink,
  handleAboutSong,
  handleSongTitle,
}) {
  return (
    <div className="container-3">
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share your creation with the community</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tile Of Your Musical Creation</Form.Label>
              <Form.Control
                type="link"
                placeholder="Song Title"
                autoFocus
                onChange={handleSongTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Paste your link {`(BandCamp, SoundCloud etc...)`}
              </Form.Label>
              <Form.Control
                type="link"
                placeholder="Music Link"
                autoFocus
                onChange={handleMusicLink}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextArea"
            >
              <Form.Label>
                Tell us a bit about the tune and how you used the inspiration
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                // type="link"
                placeholder="About"
                autoFocus
                onChange={handleAboutSong}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShare}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
