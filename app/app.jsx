var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Portfolio = require('Portfolio');
var Resume = require('Resume');
var Contact = require('Contact');


// Load foundation-sites
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="portfolio" component={Portfolio}/>
            <Route path="resume" component={Resume}/>
            <Route path="contact" component={Contact}/>
            <IndexRoute component={About}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
