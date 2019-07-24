import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => {
  return <h2>Header</h2>;
};

const DashBoard = () => {
  return <h2>dashBoard</h2>;
};

const SurveyNew = () => {
  return <h2>surveyNew</h2>;
};

const Landing = () => {
  return <h2>Landing</h2>;
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Landing} />
          <Route path="/dashboard" component={DashBoard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
