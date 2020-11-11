import React, { useState, useEffect } from 'react';
import './page.css';
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
  Table,
} from 'react-bootstrap';

const User = () => {
  return (
    <>
      <div className="d">
        <h3 style={{ boader: '3px solid red' }}>hpo1</h3>
        <div>discription part</div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default User;
