import React, { useEffect, useState } from 'react'
import { Row,Container,Col, Spinner} from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    let _param=useParams();
    const [product,SetmyProduct]=useState({})
    const[isBusy,setisBusy]=useState(false);
    console.log(product)
    const getProduct=async()=>{
        setisBusy(true);
        let response=await fetch(`https://fakestoreapi.com/products/${_param.productId}`);
        let _product=await response.json();
        SetmyProduct(_product);
        setisBusy(false)
        }
        
      useEffect(()=>{
          getProduct()
      },[])
  return (
  <Container className='d-flex justify-content-center' fluid> 
      {isBusy ?( <Spinner animation='border'/>): (<Row className="mt-4 p-5">
         <Col>
         <img src={product.image} height={300}></img>
         </Col>
         <Col md={8} className='mx-3'>
         <h2>{product.title}</h2>
         <p>{product.description}</p>
         <h3>{`$${product.price}`}</h3>
         </Col>
         </Row>)}
     
  </Container>
  )
  
}
