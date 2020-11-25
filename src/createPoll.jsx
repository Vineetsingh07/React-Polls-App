import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuestion: {
        question: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionOneCount: 0,
        optionTwoCount: 0,
        optionThreeCount: 0,
      },
      questions: this.props.history.location.state.questions,
    };
    console.log("PROPS", this.props.history.location.state.questions);
    console.log("STATE", this.state.questions);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(e) {
    const newQuestions = [this.state.newQuestion, ...this.state.questions];
    console.log(newQuestions);
    await this.setState({ questions: newQuestions });
    console.log("NEW QUESTION", this.state.newQuestion);
    console.log("SUBMIT STATE", this.state.questions);
    this.props.history.push("/");
    e.preventDefault();
  }
  getNewState() {
    return this.state.questions;
  }
  handleChange(e) {
    const newQuestion = { ...this.state.newQuestion };
    newQuestion[e.currentTarget.name] = e.currentTarget.value;

    this.setState({
      newQuestion,
    });
  }
  render() {
    const { newQuestion } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
        </nav>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="question">Question Title</label>
            <input
              name="question"
              value={this.state.newQuestion.question}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="question"
            />
          </div>
          <div className="form-group">
            <label htmlFor="optionOne">First Option</label>
            <input
              name="optionOne"
              value={this.state.newQuestion.optionOne}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="optionOne"
            />
          </div>
          <div className="form-group">
            <label htmlFor="optionTwo">Second Option</label>
            <input
              name="optionTwo"
              value={this.state.newQuestion.optionTwo}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="optionTwo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="optionThree">Third Option</label>
            <input
              name="optionThree"
              value={this.state.newQuestion.optionThree}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="optionThree"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePoll;
