import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    workExperience: { type: Number, default: 0 },
    phone: { type: Number },
    countryCode: { type: String },
    resumeURL: { type: String },
    germanLanguageLevel: { type: String },
    location: { type: String },
    security: {
        type: {
            otpCode: { type: String },
            sentOn: { type: Date }
        },
    },
    savedJobs: [{ type: mongoose.Schema.ObjectId, ref: "job" }],
    appliedJobs: [{ type: mongoose.Schema.ObjectId, ref: "job" }],
    accountType: { type: String, default: "user", required: true }

}, { timestamps: true })

const userModel = models.user || mongoose.model('user', userSchema);

export default userModel;