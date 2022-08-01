import React from 'react'
import { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

import CategorySelector from './CategorySelector'
import AddYourOwnModal from './AddYourOwnModal'

function NavHeader({
  isLoggedIn,
  handleLogout,
  handleSearch,
  resetFunction,
  userAddSelection,
  showAddYourOwnForm,
  handleCloseModal,
  currentUser,
}) {
  const [selection, setSelection] = useState('')
  const [show, setShow] = useState(false)
  const [showCategories, setShowCategories] = useState([])

  const location = useLocation()

  const enigmaCategories = {
    name: 'enigmas',
    cat1: 'on production/arrangement',
    cat2: 'on melodic/harmonic/tonal elements',
    cat3: 'random',
    cat4: null,
  }

  const lyricCategories = {
    name: 'lyrics',
    cat1: 'observational - worldly - nomadic',
    cat2: 'hopeful - elevated - serene',
    cat3: 'boozy - despondent - lovelorn',
    cat4: 'abstract - esoteric - uneven',
  }
  const chordCategories = {
    name: 'chords',
    cat1: 'uplifting - ebulient - lighthearted',
    cat2: 'brooding - dark - mysterious',
    cat3: 'angular - odd - atmospheric',
    cat4: null,
  }

  const handleClose = () => {
    setSelection('')
    setShow(false)
  }

  const handleDropdown = (e) => {
    setSelection(e)
    setShow(true)
    if (e === 'All') {
      handleClose()
      resetFunction()
    } else if (e === 'Enigmas') {
      setShowCategories(enigmaCategories)
    } else if (e === 'Lyrics') {
      setShowCategories(lyricCategories)
    } else if (e === 'Chords') {
      setShowCategories(chordCategories)
    } else return null
  }

  return (
    <div>
      <AddYourOwnModal
        chords={chordCategories}
        lyrics={lyricCategories}
        enigmas={enigmaCategories}
        userAddSelection={userAddSelection}
        showModal={showAddYourOwnForm}
        handleCloseModal={handleCloseModal}
        currentUser={currentUser}
      />
      <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar py-4">
        <Navbar.Brand className="nav-link">Song Sifter</Navbar.Brand>

        <Nav>
          <Link
            to="/"
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: '#99E1D9',
            }}
          >
            Home
          </Link>

          <Link
            to="/SongSifterCreate"
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: '#99E1D9',
            }}
          >
            Create
          </Link>
          <Link
            to="/UserProfile"
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: '#99E1D9',
            }}
          >
            Profile
          </Link>
          <Link
            to="/ShareCreation"
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: '#99E1D9',
            }}
          >
            Share
          </Link>

          {location.pathname === '/ShareCreation' ? (
            <NavDropdown
              value={selection}
              onSelect={handleDropdown}
              title="Filter By Category"
              id="basic-nav-dropdown"
              style={{
                padding: '10px',
                textDecoration: 'none',
                color: '#99E1D9',
              }}
            >
              <NavDropdown.Item eventKey="All">Show All</NavDropdown.Item>
              <NavDropdown.Item eventKey="Enigmas">Enigmas</NavDropdown.Item>
              <NavDropdown.Item eventKey="Lyrics">Lyrics</NavDropdown.Item>
              <NavDropdown.Item eventKey="Chords">Chords</NavDropdown.Item>
            </NavDropdown>
          ) : null}
        </Nav>
        {isLoggedIn ? (
          <div>
            <Nav>
              <Navbar.Collapse className="justify-content-end">
                <Button
                  onClick={handleLogout}
                  size="sm"
                  bg="3E885B"
                  id="pill"
                  style={{
                    padding: '10px',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  LOGOUT
                </Button>
              </Navbar.Collapse>
            </Nav>
          </div>
        ) : null}
      </Navbar>
      {show ? (
        <CategorySelector
          selection={selection}
          show={show}
          handleClose={handleClose}
          showCategories={showCategories}
          handleSearch={handleSearch}
        />
      ) : null}
    </div>
  )
}
export default NavHeader
