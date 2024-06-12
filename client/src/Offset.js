import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
// show={showOffset} onHide={() => setShowOffset(false)}
export default function Offset({ showOffset, handleOffset }) {
  return (
    <>
      <Offcanvas show={showOffset} onHide={handleOffset}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Song Sifter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Song Sifter was created for musicians, producers, songwriters in need
          of a little creative spark! Hit up the create section to generate the
          following song-starters based on mood/style: A 4-chord progression, a
          lyric snippet, and an enigmatic expression. Insead of cycling through
          to find the perfect fit, we suggest you spend some time with the first
          recommendation as it may help you escape your songwriting crutches.
          You can also send us your own lyrics/chords/enigmas to add to our
          library of inspirations, and if you create something musical from your
          customized inspiration, we encourage you to share with the community
          via the Share page. Log in or Sign up to explore more!
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
