import React, { Component } from 'react'

export default class Connexion extends Component {
    render() {
        return (
            <div className='connexionBox'>
                <form className='connexion'>
                    <input 
                    placeholder='Pseudo'
                    required
                    type="text"/>
                    <button type='submit'>Go</button>
                </form>

                
            </div>
        )
    }
}
