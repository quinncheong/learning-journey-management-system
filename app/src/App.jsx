import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Courses from "./routes/courses";
import Jobs from "./routes/jobs";
import Navbar from "./components/Navbar";

// TODO: DELETE
import CourseContainer from "./components/learningJourney/CourseContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          Nothing to see here
        </Route>
        <Route path='/courses' component={Courses} />
        <Route path='/jobs' component={Jobs} />
        <Route path='/skills' component={Jobs} />
        <Route path='/dashboard' component={Jobs} />
        {/* TODO: DELETE */}
        <Route path='/courseContainer' component={CourseContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
