import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ModalForm from '../ModalForm'
import API from '../../utils/API';

function ProductModal({ state, open, close}) {
    
    const [value, setValue] = useState({
        select: "Hip Hop"
    })
    

    
    
   
    

    const handleSubmit = () => {
    //    await value
       console.log(value)
    }

    return (
      <>
       
  
        <Modal
          show={state}
          onHide={close}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalForm getValue={setValue} values={value}/>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="dark" onClick={handleSubmit}>Submit</Button>
            <Button variant="dark" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
export default ProductModal