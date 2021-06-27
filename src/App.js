import { Header } from "./features/header/Header";
import { Home } from "./features/home/Home";
import { Browse } from "./features/browse/Browse";
import { Profile } from "./features/profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/browse" component={Browse}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
