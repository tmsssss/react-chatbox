import React from 'react'

const Message = ({ pseudo, message}) => {
    return(
        <p className="user-message">
           <strong>{pseudo} : </strong> {message}
        </p>
    )
}

export default Message