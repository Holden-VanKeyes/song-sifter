import React from 'react'
import { useEffect, useState } from 'react'

function FilterHelper({ filteredSearch, filteredType, updateSharePage }) {
  const [showShared, setShowShared] = useState([])
  useEffect(() => {
    fetch('/creations')
      .then((response) => response.json())
      .then((data) => setShowShared(data))
    console.log('FilterHelper')
  }, [])

  console.log(filteredType)

  const usersWhoShared = showShared.map((c) => c.user_id)
  const usersWhoSharedIds = [...new Set(usersWhoShared)]

  //   if (filteredType === '') {
  //     return null
  //   } else if (filteredType === 'lyrics') {
  //     fetch(`/filtered_lyrics?category=${filteredSearch}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         handleGetIds(data)
  //         // handleComparison(data)
  //       })
  //   } else {
  //     if (filteredType === 'enigmas') {
  //       fetch(`/filtered_enigmas?category=${filteredSearch}`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           handleGetIds(data)
  //           // handleComparison(data)
  //         })
  //     } else {
  //       if (filteredType === 'chords') {
  //         fetch(`/filtered_chords?category=${filteredSearch}`)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             handleGetIds(data)
  //             // handleComparison(data)
  //           })
  //       }
  //     }
  //   }

  if (filteredType === 'lyrics') {
    fetch(`/filtered_lyrics?category=${filteredSearch}`)
      .then((response) => response.json())
      .then((data) => {
        handleGetIds(data)
        // handleComparison(data)
      })
  } else {
    if (filteredType === 'enigmas') {
      fetch(`/filtered_enigmas?category=${filteredSearch}`)
        .then((response) => response.json())
        .then((data) => {
          handleGetIds(data)
          // handleComparison(data)
        })
    } else {
      if (filteredType === 'chords') {
        fetch(`/filtered_chords?category=${filteredSearch}`)
          .then((response) => response.json())
          .then((data) => {
            handleGetIds(data)
            // handleComparison(data)
          })
      } else {
        if (filteredType === '') {
          return ''
        }
      }
    }
  }

  function handleGetIds(data) {
    const ids = data.flatMap((obj) => obj.inspirations).map((e) => e.user_id)
    const uniqueIdArr = [...new Set(ids)]
    handleComparison(uniqueIdArr)
  }

  function handleComparison(uniqueIdArr) {
    const filteredArr = uniqueIdArr.filter((id) =>
      usersWhoSharedIds.includes(id)
    )

    const filteredPage = showShared.map((c) => {
      if (filteredArr.includes(c.user_id)) {
        return c
      } else {
        return null
      }
    })
    const filteredSet = [...new Set(filteredPage)].filter((obj) => obj !== null)
    updateSharePage(filteredSet)
  }

  return <div></div>
}

export default FilterHelper
