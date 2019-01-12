import React from 'react'
import { Route, withRouter, Switch} from 'react-router-dom'
import Results from '../results'
import Seasons from '../seasons'
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={withRouter(Seasons)} />
      <Route path="/:year/results" component={withRouter(Results)} />
      <Route component={withRouter(Seasons)} />
    </Switch>
  </div>
)

export default App
