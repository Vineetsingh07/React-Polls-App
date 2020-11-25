import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from "./questions";

class QuestionResult extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: this.props.data };
  }
  render() {
    return (
      <div className="">
        {this.state.questions.map((question) => (
          <Link
            to={{
              pathname: "/poll",
              state: {
                question: question,
              },
            }}
          >
            <div className="card container mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>{question.question}</strong>
                </h5>
                <div className="table-responsive">
                  <table className="table table-stripped">
                    <tr>
                      <td>{question.optionOne}</td>
                      <td>{question.optionOneCount}</td>
                    </tr>
                    <tr>
                      <td>{question.optionTwo}</td>
                      <td>{question.optionTwoCount}</td>
                    </tr>
                    <tr>
                      <td>{question.optionThree}</td>
                      <td>{question.optionThreeCount}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>
                        {question.optionOneCount +
                          question.optionTwoCount +
                          question.optionThreeCount}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default QuestionResult;
