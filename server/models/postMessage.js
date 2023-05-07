import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    category: String, 
    deadline: Date, 
    //priority: String,
    notes: String
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;