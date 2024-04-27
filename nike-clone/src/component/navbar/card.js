import React from 'react';
import img1 from '../navbar/nikee.avif';
import img2 from '../navbar/nikee4.webp';
import img3 from '../navbar/nikee5.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup
  } from 'mdb-react-ui-kit';

export default function Card1() {
    
  return (
    <Row >
    <MDBCardGroup>
      <Col>
      <MDBCard style={{width:'90%'}}>
        <MDBCardImage src={img1}style={{width:'458px',height:'500px'}} alt='...' position='top' />
        <MDBCardBody >
          <MDBCardTitle>ABIDAS</MDBCardTitle>
          <MDBCardText>PRICE RS 12000</MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
          <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope now</b></button>
        </MDBCardBody>
      </MDBCard>
      </Col>

      <Col>
      <MDBCard style={{width:'90%'}}>
        <MDBCardImage src={img2}style={{width:'458px',height:'500px'}} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Adidas</MDBCardTitle>
          <MDBCardText>
           price RS 10000
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
          <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope now</b></button>
        </MDBCardBody>
      </MDBCard>
      </Col>

      <Col>
      <MDBCard style={{width:'90%'}}>
        <MDBCardImage src={img3}style={{width:'458px',height:'500px'}} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>nike</MDBCardTitle>
          <MDBCardText>price RS 7000</MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
          <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope now</b></button>
        </MDBCardBody>
      </MDBCard>
      </Col>
      
    </MDBCardGroup>
    
    </Row>
  )
}
