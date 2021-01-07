import React from 'react';
import './companies.css';
import{Container,Col,Row,Button} from 'react-bootstrap';
export default function Companies() {
    return (
        <div  className="main-div" style={{backgroundColor: "#EFF2FF" ,height:"29rem"}}>
    
            <Container style={{marginTop:"75px",maxWidth:"1000px"}}>
                <Row>
                  <Col>
                     <h2 className="j2 ">
                      The Fortune 500 trust in Nanonets.<br/> You're going to be in great company!
                     </h2>
                  </Col>
                </Row>
              
                <Row className="row"  className="d-flex justify-content-center" >
                    <Col md={2}  sm={3} lg={2} xs={4} className="rw"> <img className="img"  src="/image/companies/Tesla.svg"/></Col>
                    <Col md={2}  sm={4} lg={2} xs={4} className="rw"><img className="img" src="/image/companies/Cummins.svg"/></Col>
                    <Col md={2}  sm={4} lg={2} xs={4} className="rw"><img className="img" src="/image/companies/Doordash.svg"/></Col>
                    <Col md={2}  sm={4} lg={2} xs={4} > <img className="img" src="/image/companies/P_G.svg"/> </Col>
                    <Col md={2}  sm={4} lg={2} xs={4}> <img className="img" src="/image/companies/Deloitte.svg" /></Col>
                    <Col md={2}  sm={4} lg={2} xs={4}><img className="img" src="/image/companies/JustEat.svg"/></Col>
                </Row>
              
                <Row className="row" className="d-flex justify-content-center" >
                    <Col  md={2} sm={4} lg={2}  xs={4} className="rw"><img className="img" src="/image/companies/Amtrust.svg"/></Col>
                    <Col  md={2} sm={4} lg={2}  xs={4}  className="rw"><img className="img" src="/image/companies/Afni.svg"/></Col>
                    <Col  md={2} sm={4} lg={2}  xs={4}><img className="img" src="/image/companies/FriendFinder.svg"/></Col>
                    <Col  md={2} sm={4} lg={2}  xs={4}><img className="img" src="/image/companies/Indra.svg"/></Col>
                    <Col  md={2} sm={4} lg={2}  xs={4}><img className="img" src="/image/companies/Veralia.svg"/></Col>
                    <Col  md={2} sm={4} lg={2}  xs={4}><img className="img" src="/image/companies/SherwinWilliams.svg"/></Col>
                </Row>        
                
                <Row className="row" className="d-flex justify-content-center" >
                <Col  md={2} sm={4} lg={2}  xs={4} className="rw"><img className="img" src="/image/companies/FlipKart.svg"/></Col>
                <Col  md={2} sm={4} lg={2}  xs={4}  className="rw"> <img className="img" src="/image/companies/Whirlpool.svg"/></Col>
                <Col  md={2} sm={4} lg={2}  xs={4}><img className="img" src="/image/companies/Target.svg"/></Col>
                <Col  md={2} sm={4} lg={2}  xs={4}><img className="img" src="/image/companies/Airbnb.svg"/></Col>
          </Row>

           
          </Container>
   </div>
    )
}
