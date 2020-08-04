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
      <Navbar.Brand href="#home">5 Runs</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <Nav className="mr-auto">
        <ButtonGroup aria-label="Basic example">
          <Button variant="light">
            <BsFunnel style={{ marginRight: "1rem" }} />
            Filter
          </Button>
          <Button variant="light">
            <BsFillGridFill style={{ marginRight: "1rem" }} />
            Group
          </Button>
          <Button variant="light">
            <BsArrowUpDown style={{ marginRight: "1rem" }} />
            Sort
          </Button>
          <Button variant="light">
            <BsColumnsGap style={{ marginRight: "1rem" }} />
            Columns
          </Button>
        </ButtonGroup>
      </Nav>
    </Navbar>
  );
};

export default TableHeadComponent;
