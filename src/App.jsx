import { Route, Switch } from "react-router-dom";
import { About, Careers, Home } from "./pages/index";
import Navbar from "./components/layouts/navbar/Navbar";
import { Footer } from "./components/layouts/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/careers">
            <Careers/>
          </Route>
        </Switch>
      <Footer />
    </>
  );
};

export default App;
