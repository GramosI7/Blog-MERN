import mongoose from 'mongoose'
const {
    Schema
} = mongoose;

const profilSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    company: {
        type: String
    },
    website: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    bio: {
        type: String
    }

})

export default mongoose.model('Profil', profilSchema)