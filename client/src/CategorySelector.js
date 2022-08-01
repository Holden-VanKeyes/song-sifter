import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function CategorySelector({
  show,
  selection,
  handleClose,
  showCategories,
  handleSearch,
}) {
  const [filterSelect, setFilterSelect] = useState('')
  // const [filteredCategory, setFilteredCategory] = useState('')
  const [categoryType, setCategoryType] = useState('')
  const [filteredSelections, setFilteredSelections] = useState('')

  function handleSelection(e) {
    setFilterSelect(e.target.value)
    setCategoryType(e.target.title)

    const selectionObj = {
      type: e.target.title,
      category: e.target.value,
    }

    setFilteredSelections(selectionObj)
  }

  function handleFilter() {
    const selectedType = categoryType
    const selectedCategory = filterSelect
    setFilterSelect('')
    setCategoryType('')
    handleSearch(selectedCategory, selectedType)
    handleClose()
  }

  return (
    <div className="container-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selection}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            variant="primary"
            // title="Chords"
            onChange={handleSelection}
            value={filterSelect}
            title={showCategories.name}
          >
            <option disabled={true} value="">
              select category
            </option>
            <option value={showCategories.cat1}>{showCategories.cat1}</option>
            <option value={showCategories.cat2}>{showCategories.cat2}</option>
            <option value={showCategories.cat3}>{showCategories.cat3}</option>
            {showCategories.cat4 === null ? null : (
              <option value={showCategories.cat4}>{showCategories.cat4}</option>
            )}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFilter}>
            Filter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CategorySelector
