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
        
        
        
        <Card.Text>{id}
</Card.Text>
        
        
        
          
            <Table borderless style={{color:"#8a8a8a",borderTop:" 0.06rem solid #ededed"}}>
            <thead style={{textAlign:"center"}}>
    <tr>
      <th  style={{borderRight:"0.06rem solid #ededed"}} >100user</th>
      <th  style={{borderRight:"0.06rem solid #ededed"}}>100 Projects</th>
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