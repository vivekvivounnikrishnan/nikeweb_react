import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';
import img from '../navbar/players.jpg'
import img1 from '../navbar/nike.jpg';
 function Navbar1() {
    return (
        <>
        <Nav className="justify-content-end" activeKey="/home" id='home'>
        <img src={img} alt="Image 1" id ='img'/>
          <Nav.Item>
            <Nav.Link href="/home"style={{color:'black'}}>Find a store |</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"style={{color:'black'}}>Help |</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"style={{color:'black'}}>Join us |</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3"style={{color:'black'}}>Login</Nav.Link>
          </Nav.Item>
        </Nav>
      
        <img style={{float:'left'}} src={img1} alt="Image 2" id ='img1'/>
        <Nav className="justify-content-center" activeKey="/home" id='home1'style={{marginRight:'400px',marginTop:'30px'}}>
           <Nav.Item>
            <Nav.Link href="/home"style={{color:'black'}}><b>New and Featured</b></Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="link-1"style={{color:'black'}}><b>Men</b></Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="link-2"style={{color:'black'}}><b>Women</b></Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="link-3"style={{color:'black'}}><b>Kids</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-4"style={{color:'black'}}><b>Sale</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-5"style={{color:'black'}}><b>Customise</b></Nav.Link>
            </Nav.Item>
             <Nav.Item>
            <Nav.Link eventKey="link-6"style={{color:'black'}}><b>SNKRP</b></Nav.Link>
            </Nav.Item>
            {/* </Nav> */}
            {/* <Nav className="justify-content-center"> */}
                <Nav.Item style={{display:'flex', marginTop:'-45px'}}>
                  <input type='search' placeholder='Search'style={{height:'50px',width:'200px',borderRadius:'20px',marginLeft:'1200px',borderColor:'black'}}/>
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-bag-shopping"></i>
                </Nav.Item>
                </Nav>
            {/* </Nav> */}
           
      </>
      
      
    );
}
export default Navbar1;