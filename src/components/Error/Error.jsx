import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-4xl font-bold">
            <h1>404</h1>
            <h1>Not Found</h1>
            <Link to="/"><button className="text-blue-700 underline mt-10">Go to Home Page</button></Link>
        </div>
    );
};

export default Error;