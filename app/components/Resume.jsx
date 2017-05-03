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
      console.log(Img);
    return (
      <div>
          <div className="row">
              <div className="columns small-10">
                  <button onClick={() => this.openModal()}>
                      <img src={Img} />
                  </button>
                  <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                      <h1>breadcrumbs title</h1>
                      <p>hello</p>
                      <p><button onClick={() => this.closeModal()}>Close</button></p>
                  </Modal>
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
