import React, { useState } from 'react'

import { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function UserProfile({ currentUser, isLoggedIn, userImage }) {
  const [userInspirations, setUserInspirations] = useState([])

  const image_url =
    'https://res.cloudinary.com/shooksounds/image/upload/v1658846648/Song%20Sifter/SongSifterLyric_dpnd6k.png'

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/user_inspirations?user_id=${currentUser}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInspirations(data)
      })
  }, [])

  const handleClick = () => {
    navigate('/')
  }

  async function handleDelete(e) {
    const inspoId = e.target.value
    const response = await fetch(`/inspirations/${inspoId}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      console.log('deleted')
      await fetch(`/user_inspirations?user_id=${currentUser}`)
        .then((response) => response.json())
        .then((data) => {
          setUserInspirations(data)
        })
    } else {
      console.log('not deleted')
    }
  }

  return (
    <div>
      <div id="profile">
        <img className="avatar" src={`${userImage}`} alt="user avatar" />
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Chords</th>
              <th>Lyrics</th>
              <th>Enigma</th>
              <th>Delete/Share</th>
            </tr>
          </thead>
          <tbody>
            {userInspirations.map((inspiration) => (
              <tr>
                <td>{inspiration.title}</td>
                <td>{inspiration.chord_return}</td>
                <td>{inspiration.lyric_return}</td>
                <td>{inspiration.enigma_return}</td>
                <td>
                  <Button
                    value={inspiration.id}
                    style={{ marginTop: '5px', marginLeft: '15px' }}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>

                  <Button style={{ marginTop: '15px', marginLeft: '15px' }}>
                    Share
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
export default UserProfile
