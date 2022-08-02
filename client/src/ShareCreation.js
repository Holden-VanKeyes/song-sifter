import React, { useEffect, useState } from 'react'

import { Row, Col, Card, Button } from 'react-bootstrap'
import ArtistPopUp from './ArtistPopUp'

export default function ShareCreation({
  filteredSearch,
  filteredType,
  refreshed,
  sharePageUpdate,
  resetFunction,
  currentUser,
}) {
  const [sharedCreations, setSharedCreations] = useState([])
  const [showArtistProfile, setShowArtistProfile] = useState(false)
  const [selectedUser, setSelectedUser] = useState(0)
  const [showFilteredPage, setShowFilteredPage] = useState([])
  // const [refreshed, setRefreshed] = useState(false)

  useEffect(() => {
    resetFunction()

    fetch('/creations')
      .then((response) => response.json())
      .then((data) => setSharedCreations(data))
  }, [])

  async function handleArtistPopUp(userId) {
    await fetch(`/selected_user?id=${userId}`)
      .then((response) => response.json())
      .then((data) => setSelectedUser(data))

    setShowArtistProfile(true)
  }

  function handleCloseProfile() {
    setShowArtistProfile(false)
  }

  function handleDeleteConfirmation(e) {
    if (window.confirm('are you sure you want to delete?'))
      return handleDeleteShare(e)
    else return null
  }

  async function handleDeleteShare(e) {
    const creation = e.target.value
    const response = await fetch(`/creations/${creation}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      console.log('deleted')
      resetFunction()
      await fetch(`/creations`)
        .then((response) => response.json())
        .then((data) => {
          setSharedCreations(data)
        })
    } else {
      console.log('not deleted')
    }
  }

  if (refreshed) {
    return (
      <>
        <div className="share-container">
          <Row xs={1} md={4} className="g-4" id="avatar-box">
            {sharedCreations.map((creation) => (
              <Col key={creation.id}>
                <Card
                  className="card h-100"
                  style={{
                    width: '18rem',
                    paddingTop: '5px',
                    paddingBottom: '5px',
                  }}
                >
                  <Card.Img
                    onClick={() => handleArtistPopUp(creation.user_id)}
                    variant="top"
                    src={creation.get_avatars}
                    style={{ width: '80%' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>
                      {creation.title}
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                      {creation.about}
                    </Card.Text>
                    {creation.user_id === currentUser.id ? (
                      <Button
                        value={creation.id}
                        variant="info"
                        size="sm"
                        onClick={handleDeleteConfirmation}
                      >
                        Delete Share
                      </Button>
                    ) : null}
                  </Card.Body>
                  <Card.Link
                    href={creation.music_link}
                    style={{ textAlign: 'center' }}
                  >
                    Music Link
                  </Card.Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <ArtistPopUp
          showArtistProfile={showArtistProfile}
          handleCloseProfile={handleCloseProfile}
          selectedUser={selectedUser}
        />
      </>
    )
  } else
    return (
      <>
        <div className="share-container">
          <Row xs={1} md={4} className="g-4" id="avatar-box">
            {sharePageUpdate.map((creation) => (
              <Col key={creation.id}>
                <Card
                  className="card h-100"
                  style={{
                    width: '18rem',
                    paddingTop: '5px',
                    paddingBottom: '5px',
                  }}
                >
                  <Card.Img
                    onClick={() => handleArtistPopUp(creation.user_id)}
                    variant="top"
                    src={creation.get_avatars}
                    style={{ width: '80%' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>
                      {creation.title}
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                      {creation.about}
                    </Card.Text>
                    {creation.user_id === currentUser.id ? (
                      <Button
                        value={creation.id}
                        variant="info"
                        size="sm"
                        onClick={handleDeleteConfirmation}
                      >
                        Delete Share
                      </Button>
                    ) : null}
                  </Card.Body>
                  <Card.Link
                    href={creation.music_link}
                    style={{ textAlign: 'center' }}
                  >
                    Music Link
                  </Card.Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <ArtistPopUp
          showArtistProfile={showArtistProfile}
          handleCloseProfile={handleCloseProfile}
          selectedUser={selectedUser}
        />
      </>
    )
}
