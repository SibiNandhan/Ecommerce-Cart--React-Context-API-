import { Header } from "./component/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Cart } from "./component/Cart";
import "./App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Header></Header>
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/cart" exact>
        <Cart></Cart>
      </Route>
    </Router>
  );
}

export default App;
