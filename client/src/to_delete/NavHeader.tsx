// import React from 'react'
// import { useState } from 'react'
// import { Nav, Navbar } from 'react-bootstrap'
// import { Link, useLocation } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Modal from 'react-bootstrap/Modal'

// // import {
// //   enigmaCategories,
// //   lyricCategories,
// //   chordCategories,
// //   categoriesByName,
// // } from '../constants/constants'

// import CategorySelector from '../CategorySelector'
// import AddYourOwnModal from '../AddYourOwnModal'

// interface NavHeaderProps {
//   isLoggedIn?: boolean
//   handleLogout?: boolean
//   handleSearch?: any
//   resetFunction?: any
//   userAddSelection?: any
//   showAddYourOwnForm?: any
//   handleCloseModal?: any
//   currentUser?: any
//   showLoginInfo?: any
//   handleOffset?: any
// }

// function NavHeader({
//   isLoggedIn,
//   handleLogout,
//   handleSearch,
//   resetFunction,
//   userAddSelection,
//   showAddYourOwnForm,
//   handleCloseModal,
//   currentUser,
//   showLoginInfo,
//   handleOffset,
// }: NavHeaderProps) {
//   const [selection, setSelection] = useState('')
//   const [show, setShow] = useState(false)
//   const [openLoginModal, setOpenLoginModal] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [showCategories, setShowCategories] = useState([])

//   const location = useLocation()

//   const handleClose = () => {
//     setSelection('')
//     setShow(false)
//   }

//   const loginModal = (
//     <div style={{ display: 'block', position: 'initial' }}>
//       <Modal show={openLoginModal} onHide={() => setOpenLoginModal(false)}>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Modal.Title style={{ paddingLeft: '10px', paddingTop: '10px' }}>
//             {isSignUp ? <p>Sign Up</p> : <p> Log In</p>}
//           </Modal.Title>
//           <Modal.Header closeButton />
//         </div>

//         <Modal.Footer>
//           <Button
//             variant={isSignUp ? 'primary' : 'outline-primary'}
//             disabled={isSignUp ? false : true}
//             onClick={() => {
//               setIsSignUp(false)
//             }}
//           >
//             Login
//           </Button>
//           <Button
//             variant={isSignUp ? 'outline-primary' : 'primary'}
//             disabled={isSignUp ? true : false}
//             onClick={() => {
//               setIsSignUp(true)
//             }}
//           >
//             Sign Up
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )

//   if (isLoggedIn) {
//     return (
//       <div>
//         <AddYourOwnModal
//           chords={chordCategories}
//           lyrics={lyricCategories}
//           enigmas={enigmaCategories}
//           userAddSelection={userAddSelection}
//           showModal={showAddYourOwnForm}
//           handleCloseModal={handleCloseModal}
//           currentUser={currentUser}
//         />
//         <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar p-4">
//           <Navbar.Brand className="nav-link">Song Sifter</Navbar.Brand>

//           <Nav>
//             <Link
//               to="/"
//               style={{
//                 padding: '10px',
//                 textDecoration: 'none',
//                 color: '#99E1D9',
//               }}
//             >
//               Home
//             </Link>

//             <Link
//               to="/SongSifterCreate"
//               style={{
//                 padding: '10px',
//                 textDecoration: 'none',
//                 color: '#99E1D9',
//               }}
//             >
//               Create
//             </Link>
//             <Link
//               to="/UserProfile"
//               style={{
//                 padding: '10px',
//                 textDecoration: 'none',
//                 color: '#99E1D9',
//               }}
//             >
//               Profile
//             </Link>
//             <Link
//               to="/ShareCreation"
//               style={{
//                 padding: '10px',
//                 textDecoration: 'none',
//                 color: '#99E1D9',
//               }}
//             >
//               Share
//             </Link>

//             {location.pathname === '/ShareCreation' &&
//             currentUser.username !== '' ? (
//               <NavDropdown
//                 // value={selection}
//                 // onSelect={handleDropdown}
//                 title="Filter By Category"
//                 id="basic-nav-dropdown"
//                 style={{
//                   padding: '10px',
//                   textDecoration: 'none',
//                   color: '#99E1D9',
//                 }}
//               >
//                 <NavDropdown.Item eventKey="All">Show All</NavDropdown.Item>
//                 <NavDropdown.Item eventKey="Enigmas">Enigmas</NavDropdown.Item>
//                 <NavDropdown.Item eventKey="Lyrics">Lyrics</NavDropdown.Item>
//                 <NavDropdown.Item eventKey="Chords">Chords</NavDropdown.Item>
//               </NavDropdown>
//             ) : null}
//           </Nav>
//           {isLoggedIn ? (
//             <div className="nav-user">
//               <Nav>
//                 <Navbar.Collapse className="justify-content-end">
//                   {/* <Button
//                     onClick={handleLogout}
//                     size="sm"
//                     bg="3E885B"
//                     id="pill"
//                     style={{
//                       padding: '10px',
//                       textDecoration: 'none',
//                       color: 'white',
//                     }}
//                   >
//                     LOGOUT
//                   </Button> */}
//                 </Navbar.Collapse>
//               </Nav>
//             </div>
//           ) : null}
//         </Navbar>
//         {show ? (
//           <CategorySelector
//             selection={selection}
//             show={show}
//             handleClose={handleClose}
//             showCategories={showCategories}
//             handleSearch={handleSearch}
//           />
//         ) : null}
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar p-4">
//           <Navbar.Brand className="nav-link">Song Sifter</Navbar.Brand>
//           <Nav>
//             <div style={{ display: 'flex', gap: '10px' }}>
//               <Button
//                 onClick={handleOffset}
//                 size="sm"
//                 // bg="3E885B"
//                 style={{
//                   color: 'white',
//                   borderRadius: '8px',
//                   backgroundColor: '#17BEBB',
//                 }}
//               >
//                 About
//               </Button>
//               <Button
//                 // onClick={showLoginInfo}
//                 onClick={() => setOpenLoginModal(!openLoginModal)}
//                 size="sm"
//                 // bg="3E885B"
//                 style={{
//                   color: 'white',
//                   borderRadius: '8px',
//                   backgroundColor: '#17BEBB',
//                 }}
//               >
//                 Get Started
//               </Button>
//             </div>
//           </Nav>
//         </Navbar>
//         {loginModal}
//       </div>
//     )
//   }
// }
// export default NavHeader
