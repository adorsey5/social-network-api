const { Schema, model } = require('mongoose');
// const Thought = require('./Thought.js')

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: 'Username is required'
    },

    email: {
      type: String,
      unique: true,
      required: 'Email is Required',
      validate: {
        validator: function (email) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: 'Please enter a valid email!',
      },
    },

    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'friends',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  UserSchema.virtual('friend-count').get(function () {
    return this.friends.length;
  });
  
  const User = model('user', UserSchema);
  
  module.exports = User;