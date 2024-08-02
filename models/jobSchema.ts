import mongoose, { models, Schema } from "mongoose";

const jobSchema = new Schema({

    title: { type: String, required: true },
    category: { type: String, required: true },
    isOpen: { type: Boolean, default: true },
    description: { type: String, required: true },
    skills: [{ type: String }],
    minAge: { type: String },
    maxAge: { type: String },
    location: { type: String },
    state: { type: String },
    requirements: { type: String },
    gender: { type: String },
    isFeatured: { type: Boolean, default: false },
    appliedUsers: { type: mongoose.Schema.ObjectId, ref: 'user' },
    savedUsers: { type: mongoose.Schema.ObjectId, ref: 'user' },
    employerId: { type: mongoose.Schema.ObjectId, ref: 'employer', required: true },
    approvedByAdmin: { type: Boolean, default: false }

}, { timestamps: true })

const jobModel = models.job || mongoose.model('job', jobSchema)

export default jobModel;