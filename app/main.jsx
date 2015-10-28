import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link } from 'react-router'

const wrap = document.querySelector('.wrapper')

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

let About = React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
})

let Inbox = React.createClass({
  render() {
    return (
      <div>
        <h1>Inbox</h1>
      </div>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
ReactDom.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), wrap)
