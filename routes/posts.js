const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    posts:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
    },
    likes:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like',
    }
});

module.exports = mongoose.model('post', postSchema)