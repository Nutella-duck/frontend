import React, {useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Modal,
  Col,
  Container,
  Row,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  SplitButton
} from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import * as Actions from '../../data/hpo/actions.js';
import * as Selectors from '../../data/hpo/selectors.js';
import Label from './labelSeries.js'
import HPOGraph from '../HPOSpace/graph.js';
import Parallel2 from './tickValue.js'
import { useParams } from 'react-router-dom';

const HPOSpace=()=>{

  return (
    <>
  <div>
    <DropdownButton
      as={ButtonGroup}
      menuAlign={{ lg: 'right' }}
      title="Left-aligned but right aligned when large screen"
      id="dropdown-menu-align-responsive-1"
    >
      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    </DropdownButton>
  </div>
  <div className="mt-2">
    <SplitButton
      menuAlign={{ lg: 'left' }}
      title="Right-aligned but left aligned when large screen"
      id="dropdown-menu-align-responsive-2"
    >
      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    </SplitButton>

  </div>
  <Dropdown>
  <Dropdown.Menu show>
  <Dropdown.Header>Dropdown header</Dropdown.Header>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
</Dropdown.Menu>
  </Dropdown>
</>
  );
};

export default HPOSpace;
