import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const DisplayJob = ({ job }) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt={job_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-left">{company_name}</p>
        <div className="flex gap-3">
            <span className="border border-blue-500 rounded-lg py-2 px-5">{remote_or_onsite}</span>
            <span className="border border-blue-500 rounded-lg py-2 px-5">{job_type}</span>
        </div>

        <div className="flex gap-3">
            <div className="flex items-center gap-1 ">
                 <FaLocationDot />
                 <h1>{location}</h1>
            </div>
            <div className="flex items-center gap-1 ">
              <CiDollar />
                <h1>{salary}</h1>
            </div>
        </div>
        <div className="card-actions">
        
         <Link to={`/job/${id}`}><button className="btn btn-primary">See Details</button></Link> 
        </div>
      </div>
    </div>
  );
};

DisplayJob.propTypes={
  job:PropTypes.object
}
export default DisplayJob;
