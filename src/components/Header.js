import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button,Badge} from "react-bootstrap"


function Header() {
  return (
    <Container className='bg-info' fluid>
    <h1>Students</h1>
    <Row className='mt-3'>
    <Col><Link to='/8th'><Button>Class-8</Button></Link></Col>
    <Col><Link to='/9th'><Button>Class-9</Button></Link></Col>
    <Col><Link to='/10th'><Button>Class-10</Button></Link></Col>
    <Col><Link to='/'><Button>Cricket-Team <Badge className="bg-secondary">0</Badge></Button></Link></Col>
    </Row>
    <Button className='bg-danger mt-3 mb-3'>OFF</Button>
    </Container>
  )
}

export default Header
