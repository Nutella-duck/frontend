import React from 'react';
import { Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap';
import { BsGear } from 'react-icons/bs';
import Graph from './Graph';
import { useSelector } from 'react-redux';
import 'react-vis/dist/style.css';

const ItemHead = () => {
  return (
    <>
      <Navbar
        style={{
          marginTop: '2rem',
          backgroundColor: 'white',
          marginLeft: '2rem',
          marginRight: '2rem',
          borderTopRightRadius: '0.7rem',
          borderTopLeftRadius: '0.7rem',
        }}
      >
        <Navbar.Brand style={{ fontWeight: 'bold' }}>CHARTS</Navbar.Brand>
        <Button variant="light">
          <BsGear />
        </Button>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="dark">NEW PANEL</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const SectionsComponents = ({ models, graph }) => {
  console.log('차트 2렌더링 중...');
  const cards = useSelector((state) => state.cards.chartCardsName);

  console.log('차트 그래프', graph, graph[0]);
  return (
    <div style={{ borderRadius: '0.7rem' }}>
      <ItemHead></ItemHead>
      <Row
        style={{
          marginLeft: '2rem',
          marginRight: '2rem',
          backgroundColor: 'white',
          borderBottomLeftRadius: '0.7rem',
          borderBottomRightRadius: '0.7rem',
        }}
      >
        {cards.map((card, index) => (
          <Col
            key={index}
            sm={4}
            style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
          >
            <Card
              style={{ height: '20rem', width: 'auto', borderColor: 'white' }}
            >
              <h5>{card}</h5>
              <Graph index={index} models={models} graph={graph[index]} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SectionsComponents;
