import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ModalForm from '../ModalForm'
import API from '../../utils/API';
import { Close } from '@material-ui/icons';
require('dotenv').config();

function ProductModal({ state, open, close }) {
  // console.log('close: ', close);

  const [user, setUser] = useState();

  const [value, setValue] = useState({
    select: "Hip Hop",
    selectField: "song"
  });

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    }
    if (value.selectField)
    // console.log('value has been changed')
    console.log('from use effect', value.selectField)
  }, [value], close)


  const handleSubmit = async () => {
    console.log('from handle submit', value.selectField)
    console.log(value)
    if (value.selectField === "song") {
      if (value.files) {
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
    close();
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
          <Button variant="dark" onClick={handleSubmit}>Submit</Button>
          <Button variant="dark" onClick={modalClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProductModal