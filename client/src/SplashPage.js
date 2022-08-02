import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function SplashPage() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <>
      <div id="carousel">
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-75"
              src="https://res.cloudinary.com/shooksounds/image/upload/v1658846648/Song%20Sifter/SongSifterLyric_dpnd6k.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Lyric Snippets</h3>
              <p>Words to jumpstart the writing process</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75"
              src="https://res.cloudinary.com/shooksounds/image/upload/v1658846974/Song%20Sifter/SongSifterEnigmasWNotes_gwghgz.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Enigmas</h3>
              <p>
                Ruminations on production, recording, arrangment, and melodic
                ideas
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75"
              src="https://res.cloudinary.com/shooksounds/image/upload/v1658846939/Song%20Sifter/SongSifterChordsmaller_f3qsel.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Chords</h3>
              <p>
                Build a song around the suggested 4-chord progression based on
                mood
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
export default SplashPage
