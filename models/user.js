const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  username: { // add username property
    type: String,
    required: true,
    trim: true, // remove trailing spaces
    index: {unique: true},
    minlength: 3,
  },
  email: {
    type: String, 
    required: true,
    trim: true,
    lowercase: true,
    index: { unique: true },
    validate: {
      validator: emailValidator.validate,
      message: props => `${props.value} is not a valid email address`,
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
    minlength: 8,
  }, 
  profile: {
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    profession: {
      type: String,
      trim: true,
    },
    about: {
      type: String,
      trim: true,
    },
    profilePic: {
      type: String,
      trim: true,
    },
    link1: {
      type: String,
      trim: true
    },
    link2: {
      type: String,
      trim: true
    },
    link3: {
      type: String,
      trim: true
    },
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Song"
      }
    ],
    tutorials: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tutorial"
      }
    ],
    purchaseSongs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Song"
      }
    ],
    purchaseTutorials: [
      {
        type: String
      }
    ],
  },
  payPal: {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String, 
      trim: true,
      lowercase: true,
      index: { unique: true },
      validate: {
        validator: emailValidator.validate,
        message: props => `${props.value} is not a valid email address`,
      }
    },
  },
  inbox: [
    {
      type: String
    }
  ]
  
}, {
  // Automatically create timestamps for each document
  timestamps: true, // creates a createdAt & updatedAt for each document
});

// Presave Hook
userSchema.pre('save', async function preSave(next) { // Not fat-arrow-function here, because this refers to the actual object
  const user = this; // refers to the actual to be saved object
  
  if(!user.isModified('password')) return next(); // If password is not modified, don't do anything with it | bail out of function by calling next()

  try {
    // Hash the password
    const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
    user.password = hash;
    return next();
  } catch(err) {
    return next(err)
  }
});

// To check a password
// Method that will be available to every document created.
userSchema.methods.comparePassword = async function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);