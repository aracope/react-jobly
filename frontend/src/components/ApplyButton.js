import React, { useState, useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import JoblyApi from "../api";

function ApplyButton({ jobId }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  // Guard for currentUser being null/undefined
  const initialHasApplied = currentUser?.applications?.includes(jobId) || false;

  const [hasApplied, setHasApplied] = useState(initialHasApplied);
  const [loading, setLoading] = useState(false);

  async function handleApply(evt) {
    evt.preventDefault();

    if (!currentUser) {
      console.warn("No current user — can't apply");
      return;
    }

    setLoading(true);
    try {
      await JoblyApi.applyToJob(currentUser.username, jobId);

      // Update context with new application
      setCurrentUser(cu => ({
        ...cu,
        applications: [...(cu?.applications || []), jobId],
      }));

      setHasApplied(true);
    } catch (err) {
      console.error("Failed to apply:", err);
    } finally {
      setLoading(false);
    }
  }

  // Optionally hide or disable button if no user
  if (!currentUser) {
    return (
      <button disabled aria-label="Login required to apply">
        Login to Apply
      </button>
    );
  }

  return (
    <button
      onClick={handleApply}
      disabled={hasApplied || loading}
      aria-label={hasApplied ? "Already applied" : "Apply for job"}
    >
      {hasApplied ? "Applied" : loading ? "Applying..." : "Apply"}
    </button>
  );
}

export default ApplyButton;
