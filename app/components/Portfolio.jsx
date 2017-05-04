var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import breadcrumbs from 'public/img/breadcrumbs.jpg';
import reactWeather from 'public/img/react-weather.jpg';

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
              <div className="columns small-6">
                  <button onClick={() => this.openModal1()}>
                      <img style={{height:'15rem', width:'20rem'}} src={breadcrumbs} />
                  </button>
                  <Modal isOpen={this.state.isModalOpen1} onClose={() => this.closeModal1()}>
                      <p style={{float:'right'}}><button onClick={() => this.closeModal1()}>Close</button></p>
                      <h1 style={{'text-align':'center'}}><a href="https://breadcrumbs.ninja/">https://breadcrumbs.ninja/</a></h1>
                      <h5><strong>Technologies Used:</strong> MeteorJS, CoffeeScript, Chrome API</h5>
                      <img style={{height:'100%', width:'100%'}} src={breadcrumbs} />
                  </Modal>
              </div>

              <div className="columns small-6">
                  <button onClick={() => this.openModal2()}>
                      <img src={reactWeather}/>
                  </button>
                  <Modal isOpen={this.state.isModalOpen2} onClose={() => this.closeModal2()}>
                      <h1><a href="http://react-weather-whoedward.herokuapp.com">React Weather/</a></h1>
                      <p>weather</p>
                      <p><button onClick={() => this.closeModal2()}>Close</button></p>
                  </Modal>
              </div>



          </div>
          <div className="row">
              <div className="columns small-6">
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
