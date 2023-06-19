const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


// const resolvers = {
//   Query: {
//     profiles: async () => {
//       return await Profile.find().populate("events");
//     },

//     profile: async (parent, { profileId }) => {
//       return await Profile.findById(profileId).populate("events");
//     },
//     events: async () => {
//       return await Event.find().populate("profile");
//     },
//     event: async (parent, { profileId }) => {
//       return await Event.findById(profileId).populate("profile");
//     }

//   },

//   Mutation: {
//     createProfile: async (parent, { name, email, password }) => {
//       const profile = await Profile.create({ name, email, password });

//       if (!profile) {
//         throw new Error("Something went wrong!")
//       }

//       const token = signToken(profile);
//       return { token, profile };
//     },

//     //validate email and password
//     login: async (parent, { email, password }) => {
//       const profile = await Profile.findOne({ email });

//       if (!profile) {
//         throw new AuthenticationError('No profile with this email found');

//       }

//       const correctPw = await profile.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect password!');
//       }

//       const token = signToken(profile);
//       return { token, profile };
//     },

//     createEvent: async (parent, args) => {
//       console.log(args);
//       const event = new Event(args);
//       await event.save();

//       const profileId = event.profile;
//       const eventId = event._id;

//       await Profile.updatOne({ _id: profileId }, { $push: { events: eventId } });
//       console.log(Profile)
//       return event;

//     },
//     updateEvent: async (parent, { id, ...rest }) => {
//       return await Event.findOneAndUpdate(id, rest, { new: true }).populate("profile");
//     },

//     deleteEvent: async (parent, { id }) => {
//       await Event.findOneAndDelete(id);
//     },
//   },
// };

// module.exports = resolvers;
// const { Profile, Events } = require('../models');

// const resolvers = {
//   Query: {
//     viewEvents: async () => {
//       return await Events.find();
//     }
//   },
//   Mutation: {
//     addEvent: async (_, args) => {
//       const event = await Events.create(args);
//       return event;
//     },
//     updateEvent: async (parent, args) => {
//       try {
//         const { eventId, eventName, eventDescription, eventDate, eventTime, location } = args;
//         const updatedEvent = await Events.findByIdAndUpdate(eventId, {
//           eventName,
//           eventDescription,
//           eventDate,
//           eventTime,
//           location
//         }, { new: true });

//         return updatedEvent;
//       } catch (error) {
//         // Handle any errors
//         throw new Error('Failed to update the event.');
//       }
//     }
//   }
// };


// module.exports = resolvers;

const { Profile, Event } = require('../models');

const resolvers = {
  Query: {
    viewEvents: async () => {
      return await Event.find();
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
    signup: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken({
        _id: profile._id,
        email: profile.email,
        username: profile.username,
      });
      return { token, profile };
    },
  },
};
module.exports = resolvers;