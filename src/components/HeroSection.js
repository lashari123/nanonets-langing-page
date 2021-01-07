import React from 'react';
import './herosection.css';

import{Container,Col,Row,Button} from 'react-bootstrap';

export default function HeroSection() {
    return (
     <div >
        <Container style={{marginTop:"75px",maxWidth:"1000px"}}>
          <center>
            <Row class="row1" >
        
                <Col md={6}  sm={12} xs={12} lg={6}><h1 className="j1">Need a Rossum Altenative?</h1>

                    <p className="k1" > Choose the better AI-powered data entry<br/>
                      automation solution: Nanonets.</p>

                      <Button className="btn"
                      style={{marginTop:"1rem"}}
                      variant="outline-primary ">GET STARTED FOR FREE
                      </Button>
                      <Button  className="btn"
                      style={{marginTop:"1rem" , background:" #546FFF ",marginLeft:"8px" ,paddingRight:"1.8rem" ,paddingLeft:"1.8rem"}}
                      variant="primary">REQUEST A DEMO
                      </Button>
                </Col> 

                 <Col md={6} sm={12} xs={12} lg={6}>
                  <img style={{marginTop:"1rem" ,width:"80%"}}
                  src="/hero-image.svg" />
                </Col>

          </Row>
        </center>
    </Container>
     </div>
    )
}
