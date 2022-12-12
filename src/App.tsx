import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import { ExhibitionList } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.ORDERLIST.route} component={ExhibitionList} />
      </Switch>
    </Router>
  );
}

export default App;
