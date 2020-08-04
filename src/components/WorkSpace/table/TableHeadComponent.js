import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import {
  BsFunnel,
  BsFillGridFill,
  BsArrowUpDown,
  BsColumnsGap,
} from "react-icons/bs";

const TableHeadComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Runs</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <Nav className="mr-auto">
        <ButtonGroup aria-label="Basic example">
          <Button variant="light">
            <BsFunnel />
            Filter
          </Button>
          <Button variant="light">
            <BsFillGridFill />
            Group
          </Button>
          <Button variant="light">
            <BsArrowUpDown />
            Sort
          </Button>
          <Button variant="light">
            <BsColumnsGap />
            Columns
          </Button>
        </ButtonGroup>
      </Nav>
    </Navbar>
  );
};

export default TableHeadComponent;
