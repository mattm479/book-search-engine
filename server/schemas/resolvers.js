const { User } = require('../models');
const { signToken, AuthenticationError} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { _id }, context) => {
            const id = context._id ? context._id : _id;
            const foundUser = await User.findById(id);

            if (!foundUser) {
                throw new Error('Cannot find a user with this id!');
            }

            return foundUser;
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) throw new AuthenticationError;

            const isCorrectPassword = user.isCorrectPassword(password);
            if (!isCorrectPassword) throw new AuthenticationError;

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { userId, input }, context) => {
            const user = await User.findById(userId);
            if (user.savedBooks === null) user.savedBooks = [];
            user.savedBooks.push(input);
            user.save();

            return user;
        },
        removeBook: async (parent, { userId, bookId }, context) => {
            let user = await User.findById(userId);
            user.savedBooks = user.savedBooks.filter(e => e.bookId !== bookId);
            user.save();

            return user;
        }
    }
};

module.exports = resolvers;
