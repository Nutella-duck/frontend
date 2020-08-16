import React from "react";
import { Navbar, Nav, Button,Form } from "react-bootstrap";
import {BsGear} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../store/actions";

const SectionHeadComponent = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.section.cards);
  const addSectionsOnclick = () => {
    let len = cards.length;
    cards.push(len + 1);
    dispatch(Actions.fectchCardData(cards));
    console.log(cards);
  };

  return (
    <div>
      <Navbar  style={{marginTop:"3rem" , backgroundColor:"white",marginLeft:"2rem",marginRight:"2rem",borderRadius:"0.7rem"}} >
        <Form inline>
        <Navbar.Brand style={{ fontWeight: "bold" }} >SECTIONS</Navbar.Brand>
        <Button variant="light"><BsGear/></Button>
        </Form>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="dark" onClick={addSectionsOnclick}>
              NEW SECTION
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SectionHeadComponent;
