import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand">PollsApp</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active ml-5">
            <Link
              to={{
                pathname: "/createPoll",
                state: {
                  questions: this.state.questions,
                },
              }}
              className="btn btn-success nav-link "
            >
              +Add New Question <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
