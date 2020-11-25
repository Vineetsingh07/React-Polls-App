import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="display-1">404 : Not Found</h1>
      <Link to="/">
        <button className="btn btn-outline-dark btn-lg">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
