import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { setToLocalStorage } from "../../utility/LocalStorage";
const ShoeDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const intId = parseInt(id);
  const desiredJob = jobs.find((job) => job.id === intId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    logo,
    job_title,
  } = desiredJob;

  // Handle toats
  const handleToasts = () => {
    const checkToast = setToLocalStorage(intId);
    if (checkToast === -10) {
      toast("Already Applied");
    } else {
      toast("Apply Succesfully Complete");
    }
  };

  return (
    <div className="text-center px-10 md:px-5 lg:px-0">
      <h1 className="font-bold text-4xl mt-16 mb-24">Job Details</h1>
      <div className="lg:grid grid-cols-4 gap-5 ">
        <div className="mb-14 lg:mb-0 text-left space-y-5 col-span-3">
          <h1>
            <span className="font-bold">Job Description: </span>
            {job_description}
          </h1>
          <h1>
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </h1>
          <h1>
            <span className="font-bold">Educational Requirements: </span>
            {educational_requirements}
          </h1>
          <h1>
            <span className="font-bold">Experiences: </span>
            {experiences}
          </h1>
        </div>
        <div className="col-span-1">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={logo} alt={job_title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{job_title}</h2>
              <div className="card-actions">
                <button onClick={handleToasts} className="btn btn-primary">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShoeDetails;
