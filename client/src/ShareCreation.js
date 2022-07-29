import React, { useEffect, useState } from 'react'

import { Row, Col, Card, Button } from 'react-bootstrap'

export default function ShareCreation({ filteredSearch, filteredType }) {
  const [sharedCreations, setSharedCreations] = useState([])

  console.log(filteredSearch)
  console.log(filteredType)

  useEffect(() => {
    fetch('/creations')
      .then((response) => response.json())
      .then((data) => setSharedCreations(data))
    filterFetch()
  }, [])
  // console.log(sharedCreations)
  function filterFetch() {
    if (filteredType === '') {
      return null
    } else if (filteredType === 'lyrics') {
      fetch(`/filtered_lyrics?category=${filteredSearch}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    } else {
      if (filteredType === 'enigmas') {
        fetch(`/filtered_enigmas?category=${filteredSearch}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
      } else {
        if (filteredType === 'chords') {
          fetch(`/filtered_chords?category=${filteredSearch}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
            })
        }
      }
    }
  }

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
    </>
  )
}
