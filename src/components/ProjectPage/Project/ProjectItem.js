import React, { Component } from 'react';
import './ProjectItem.css';
import { Conta,Col,Card,Button} from "react-bootstrap";
class ProjectItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    //const { name,users,runs,created,explanation,open ,id} = this.props;
    const { name,id} = this.props;

    return (
      <div  >
       
<Card style={{ width: '25rem' }}>
<Card.Body>
   
<Card.Title>{name}</Card.Title>
{/* <Card.Text >{explanation}</Card.Text> */}

{/* <Card.Button>  {open}
</Card.Button> */}

<Card.Link href="/">go to the {name}</Card.Link> 

</Card.Body>
</Card>


</div>

    );
  }
}

export default ProjectItem;