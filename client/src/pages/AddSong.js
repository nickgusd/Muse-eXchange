import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import API from '../utils/API'
import Cropper from '../components/Cropper';
require('dotenv').config();


const AddSong = () => {

  /** Bootstrap modal */

  // State and Functions for Bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [uploadFiles, setUploadFiles] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadFileState = e => {
    const files = e.target.files;
    console.log(files)
    setUploadFiles(files);
  }

  const uploadSong = async () => {
    const data = new FormData();
    data.append('file', uploadFiles[0]);
    data.append('upload_preset', 'MusiceXchange'); // must be same name as upload
    setLoading(true)
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/raw/upload/`, // API base url
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json() // get json response
    console.log(file.secure_url);
    // API.updateProfile(tempId, "profilePic", file.secure_url);
    // setProfilePic(file.secure_url);
    setLoading(false);
  }

  const handleSubmit = async () => {
    console.log(`Uploading Image`);
    uploadSong();
  }

  // return (<>
  //   <Button variant="primary" onClick={handleShow}>
  //       Add Song
  //   </Button>
    
  //   <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Edit Profile</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form>
  //           <Form.Group>
  //             <Form.File 
  //               id="uploadImageControl" 
  //               label="Upload an mp3" 
  //               name="file"
  //               onChange={uploadFileState}
  //             />
  //           </Form.Group>
  //         </Form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={handleSubmit}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  // </>)

  return (<>
    <Button variant="primary" onClick={handleShow}>
        Add Song
    </Button>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Cropper />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </>)
}

export default AddSong;