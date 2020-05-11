import React, { Component, createRef, Fragment } from 'react'
import './App.css'
import './animations.css'
import Form from './components/Form'
import Message from './components/Message'
import { withRouter } from 'react-router-dom';

// Firebase
import base from './base'

// Animations
import { CSSTransition, TransitionGroup } from 'react-transition-group'
 

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount(){
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }
  
// Transfert du message dans le state de App
  addMessage = (message) => {
    const messages = {... this.state.messages}
    messages[`message-${Date.now()}`] = message

    Object.keys(messages).slice(0, -20).forEach(key =>{
      messages[key] = null
    })    

    this.setState({ messages })
  }

  isUser = (pseudo) => pseudo == this.state.pseudo

  render() {
    const messages = Object
          .keys(this.state.messages)
          .map(key =>(
            <CSSTransition
            key={key}
            timeout={200}
            classNames='fade' >
              <Message 
              isUser={this.isUser}
              message = {this.state.messages[key].message}
              pseudo= {this.state.messages[key].pseudo}
              />
            </CSSTransition>
          ))

    return (
      <Fragment>
      <div className='box'>
        <div className="messages" ref={this.messagesRef}>
          <TransitionGroup className="message">
            { messages }
          </TransitionGroup>
        </div>
        <Form 
        length={140}
        pseudo ={this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
      </Fragment>
    )
  }
}
  export default withRouter(App)