import React, { useEffect, useState } from 'react'

import { Row, Col, Card, Button } from 'react-bootstrap'

export default function ShareCreation({
  filteredSearch,
  filteredType,
  refreshed,
  sharePageUpdate,
  resetFunction,
}) {
  const [sharedCreations, setSharedCreations] = useState([])
  const [showFilteredPage, setShowFilteredPage] = useState([])
  // const [refreshed, setRefreshed] = useState(false)

  useEffect(() => {
    console.log(refreshed)
    resetFunction()
    console.log(refreshed)
    fetch('/creations')
      .then((response) => response.json())
      .then((data) => setSharedCreations(data))
  }, [])
  console.log(refreshed)

  // const usersWhoShared = sharedCreations.map((c) => c.user_id)
  // const usersWhoSharedIds = [...new Set(usersWhoShared)]

  // function filterFetch() {
  //   console.log('I ran')
  //   if (filteredType === '') {
  //     return null
  //   } else if (filteredType === 'lyrics') {
  //     fetch(`/filtered_lyrics?category=${filteredSearch}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         handleGetIds(data)
  //         // handleComparison(data)
  //       })
  //   } else {
  //     if (filteredType === 'enigmas') {
  //       fetch(`/filtered_enigmas?category=${filteredSearch}`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           handleGetIds(data)
  //           // handleComparison(data)
  //         })
  //     } else {
  //       if (filteredType === 'chords') {
  //         fetch(`/filtered_chords?category=${filteredSearch}`)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             handleGetIds(data)
  //             // handleComparison(data)
  //           })
  //       }
  //     }
  //   }
  // }

  // function handleGetIds(data) {
  //   console.log(data)
  //   const ids = data.flatMap((obj) => obj.inspirations).map((e) => e.user_id)
  //   const uniqueIdArr = [...new Set(ids)]
  //   handleComparison(uniqueIdArr)
  // }

  // function handleComparison(uniqueIdArr) {
  //   const filteredArr = uniqueIdArr.filter((id) =>
  //     usersWhoSharedIds.includes(id)
  //   )

  //   const filteredPage = sharedCreations.map((c) => {
  //     if (filteredArr.includes(c.user_id)) {
  //       return c
  //     } else {
  //       return null
  //     }
  //   })
  //   const filteredSet = [...new Set(filteredPage)].filter((obj) => obj !== null)
  //   // console.log(filteredSet)
  // }
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
