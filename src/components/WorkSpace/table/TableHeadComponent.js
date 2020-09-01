import React from "react";

import { useSelector } from "react-redux";
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
  BsGear,
} from "react-icons/bs";

const TableHeadComponent = () => {
  let search = "";
  const numberOfIndex = useSelector((state) => state.model.index);

  return (
    <>
      <Navbar bg="light" variant="light" style={{ borderRadius: "0.7rem" }}>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          {numberOfIndex} Runs
        </Navbar.Brand>
        <Form inline>
          <Button variant="light">
            <BsGear />
          </Button>
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
    </>
  );
};

export default TableHeadComponent;
