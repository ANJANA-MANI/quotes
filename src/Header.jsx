import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
 
        
    <>
      <MDBNavbar light style={{backgroundColor:'#FEF9E7'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://icon-library.com/images/quote-icon-png/quote-icon-png-7.jpg'
              height='45'
              width='50'
              alt=''
              loading='lazy'
            />
               <span style={{
    color: '#A04000', 
    fontFamily: 'Dancing Script', 
    fontStyle: 'bold',
    fontSize:"45px"
  }}>Quote4U</span> 
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );

    
  
}

export default Header