import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cards from 'react-bootstrap/Card';
import img1 from '../navbar/pexels-melvin-buezo-2529148.jpg'
import img2 from '../navbar/pexels-ray-piedra-1537671(1).jpg'
 function Row1() {
  return (
   <>
                   <h1 style={{marginTop:"40px",fontSize:'30px'}}>Trend Alert</h1>
        {/* <Container> */}
            <Row>
                <Col style={{overflowX:'scroll',overflowY:'hidden',display:'flex'}}>

                <Cards id='card' style={{marginLeft:'10px',width:'322px'}}>
                <a href='#'style={{textDecoration:'none'}}> <img src={img1}style={{Width:'440%',height:'400px'}}></img></a> 
                <a href='#'style={{textDecoration:'none'}}><h2>Nike</h2></a> 
                <a href='#'style={{textDecoration:'none'}}> <p>Rs:12000 80%off</p></a> 
                <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope</b></button>
                </Cards>
                <Cards id='card'style={{marginLeft:'10px',width:'322px'}}>
                <a href='#'style={{textDecoration:'none'}}> <img src={img1}style={{Width:'100px',height:'400px'}}></img></a> 
                <a href='#'style={{textDecoration:'none'}}><h2>Nike</h2></a> 
                <a href='#'style={{textDecoration:'none'}}> <p>Rs:12000 80%off</p></a> 
                <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope</b></button>
                </Cards>
                <Cards id='card' style={{marginLeft:'10px',width:'322px'}}>
                <a href='#'style={{textDecoration:'none'}}> <img src={img1}style={{Width:'500px',height:'400px'}}></img></a> 
                <a href='#'style={{textDecoration:'none'}}><h2>Nike</h2></a> 
                <a href='#'style={{textDecoration:'none'}}> <p>Rs:12000 80%off</p></a> 
                <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope</b></button>
                </Cards>
                <Cards id='card' style={{marginLeft:'10px',width:'322px'}}>
                <a href='#'style={{textDecoration:'none'}}> <img src={img1}style={{Width:'500px',height:'400px'}}></img></a> 
                <a href='#'style={{textDecoration:'none'}}><h2>Nike</h2></a> 
                <a href='#'style={{textDecoration:'none'}}> <p>Rs:12000 80%off</p></a> 
                <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope</b></button>
                </Cards>
                 <Cards id='card'style={{marginLeft:'10px',width:'322px'}}>
                <a href='#'style={{textDecoration:'none'}}> <img src={img1}style={{Width:'500px',height:'400px'}}></img></a> 
                <a href='#'style={{textDecoration:'none'}}><h2>Nike</h2></a> 
                <a href='#'style={{textDecoration:'none'}}> <p>Rs:12000 80%off</p></a> 
                <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope</b></button>
                </Cards>
                <Cards id='card'style={{marginLeft:'10px',width:'322px'}}>
                <a href='#'style={{textDecoration:'none'}}> <img src={img1}style={{Width:'500px',height:'400px'}}></img></a> 
                <a href='#'style={{textDecoration:'none'}}><h2>Nike</h2></a> 
                <a href='#'style={{textDecoration:'none'}}> <p>Rs:12000 80%off</p></a> 
                <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope</b></button>
                </Cards> 
                </Col>

            </Row>
        {/* </Container> */}
   </>

   
  );
}
export default Row1;