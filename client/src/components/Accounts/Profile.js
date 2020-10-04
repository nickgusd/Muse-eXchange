import React from 'react';
import PropTypes from 'prop-types';


import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  CircularProgress
} from '@material-ui/core';

import API from '../../utils/API';

const user = {
  avatar: 'https://via.placeholder.com/250',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 200,
    width: 200
  }
}));

  // Profile Pic 
  const [uploadFiles, setUploadFiles] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `Music eXchange | Account`;
    // For demonstration purposes, we mock an API call.
    API.getSavedUsersById(tempId).then((res) => {
      // console.log(res.data)
      if (res.data) {
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

  const handleSubmit = async () => {
    handleClose(); // closes the modal
    
    if (uploadFiles) {
      uploadImage();
    } else {
      setSubmit(submit + 1); // for some reason incrementing changes the state
    }
  }

  const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  const uploadFileState = e => {
    const files = e.target.files;
    console.log(files)
    setUploadFiles(files);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
          />
          {profilePic ? (
          loading ? (<CircularProgress />) : (<Image src={profilePic} />)
          ) : (
          <Image src="https://via.placeholder.com/350" roundedCircle />
        )}
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            First name: {firstName}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            Last name: {lastName}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            Profession: {profession}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            Bio: {about}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            Instagram: {link1}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            Facebook: {link2}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            Github: {link3}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            LinkedIn: {link4}
          </Typography>

        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          id="uploadImageControl"
          name="file"
          onChange={uploadFileState}
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
