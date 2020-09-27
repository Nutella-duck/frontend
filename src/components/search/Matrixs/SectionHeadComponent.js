import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Button,
  Form,
  Modal,
  NavDropdown,
  Container,
  Col,
} from 'react-bootstrap';
import { BsGear } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../store/actions';

const SectionHeadComponent = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.section.cards);
  const addSectionsOnclick = () => {
    let len = cards.length;
    cards.push(len + 1);
    dispatch(Actions.fectchCardData(cards));
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar
        style={{
          marginTop: '3rem',
          backgroundColor: 'white',
          marginLeft: '2rem',
          marginRight: '2rem',
          borderRadius: '0.7rem',
        }}
      >
        <Form inline>
          <Navbar.Brand style={{ fontWeight: 'bold' }}>SECTIONS</Navbar.Brand>
          <Button variant="light">
            <BsGear />
          </Button>
        </Form>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="dark" onClick={handleShow}>
              NEW SECTION
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container>
            <Col>
              <Modal.Title>New Chart</Modal.Title>
            </Col>
            <Col>
              <p>Select the Indicator for Xais</p>
            </Col>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <p>Select the Indicator for Xais</p>

          <NavDropdown title={cards[0]} id="nav-dropdown">
            {cards.map((v, index) => (
              <NavDropdown.Item key={index}>{v[index]}</NavDropdown.Item>
            ))}
          </NavDropdown>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleShow2}>
            CREATE
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default SectionHeadComponent;
