import React from 'react'
import { useEffect, useState } from 'react'

function FilterHelper({
  filteredSearch,
  filteredType,
  updateSharePage,
  showFilteredPage,
}) {
  //   const [showShared, setShowShared] = useState([])
  //   useEffect(() => {
  //     fetch('/creations')
  //       .then((response) => response.json())
  //       .then((data) => setShowShared(data))
  //   }, [])
  //   console.log(showFilteredPage)

  //   const usersWhoShared = showFilteredPage.map((c) => c.user_id)
  //   const usersWhoSharedIds = [...new Set(usersWhoShared)]

  //getting all IDs from all inspirations that have been shared
  const sharedCreationInspos = showFilteredPage
    .flatMap((obj) => obj.inspirations)
    .map((i) => i.id)
  const sharedInsposNoDup = [...new Set(sharedCreationInspos)]

  if (filteredType === 'lyrics') {
    //should I be fetching Inpos.where(lyric_snippet.category === filteredSearch)??
    //fetch all that match selected category
    fetch(`/filtered_lyrics?category=${filteredSearch}`)
      .then((response) => response.json())
      .then((data) => {
        handleGetIds(data)
        // console.log(data)
        // console.log(sharedInsposNoDup)
      })
  } else {
    if (filteredType === 'enigmas') {
      //fetch all that match selected category
      fetch(`/filtered_enigmas?category=${filteredSearch}`)
        .then((response) => response.json())
        .then((data) => {
          handleGetIds(data)
        })
    } else {
      if (filteredType === 'chords') {
        //fetch all that match selected category
        fetch(`/filtered_chords?category=${filteredSearch}`)
          .then((response) => response.json())
          .then((data) => {
            handleGetIds(data)
          })
      } else {
        if (filteredType === '') {
          return ''
        }
      }
    }
  }

  function handleGetIds(data) {
    //mapping for the IDs of all inspirations that match the category
    const ids = data.flatMap((obj) => obj.inspirations).map((e) => e.id)
    const uniqueIdArr = [...new Set(ids)]

    handleComparison(uniqueIdArr)
  }

  function handleComparison(uniqueIdArr) {
    const filteredArr = uniqueIdArr.filter((id) =>
      sharedInsposNoDup.includes(id)
    )

    // const filteredPage = showFilteredPage
    //   .flatMap((obj) => obj.inspirations)
    //   .map((i) => {
    //     if (filteredArr.includes(i.id)) {
    //       return i.user_id
    //     } else {
    //       return null
    //     }
    //   })
    const filteredPage = showFilteredPage.filter((obj) =>
      filteredArr.includes(obj.inspiration_id)
    )

    // console.log(filteredPage)
    // const filteredSet = [...new Set(filteredPage)].filter((obj) => obj !== null)
    // console.log(filteredSet)

    // const filteredUsers = showFilteredPage.map((c) => {
    //   if (filteredSet.includes(c.user_id)) {
    //     // console.log(c)
    //     return c
    //   } else {
    //     return null
    //   }
    // })
    // console.log(filteredUsers)
    // const filteredCreationsNoNull = filteredUsers.filter(
    //   (creation) => creation !== null
    // )
    updateSharePage(filteredPage)
  }

  return <div></div>
}

export default FilterHelper
