import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { images } from './constants'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'

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
            <Figure
              className="position-relative"
              style={{ border: 'solid 5px', borderColor: 'black' }}
            >
              <FigureImage
                alt="singing"
                onMouseOver={handleLyricHover}
                onMouseOut={handleLyricMouseOut}
                src={images.Lyric}
                style={{
                  margin: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',

                  opacity: lyricHover ? '50%' : '100%',
                }}
              />
              {lyricHover ? (
                <FigureCaption
                  className="figure-caption"
                  style={{ fontSize: 'large', fontWeight: 'bolder' }}
                >
                  <h2 style={{ textDecoration: 'underline' }}>
                    LYRIC SNIPPETS
                  </h2>
                  Lyrical ideas contributed by other artists snippets based on
                  mood to help jumpstart your writing process
                </FigureCaption>
              ) : null}
            </Figure>
          </Col>
          <Col>
            <Figure
              className="position-relative"
              style={{ border: 'solid 5px', borderColor: 'black' }}
            >
              <FigureImage
                onMouseOver={handleEnigmaHover}
                onMouseOut={handleEnigmaMouseOut}
                src={images.Enigma}
                style={{
                  margin: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: enigmaHover ? '50%' : '100%',
                }}
              />
              {enigmaHover ? (
                <FigureCaption
                  className="figure-caption"
                  style={{ fontSize: 'large', fontWeight: 'bolder' }}
                >
                  <h2 style={{ textDecoration: 'underline' }}>ENIGMAS</h2>
                  Ruminations on production, recording, arrangment, and melodic
                  ideas to help you think outside the musical box
                </FigureCaption>
              ) : null}
            </Figure>
          </Col>
          <Col>
            <Figure
              className="position-relative"
              style={{ border: 'solid 5px', borderColor: 'black' }}
            >
              <FigureImage
                onMouseOver={handleChordHover}
                onMouseOut={handleChordMouseOut}
                src={images.Chord}
                style={{
                  margin: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: chordHover ? '50%' : '100%',
                }}
              />
              {chordHover ? (
                <FigureCaption
                  className="figure-caption"
                  style={{ fontSize: 'large', fontWeight: 'bolder' }}
                >
                  <h2 style={{ textDecoration: 'underline' }}>
                    CHORD PROGRESSIONS
                  </h2>
                  Build a song around the suggested 4-chord progression based on
                  category type
                </FigureCaption>
              ) : null}
            </Figure>
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
