var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Made with React</li>
                        <li>
                            <IndexLink to="/about" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                        </li>
                        <li>
                            <Link to="/portfolio" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/resume" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Resume</Link>
                        </li>
                        <li>
                            <Link to="/elementSummaryReveal" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>ElementSummaryReveal</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by Edward Hu</li>
                    </ul>
                </div>

            </div>

        );
}

module.exports = Nav;
