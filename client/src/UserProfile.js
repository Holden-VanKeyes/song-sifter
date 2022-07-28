import React, { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ShareCreationForm from './ShareCreationForm'

function UserProfile({ currentUser, postShare }) {
  const [userInspirations, setUserInspirations] = useState([])
  const [show, setShow] = useState(false)
  const [musicLink, setMusicLink] = useState('')
  const [aboutSong, setAboutSong] = useState('')
  const [inspoTitle, setInspoTitle] = useState('')

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Share music you've created from this inspiration
    </Tooltip>
  )

  function handleMusicLink(e) {
    setMusicLink(e.target.value)
  }
  function handleAboutSong(e) {
    setAboutSong(e.target.value)
  }

  const handleClose = () => setShow(false)
  const handleShow = (e) => {
    setShow(true)
    const id = parseInt(e.target.value)
    const inspiration = userInspirations.find((inspo) => inspo.id === id)
    setInspoTitle(inspiration.title)
  }

  function handleShare() {
    const musicShare = {
      title: inspoTitle,
      music_link: musicLink,
      user_id: currentUser.id,
      about: aboutSong,
    }
    postShare(musicShare)
  }

  useEffect(() => {
    fetch(`/user_inspirations?user_id=${currentUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInspirations(data)
      })
  }, [])

  function handleDeleteConfirmation(e) {
    if (window.confirm('are you sure you want to delete?'))
      return handleDelete(e)
    else return null
  }

  async function handleDelete(e) {
    const inspoId = e.target.value
    const response = await fetch(`/inspirations/${inspoId}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      console.log('deleted')
      await fetch(`/user_inspirations?user_id=${currentUser.id}`)
        .then((response) => response.json())
        .then((data) => {
          setUserInspirations(data)
        })
    } else {
      console.log('not deleted')
    }
  }

  return (
    <>
      <div className="container-1" style={{ backgroundColor: '#EAF4D3' }}>
        <div className="box-2" style={{ backgroundColor: '#2274A5' }}>
          <img
            className="avatar"
            src={`${currentUser.profile_pic}`}
            alt="user avatar"
          />
          <p>Username: {currentUser.username}</p>
        </div>

        <div className="box-1">
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
                      onClick={handleDeleteConfirmation}
                    >
                      Delete
                    </Button>
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 200 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        value={inspiration.id}
                        style={{ marginTop: '15px', marginLeft: '15px' }}
                        onClick={handleShow}
                      >
                        Share
                      </Button>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <ShareCreationForm
        showModal={show}
        handleClose={handleClose}
        handleShare={handleShare}
        handleMusicLink={handleMusicLink}
        handleAboutSong={handleAboutSong}
      />
    </>
  )
}
export default UserProfile
