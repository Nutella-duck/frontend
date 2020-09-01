import React, { Component } from "react";
import "./TeamItem.css";
import { Card, Table } from "react-bootstrap";

class TeamItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { name, id } = this.props;

    return (
      <div>
        <Card className="card">
          <Card.Body>
            <Card.Title className="title">{name}</Card.Title>

            <Card.Text>{id}</Card.Text>

            <Table
              borderless
              style={{ color: "#8a8a8a", borderTop: " 0.06rem solid #ededed" }}
            >
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th style={{ borderRight: "0.06rem solid #ededed" }}>
                    2 user
                  </th>
                  <th style={{ borderRight: "0.06rem solid #ededed" }}>
                    3 Projects
                  </th>
                  <th>3 hours ago</th>
                </tr>
              </thead>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TeamItem;
