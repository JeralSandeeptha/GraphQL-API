const UserSchema = require('../models/User');
const PostSchema = require('../models/Post');

const resolvers = {

    Query: {

        //GET ALL USERS
        getUsers: async () => {
            try {
                const users = await UserSchema.find();
                return users;
            } catch (error) {
                throw new Error('Failed to get all users');
            }
        },

        //GET SINGLE USER
        getSingleUser: async (_, args) => {
            try {
                const { id } = args;
                const singleUser = await UserSchema.findById(id);
                return singleUser;
            } catch (error) {
                console.log(error);
            }
        },

        //GET ALL POSTS
        getPosts: async () => {
            try {
                const posts = await PostSchema.find();
                return posts;
            } catch (error) {
                console.log(error);
            }
        },

        //GET SINGLE POST
        getSinglePost: async (_, args) => {
            try {
                const { id } = args;
                const singlePost = await PostSchema.findById(id);
                return singlePost;
            } catch (error) {
                console.log(error);
            }
        }
    },

    Mutation: {

        //CREATE USER
        createUser: async (_, args) => {
            try {
                const { input } = args;
                
                const newUser = new UserSchema({
                    firstName: input.firstName,
                    lastName: input.lastName
                });

                const savedUser = await newUser.save();
                return savedUser;
            } catch (error) {
                console.log(error);
            }
        },
        //DELETE USER
        deleteUser: async (_, args) => {
            try {
                const { id } = args;

                await UserSchema.findByIdAndDelete(id);

                return `${id} user has been deleted`;
            } catch (error) {
                console.log(error);
            }
        },
        //UPDATE USER
        updateUser: async (_, args) => {
            try {
                const { input } = args;

                const updatedUser = await UserSchema.findByIdAndUpdate(input.id, {
                    $set: input
                }, { new: true })
                console.log(input);
                return updatedUser;
            } catch (error) {
                console.log(error);
            }
        },

        //CREATE POST
        createPost: async (_, args) => {
            try {
                const { input } = args;

                const newPost = new PostSchema({
                    title: input.title,
                    description: input.description,
                    image: input.image
                });

                const savedPost = await newPost.save();

                return savedPost;
            } catch (error) {
                console.log(error);
            }
        },
        //UPDATE POST
        updatePost: async (_, args) => {
            try {
                const { input } = args;

                const updatedPost = await PostSchema.findByIdAndUpdate(input.id, {
                    $set: input
                }, { new: true });

                return updatedPost;
            } catch (error) {
                console.log(error);
            }
        },
        //DELETE USER
        deletePost: async (_, args) => {
            try {
                const { id } = args;

                await PostSchema.findByIdAndDelete(id);

                return `${id} post has been deleted`;
            } catch (error) {
                console.log(error);
            }
        },
    }
};

module.exports = resolvers;