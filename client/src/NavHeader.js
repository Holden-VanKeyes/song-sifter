import React from 'react'
import { useState } from 'react'
import { Nav, Navbar, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavHeader() {
  return (
    <div>
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
        </Nav>
        <Badge
          pill
          bg="info"
          style={{
            padding: '10px',
            textDecoration: 'none',
            color: '#99E1D9',
          }}
        ></Badge>
      </Navbar>
    </div>
  )
}
export default NavHeader
