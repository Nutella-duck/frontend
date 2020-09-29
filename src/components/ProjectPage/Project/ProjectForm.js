import React, { useState } from 'react';
import ProjectFooter from './ProjectFooter';
import {
  Modal,
  Button,
  Container,
  Col,
  Row,
  Nav,
  Navbar,
  Form,
  FormControl,
} from 'react-bootstrap';

const ProjectForm = ({
  projectName,
  onChange,
  onCreate,
  description,
  apiKey,
  getKey,
  handleSearch,
}) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShow2 = () => {
    getKey();
    setShow2(true);
  };

  const handleClose2 = () => {
    setShow2(false);
    setShow(false);
    onCreate();
  };

  return (
    <>
      <Navbar
        style={{ marginLeft: '16rem', marginRight: '16rem', padding: 'x0' }}
      >
        <Navbar.Brand style={{ fontWeight: 'bold', fontSize: '2rem' }}>
          Project
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={handleSearch}
              />
              <Button variant="dark" onClick={handleShow}>
                New Project
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container>
            <Col>
              <Modal.Title>New Project</Modal.Title>
            </Col>
            <Col>
              <p>Create a New Project</p>
            </Col>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <p>Project Name</p>
              </Col>
              <Col>
                <input
                  name="projectName"
                  onChange={onChange}
                  value={projectName}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Description</p>
              </Col>
              <Col>
                <input
                  name="description"
                  onChange={onChange}
                  value={description}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleShow2}>
            CREATE
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Container>
            <Col>
              <Modal.Title>New Project</Modal.Title>
            </Col>
            <Col>
              <p>New Project Created!</p>
            </Col>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Col>
              <p>Your API Key is</p>
            </Col>
            <Col>
              <p>{apiKey}</p>
            </Col>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            DONE
          </Button>
        </Modal.Footer>
      </Modal>
      <ProjectFooter></ProjectFooter>
    </>
  );
};

export default ProjectForm;
