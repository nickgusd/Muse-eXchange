import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function ModalForm({ getValue, values }) {

    const [product, setProduct] = useState('song');
  

   const productChange = (event) => {
 setProduct(event.target.value)
 console.log(product)
    }

    const inputChange = (e) => {
        const { name, value } = e.target
        getValue({...values, [name]: value})
    }

    
return (
    
    <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Type</Form.Label>
    <Form.Control as="select" name="selectField" onChange={productChange}>
      <option value ='song'>Song</option>
      <option value='tutorial'>Tutorial</option>
     </Form.Control>
  </Form.Group>
 {product === "song"?( <div>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Artist:</Form.Label>
    <Form.Control type="text" placeholder="Enter Artist" name="artist" onChange={inputChange} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title:</Form.Label>
    <Form.Control type="text" placeholder="Enter Song Title"name="title" onChange={inputChange} />
  </Form.Group> 
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Genre</Form.Label>
    <Form.Control as="select" name="select" onChange={inputChange} >
      <option value ='Hip Hop'>Hip Hop</option>
      <option value='Rock'>Rock</option>
      <option value='Jazz'>Jazz</option>
      <option value='Pop'>Pop</option>
      <option value='Country'>Country</option>
      <option value='Other'>Other</option>
     </Form.Control>
  </Form.Group> 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Price:</Form.Label>
    <Form.Control placeholder="Enter Amount" type='number' name="price" onChange={inputChange} />
  </Form.Group>
 

  </div>) : 
    (<div>
        <Form.Group controlId="exampleForm.ControlInput1">
         <Form.Label>Tutorial Type:</Form.Label>
         <Form.Control as="select" >
      <option value ='Guitar'>Guitar</option>
      <option value='Vocal'>Vocal</option>
      <option value='Piano'>Piano</option>
      <option value='Beatmaking'>Beatmaking</option>
      <option value='Music Mixing'>Music Mixing</option>
      <option value='Other'>Other</option>
     </Form.Control>
       </Form.Group>
       <Form.Group controlId="exampleForm.ControlInput1">
         <Form.Label>Session Type</Form.Label>
         <Form.Control as='select' >
         <option value='Live'>Live</option>
         <option value='Recorded'>Recorded</option>
         </Form.Control  >   
       </Form.Group> 
       <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title:</Form.Label>
    <Form.Control type="text" placeholder="Enter Tutorial Title" />
  </Form.Group> 
       <Form.Group controlId="exampleForm.ControlTextarea1">
         <Form.Label>Price:</Form.Label>
         <Form.Control placeholder="Enter Amount" type='number' />
       </Form.Group>

       </div> ) 
 }
</Form>





)

}

export default ModalForm