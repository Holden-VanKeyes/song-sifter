import React from 'react'
import { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
  enigmaCategories,
  lyricCategories,
  chordCategories,
  categoriesByName,
} from './constants'

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
  showLoginInfo,
}) {
  const [selection, setSelection] = useState('')
  const [show, setShow] = useState(false)

  const [showCategories, setShowCategories] = useState([])

  const location = useLocation()

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
    } else {
      setShowCategories(categoriesByName[e])
    }
  }
  if (isLoggedIn) {
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
        <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar p-4">
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

            {location.pathname === '/ShareCreation' &&
            currentUser.username !== '' ? (
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
            <div className="nav-user">
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
  } else {
    return (
      <div>
        <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar p-4">
          <Navbar.Brand className="nav-link">Song Sifter</Navbar.Brand>

          <Button
            onClick={showLoginInfo}
            size="sm"
            bg="3E885B"
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: 'white',
              borderRadius: '16px',
              marginLeft: '50px',
              backgroundColor: '#17BEBB',
              flexWrap: 'wrap',
            }}
          >
            Get Started
          </Button>
        </Navbar>
      </div>
    )
  }
}
export default NavHeader
