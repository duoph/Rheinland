import mongoose, { models, Schema } from "mongoose";

const jobSchema = new Schema({

    title: { type: String, required: true },
    category: { type: String, required: true },
    isOpen: { type: Boolean, default: true },
    description: { type: String, required: true },
    skills: [{ type: String }],
    currentLocation: { type: String },
    resumeURL: { type: String },
    employerId: { type: mongoose.Schema.ObjectId, required: true }

}, { timestamps: true })

const jobModel = models.job || mongoose.model('job', jobSchema)

export default jobModel;