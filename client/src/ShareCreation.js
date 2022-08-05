import React, { useEffect, useState } from 'react'

import { Row, Col, Card, Button } from 'react-bootstrap'
import ArtistPopUp from './ArtistPopUp'
import { images } from './constants'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'

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
  const [randomColor, setRandomColor] = useState([])
  // const [showFilteredPage, setShowFilteredPage] = useState([])
  // const [refreshed, setRefreshed] = useState(false)

  useEffect(() => {
    resetFunction()

    fetch('/creations')
      .then((response) => response.json())
      .then((data) => {
        setSharedCreations(data)
        const newArr = [...data]
      })
  }, [])

  async function handleArtistPopUp(userId) {
    await fetch(`/selected_user?id=${userId}`)
      .then((response) => response.json())
      .then((data) => setSelectedUser(data))

    setShowArtistProfile(true)
  }

  // function colorGenerator() {
  //   for (let i = 0; i < 20; i++) {
  //     const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
  //     setCardColor(color)
  //   }
  // }

  // const colorArr = []
  // const setCardColor = (color) => {
  //   colorArr.push(color)

  //   console.log(colorArr)
  // }
  // colorGenerator()

  function handleCloseProfile() {
    setShowArtistProfile(false)
  }

  const imageArr = [images.Lyric, images.Chord, images.Enigma]
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
        <Figure
          style={{
            backgroundImage: `url(${images.Lyric})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: '110vw 110vh',

            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            paddingTop: '90px',
          }}
        >
          <div
            className="share-container"
            // style={{
            //   backgroundImage: `url(${images.Lyric})`,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundAttachment: 'fixed',
            //   backgroundSize: '110vw 110vh',
            //   display: 'flex',
            //   flexWrap: 'wrap',
            //   alignItems: 'center',

            //   width: '100vw',
            //   paddingTop: '90px',
            //   margin: 'auto',
            //   // marginLeft: '100px',
            // }}
          >
            <Row
              xs={1}
              md={4}
              className="g-4"
              id="avatar-box"
              style={{
                alignItems: 'center',
                margin: 'auto',
                paddingTop: '20px',
              }}
            >
              {sharedCreations.map((creation) => (
                <Col key={creation.id}>
                  <Card
                    border="info"
                    className="card h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
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
        </Figure>
        <ArtistPopUp
          showArtistProfile={showArtistProfile}
          handleCloseProfile={handleCloseProfile}
          selectedUser={selectedUser}
        />
        {/* everything below this next div is testing new grid */}
      </>
    )
  } else
    return (
      <>
        <Figure
          style={{
            backgroundImage: `url(${images.Lyric})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: '110vw 110vh',

            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            paddingTop: '90px',
          }}
        >
          <div
            className="share-container"
            // style={{
            //   backgroundImage: `url(${images.Lyric})`,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundAttachment: 'fixed',
            //   backgroundSize: '110vw 110vh',

            //   flexWrap: 'wrap',
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
            //   width: '100vw',

            //   margin: 'auto',
            //   // marginLeft: '100px',
            // }}
          >
            <Row
              xs={2}
              md={4}
              className="g-4"
              id="avatar-box"
              style={{
                alignItems: 'center',
                margin: 'auto',
                paddingTop: '20px',
              }}
            >
              {sharePageUpdate.map((creation) => (
                <Col
                  key={creation.id}
                  style={{
                    alignItems: 'center',
                    margin: 'auto',
                    // justifyContent: 'space-evenly',
                  }}
                >
                  <Card
                    className="card h-100 "
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      width: '18rem',
                      paddingTop: '5px',
                      paddingBottom: '5px',
                      alignContent: 'center',
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
        </Figure>
        <ArtistPopUp
          showArtistProfile={showArtistProfile}
          handleCloseProfile={handleCloseProfile}
          selectedUser={selectedUser}
        />
      </>
    )
}
