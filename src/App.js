import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Message from './components/Message'
import { withRouter } from 'react-router-dom';



class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }
  componentDidMount(){
  }

  createMessage = () => {
    const { addMessage, pseudo } = this.props
  }

  addMessage = (message) => {
    const messages = {... this.state.messages}
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }
  render() {
    return (
      <div className='box'>
        <div className="messages">
          <Message/>
        </div>
        <Form 
        length={140}
        pseudo ={this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}
  export default withRouter(App)