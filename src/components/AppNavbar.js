import React from 'react'
import {Navbar,Container} from 'react-bootstrap' 

export default function AppNavbar(props) {
  return (
    
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">{props.title}</Navbar.Brand>
   </Container>
  </Navbar>
    
  )
}
