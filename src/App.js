import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/tests" component={Products} />
    <Route exact path="/about" component={Cart} />
    <Route exact path="/reports" component={Reports} />
    <Route component={NotFound} />
  </Switch>
)

export default App
