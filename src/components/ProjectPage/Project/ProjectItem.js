import React, { Component } from 'react';
import './ProjectItem.css';
import { Card,Badge,Form, Button,Table} from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import {
  BsGear
} from "react-icons/bs";
class ProjectItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    //const { name,users,runs,created,explanation,open ,id} = this.props;
    const { name,id} = this.props;
   

    
    return (
      <div>
      <a href="/workspace">
        <Card className = "card">
        <Card.Body>
          <Form inline>
        <Card.Title className = "title">{name}</Card.Title>
        
        <Badge className = "badge">Public</Badge>
        <Button variant="light" className="ml-auto">
          <BsGear/>
        </Button>
        </Form>
        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras accumsan enim vel vulputate condimentum. 
</Card.Text>

        
          
            <Table borderless style={{color:"#8a8a8a"}}>
            <thead style={{textAlign:"center"}}>
    <tr>
      <th >100user</th>
      <th>100 Runs</th>
      <th>8 hours ago</th>
      
    </tr>
  </thead>
            </Table> 
         
            </Card.Body>
        </Card>
        </a>
</div>




    );
  };
}

export default ProjectItem;