let Search = React.createClass({
  onclick(){
    window.history.back()
  },
  render(){
    return (
      <a onClick={this.onclick}>back</a>
    )
  }
})

var First = React.createClass({
  render () {
    return (
      <div>1</div>
    )
  }
})

var Second = React.createClass({
  render () {
    return (
      <div>2</div>
    )
  }
})

var Third = React.createClass({
  render () {
    return (
      <div>3</div>
    )
  }
})


var Tab = React.createClass({
  render () {
    return (
      <div>
        <div className="tab">
          <ul>
            <li><Link to="/tab/first">first</Link></li>
            <li><Link to="/tab/second">second</Link></li>
            <li><Link to="/tab/third">third</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
})

var Nav = React.createClass({
  render ()  {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tab">Tab</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
})

ReactDom.render((
  <Router>
    <Route component={Nav} path="/">
      <Route component={Search} path="search"/>
      <Route component={Tab} path="tab">
        <Route component={First} path="first"/>
        <Route component={Second} path="second"/>
        <Route component={Third} path="third"/>
      </Route>
    </Route>
  </Router>
), wrap)