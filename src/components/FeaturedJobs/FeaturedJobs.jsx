import { useEffect, useState } from "react";
import DisplayJob from "../DisplayJob/DisplayJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [numberOfShow, setNumberOfShow] = useState(6);
    const [moreOrLess, setMoreOrLess] = useState(true);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data => setJobs(data))
    },[])

    const handleSeeMore = () =>{
        if(moreOrLess){
            setNumberOfShow(jobs.length);
            setMoreOrLess(false);
        }
        else{
            setNumberOfShow(6);
            setMoreOrLess(true);
        }
        
    }
    return (
        <div className="text-center space-y-5 mt-16">
            <h1 className="font-extrabold text-4xl">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" p-10 md:p-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                jobs.slice(0,numberOfShow).map((job,idx)=><DisplayJob
                key={idx}
                job={job}
                ></DisplayJob>)
            }
            </div>
            <button onClick={()=>handleSeeMore(moreOrLess)} className="btn btn-primary"> {numberOfShow===jobs.length?"See Less":"See More"}</button>
        </div>
    );
};

export default FeaturedJobs;