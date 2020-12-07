import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import PrivateRoute from "./components/Routers/PrivateRoute";
import PublicRoute from "./components/Routers/PublicRoute";
import HomeProducts from "./components/HomeProducts/HomeProducts";
import Product from "./components/Product/Product";
import Home from "./components/Home/Home";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
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
          <PublicRoute
            restricted={false}
            exact
            path="/productos"
            component={HomeProducts}
          />{" "}
        </Switch>
      </Router>
    </>
  );
}

export default App;
