import React, { Component } from "react";
import QuestionResult from "./questionResult";
import { getQuestions } from "./questions";
import { Link } from "react-router-dom";

class Polls extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: getQuestions() };
  }

  render() {
    return (
      <div className="container">
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
                  className="btn btn-dark btn-lg nav-link "
                >
                  +Add New Question <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <QuestionResult data={this.state.questions} />
      </div>
    );
  }
}
export default Polls;
