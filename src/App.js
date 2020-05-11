import React, { Component, Children } from 'react'
import './App.css'
import Form from './components/Form'
import Message from './components/Message'


export default class App extends Component {
  state = {
    messages: {},
    pseudo: ''
  }
  componentDidMount(){
    console.log();
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
        <Form addMessage={this.addMessage}/>
      </div>
    )
  }
}
