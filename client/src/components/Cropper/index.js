import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import profileSVG from '../../assets/svg/profile.svg';
import previewSVG from '../../assets/svg/preview.svg';

const Cropper = ({uploadFileState}) => {
  const [src, selectFile] = useState(null);

  const handleFileChange = e => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  }

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [result, setResult] = useState(null);

  const [notCropped, setNotCropped] = useState(false)
  const [isCropped, setIsCropped] = useState(false);

  useEffect(() => { 
    setNotCropped(false);
    setIsCropped(false);
  },[crop, image])

  function getCroppedImg() {
    if (crop.height !== 0 || crop.width !== 0) {
      setNotCropped(false);
      setIsCropped(true);
      console.log(crop);
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
        console.log('Blob', blob);
        let file = new File([blob], 'Cropped Image')
        console.log('File',file)
        uploadFileState(file)
      });
    } else {
      console.log('false')
      setNotCropped(true);
    }
  }
  return (
    <Container fluid>
      <Row>
        <div>
          <input type='file' accept='image/' onChange={handleFileChange} />
        </div>
        {src ? (<div>
          <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop} />
          <Button className='btn-danger' onClick={getCroppedImg}>Crop Image</Button>
          {notCropped && (<p className="text-danger">Must crop image</p>)}
          {isCropped && (<p className="text-success">Image has been cropped</p>)}
        </div>) : (<div>
          <Image fluid src={profileSVG} alt='Cropped Image' style={{ width: "70%" }} />
        </div>)}
        {/* {result ? (<div className="mt-5">
          <Image fluid src={result} alt='Cropped Image' />
        </div>) : (
            <div className="mt-5">
              <Image fluid src={previewSVG} style={{ width: "70%" }} />
            </div>
          )} */}
      </Row>
    </Container>
  )
}

export default Cropper;