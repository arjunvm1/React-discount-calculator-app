import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <img src="https://cdn.myportfolio.com/eb5d7870-77fd-45fe-b452-9ca4f3e4e9e2/51704304-7ca2-48a3-96ef-bd85bd01251c_rw_600.gif?h=fe28b7f10be56cede6386f37f5d9edc4" alt="gif" width={"50px"} />
          <MDBNavbarBrand tag="span" className='mb-0 h1'>DISCOUNT CALCULATOR</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header