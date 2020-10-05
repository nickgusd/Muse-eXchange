import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import ModalForm from '../ModalForm'
import API from '../../utils/API';
import { Close } from '@material-ui/icons';
require('dotenv').config();

function ProductModal({ state, open, close }) {
  // console.log('close: ', close);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [value, setValue] = useState({
    select: "Hip Hop",
    selectField: "song"
  });

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    }
    console.log('from use effect', value.selectField)
  }, [value])

  const handleSubmit = async () => {
    console.log('from handle submit', value.selectField)
    console.log(value)
    if (value.selectField === "song") {
      if (value.files) {
        setLoading(true);
        const data = new FormData();
        data.append('file', value.files[0]);
        data.append('upload_preset', 'MusiceXchange'); // must be same name as upload

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/raw/upload/`, // API base url
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json() // get json response
        await API.AddSongs(user._id, {
          author: value.artist,
          title: value.title,
          genre: value.select,
          file: file.secure_url,
          price: value.price
        });
        setLoading(false);
        setUploaded(true);
        setValue({})
      }
    }
    else if (value.selectField === 'tutorial') {
      API.AddTutorials(user._id, {
        type: value.tutorialtype,
        sessionType: value.sessiontype,
        title: value.tutorialtitle,
        price: value.tutorialprice
      })
      setValue({})
    }
  }

  const modalClose = () => {
    if (!loading) {
      value.selectField = 'song';
      console.log(value.selectField);
      close();
    }
  }

  return (
    <>
      <Modal
        show={state}
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm getValue={setValue} values={value} /> {/** setValue = getValue */}
        </Modal.Body>
        <Modal.Footer>
          {loading && (<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>)}
          {uploaded && (<div>
            <div className="text-success">Audio successfully uploaded</div>
          </div>)}
          <Button variant="dark" onClick={handleSubmit}>Submit</Button>
          {!loading && (
            <Button variant="dark" onClick={modalClose}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProductModal