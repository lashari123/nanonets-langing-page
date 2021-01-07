import React from 'react'
import './customerCards.css';
import{Card,Col,Container,Row} from 'react-bootstrap';
export default function CustomerCards() {
    return (
        <div className="cards" >
              <Container style={{marginTop:"75px",maxWidth:"1000px"}}>

              <Row>
                 <Col> 
                   <h2 className="j9" >
                     <center> 
                  Our partners love us! Here’s why.
                     </center>
                    </h2>
                  </Col>
               </Row>
                  
                  <Row>
                      <Col lg={4} md={4} sm={12} xs={12} className="mb-4 d-flex justify-content-center">
                      <Card style={{ width: '18rem', background: " #EFF2FF" , paddingBottom:"2rem", height:"15rem"}}>
                      <Card.Body >
                      <Card.Text className=" titleText">DIRECTOR, OPERATIONS</Card.Text>
                      <Card.Title className="title">US Financial Services</Card.Title>
                      <Card.Text className="text1">
                        “Nanonets have gone over and above what was expected. I can't praise them enough.
                        I would definitely recommend them to anyone”
                      </Card.Text>
                      
                      </Card.Body>
                      </Card>
                      </Col>
                  
                  <Col lg={4} md={4} sm={12} xs={12} className="mb-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem',  background: " #EFF2FF" ,height:"15rem" }}>
                      <Card.Body >
                        <Card.Text className=" titleText">RAUL COELLO, CEO</Card.Text>
                        <Card.Title className="title">Advantage Marketing</Card.Title>
                        <Card.Text className="text1">
                        “The system works but the special ingredient is the customer service team, 
                        they are always available and helped a lot during the setup process.”
                        </Card.Text>
                      
                      </Card.Body>
                  </Card>
                  </Col>

                      <Col  lg={4} md={4} sm={12} xs={12} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem', height:"rem" ,background: " #EFF2FF",height:"15rem"}}>
                          <Card.Body >
                              <Card.Text className=" titleText">CEO</Card.Text>
                              <Card.Title className="title">Happy Jewelers</Card.Title>
                              <Card.Text className="text1">
                              “Our employees now feel more productive and happy as most of the clerical 
                              work is now out of their lives”
                              </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      
                  </Row>
          
              </Container>
   
        </div>
    )
}
