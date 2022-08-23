import React from 'react'

function FilterHelper({
  filteredSearch,
  filteredType,
  updateSharePage,
  showFilteredPage,
}) {
  //getting all IDs from all inspirations that have been shared
  const sharedCreationInspos = showFilteredPage
    .flatMap((obj) => obj.inspirations)
    .map((i) => i.id)
  const sharedInsposNoDup = [...new Set(sharedCreationInspos)]

  //fetch all that match selected category
  if (filteredType === 'lyrics') {
    fetch(`/filtered_lyrics?category=${filteredSearch}`)
      .then((response) => response.json())
      .then((data) => {
        handleGetIds(data)
      })
  } else {
    if (filteredType === 'enigmas') {
      fetch(`/filtered_enigmas?category=${filteredSearch}`)
        .then((response) => response.json())
        .then((data) => {
          handleGetIds(data)
        })
    } else {
      if (filteredType === 'chords') {
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

    const filteredPage = showFilteredPage.filter((obj) =>
      filteredArr.includes(obj.inspiration_id)
    )

    updateSharePage(filteredPage)
  }

  return <div></div>
}

export default FilterHelper
