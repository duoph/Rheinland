import { Types } from 'mongoose';

export interface Job {
    _id: string;
    title: string;
    category: string;
    isOpen?: boolean;
    description: string;
    skills?: string[] | undefined;
    minAge?: string;
    maxAge?: string;
    location?: string;
    state?: string;
    requirements?: string;
    gender?: string;
    appliedUsers: string[];
    isFeatured: boolean,
    savedUsers: string[];
    createdAt: string;
    updatedAt: string;
    employerId: Types.ObjectId;
}

export interface user {
    _id: string;
    name: string;
    location?: string;
    gender?: string;
    appliedJobs?: Types.ObjectId[];
    createdAt: string;
    updatedAt: string;
    savedJobs?: Types.ObjectId[];
}