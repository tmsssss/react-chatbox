import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form className='form'>
                <textarea maxLength='140' required />
                <div className="info">
                    140
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        )
    }
}
