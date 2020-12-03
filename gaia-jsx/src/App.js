import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import PrivateRoute from "./components/Routers/PrivateRoute";
import PublicRoute from "./components/Routers/PublicRoute";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PublicRoute
            restricted={false}
            exact
            path="/producto/:slug"
            component={Product}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
