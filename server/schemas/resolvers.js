const { AuthenticationError } = require('apollo-server-express');
const { Profile, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return await Profile.find().populate("events");
    },

    profile: async (parent, { profileId }) => {
      return await Profile.findById(profileId).populate("events");
    },
    events: async () => {
        return await Event.find().populate("profile");
    },
    event: async (parent, {profileId}) => {
        return await Event.findById(profileId).populate("profile");
    }
  },

  Mutation: {
    createProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });

      if(!profile) {
        throw new Error("Something went wrong!")
      }

      const token = signToken(profile);
      return { token, profile };
    },

    //validate email and password
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    createEvent: async (parent, args) => {
      console.log(args);
      const event = new Event(args);
      await event.save();

      const profileId = event.profile;
      const eventId = event._id;

      await Profile.updatOne({ _id: profileId}, { $push: { events: eventId }});
      console.log(Profile)
      return event;

    },
    updateEvent: async (parent, {id, ...rest }) => {
        return await Event.findOneAndUpdate(id, rest, { new: true }).populate("profile");
    },

    deleteEvent: async (parent, { id }) => {
        await Event.findOneAndDelete( id );
    },
  },
};

module.exports = resolvers;
