import React, { useState } from 'react';
import { FaMapMarkerAlt, FaRegTrashAlt, FaRegUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ConfirmationModal from '../confirmationModal';
import toast from 'react-hot-toast';

const EmployerJobCard = ({ job }: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/job/${job._id}`);
      toast.success("Job deleted successfully");
      router.refresh();
    } catch (error) {
      console.error('Error deleting job:', error);
    } finally {
      setIsModalOpen(false);
    }
  };


  const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  };

  return (
    <div className="border shadow-sm border-opacity-35 flex gap-4 flex-col items-start justify-between min-w-[320px] w-full max-w-[320px] group cursor-pointer rounded-sm px-4 py-3">
      {/* Job Title and Company Location */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[24px] font-semibold">{job.title}</h1>
        <div className="flex items-center text-gray-700 text-sm">
          <FaMapMarkerAlt className="mr-1" />
          <span>{job.location}</span>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex flex-col gap-2 text-gray-600 text-sm">
        <div className="flex items-center">
          <FaRegUser className="mr-1" />
          <span>10 openings</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium">Gender : </span>
          <span className="ml-1">{job.gender}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium">Category : </span>
          <span className="ml-1">{job.category}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium">Age Range : </span>
          <span className="ml-1">{job.minAge} - {job.maxAge}</span>
        </div>
      </div>

      {/* Job Description */}
      <div className="flex flex-col gap-2 text-gray-700 text-sm">
        <p className="italic">
          {truncateDescription(job.description, 100)}
        </p>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center px-4 py-2 text-white bg-red-500 rounded-sm gap-2 hover:bg-red-600 transition w-full"
      >
        <FaRegTrashAlt />
        <span>Delete</span>
      </button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default EmployerJobCard;
