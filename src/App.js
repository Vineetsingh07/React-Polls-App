import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionResult from "./questionResult";
import NotFound from "./notFound";
import Poll from "./poll";
import Polls from "./polls";
import { Redirect, Route, Switch } from "react-router-dom";
import CreatePoll from "./createPoll";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Polls} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/poll" component={Poll} />
        <Route path="/createPoll" component={CreatePoll} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
