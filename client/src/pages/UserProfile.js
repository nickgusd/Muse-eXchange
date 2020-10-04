import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import API from '../utils/API';

import {
    Box,
    Button,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    TextField,
    makeStyles
  } from '@material-ui/core';

  import InstagramIcon from '@material-ui/icons/Instagram';
  import FacebookIcon from '@material-ui/icons/Facebook';
  import GitHubIcon from '@material-ui/icons/GitHub';
  import LinkedInIcon from '@material-ui/icons/LinkedIn';

require('dotenv').config();

const AccountPage = ({user}) => {

  console.log(user)
  /** ===== User Profile Info ====== */
  const tempId = user; // for login state

  const [submit, setSubmit] = useState(1);
  console.log(submit)
  // User 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Profile 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');
  const [about, setAbout] = useState('');
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('');
  const [link3, setLink3] = useState('');
  const [link4, setLink4] = useState('');

  // To handle profile info input 
  const [infoInput, setInfoInput] = useState('');

  const inputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setInfoInput({...value, [name]: value})

    console.log(infoInput)
  }

  // Profile Pic 
  const [uploadFiles, setUploadFiles] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [loading, setLoading] = useState(false);

  const userFields = ["firstName", "lastName", "profession", "about", "link1", "link2", "link3"];

  useEffect(() => {
    document.title = `Music eXchange | Account`;
    // For demonstration purposes, we mock an API call.
    API.getSavedUsersById(tempId).then((res) => {
      // console.log(res.data)
      if (res.data) {
        setUsername(res.data.username);
        setEmail(res.data.email);
        setFirstName(res.data.profile.firstName);
        setLastName(res.data.profile.lastName);
        setProfession(res.data.profile.profession)
        setAbout(res.data.profile.about);
        setLink1(res.data.profile.link1);
        setLink2(res.data.profile.link2);
        setLink3(res.data.profile.link3);
        setLink4(res.data.profile.link4);
        setProfilePic(res.data.profile.profilePic);
      }
    });
  }, [submit]);

  /** ===== Upload Profile info ===== */
  // Function to upload and image to Cloudinary
  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', uploadFiles[0]);
    data.append('upload_preset', 'MusiceXchange'); // must be same name as upload
    setLoading(true)
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, // API base url
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json() // get json response
    API.updateProfile(tempId, "profilePic", file.secure_url);
    // setProfilePic(file.secure_url);
    setLoading(false);

    setSubmit(submit + 1); // for some reason incrementing changes the state
  }

  // Upload Profile Information
  const handleSubmit = async () => {
    handleClose(); // closes the modal
    if (infoInput.firstNameInput) await API.updateProfile(tempId, "firstName", infoInput.firstNameInput);
    if (infoInput.lastNameInput) await API.updateProfile(tempId, "lastName", infoInput.lastNameInput);
    if (infoInput.professionInput) await API.updateProfile(tempId, "profession", infoInput.professionInput);
    if (infoInput.aboutInput) await API.updateProfile(tempId, "about", infoInput.aboutInput);
    if (infoInput.link1Input) await API.updateProfile(tempId, "link1", infoInput.link1Input);
    if (infoInput.link2Input) await API.updateProfile(tempId, "link2", infoInput.link2Input);
    if (infoInput.link3Input) await API.updateProfile(tempId, "link3", infoInput.link3Input);
    if (infoInput.link4Input) await API.updateProfile(tempId, "link4", infoInput.link4Input);

    if (uploadFiles) {
      uploadImage();
    } else {
      setSubmit(submit + 1); // for some reason incrementing changes the state
    }
  }

  /** ===== Bootstrap modal ===== */
  // State and Functions for Bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uploadFileState = e => {
    const files = e.target.files;
    console.log(files)
    setUploadFiles(files);
  }

  return (

    <main className="profile-page">
    
    <section className="relative block" style={{ height: "400px" }}>
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2015/03/30/12/37/pioneer-698515_1280.jpg')"
            }}
      >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-50 bg-black"
      ></span>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
        >
      <polygon
        className="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
      </svg>
      </div>
    </section>

    <section className="relative py-10 bg-gray-300 justify-center">
    <div className="container mx-auto justify-center" style={{ marginTop: "0px" }}>
    
        
        <CardContent
        alignItems="center"
        display="flex"
        flexDirection="column"
        >
        
        <CardHeader
          subheader="The information can be edited"
          title="Account Page"
        />
        <Divider />

        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >

      {profilePic ? (
        loading ? (<h3>Loading...</h3>) : (<Image src={profilePic} style={{ width: "250px" }} roundedCircle />)
      ) : (
          <Image src="https://via.placeholder.com/250" roundedCircle />
        )}

        <Typography
            color="primary"
            gutterBottom
            variant="h4"
          >
            {firstName}
        </Typography>

        <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            {email}
        </Typography>

        </Box>

        <Divider />

        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >

        <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            First name: {firstName}
        </Typography>
        
        <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            Last name: {lastName}
          </Typography>

          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            Profession: {profession}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            Bio: {about}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            <InstagramIcon />
            Instagram: {link1}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            <FacebookIcon />
            Facebook: {link2}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            <GitHubIcon />
            Github: {link3}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            <LinkedInIcon />
            LinkedIn: {link4}
          </Typography>

          <Button 
              color="primary"
              variant="contained"
              style={{ borderRadius: "0px", backgroundColor: "#FF416C"}}
              onClick={handleShow}>
              Edit User Profile
          </Button>

      {/** Display Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              {/** Profile Info */}

              <Form.Label>First name:</Form.Label>
              <Form.Control type="text" placeholder="first name"
                name="firstNameInput"
                onChange={inputChange}
              />

              <Form.Label>Last name:</Form.Label>
              <Form.Control type="text" placeholder="last name"
                name="lastNameInput"
                onChange={inputChange}
              />

              <Form.Label>Profession:</Form.Label>
              <Form.Control type="text" placeholder="profession"
                name="professionInput"
                onChange={inputChange}
              />

              <Form.Label>Bio:</Form.Label>
              <Form.Control type="text" placeholder="bio"
                name="aboutInput"
                onChange={inputChange}
              />

              <Form.Label>Website links</Form.Label>
              <Form.Control type="text" placeholder="Instagram"
                name="link1Input"
                onChange={inputChange}
              />
              <Form.Control type="text" placeholder="Facebook"
                name="link2Input"
                onChange={inputChange}
              />
              <Form.Control type="text" placeholder="GitHub"
                name="link3Input"
                onChange={inputChange}
              />
              <Form.Control type="text" placeholder="LinkedIn"
                name="link4Input"
                onChange={inputChange}
              />
              {/** Upload Pick */}
              <ListGroup>
                <ListGroup.Item>
                  <Form.File
                    id="uploadImageControl"
                    label="Upload Profile Picture:"
                    name="file"
                    onChange={uploadFileState}
                  // onChange={uploadImage}
                  />
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/** Buttons */}
          <Button 
            color="primary"
            variant="text"
            fullWidth
            onClick={handleClose}>
            Close
          </Button>
          <Button 
              color="primary"
              variant="contained"
              style={{ borderRadius: "0px", backgroundColor: "#FF416C"}}
              fullWidth
              onClick={handleSubmit}
              fullWidth>
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

    
    </Box>

    </CardContent>
    
    </div>
    </section>

    </main>


  )
}

export default AccountPage;