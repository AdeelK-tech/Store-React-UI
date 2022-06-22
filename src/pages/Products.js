import {React,useState} from 'react'
import AppNavbar from '../components/AppNavbar';
import ProductCard from '../components/ProductCard';
import { Button, Row ,Container,Col } from 'react-bootstrap';

const Products=({products})=> {
  return (
    <div>
      <AppNavbar title="My Product"/>
      <Container>
      <Row>
      {products.map((p,i)=>{
        console.log('hey im here');
        return (
        
          
          <Col key={p.id}>
        <ProductCard id={p.id} title={p.title} image={p.image}/>
        </Col>
        
       
        )
      })
    }
      </Row>
      </Container>
      
      
    </div>
  )
}
export default Products;