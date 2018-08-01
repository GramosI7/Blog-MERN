import mongoose from 'mongoose'
import moment from 'moment';
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
        type: String,
        default: moment().format("Do MMMM YYYY")
    },
    
    body: {
        type: String
    },

    published: {
        type: Boolean,
        required: true
    }

})

export default mongoose.model('Article', articleSchema)