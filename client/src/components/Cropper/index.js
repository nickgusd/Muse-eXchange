import React, { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Cropper = () => {
  const [src, selectFile] = useState(null);
  const handleFileChange = e => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  }

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [result, setResult] = useState(null);

  function getCroppedImg() {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    canvas.toBlob(blob => {
      setResult(blob)
    }); // base64
  }    
    return (
      <Container fluid>
        <Row>
          <Col xs={6}>
            <input type='file' accept='image/' onChange={handleFileChange} />
          </Col>
          {src && (<Col xs={6}>
              <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}/>
              <Button className='btn-danger' onClick={getCroppedImg}>Crop Image</Button>
          </Col>)}
          {result && <Col xa={6}>
              <Image fluid src={result} alt='Cropped Image'/>
          </Col>}
        </Row>
        {/* <Row>
          <div className="bg-secondary" style={{ width: "400px", height: "400px" }}>
            {src && (<div>
              <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}
              style={{width: "400px", height: "400px"}}
              />
              <Button className='btn-danger' onClick={getCroppedImg}>Crop Image</Button>
            </div>)}
          </div>
          {result && <div>
              <Image fluid src={result} alt='Cropped Image'/>
          </div>}
        </Row> */}
      </Container>
    )
  }

  export default Cropper;