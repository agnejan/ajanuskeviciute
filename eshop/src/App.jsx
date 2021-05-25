import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Products from "./products/Products";
import Vision from "./vision/Vision";
import Product from "./product/Product";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className="p-3">
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/vision">
            <Vision />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
