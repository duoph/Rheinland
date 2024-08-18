import React, { useState } from 'react';
import { FaMapMarkerAlt, FaRegTrashAlt, FaRegUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import ConfirmationModal from '../ConfirmationModal';
import { Skeleton } from '../ui/skeleton';
import { Job } from '@/types';

interface EmployerJobCardProps {
  job?: Job; // Assuming Job type is defined elsewhere
  loading: boolean;
}

const EmployerJobCard: React.FC<EmployerJobCardProps> = ({ job, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/job/${job?._id}`);
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

  if (loading) {
    return (
      <div className="border border-gray-300 shadow-sm flex flex-col justify-between md:min-w-[320px] w-full md:max-w-[320px] h-[350px] rounded-md p-4 animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="w-[60px] h-[60px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
        <Skeleton className="w-full h-[20px] mb-2" />
        <Skeleton className="w-full h-[60px] my-4" />
        <Skeleton className="w-[80px] h-[30px]" />
      </div>
    );
  }

  return (
    <div className="border border-gray-200 shadow-md flex flex-col justify-between md:min-w-[320px] w-full md:max-w-[320px] h-auto rounded-md p-4 bg-white transition hover:shadow-lg">
      {/* Job Title and Location */}
      <div className="flex flex-col mb-4">
        <h1 className="text-lg font-semibold text-gray-800">{job?.title}</h1>
        <div className="flex items-center text-sm text-gray-600">
          <FaMapMarkerAlt className="mr-1 text-gray-500" />
          <span>{job?.location}</span>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
        {/* <div className="flex items-center">
          <FaRegUser className="mr-1 text-gray-500" />
          <span>{job?.numberOfOpenings} openings</span>
        </div> */}
        <div className="flex items-center">
          <span className="font-medium text-gray-700">Gender: </span>
          <span className="ml-1">{job?.gender}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-700">Category: </span>
          <span className="ml-1">{job?.category}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-700">Age Range: </span>
          <span className="ml-1">{job?.minAge} - {job?.maxAge}</span>
        </div>
      </div>

      {/* Job Description */}
      <div className="text-sm text-gray-700 mb-4">
        <p className="italic">
          {truncateDescription(job?.description || '', 100)}
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center w-full py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition"
      >
        <FaRegTrashAlt className="mr-2" />
        Delete
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
