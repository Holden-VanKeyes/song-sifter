import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import { useEffect } from 'react'

export default function UserProfile() {
  useEffect(() => {
    fetch(`/inspirations?user_id=${3}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])
  return (
    <div id="profile">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" href="#">
                  Tab 1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" href="#">
                  Tab 2
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first"></Tab.Pane>
              <Tab.Pane eventKey="second">Peas and Carrots</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}
