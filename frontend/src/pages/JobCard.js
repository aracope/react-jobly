import React from "react";

/**
 * JobCard Component
 *
 * Displays info for a single job.
 *
 * Props:
 * - job: an object containing job details like title, salary, equity.
 *
 * Usage:
 * <JobCard job={job} />
 */
function JobCard({ job }) {
  return (
    <div className="JobCard card mb-3 p-3">
      <h5>{job.title}</h5>
      <p>
        Salary: {job.salary ? `$${job.salary.toLocaleString()}` : "N/A"}
      </p>
      <p>
        Equity: {job.equity && job.equity !== "0" ? job.equity : "None"}
      </p>
    </div>
  );
}

export default JobCard;
