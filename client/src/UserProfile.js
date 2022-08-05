import React, { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import Tooltip from 'react-bootstrap/Tooltip'
import { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ShareCreationForm from './ShareCreationForm'
import AddYourOwnModal from './AddYourOwnModal'
import EditProfileForm from './EditProfileForm'

function UserProfile({
  currentUser,
  postShare,
  showModalPopUp,
  updatedUserRefresh,
}) {
  const [userInspirations, setUserInspirations] = useState([])
  const [show, setShow] = useState(false)
  const [showUserEditForm, setShowUserEditForm] = useState(false)
  const [clicked, setClicked] = useState(false)

  const [songTitle, setsongTitle] = useState('')
  const [musicLink, setMusicLink] = useState('')
  const [aboutSong, setAboutSong] = useState('')

  const [sharedInspiration, setSharedInspiration] = useState('')

  useEffect(() => {
    fetch(`/user_inspirations?user_id=${currentUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInspirations(data)
      })
  }, [])

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Share music you've created from this inspiration
    </Tooltip>
  )

  function handleSongTitle(e) {
    setsongTitle(e.target.value)
  }

  function handleMusicLink(e) {
    setMusicLink(e.target.value)
  }
  function handleAboutSong(e) {
    setAboutSong(e.target.value)
  }

  function handleEditProfile() {
    setShowUserEditForm(true)
  }
  const handleCloseEditForm = () => {
    setClicked(!clicked)
    setShowUserEditForm(false)
  }

  const handleClose = () => setShow(false)
  const handleShow = (e) => {
    setShow(true)
    const id = parseInt(e.target.value)
    // console.log(id)
    const inspiration = userInspirations.find((inspo) => inspo.id === id)
    setSharedInspiration(inspiration)
  }
  // console.log(sharedInspiration)

  function handleShare() {
    const musicShare = {
      inspiration_id: sharedInspiration.id,
      title: songTitle,
      music_link: musicLink,
      user_id: currentUser.id,
      about: aboutSong,
    }

    postShare(musicShare)
  }

  function handleDeleteConfirmation(e) {
    const user = parseInt(e.target.value)

    if (user === currentUser.id) {
      window.confirm('are you sure you want to delete?')
      return handleDeleteUser(user)
    } else if (window.confirm('are you sure you want to delete?'))
      return handleDeleteInspo(e)
    else return null
  }

  async function handleDeleteUser(user) {
    console.log(typeof user)

    const response = await fetch(`/users/${user}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      console.log('deleted')
      // await fetch(`/user_inspirations?user_id=${currentUser.id}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setUserInspirations(data)
      //   })
    } else {
      console.log('not deleted')
    }
  }

  async function handleDeleteInspo(e) {
    console.log('inpos delete running')
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
      <EditProfileForm
        clicked={clicked}
        showUserEditForm={showUserEditForm}
        handleCloseEditForm={handleCloseEditForm}
        userId={currentUser.id}
        updatedUserRefresh={updatedUserRefresh}
      />
      <div>
        <div
          className="container-1"
          style={{
            background: 'linear-gradient(#99EBE1, #37AEBE)',
            fontWeight: '500',
          }}
        >
          <div className="box-2" style={{ backgroundColor: '#2274A5' }}>
            <img
              className="avatar"
              src={currentUser.profile_pic}
              alt="user avatar"
            />
            <p>Username: {currentUser.username}</p>
            {/* I want to make this a <textarea></textarea> for bio instead of p tag*/}
            <p>Bio: {currentUser.bio}</p>
            <button
              value={currentUser.id}
              padding="5px"
              style={{ backgroundColor: '#36F1CD', margin: '5px' }}
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
            <button
              value={currentUser.id}
              style={{ backgroundColor: '#E0777D' }}
              onClick={handleDeleteConfirmation}
            >
              Delete Account
            </button>
            <br></br>
            <br></br>
            <button
              value="chords"
              style={{ backgroundColor: '#E0777D' }}
              onClick={showModalPopUp}
            >
              Add Chords
            </button>
            <br></br>
            <br></br>
            <button
              value="lyrics"
              style={{ backgroundColor: '#E0777D' }}
              onClick={showModalPopUp}
            >
              Add Lyrics
            </button>
            <br></br>
            <br></br>
            <button
              value="enigma"
              style={{ backgroundColor: '#E0777D' }}
              onClick={showModalPopUp}
            >
              Add Enigma
            </button>
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
                {userInspirations.map((inspiration, index) => (
                  <tr key={index}>
                    <td>{inspiration.title}</td>
                    <td>{inspiration.chord_return}</td>
                    <td>{inspiration.lyric_return}</td>
                    <td>{inspiration.enigma_return}</td>
                    {/* <OverlayTrigger
                      // className="position-fixed"
                      style={{ marginTop: '200px' }}
                      placement="left"
                      delay={{ show: 250, hide: 200 }}
                      overlay={renderTooltip}
                    > */}
                    <td>
                      <Button
                        value={inspiration.id}
                        style={{ marginTop: '5px', marginLeft: '15px' }}
                        onClick={handleDeleteConfirmation}
                      >
                        Delete
                      </Button>

                      <Button
                        value={inspiration.id}
                        style={{ marginTop: '15px', marginLeft: '15px' }}
                        onClick={handleShow}
                      >
                        Share
                      </Button>
                    </td>
                    {/* </OverlayTrigger> */}
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
          handleSongTitle={handleSongTitle}
          handleMusicLink={handleMusicLink}
          handleAboutSong={handleAboutSong}
        />
      </div>
    </>
  )
}
export default UserProfile
