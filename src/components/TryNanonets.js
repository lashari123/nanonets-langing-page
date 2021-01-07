import React from 'react'
import './tryNanonets.css';
import { Container,Col,Row ,Button} from 'react-bootstrap';


export default function TryNanonets() {
    return (
        <div className="contain"  style={{marginTop:"75px"}}>
        <Container>
        <Row><Col>
     <h2 className="j4" > Data extraction ain't a simple task. <br/>
     That's why you should choose the superior Nanonets over Rossum.</h2></Col></Row>
        
     <h4 className="h4">Try Nanonets for free today!</h4>

    <Row style={{marginTop:"2.5rem"}}  >
    <Col sm={6} md={6} xs={6} lg={6} className="d-flex justify-content-end" >
       <Button  className="btn1 " style={{color:"white"
       ,borderColor:"white"  }} 
       variant="outline-primary"> <span>GET STARTED FOR FREE</span></Button></Col>
       <Col sm={6} md={6} xs={6} lg={6}  className="d-flex justify-content-start" >
       <Button  className="btn2 " 
        style={{background:" #546FFF ",paddingRight:"1.6rem " ,paddingLeft:"1.7rem" }} variant="primary">
      <span>  REQUEST A DEMO</span> </Button></Col>
       </Row>
</Container>
      
           
        </div>
    )
}
