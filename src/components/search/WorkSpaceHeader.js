import React, { useEffect } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css';
import { useDispatch } from 'react-redux';
import * as Actions from '../../data/project/actions.js';
const RunsHeader = ({ runName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getAllPorject(1));
  }, []);

  return (
    <Navbar style={{ backgroundColor: 'white' }}>
      <Navbar.Brand href="/"></Navbar.Brand>

      <Nav
        className="topnav col-sm-9 justify-content-center"
        activeKey="/workspace"
        style={{ fontWeight: 'bold' }}
      >
        <p>{runName}</p>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/home">
            OVERVIEW
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/workspace">RUNS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/chart">CHARTS</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default RunsHeader;
