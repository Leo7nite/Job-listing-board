import React from "react";
import JobItem from "./JobItem";

const JobList = () => {
  const jobList = [
    {
      logoUrl: "https://picsum.photos/50/50",
      jobTitle: "QA MOBILE TESTER (ONLY TX LOCALS)",
      companyName: "United IT Solutions",
      location: "Coppel, TX",
      datePosted: new Date("2023-10-04"), // Use a Date object
      remoteJob: true,
      jobTypes: ["contractor", "fulltime"],
      description:
        "Title: FX QA (testing tools - Rally, ALM) & (Foreign Exchange Domain experience and Capital Markets) & (trading platform – Wallstreet System (WSS), Calypso, Murex). Work location: Atlanta, GA (Onsite- 3-4 days). Job Description: Prior experience with testing tools - Rally, ALM, experience with any test.",
      applyButtonText: "Apply here :)",
    },
    {
      logoUrl: "https://picsum.photos/51/51",
      jobTitle: "Frontend Developer (React)",
      companyName: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      datePosted: new Date("2023-10-10"),
      remoteJob: false,
      jobTypes: ["fulltime"],
      description:
        "We are looking for a talented Frontend Developer with experience in React to join our team. You will be responsible for building user-friendly interfaces and ensuring the technical feasibility of UI/UX designs.",
      applyButtonText: "Apply Now",
    },
    {
      logoUrl: "https://picsum.photos/52/52",
      jobTitle: "Backend Developer (Node.js)",
      companyName: "Global Tech Solutions",
      location: "New York, NY",
      datePosted: new Date("2023-10-01"),
      remoteJob: true,
      jobTypes: ["contractor", "fulltime"],
      description:
        "Join our backend development team as a Node.js Developer. You will work closely with frontend developers to integrate user-facing elements using server-side logic.",
      applyButtonText: "Join Us",
    },
  ];

  return (
    <div>
      {jobList.map((job, index) => (
        <JobItem key={index} {...job} />
      ))}
    </div>
  );
};

export default JobList;
