import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Route, Switch } from 'react-router-dom';
function App() {

  return (
    <>

        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
    </>
  )
}

export default App
