import mongoose, { models, Schema } from "mongoose";

const jobSchema = new Schema({

    title: { type: String, required: true },
    category: { type: String, required: true },
    isOpen: { type: Boolean, default: true },
    description: { type: String, required: true },
    skills: [{ type: String }],
    minAge: { type: String },
    maxAge: { type: String },
    salary: { type: String },
    location: { type: String },
    requirements: { type: String },
    languageLevel: { type: String },
    gender: { type: String },
    isFeatured: { type: Boolean, default: false },
    appliedUsers: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        isContacted: { type: Boolean, default: false },
        isRejected: { type: Boolean, default: false }
    }],
    savedUsers: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],
    employerId: { type: mongoose.Schema.ObjectId, ref: 'employer', required: true },
    approvedByAdmin: { type: Boolean, default: false }

}, { timestamps: true })

const jobModel = models.job || mongoose.model('job', jobSchema)

export default jobModel;