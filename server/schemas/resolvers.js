const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Profile, Event } = require('../models');

const resolvers = {
  Query: {
    viewEvents: async (parent, args, context) => {
      if (context.user) {
        return await Event.find();
      } else {
        return []
      }

    },
    // renders the user onto the profile page
    viewProfile: async (parent, args, context) => {
      console.log(context.user)
      const foundUser = await Profile.findOne({ _id: context.user._id });
      console.log(foundUser)
      return foundUser
    }
  },

  Mutation: {
    addEvent: async (_, args) => {
      console.log(args)
      const event = await Event.create(args);
      return event;
    },
    updateEvent: async (parent, args) => {
      try {
        const { eventId, eventName, eventDescription, eventDate, eventTime, location } = args;
        const updatedEvent = await Event.findByIdAndUpdate(eventId, {
          eventName,
          eventDescription,
          eventDate,
          eventTime,
          location
        }, { new: true });
        return updatedEvent;
      } catch (error) {
        // Handle any errors
        throw new Error('Failed to update the event.');
      }
    },
    deleteEvent: async (parent, { eventId }) => {
      try {
        const deletedEvent = await Event.findByIdAndDelete(eventId);
        return deletedEvent;
      } catch (error) {
        // Handle any errors
        throw new Error('Failed to delete the event.');
      }
    },
    login: async (parent, { email, password }) => {
      console.log(email)
      const profile = await Profile.findOne({ email });
      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }
      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      // Signing the JWT token
      const token = signToken({
        _id: profile._id,
        email: profile.email,
        username: profile.username
      });
      return { token, profile };
    },
    signup: async (parent, { name, email, password }) => {
      try {
        const profile = await Profile.create({ name, email, password });
        const token = signToken({
          _id: profile._id,
          email: profile.email,
          name: profile.name,
        });
        return { token, profile };
      } catch (err) {
        console.log(err)
        return {}
      }
    },
  },
};
module.exports = resolvers;