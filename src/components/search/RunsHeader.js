import React, { useEffect, useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css';
import { useDispatch } from 'react-redux';
import * as Actions from '../../data/project/actions.js';
const RunsHeader = (id) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState();
  useEffect(() => {
    dispatch(Actions.getAllPorject(1));
  }, []);
  const handleSelect = (eventKey) => {
    console.log(eventKey);
    setSelect(eventKey);
  };

  return (
    <Navbar style={{ backgroundColor: 'white' }}>
      <Navbar.Brand href="/"></Navbar.Brand>

      <Nav
        className="topnav col-sm-9 justify-content-center"
        activeKey={select}
        style={{ fontWeight: 'bold' }}
        onSelect={handleSelect}
      >
        <p>r1</p>
        <Nav.Item>
          <Nav.Link eventKey="overview" href="/">
            OVERVIEW
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="runs" href={`/run/Matrixs/${id.id}`}>
            RUNS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="systems" href={`/run/system/${id.id}`}>
            SYSTEMS
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default RunsHeader;
