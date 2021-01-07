import React,{useEffect,useState} from 'react'
import './footerform.css'
import {Row,Col,Form, Container,Button} from 'react-bootstrap';

function ScreenSize() {
  const [size,setSize]=useState([window.innerWidth]);
  useEffect(()=>{
      const handleSize=()=>{
    setSize([ window.innerWidth]);
      }
      window.addEventListener("resize",handleSize);
   return ()=>{
     window.removeEventListener("resize",handleSize);
   }
  },[]);
  return size;
}

export default function FooterForm() {
  const[width]=ScreenSize();
    return (
        <div >
    
        <Form className="contain2">
        <Container  className="contai"  style={{maxWidth:"800px"}} >
        <Row> <Col> <h2 className="j10" >
          Ready to get started?
           </h2></Col></Row>

           <Row >
           <Col>
           <p className="p5"> See Nanonets in action or contact our team of experts
            to learn how Nanonets can help your business.</p>
           </Col>
           </Row>

{  (width >=600) ? 
         <Row >
          <Col >
            <Form.Control type="text" placeholder="your name" />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="work email" />
          </Col>
        
          <Col>
            <Form.Control type="text" placeholder="company name" />
          </Col>
        </Row>

     :
    <div>
    <Row >
    <Col >
      <Form.Control type="text" placeholder="your name" />
    </Col>
    <Col>
      <Form.Control type="email" placeholder="work email" />
    </Col>
    </Row>

    <Row>    
       <Col>
         <Form.Control type="text" placeholder="company name" />
      </Col>
  </Row>
    </div>
   
  
       
      
     
}

      <Row>
      <Col >
      <Form.Control as="textarea" rows={4} placeholder="how can we help you?" />
      </Col>
      </Row> 




        <Row  >
      
        <Col>
        <Button className="btn  d-flex justify-content-start" style={{background:" #546FFF ", padding:"0.4rem 3rem 0.4rem 3rem"}}
          variant="primary">SEND MESSAGE</Button>
        </Col>
        </Row>
     
        </Container>
      </Form>
        </div>
    )
}
