const Banner = () => {
  return (
    <div className="hero bg-base-200 px-12 py-20 mt-8 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJuDIY2i0mlXwIZwAKbvE0H5xoB9gARD0Rw&s"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">One Step Closer</h1>
          <h1 className="-mt-5 text-5xl font-bold text-blue-600"><br />To Your Dream Job</h1>
          <p className="py-6">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
