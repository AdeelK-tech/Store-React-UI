import React from 'react'
import { Card ,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({id,title ,image}) {
  const navigate=useNavigate();
  const goToDetails=()=>{
    navigate(`/${id}`);
  }
  return (
    <Card style={{ width: '18rem' }} className="m-4 p-4">
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Button variant="primary" onClick={goToDetails}>Go somewhere</Button>
  </Card.Body>
</Card>
  )
}
