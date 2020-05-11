import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = (e) => {
        const pseudo = e.target.value 
        this.setState({ pseudo })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({ goToChat: true })
    }
    render() {
        if (this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input 
                    onChange={this.handleChange}
                    value={this.state.pseudo}
                    placeholder='Pseudo'
                    required
                    type="text"/>
                    <button type='submit'>Go</button>
                </form>

                
            </div>
        )
    }
}
