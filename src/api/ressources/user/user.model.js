import mongoose from 'mongoose'
const { Schema } = mongoose;

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName:{
        type:String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    avatar:{
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },

    admin: {
        type: Boolean,
        default: false
    }

})

export default mongoose.model('user', userSchema)