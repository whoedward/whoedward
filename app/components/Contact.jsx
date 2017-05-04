var React = require('react');

var Contact = React.createClass({
    render: function() {
        return (
            <div className="row text-center">
                <div className="row">
                    <strong>Email:</strong> iedwardhu@gmail.com
                </div>
                <div className="row">
                    <strong>Cell:</strong> (646) 344 - 0776
                </div>
                <div className="row">
                    <strong>Github:</strong> <a href="https://github.com/whoedward">github.io/whoedward</a>
                </div>
                <div className="row">
                    <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/whoedward/">linkedin.com/in/whoedward</a>
                </div>
            </div>
        );
    }
});

module.exports = Contact;
