import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    componentDidMount(){
        const { addMessage, pseudo} = this.props
        console.log(pseudo);
    }

    createMessage = () => {
        const { addMessage, pseudo, length} = this.props

        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)

        // Reset textarea
        this.setState({ message: '', length })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createMessage()
    }

    handleChange = (e) => {
        const message = e.target.value 
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    handleKeyUp = (e) => {
        if (e.key == 'Enter') {
            this.createMessage()
        }
    }

    render() {
        return (
            <form 
            onSubmit={this.handleSubmit}
            className='form'>
                <textarea 
                onKeyUp={this.handleKeyUp}
                value={this.state.message}
                onChange={this.handleChange} 
                maxLength='140' 
                required />
                <div className="info">
                    {this.state.length}
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        )
    }
}
