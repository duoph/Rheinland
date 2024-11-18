import mongoose, { models, Schema } from "mongoose";

const jobSchema = new Schema({

    title: { type: String, required: true },
    category: { type: String, required: true },
    categoryId: { type: String, required: true },
    description: { type: String, required: true },
    skills: [{ type: String }],
    qualifications: [{ type: String }],
    minAge: { type: String },
    maxAge: { type: String },
    jobType: { type: String },
    salary: { type: String },
    location: { type: String },
    requirements: { type: String },
    numberOfOpenings: { type: String },
    languageLevel: { type: String },
    gender: { type: String },
    isFeatured: { type: Boolean, default: false },
    shortlistedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    appliedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    employerId: { type: mongoose.Schema.ObjectId, ref: 'employer', required: true },
    approvedByAdmin: { type: Boolean, default: false }

}, { timestamps: true })

const jobModel = models.job || mongoose.model('job', jobSchema)

export default jobModel;