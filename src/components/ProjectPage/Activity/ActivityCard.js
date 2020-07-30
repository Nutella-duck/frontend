
import React from "react";
import { Card,Button} from "react-bootstrap";
const ActivityCard = () => {
    const state = "Crash";
    const projectName = " nutella project"
  return (
    <div>
<Card style={{ width: '25rem' }}>
<Card.Body>
   
<Card.Title>{state}</Card.Title>{''}
<Card.Text >{projectName}</Card.Text>

<Card.Text>
액티비티 카드 
</Card.Text>
<Card.Link href="/">Card Link</Card.Link> 

</Card.Body>
</Card>
</div>
  );
};

export default ActivityCard;