import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const AccountPage = () => {

  /** Image upload from Cloudinary */

  // State for images
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to upload and image to Cloudinary
  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'MusiceXchange'); // must be same name as upload
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dxp5wxx2f/image/upload', // API base url
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json() // get json response
    console.log(file)
    setImage(file.secure_url);
    setLoading(false);
  }


  /** Bootstrap modal */

  // State and Functions for Bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      {image ? (
        loading ? (<h3>Loading...</h3>) : (<Image src={image} style={{width: "350px"}} roundedCircle />)
      ): (
        <Image src="https://via.placeholder.com/350" roundedCircle />
      )}
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      {/** Display Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File 
                id="uploadImageControl" 
                label="Upload an image" 
                name="file"
                onChange={uploadImage}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <input name="file" type="file"
        class="file-upload" data-cloudinary-field="image_id"
        data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}

      {/* <CloudinaryContext cloudName="dxp5wxx2f">
        <Image publicId="sample" format="jpg">
        <Transformation crop="fill" gravity="faces" width="300" height="200"/>
        </Image>
      </CloudinaryContext> */}
    </Container>

    
  )
}

export default AccountPage;