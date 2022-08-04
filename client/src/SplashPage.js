import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import { images } from './constants'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function SplashPage() {
  const [lyricHover, setLyricHover] = useState(false)
  const [enigmaHover, setEnigmaHover] = useState(false)
  const [chordHover, setChordHover] = useState(false)

  const handleLyricHover = () => {
    setLyricHover(true)
  }
  const handleLyricMouseOut = () => {
    setLyricHover(false)
  }

  const handleEnigmaHover = () => {
    setEnigmaHover(true)
  }
  const handleEnigmaMouseOut = () => {
    setEnigmaHover(false)
  }
  const handleChordHover = () => {
    setChordHover(true)
  }
  const handleChordMouseOut = () => {
    setChordHover(false)
  }

  return (
    <>
      <div
        // className="d-block w-auto h-auto"
        className="splash-page"
        style={{
          display: 'flex',

          alignItems: 'center',
          // justifyContent: 'space-between',
          height: '100vh',
          width: '100vw',
          margin: 'auto',
          paddingTop: '90px',
          paddingLeft: '5px',
          paddingRight: '5px',
        }}
      >
        <Row
          xs={3}
          md={3}
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            // border: 'solid 5px',
            // borderColor: 'black',

            // height: '100vh',
            // width: '100vw',
            margin: 'auto',
            // marginBottom: '0',
            // paddingTop: '90px',
          }}
        >
          <Col>
            <div className="splash-boxes">
              <Image
                onMouseOver={handleLyricHover}
                onMouseOut={handleLyricMouseOut}
                src={images.Lyric}
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: lyricHover ? '50%' : '100%',
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="splash-boxes">
              <Image
                onMouseOver={handleEnigmaHover}
                onMouseOut={handleEnigmaMouseOut}
                src={images.Enigma}
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: enigmaHover ? '50%' : '100%',
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="splash-boxes">
              <Image
                onMouseOver={handleChordHover}
                onMouseOut={handleChordMouseOut}
                src={images.Chord}
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: chordHover ? '50%' : '100%',
                }}
              />
            </div>
          </Col>
        </Row>
        {/* <Row
          xs={1}
          md={3}
          style={{
            justifyContent: 'center',
            marginTop: '0px',
          }}
        >
          <Col></Col>
          <Col>
            <Image
              src={images.Stamp}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
              }}
            />
          </Col>
          <Col></Col>
        </Row> */}
      </div>
    </>
  )
}
export default SplashPage
// Build a song around the suggested 4-chord progression based on
//                 mood

//                 Ruminations on production, recording, arrangment, and melodic
//                 ideas

//                 >Words to jumpstart the writing process</p>
