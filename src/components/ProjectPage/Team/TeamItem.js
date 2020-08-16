import React, { Component } from 'react';
import './TeamItem.css';
import { Card,Badge,Form, Button,Table} from "react-bootstrap";
import {
  BsGear
} from "react-icons/bs";
class TeamItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    //const { name,users,runs,created,explanation,open ,id} = this.props;
    const { name,id} = this.props;
   
     
    
    
    return (
      <div>
      
        <Card className = "card"  >
        <Card.Body>
         
        <Card.Title className = "title">{name}</Card.Title>
        
        
        
        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras accumsan enim vel vulputate condimentum. 
</Card.Text>
        
        
        
          
            <Table borderless style={{color:"#8a8a8a"}}>
            <thead style={{textAlign:"center"}}>
    <tr>
      <th >100user</th>
      <th>100 Projects</th>
      <th>8 hours ago</th>
      
    </tr>
  </thead>
            </Table> 
         
            </Card.Body>
        </Card>
        
</div>




    );
  };
}

export default TeamItem;