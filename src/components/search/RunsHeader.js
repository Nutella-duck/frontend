import React, { useEffect, useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css';
import { useDispatch } from 'react-redux';
import * as Actions from '../../data/project/actions.js';
const RunsHeader = (param) => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState(param.navId);
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
          <Nav.Link eventKey="1" href="/">
            OVERVIEW
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href={`/run/Matrixs/${param.id}`}>
            RUNS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" href={`/run/system/${param.id}`}>
            SYSTEMS
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default RunsHeader;
