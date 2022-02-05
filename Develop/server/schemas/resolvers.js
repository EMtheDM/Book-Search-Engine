const { User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        },
    },
    Mutation: {
        login: async (parent, args) => {
            const login = await Login.create(args);
            return login;
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        saveBook: async (parent, { userId, book }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $addToSet: { books: book },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { books: book } },
                    { new: true }
                );
            }
        }
    }
}