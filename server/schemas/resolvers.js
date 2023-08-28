const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('savedBooks');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },
    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
    me: async (parent, args, context) => {
      console.log("context");
      console.log(context.user);
      if (context.user) {
        console.log("User ID from context:", context.user._id);
        //const user = await User.findOne({ _id: context.user._id }).populate('savedBooks');
        //console.log("Fetched user:", user);

        try {
          const user = await User.findOne({ _id: context.user._id }).populate('savedBooks');
          console.log("Fetched user:", user);
          return user;
        } catch (error) {
          console.error("Error fetching user from database:", error.message);
          throw new Error("Server error");
        }
        return user;

        //return User.findOne({ _id: context.user._id }).populate('books');
        //return User.findOne().populate('books');
      }


      //throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      //print({ token, user });
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { authors, description, title, bookId, image, link }, context) => {
      if (context.user) {
        const book = await Book.create({
          authors,
          description,
          title,
          bookId,
          image,
          link

        });

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: book._id } },
          /*{
            $addToSet: {
              savedBooks: {
                authors,
                description,
                title,
                bookId,
                image,
                link
              }
            }
          },*/
          { new: true, runValidators: true }  // This returns the updated user and ensures new data adheres to schema
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //removeBook: async (parent, { bookId }, context) => {
    removeBook: async (parent, { _id }, context) => {

      console.log("herehere");
      console.log(context.user)
      //console.log(bookId)
      if (context.user) {
        const book = await Book.findOneAndDelete({
          _id: _id,
        });
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: book._id } },
          //{ $pull: { savedBooks: { bookId: book._Id } } },
          { new: true }
        );
        console.log("book to delete");
        console.log(book);
        return book;
      }
      //throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
