import React,{useEffect,useState} from 'react'
import './whyNanonets.css';
import {Container,Col,Row} from 'react-bootstrap';


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

export default function WhyNanonets() {
  const[width]=ScreenSize();
    return (
        <div className="row3">
        <Container  style={{marginTop:"75px",maxWidth:"1000px"}}>
        <h2 className="j3">Why Nanonets trumps Rossum</h2>

        <Row >
          <Col sm={12} xs={12} lg={6} md={6} >
          <h3 className="h30 d-flex justify-content-start">Intuative and easy to use</h3>
          
          <p className="k3  d-flex justify-content-start">
              Nanonet's simple app addresses all your data
              entry needs, minus the frillus. It takes the fricton
              out of the equation, unlike Rossum.</p>
          
 
          </Col>
          <Col sm={12} xs={12} lg={6} md={6}><img src="/image/hero-images/intuitive.svg"/></Col>
        </Row>
{
   (width >= 600) ?   <Row  >
   <Col sm={12} xs={12} lg={6} md={6}><img src="/image/hero-images/accuracy.svg"/></Col>
   <Col sm={12} xs={12} lg={6} md={6} >
   <h3 className="h30  d-flex justify-content-start">Unimaginable accuracy, now possible </h3>
   <p className="k3  d-flex justify-content-start">Nanonets’ accuracy is 95% — and climbing!
   The AI learns and improves continuously, with
    every single document. In comparison, Rossum only offers 90% accuracy. </p>
   </Col>
 </Row> :  
  <Row className="row3">
 
 <Col sm={12} xs={12} lg={6} md={6} >
 <h3 className="h30  d-flex justify-content-start" >Unimaginable accuracy, now possible </h3>
 <p className="k3  d-flex justify-content-start">Nanonets’ accuracy is 95% — and climbing!
 The AI learns and improves continuously, with
  every single document. In comparison, Rossum only offers 90% accuracy. </p>
 </Col>
 <Col sm={12} xs={12} lg={6} md={6}><img src="/image/hero-images/accuracy.svg"/></Col>
</Row> }
      

        <Row className="row3">
        <Col sm={12} xs={12} lg={6} md={6} >
        <h3 className="h30  d-flex justify-content-start">Seamless, fully automated,<br/> future-ready</h3>
        <p className="k3  d-flex justify-content-start"> Rossum continues to heavily rely on human resources
        even after installation. On the other hand, Nanonets 
        makes document uploads faster and takes the burden
         of data capture validation off precious manpower. Just
          like reliable, trustworthy automation is supposed to. </p>
        </Col>

        <Col sm={12} xs={12} lg={6} md={6}><img src="/image/hero-images/automated.svg"/></Col>
        </Row>
      </Container>
        </div>
    )
}
