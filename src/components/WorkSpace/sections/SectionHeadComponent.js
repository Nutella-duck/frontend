import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
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
      <Navbar className="border-bottom border-grey">
        <Navbar.Brand style={{ fontWeight: "bold" }}>SECTIONS</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="primary" onClick={addSectionsOnclick}>
              NEW SECTION
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SectionHeadComponent;
