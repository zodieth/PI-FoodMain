import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <Route exact path={`/`} component={Landing} />
      <Route exact path={`/home`} component={Home} />
      <Route exact path={`/diets/:id`} component={Detail} />
    </div>
  );
}

export default App;
