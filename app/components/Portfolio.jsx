var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
          <div className="row">
              <div className="columns small-4">
                  <button onClick={() => this.openModal()}>breadcrumbs.ninja/</button>
                  <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                      <h1>breadcrumbs title</h1>
                      <p>hello</p>
                      <p><button onClick={() => this.closeModal()}>Close</button></p>
                  </Modal>
              </div>
              <div className="columns small-4">
                  <button onClick={() => this.openModal()}>react-weather/</button>
                  <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                      <h1>weather title</h1>
                      <p>hello</p>
                      <p><button onClick={() => this.closeModal()}>Close</button></p>
                  </Modal>
              </div>
              <div className="columns small-4">
                  <button onClick={() => this.openModal()}>react-timer/</button>
                  <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                      <h1>timer title</h1>
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



module.exports = Portfolio;
