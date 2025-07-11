import { Types } from 'mongoose';

export interface Job {
    _id: string;
    title: string;
    category: string;
    salary?: number;
    isOpen?: boolean;
    description: string;
    skills?: string[];
    minAge?: string;
    maxAge?: string;
    location: string;
    state?: string;
    qualifications?: string[];
    requirements?: string;
    gender?: string;
    appliedUsers: string[];
    shortlistedUsers: string[];
    isFeatured: boolean,
    savedUsers: string[];
    createdAt: string;
    updatedAt: string;
    jobType: string;
    numberOfOpenings: string;
    employerId: any;
}

export interface user {
    _id: string;
    name: string;
    countryCode: string;
    email: string;
    phone: string;
    location?: string;
    gender?: string;
    appliedJobs?: Types.ObjectId[];
    createdAt: string;
    updatedAt: string;
    savedJobs?: Types.ObjectId[];
}

export interface Employer {
    id: string;
    employerName: string;
    about: string;
    accountType: string;
    address: string;
    email: string;
    phone: string;
    website: string;
    createdAt: string;
    updatedAt: string;
}
