import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

function ArtistPopUp({ showArtistProfile, handleCloseProfile, selectedUser }) {
  console.log(selectedUser)
  return (
    <div>
      <Modal show={showArtistProfile} onHide={handleCloseProfile}>
        <Image src={selectedUser.profile_pic} roundedCircle />
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedUser.bio}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  )
}

export default ArtistPopUp

// `/users/${user}`
