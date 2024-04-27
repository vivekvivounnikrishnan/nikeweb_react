import React from 'react'
import imag from '../navbar/nikee1.webp'
function Title1() {
  return (
    <>
    <img style={{paddingLeft:"200px",marginTop:"50px"}}src={imag}/>
    <div style={{textAlign:"center"}}>
   <h1 style={{paddingTop:"20px",fontSize:"20px"}}>Feel the Unreal</h1>
   <h2 style={{fontSize:"60px"}}><b>AIR MAX DN</b></h2>
   <h3>THE NEXT GENERATION AIR TECHNOLOGY IS HERE</h3>
   <button type="button"style={{ width:"110px",height:"50px",borderRadius:"30px",marginTop:'20px',marginBottom:"20px",backgroundColor:"black",color:"white"}}><b>Shope now</b></button>
    </div>
    <div className='h4'>
        <h4><b>New Arrivals Just Landed</b></h4>
        <h5 style={{marginLeft:"1400px"}}><b>Shop<i class="fa-solid fa-arrow-left"></i><i class="fa-solid fa-arrow-right"></i></b></h5>
    </div>
    </>
  );
}
export default Title1;