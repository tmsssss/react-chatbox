import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Message from './components/Message'


export default class App extends Component {
  render() {
    return (
      <div className='box'>
        <div className="messages">
          <Message/>
        </div>
        <Form/>
      </div>
    )
  }
}
