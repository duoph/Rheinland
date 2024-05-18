import mongoose, { models, Schema } from "mongoose";

const employerSchema = new Schema({

    employerName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },

}, { timestamps: true })

const employerModel = models.employer || mongoose.model('employer', employerSchema)

export default employerModel;