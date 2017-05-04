var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import Img from 'public/img/resume.jpg'

class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
          <div className="row">
              <div style={{"textAlign":"center"}}  className="columns small-10">

                  <a href="https://drive.google.com/file/d/0B_ESdI34yUZfX1M1QkdMM3ZkNTA/view?usp=sharing"> <img src={Img} /> </a>
                  
              </div>
          </div>

      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}



module.exports = Resume;
