import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import SearchBar from "./components/SearchBar/SearchBar";
import CardName from "./components/CardName/CardName";

function App() {
  return (
    <div className="App">
      <Route exact path={`/`} component={Landing} />
      <Route exact path={`/home`} component={Nav} />
      <Route exact path={`/home`} component={SearchBar} />
      <Route exact path={`/home`} component={Home} />
      <Route exact path={`/diets/:id`} component={Detail} />
      <Route path={`/diets/:name`} component={CardName} />
      <Route exact path={`/form`} component={Form} />
    </div>
  );
}

export default App;
