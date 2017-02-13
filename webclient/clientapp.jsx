let React = require('react');
let ReactDOM = require('react-dom');
let {browserHistory, Route, Router, IndexRoute} = require('react-router');
// let GmailBox = require('./components/GmailBox');
let NavBar = require('./components/NavBar');
// let About = require('./about.js');
let Home = require('./clientapp1.jsx');
let {Favs} = require('./components/sample/favourites.jsx');

let MainComp = React.createClass({
  render: function() {
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
});
ReactDOM.render(
  <Router history={browserHistory}>
                 <Route path="/" component={MainComp}>
                <IndexRoute component={Home}/>
                <Route path="/Favs" component={Favs}/>
              </Route>
  </Router>, document.getElementById('mountapp'));
