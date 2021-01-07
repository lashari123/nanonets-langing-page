import React from 'react';
import './RossumToNanonets.css';

import{Container,Col,Row} from 'react-bootstrap';
export default function RossumToNanonets() {
    return (
        <div>
        <Container  style={{marginTop:"75px",maxWidth:"1000px"}}>
        <Row > <Col> <h2 className="j6"  >    Why Our Customers Made the Switch from Rossum to Nanonets
      
           </h2></Col></Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} >
          <img  src="/image/icons/quick-icon.svg" className="d-flex justify-content-start"
          style={{width:"46px",heigth:"46" ,marginBottom:"1rem",alignItems:"start"}}/ >
          <h3 className="j7 d-flex justify-content-start"  > To create custom models quickly.</h3>
          <p className="p1 d-flex justify-content-start">Create the models you need through a simple, straightforward app, 
          in just 15 minutes. And in any language! Add, remove, or modify labels without hassle.
           Or rely on the Nanonets team to build your model for you.</p>
           
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img  src="/image/icons/unstructured-documents-icon.svg" className="d-flex justify-content-start"
           style={{width:"46px",heigth:"46" ,marginBottom:"1rem"}}/ >
          <h3 className="j7 d-flex justify-content-start"> To handle unstructured documents, tables without borders, etc.</h3>
          <p className="p1 d-flex justify-content-start">Nanonets’ advanced AI-based data capture knows exactly what 
          to do, no matter what kind of document you throw at it. Invoice number, 
          invoice no., or invoice #, the AI learns quickly and pivots as required 
          — all without hassle.</p> </Col>
        </Row>

       
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
          <img  src="/image/icons/accuracy-icon.svg" className="d-flex justify-content-start"
          style={{width:"46px",heigth:"46" ,marginBottom:"1rem"}}/ >
          <h3 className="j7 d-flex justify-content-start"> To ensure higher document level accuracy</h3>
          <p className="p1 d-flex justify-content-start">Nanonets begins with a high-level accuracy and the precision
           increases with every processed document. Rossum only has a minimal document
         accuracy of  8%, which means that Nanonets document extraction is better every time.</p>
           
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img  src="/image/icons/support-icon.svg"    className="d-flex justify-content-start"
           style={{width:"46px",heigth:"46" ,marginBottom:"1rem"}}/ >
          <h3 className="j7 d-flex justify-content-start"> To have personalized 1:1 team training and support — for a lifetime.</h3>
          <p className="p1 d-flex justify-content-start">Nanonets is not just your data capture solution provider. 
          Nanonets is your strategic tech partner. We’re by your side whenever
           you need us, as long as you need us.</p>
            </Col>
        </Row>
        <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
        <img  src="/image/icons/integrate-icon.svg" className="d-flex justify-content-start"
        style={{width:"46px",heigth:"46" ,marginBottom:"1rem"}}/ >
        <h3 className="j7 d-flex justify-content-start">To integrate with existing systems effortlessly.</h3>
        <p className="p1 d-flex justify-content-start">Nanonets is ready to work with anything you’ve got — CMS, 
        Zapier, you name it. Connect via deep, seamless integrations with Nanonets’
         advanced APIs. And if you don’t see a solution listed on our
          integrations page, talk to us — we’ll make it happen. 
          The Nanonets integration experience is guaranteed to be seamless and 
          smooth, without the issues that emerge while integrating Rossum..</p>
         
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img  src="/image/icons/multi-language-icon.svg"   className="d-flex justify-content-start" 
         style={{width:"46px",heigth:"46" ,marginBottom:"1rem"}}/ >
        <h3 className="j7 d-flex justify-content-start"> To speak their language, unapologetically.</h3>
        <p className="p1 d-flex justify-content-start">Have documents in several languages? Need a data entry
         automation solution that can speak any language fluently and capture any
          field? You’ve come to the right place: Nanonets captures data with
           95+% accuracy in any language.</p>
          </Col>
      </Row>

      <Row>
      <Col lg={6} md={6} sm={12} xs={12}>
      <img  src="/image/icons/fair-pricing-icon.svg"    className="d-flex justify-content-start"
     style={{width:"46px",heigth:"46" ,marginBottom:"1rem"}}/ >
    <h3 className="j7 d-flex justify-content-start"> To pay a fair and transparent price.</h3>
    <p className="p1 d-flex justify-content-start">Our prices are built to suit your individual or business 
    requirements: affordable, transparent, flexible. We offer more value: thousands
     of pages, multiple model retrains, customized onboarding, 
     personalized support, unlimited models, and more!</p>
      </Col>
  </Row>
      </Container>
        </div>
    )
}
