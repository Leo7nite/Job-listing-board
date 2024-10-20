import { IconNode } from "lucide-react";
import img from "../assets/react.svg";
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa6";

interface JobListProps {
  logoUrl: string;
  jobTitle: string;
  companyName: string;
  location: string;
  datePosted: Date; // Can be replaced with string if you format it later
  jobTypes: string[];
  description: string;
  applyButtonText?: string;
}

const JobItem: React.FC<JobListProps> = ({
  logoUrl,
  jobTitle,
  companyName,
  location,
  datePosted,
  jobTypes,
  description,
  applyButtonText,
}) => {
  function formatDate(date: Date) {
    const now = new Date();
    const diffInTime = now.getTime() - new Date(date).getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    return `${diffInDays} days ago`;
  }

  return (
    <>
      <div className="p-5 bg-secondary/25 rounded-md flex flex-col gap-5 mb-5">
        <div className="flex justify-between">
          <img src={logoUrl} alt="Job Logo" className="w-12 h-12" />
          <FaHeart />
        </div>
        <div>
          <h4 className="text-primary text-xl mb-4">{jobTitle}</h4>
          <p className="text-accent text-sm leading-none">{companyName}</p>
          <p className="text-accent text-sm ">
            {location} - {formatDate(datePosted)}{" "}
          </p>
          <ul className="flex gap-3 flex-wrap my-2">
            {jobTypes.map((type, index) => (
              <li
                key={index}
                className="text-text bg-secondary/50 px-2 py-1 rounded-md flex items-center justify-center"
              >
                {type}
              </li>
            ))}
          </ul>
          <p className="text-text text-sm">{description}</p>
        </div>
        <Button className="w-full rounded-md text-text">
          {applyButtonText}
        </Button>
      </div>
    </>
  );
};

export default JobItem;
