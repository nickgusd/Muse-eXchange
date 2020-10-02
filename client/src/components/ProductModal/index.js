import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ModalForm from '../ModalForm'
import API from '../../utils/API';

function ProductModal({ state, open, close}) {
  const [user, setUser] = useState();
  useEffect(()=> {
    if(localStorage.getItem("currentUser")){
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    }
    
  },[])
    const [value, setValue] = useState({
        select: "Hip Hop"
    })
    

    
    
   
    

    const handleSubmit = () => {
    //    await value
       console.log(value.artist)
       console.log(user._id)
       API.AddSongs(user._id,{

        author:value.artist,
        title:value.title,
        genre:value.select,
        price:value.price

       })
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
            <ModalForm getValue={setValue} values={value} />
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