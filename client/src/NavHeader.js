import React from 'react'
import { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function NavHeader({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <div>
      <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar py-4">
        <Navbar.Brand className="nav-link">Song Sifter</Navbar.Brand>
        {/* <Navbar.Form pullRight>
        </Navbar.Form> */}
        {/* <Button bsStyle="primary">Login</Button> */}

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
        </Nav>
        {isLoggedIn ? (
          <Nav>
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
          </Nav>
        ) : (
          <Nav>
            <Button
              onClick={handleNavigate}
              size="sm"
              bg="3E885B"
              id="pill"
              style={{
                padding: '10px',
                textDecoration: 'none',
                color: 'white',
              }}
            >
              LOG IN
            </Button>
          </Nav>
        )}
      </Navbar>
    </div>
  )
}
export default NavHeader
