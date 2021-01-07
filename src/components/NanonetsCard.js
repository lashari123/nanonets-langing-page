import React from 'react'
import './nanonetsCard.css';
import{ListGroup,Col,Row,Container} from 'react-bootstrap';
export default function NanonetsCard() {
    return (
        <div >
              <Container  style={{marginTop:"75px",maxWidth:"1000px"}}> 
                      <Row xs={12}> 
                            <Col>
                              <h2 className="j8 " >
                                <center> 
                                Nanonets vs. Rossum: Some Perspective
                                </center>
                              </h2>
                            </Col>
                       </Row>   
                      
                      <Row xs={12} sm={12} md={12} lg={12} xl={12} className="row no-gutters" Style={{width:"8rem"}}>
                            <Col  className="card1" style={{paddingTop:"17px"}}> 
                                  <ListGroup variant="flsh">
                                  <ListGroup.Item className="text size" >Features</ListGroup.Item>
                                  <ListGroup.Item  className="text size">Who can use the product? </ListGroup.Item>
                                  <ListGroup.Item  className="text size">Model creation process </ListGroup.Item>
                                  <ListGroup.Item  className="text size">Multilingual support</ListGroup.Item>
                                  <ListGroup.Item  className="text size">Field extraction quality </ListGroup.Item>
                                  <ListGroup.Item  className="text size">Multipage document support</ListGroup.Item>
                              
                                  <ListGroup.Item  className="text size">Dedicated and direct customer chat 
                                                  support through website</ListGroup.Item>
                                  <ListGroup.Item  className="text size">On-premise flexibility</ListGroup.Item>
                                  <ListGroup.Item  className="text size">Security</ListGroup.Item>
                                  <ListGroup.Item  className="text size">Privacy</ListGroup.Item>
                                  <ListGroup.Item  className="text size"><center>Pricing</center></ListGroup.Item>
                                </ListGroup>
                            </Col>


                            <Col className="card1" >
                            
                                  <ListGroup variant="flsh">
                                  <ListGroup.Item className="size" style={{background: "#546FFF",paddingTop:"1.8rem",paddingBottom:"3rem" ,height:"5rem"}}>
                                  <center> <img className="nanonets" src="/image/icons/logo-white.svg"/>  </center></ListGroup.Item>
                                  <ListGroup.Item  className="text size" style={{  background:"#EFF2FF"}} > 
                                  Perfect for a range of organizations in any size</ListGroup.Item>
                                  <ListGroup.Item  className="  text size"  style={{  background:"#EFF2FF"}}>Intuitive, self-service</ListGroup.Item>
                                  <ListGroup.Item  className="  text size"  style={{  background:"#EFF2FF"}}>Multiple languages</ListGroup.Item>
                                  <ListGroup.Item  className="  text size"  style={{  background:"#EFF2FF"}}>Excellent</ListGroup.Item>
                                  <ListGroup.Item className=" size" style={{  background:"#EFF2FF"}}><center> 
                                  <img src="/image/icons/check-mark.svg" />  </center></ListGroup.Item>
                                  <ListGroup.Item className="size " style={{  background:"#EFF2FF"}}><center> 
                                  <img src="/image/icons/check-mark.svg" />  </center></ListGroup.Item>
                                  <ListGroup.Item className="size" style={{  background:"#EFF2FF"}}><center> 
                                  <img src="/image/icons/check-mark.svg" />  </center></ListGroup.Item>
                                  <ListGroup.Item  className="  text size"  style={{  background:"#EFF2FF"}}>Maximum</ListGroup.Item>
                                  <ListGroup.Item  className="  text size"  style={{  background:"#EFF2FF"}}>High</ListGroup.Item>
                                  <ListGroup.Item  className="text size"  style={{  background:"#EFF2FF"}}>Affordable, transparent, and flexible</ListGroup.Item>
                                </ListGroup>
                            </Col>


                            <Col className="card1" style={{paddingTop:"17px"}}>
                          
                                <ListGroup variant="flsh">
                                <ListGroup.Item  className="text size"><img className="image" src="/image/Nanonets-logo/rossum-logo.png "  /></ListGroup.Item>
                                <ListGroup.Item  className="text size">Only large enterprises </ListGroup.Item>
                                <ListGroup.Item  className="text size">Labor-intensive</ListGroup.Item>
                                <ListGroup.Item  className="text size">Only 5 languages </ListGroup.Item>
                                <ListGroup.Item  className="text size">Fair</ListGroup.Item>
                                <ListGroup.Item  className="size"><center> <img src="/image/icons/cross-mark.svg" />  </center></ListGroup.Item>
                                <ListGroup.Item className="size"><center> <img src="/image/icons/cross-mark.svg" />  </center></ListGroup.Item>
                                <ListGroup.Item  className="size"><center> <img src="/image/icons/cross-mark.svg" />  </center></ListGroup.Item>
                                <ListGroup.Item  className="text size">Moderate</ListGroup.Item>
                                <ListGroup.Item  className="text size">Low, holds customer data for up to 10 years</ListGroup.Item>
                                <ListGroup.Item  className="text size">Expensive, opaque, and rigid</ListGroup.Item>
                              </ListGroup>

                          
                            </Col>
                    
                      </Row>
                
                </Container>
        </div>
    )
}
