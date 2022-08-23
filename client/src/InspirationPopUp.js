import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function InspirationPopUp({
  showPopUp,
  handleClose,
  handleSave,
  handleInspoName,
  randomChords,
  randomEnigma,
  randomLyric,
}) {
  return (
    <>
      <Modal show={showPopUp} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Unique Musical Inspiration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Save to your profile or discard and create another
              </Form.Label>
              <Form.Control
                type="name"
                placeholder="Name Your Inspiration"
                autoFocus
                onChange={handleInspoName}
              />
            </Form.Group>
            Chords: {randomChords} <br></br>
            <br></br>
            Lyrics: {randomLyric} <br></br>
            <br></br>
            Enigma: {randomEnigma} <br></br>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InspirationPopUp
