import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({

    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    DateOfBirth: { type: Date, required: true },
    highestEducation: { type: String },
    workExperience: { type: Number, default: 0 },
    isAdmin: { type: Boolean, required: true, default: false },
    savedJobs: [{ type: mongoose.Schema.ObjectId }],
    appliedJobs: [{ type: mongoose.Schema.ObjectId }],

}, { timestamps: true })

const userModel = models.user || mongoose.model('user', userSchema);

export default userModel;