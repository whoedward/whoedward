var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div className="row">
                <h2 className="text-center"><strong>About</strong></h2>
                <p>
                    Hi, I'm Edward Hu! I recently graduated from Northwestern University with a Bachelor of Science in Computer Science from the McCormick School of Engineering (June 2016).
                </p>
                <p>
                    At Northwestern, I've developed my foundational base of programming by joining startups and gaining professional software experience. Through my selected coursework at Northwestern and previous work experiences, I've developed a strong programming background, great analytical skills, and amazing interpersonal communication that will serve me well for the challenges that are demanded of a Software Engineer.
                </p>
                <p>
                    I am currently a consultant at PricewaterhouseCoopers and I have experience in many industries from Cybersecurity to Health to Salesforce. Although I have a background in Computer Science, I decided to pursue consulting after graduation for a multitude of reasons. I wanted to be able to explore other industries and fields to gain exposure on both sides of the spectrum. I wanted to work on my soft skills in addition to my technical skills in order to become well-versed in both areas. This past year in consulting has taught me about different industries and how to interact with clients and business users. I’m ready to go back to my roots and apply these skills as a Software Engineer.
                </p>

                <h4>Please contact me for software opportunities.</h4>
            </div>
        );
    }
});

module.exports = About;
