import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

 function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div style={{marginLeft:'1200px',color:'white'}}>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f"/>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='foo'style={{color:'white'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <ul style={{listStyle:'none'}}>
                <li>FIND A STORE</li>
                <li>BECOME A MEMBER</li>
                <li>Send Us Feedback</li>
              </ul>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HELP</h6>
              <p>  Angular  </p>
              <p>    React </p>
              <p>  Vue </p>
              <p>   Laravel  </p>
              </MDBCol>

<MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
  <h6 className='com'><b>COMPANY</b></h6>
  <p>Pricing</p>
  <p> Settings </p>
  <p> Orders</p>
  <p>Help</p>
  </MDBCol>
</MDBRow>
</MDBContainer>
</section> 
<div className='text-center p-4' style={{color:'white' }}>
© 2021 Copyright:

</div>
</MDBFooter>
);
}
export default Footer;      
  
             
              
                
                
              
             
               
                 
               
              
             
               
                 
                
             
            
               
                  
               
              
              
               
                  
                
              
           

     

