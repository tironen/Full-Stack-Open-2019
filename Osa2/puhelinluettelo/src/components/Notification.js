import React from 'react'

const Notification = ( {message} ) => {
    console.log('message', message)
    if (message === null) {
        return <div></div>
    }
    return (
        <li className='msg'> {message}</li>
    )
}



export default Notification