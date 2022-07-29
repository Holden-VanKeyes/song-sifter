import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
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

  function handleSelection(e) {
    setFilterSelect(e.target.value)
    setCategoryType(e.target.title)
  }

  function handleFilter() {
    // setFilteredCategory(filterSelect)
    handleSearch(filterSelect, categoryType)
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
