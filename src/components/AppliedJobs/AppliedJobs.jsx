import { useLoaderData } from "react-router-dom";
import { ExistArray } from "../../utility/LocalStorage";
import { useEffect, useState } from "react";
import DisplayJob from "../DisplayJob/DisplayJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [totalAppliedJob, setTotalAppliedJob] = useState([]);
  useEffect(() => {
    const AppliedJobsIDList = ExistArray();
    const DesiredJobList = [];
    for (let i of AppliedJobsIDList) {
      const DesiredJob = jobs.find((job) => job.id === i);
      DesiredJobList.push(DesiredJob);
    }
    setTotalAppliedJob(DesiredJobList);
  }, []);

  // console.log(AppliedJobsIDList);
  return (
    <div className="text-center mt-24">
      <div className="font-bold text-3xl">
        
        {totalAppliedJob.length === 0 ? "No Job applied Yet" : ""}

      </div>

      <div className="p-10 md:p-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {totalAppliedJob.map((job, idx) => (
          <DisplayJob key={idx} job={job}></DisplayJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
