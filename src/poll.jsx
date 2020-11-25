import React, { Component } from "react";
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.history.location.state.question,
    };
  }
  render() {
    console.log(this.props.history.location.state.question);
    const { question } = this.state;
    return (
      <div>
        <div className="" style={{}}>
          <div className="card container mb-5">
            <div className="card-body">
              <h5 className="card-title">
                <strong>{question.question}</strong>
              </h5>
              <div className="table-responsive">
                <table className="table table-stripped">
                  <strong>
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
                  </strong>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Poll;
