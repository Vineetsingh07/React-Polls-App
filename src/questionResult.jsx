import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
            key={uuidv4()}
            to={{
              pathname: "/poll",
              state: {
                question: question,
              },
            }}
          >
            <div key={uuidv4()} className="card container mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>{question.question}</strong>
                </h5>
                <div className="table-responsive">
                  <table className="table table-stripped">
                    <thead>
                      <tr>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
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
