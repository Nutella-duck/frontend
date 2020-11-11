import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Display, GraphUp, Table } from 'react-bootstrap-icons';
import { Nav, Tabs, Tab, Sonnet } from 'react-bootstrap';
import './sideMenu.css';
const SideMenu = () => {
  //   function ControlledTabs() {
  //     const [key, setKey] = useState('home');

  //     return (
  //       <Tabs
  //         id="controlled-tab-example"
  //         activeKey={key}
  //         onSelect={(k) => setKey(k)}
  //       >
  //         <Tab eventKey="home" title="Home"></Tab>
  //         <Tab eventKey="profile" title="Profile"></Tab>
  //         <Tab eventKey="contact" title="Contact" disabled></Tab>
  //       </Tabs>
  //     );
  //   }
  return (
    <>
      <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">
          <div
            style={{
              justifyContent: 'space-around',
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <Display />
            <div>OVERVIEW</div>
          </div>
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <GraphUp />
            <div>CHARTS</div>
          </div>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Table />
            <div>RUNS</div>
          </div>
        </Nav.Link>
      </Nav>
    </>
  );
};
export default SideMenu;
