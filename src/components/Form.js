import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.props);
    }

    handleChange = (e) => {
        const message = e.target.value 
        this.setState({ message })
    }


    render() {
        return (
            <form 
            onSubmit={this.handleSubmit}
            className='form'>
                <textarea 
                value={this.state.message}
                onChange={this.handleChange} 
                maxLength='140' 
                required />
                <div className="info">
                    140
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        )
    }
}
