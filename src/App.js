import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Main from "./pages/Main";
import Three from "./pages/Three";
import './App.css'
import Subscribers from "./components/Subscribers";
import View from "./components/View"
import Display from "./components/Display";
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Subscribers />
        <View />
        <Display />
      </Provider>
      <Router history={history}>
        <Switch>
          <div>
            <Route path="/" exact component={Main}/>
            <Route path="/three" exact component={Three}/>
            {/* <Route path="/redux" component={Subscribers}></Route> */}
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
