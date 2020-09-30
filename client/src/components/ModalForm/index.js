import React from 'react'
import Form from 'react-bootstrap/Form'

function ModalForm() {

return (
    <Form>
 
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Type</Form.Label>
    <Form.Control as="select">
      <option>Song</option>
      <option>Service</option>
      <option>Tutorial</option>
     </Form.Control>
  </Form.Group>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Artist:</Form.Label>
    <Form.Control type="text" placeholder="Enter Artist" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Song Title:</Form.Label>
    <Form.Control type="text" placeholder="Enter Song Title" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Price:</Form.Label>
    <Form.Control placeholder="Enter Amount" type='number' />
  </Form.Group>
</Form>





)

}

export default ModalForm