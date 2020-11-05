import React, { Component } from "react";
import "./ProjectItem.css";
import { Card, Badge, Form, Button, Table } from "react-bootstrap";
import {Link} from "react-router-dom"
import { BsGear } from "react-icons/bs";
class ProjectItem extends Component {
  render() {
    const {
      name,
      description,
      userNumber,
      runsNumber,
      hoursNumber,
      id,
      privacy
    } = this.props;

    return (
      <div>
        <Link to = {`/workspace/${id}`}>
          <Card className="card">
            <Card.Body>
              <Form inline>
                <Card.Title className="title">{name}</Card.Title>

                <Badge className="badge">{privacy ? <p>privacy</p> : <p>public</p>}</Badge>
                <Button variant="light" className="ml-auto">
                  <BsGear />
                </Button>
              </Form>
              <Card.Text>{description ? description : "non description"}</Card.Text>

              <Table
                borderless
                style={{ color: "#8a8a8a", borderTop: "0.06rem solid #ededed" }}
              >
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th style={{ borderRight: "0.06rem solid #ededed" }}>
                      {userNumber} user
                    </th>
                    <th style={{ borderRight: "0.06rem solid #ededed" }}>
                      {runsNumber} runs
                    </th>
                    <th> {hoursNumber} hours</th>
                  </tr>
                </thead>
              </Table>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}

export default ProjectItem;
