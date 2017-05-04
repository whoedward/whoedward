var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import breadcrumbs from 'public/img/breadcrumbs.jpg'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen1: false }
    this.state = { isModalOpen2: false }
    this.state = { isModalOpen3: false }
  }

  render() {
    return (
      <div>
          <div className="row">
              <div className="columns small-4">
                  <button onClick={() => this.openModal1()}>
                      <img src={breadcrumbs} />
                  </button>
                  <Modal isOpen={this.state.isModalOpen1} onClose={() => this.closeModal1()}>
                      <h1><a href="https://breadcrumbs.ninja/">breadcrumbs.ninja/</a></h1>
                      <p>hello</p>
                      <p><button onClick={() => this.closeModal1()}>Close</button></p>
                  </Modal>
              </div>

              <div className="columns small-4">
                  <button onClick={() => this.openModal2()}>react-weather/</button>
                  <Modal isOpen={this.state.isModalOpen2} onClose={() => this.closeModal2()}>
                      <h1>weather title</h1>
                      <p>weather</p>
                      <p><button onClick={() => this.closeModal2()}>Close</button></p>
                  </Modal>
              </div>

              <div className="columns small-4">
                  <button onClick={() => this.openModal3()}>react-timer/</button>
                  <Modal isOpen={this.state.isModalOpen3} onClose={() => this.closeModal3()}>
                      <h1>timer title</h1>
                      <p>timer</p>
                      <p><button onClick={() => this.closeModal3()}>Close</button></p>
                  </Modal>
              </div>

          </div>

      </div>
    )
  }

  openModal1() {
    this.setState({ isModalOpen1: true })
  }
  openModal2() {
    this.setState({ isModalOpen2: true })
  }
  openModal3() {
    this.setState({ isModalOpen3: true })
  }
  closeModal1() {
    this.setState({ isModalOpen1: false })
  }
  closeModal2() {
    this.setState({ isModalOpen2: false })
  }
  closeModal3() {
    this.setState({ isModalOpen3: false })
  }
}



module.exports = Portfolio;
