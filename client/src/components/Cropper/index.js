import React, { useState } from 'react';
import { Container , Row, Col } from 'react-bootstrap'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Cropper = () => {
  const [src, selectFile] = useState(null);
  const handleFileChange = e => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  }

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1});

  return (
    <Container fluid>
      <Row>
        <input type='file' accept='image/' onChange={handleFileChange} />
      </Row>
      <Row>
        <div className="bg-secondary" style={{width: "400px", height: "400px"}}>
          {src && (
            <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}
              style={{width: "400px", height: "400px"}}
            />
          )}
        </div>
      </Row>
    </Container>
  )
}

export default Cropper;