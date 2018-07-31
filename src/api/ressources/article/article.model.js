import mongoose from 'mongoose'
const { Schema } = mongoose;

const articleSchema = new Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    title: {
        type: String,
        required: true
    },

    author:{
            type: String,
            required: true
    },

    date:{
        type: Date,
        default: Date.now
    },
    
    body: {
        type: String
    },

    published: {
        type: Boolean,
        default: true
    }

})

export default mongoose.model('Article', articleSchema)